import json
import base64
from pathlib import Path
from datetime import datetime
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.messages import HumanMessage, SystemMessage


class PromptRefinerAgent:
    """Agent that refines user prompts for cinematic video generation using LangChain."""

    def __init__(self, api_key: str, prompts_dir: Path):
        """
        Initialize the prompt refiner agent.
        
        Args:
            api_key: Google AI API key
            prompts_dir: Directory to save original and refined prompts
        """
        self.prompts_dir = prompts_dir
        self.prompts_dir.mkdir(exist_ok=True)
        
        # Load system prompt from cinematic_videos.txt
        prompt_file = Path(__file__).parent / "prompts" / "cinematic_videos.txt"
        with open(prompt_file, "r", encoding="utf-8") as f:
            self.system_prompt = f.read()
        
        self.model = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash",
            google_api_key=api_key,
            temperature=0.7,
        )
        
        self.output_parser = StrOutputParser()

    def _load_image_as_base64(self, image_path: str) -> tuple[str, str]:
        """Load an image and return base64 data and mime type."""
        path = Path(image_path)
        suffix = path.suffix.lstrip('.').lower()
        mime_map = {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'webp': 'image/webp',
        }
        mime_type = mime_map.get(suffix, f"image/{suffix}")
        
        with open(path, 'rb') as f:
            image_data = base64.standard_b64encode(f.read()).decode('utf-8')
        
        return image_data, mime_type

    def refine_prompt(
        self,
        original_prompt: str,
        job_id: str,
        duration_seconds: int,
        image_path: str,
    ) -> str:
        """
        Refine a user prompt for cinematic video generation.
        
        Args:
            original_prompt: The original user-provided prompt
            job_id: Job ID for saving prompts
            duration_seconds: Duration of the video in seconds
            image_path: Path to the product image
            
        Returns:
            The refined prompt string
        """
        # Load image as base64
        image_data, mime_type = self._load_image_as_base64(image_path)
        
        # Build multimodal message with image + text
        messages = [
            SystemMessage(content=self.system_prompt),
            HumanMessage(content=[
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:{mime_type};base64,{image_data}"},
                },
                {
                    "type": "text",
                    "text": f"""Video Duration: {duration_seconds} seconds

This is the product image that will be used in the video. Analyze it carefully and use the actual visual details (shape, materials, colors, textures, distinctive features) in your refined prompt.

Original prompt:
{original_prompt}

Please refine this prompt according to the instructions above, ensuring the scope is realistic for a {duration_seconds}-second video. Return only the refined prompt, without any additional commentary or explanation.""",
                },
            ]),
        ]
        
        # Invoke the model
        response = self.model.invoke(messages)
        refined_prompt = self.output_parser.invoke(response)
        
        # Save both prompts to JSON file
        prompt_data = {
            "original": original_prompt,
            "refined": refined_prompt,
            "duration_seconds": duration_seconds,
            "image_path": image_path,
            "timestamp": datetime.utcnow().isoformat(),
            "job_id": job_id,
        }
        
        prompt_file = self.prompts_dir / f"{job_id}.json"
        with open(prompt_file, "w", encoding="utf-8") as f:
            json.dump(prompt_data, f, indent=2, ensure_ascii=False)
        
        return refined_prompt
