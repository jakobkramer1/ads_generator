import time
from pathlib import Path
from google import genai
from google.genai import types


class VideoGenerator:
    """Service for generating videos using Google's Veo API."""

    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=api_key)

    def _load_image(self, image_path: str) -> types.Image:
        """Load an image from file and convert to Veo-compatible format."""
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
        ).as_image()

    def generate_video_from_image(
        self,
        prompt: str,
        image_path: str,
        output_path: str,
        duration_seconds: int = 4,
        resolution: str = "720p",
        aspect_ratio: str = "16:9",
    ) -> str:
        """
        Generate a video from a single input image.
        
        Args:
            prompt: Text description for the video
            image_path: Path to the input image
            output_path: Path where the output video will be saved
            duration_seconds: Duration of the generated video
            resolution: Video resolution (e.g., "720p", "1080p")
            aspect_ratio: Video aspect ratio ("16:9" or "9:16")
            
        Returns:
            Path to the generated video
        """
        image = self._load_image(image_path)
        
        operation = self.client.models.generate_videos(
            model="veo-3.1-generate-preview",
            prompt=prompt,
            image=image,
            config=types.GenerateVideosConfig(
                number_of_videos=1,
                duration_seconds=duration_seconds,
                resolution=resolution,
                aspect_ratio=aspect_ratio,
            ),
        )
        
        # Poll until done
        while not operation.done:
            time.sleep(10)
            operation = self.client.operations.get(operation)
        
        # Download and save
        video = operation.response.generated_videos[0]
        self.client.files.download(file=video.video)
        video.video.save(output_path)
        
        return output_path

    def generate_video_with_references(
        self,
        prompt: str,
        reference_image_paths: list[str],
        output_path: str,
        duration_seconds: int = 6,
        resolution: str = "720p",
        aspect_ratio: str = "16:9",
    ) -> str:
        """
        Generate a video using multiple reference images.
        
        Args:
            prompt: Text description for the video
            reference_image_paths: List of paths to reference images
            output_path: Path where the output video will be saved
            duration_seconds: Duration of the generated video
            resolution: Video resolution (e.g., "720p", "1080p")
            aspect_ratio: Video aspect ratio ("16:9" or "9:16")
            
        Returns:
            Path to the generated video
        """
        reference_images = [
            self._load_image(path) for path in reference_image_paths
        ]
        
        operation = self.client.models.generate_videos(
            model="veo-3.1-generate-preview",
            prompt=prompt,
            config=types.GenerateVideosConfig(
                number_of_videos=1,
                duration_seconds=duration_seconds,
                resolution=resolution,
                aspect_ratio=aspect_ratio,
                reference_images=reference_images,
            ),
        )
        
        # Poll until done
        while not operation.done:
            time.sleep(10)
            operation = self.client.operations.get(operation)
        
        # Download and save
        video = operation.response.generated_videos[0]
        self.client.files.download(file=video.video)
        video.video.save(output_path)
        
        return output_path
