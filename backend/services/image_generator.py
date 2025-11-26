from pathlib import Path
from google import genai
from google.genai import types


class ImageGenerator:
    """Service for generating images using Google's Gemini API."""

    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=api_key)

    def _load_image_as_part(self, image_path: str) -> types.Part:
        """Load an image from file and convert to Gemini-compatible Part."""
        path = Path(image_path)
        suffix = path.suffix.lstrip('.').lower()
        # Map common extensions to MIME types
        mime_map = {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
            'webp': 'image/webp',
        }
        mime_type = mime_map.get(suffix, f"image/{suffix}")
        
        with open(path, 'rb') as f:
            image_bytes = f.read()
        
        return types.Part.from_bytes(
            data=image_bytes,
            mime_type=mime_type
        )

    def generate_image_from_reference(
        self,
        prompt: str,
        reference_image_path: str,
        output_path: str,
        aspect_ratio: str = "16:9",
    ) -> str:
        """
        Generate an image from a reference image and prompt using Gemini.
        
        Args:
            prompt: Text description for the generated image
            reference_image_path: Path to the reference image
            output_path: Path where the output image will be saved
            aspect_ratio: Image aspect ratio ("1:1", "16:9", or "9:16")
            
        Returns:
            Path to the generated image
        """
        # Load the reference image as a Part
        image_part = self._load_image_as_part(reference_image_path)
        
        # Create the content with image and prompt
        contents = [
            image_part,
            prompt,
        ]
        
        # Use Gemini model with image generation capability
        response = self.client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=contents,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )
        
        # Extract and save the generated image
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                # Save the image
                image_data = part.inline_data.data
                with open(output_path, 'wb') as f:
                    f.write(image_data)
                return output_path
        
        raise ValueError("No image was generated in the response")

