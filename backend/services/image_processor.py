import io
from pathlib import Path
from PIL import Image
from rembg import remove


class ImageProcessor:
    """Service for processing product images before video generation."""

    # Target resolutions for each aspect ratio
    ASPECT_RATIOS = {
        "16:9": (1920, 1080),
        "9:16": (1080, 1920),
        "1:1": (1080, 1080),
    }

    # Padding as percentage of canvas size (product won't touch edges)
    PADDING_PERCENT = 0.08

    def __init__(self, background_color: tuple[int, int, int] = (255, 255, 255)):
        """
        Initialize the image processor.
        
        Args:
            background_color: RGB tuple for the background color (default: white)
        """
        self.background_color = background_color

    def remove_background(self, image_path: str) -> Image.Image:
        """
        Remove background from an image.
        
        Args:
            image_path: Path to the input image
            
        Returns:
            PIL Image with transparent background (RGBA)
        """
        with open(image_path, 'rb') as f:
            input_bytes = f.read()
        
        output_bytes = remove(input_bytes)
        return Image.open(io.BytesIO(output_bytes)).convert('RGBA')

    def get_product_bounds(self, image: Image.Image) -> tuple[int, int, int, int]:
        """
        Find the bounding box of the non-transparent pixels.
        
        Args:
            image: RGBA PIL Image
            
        Returns:
            Tuple of (left, top, right, bottom)
        """
        # Get alpha channel
        alpha = image.split()[3]
        bbox = alpha.getbbox()
        
        if bbox is None:
            # No non-transparent pixels found, return full image
            return (0, 0, image.width, image.height)
        
        return bbox

    def place_on_canvas(
        self,
        product_image: Image.Image,
        aspect_ratio: str,
    ) -> Image.Image:
        """
        Place the product image centered on a canvas with the target aspect ratio.
        
        Args:
            product_image: RGBA PIL Image with transparent background
            aspect_ratio: Target aspect ratio ("16:9", "9:16", or "1:1")
            
        Returns:
            RGB PIL Image with product centered on background
        """
        target_width, target_height = self.ASPECT_RATIOS.get(aspect_ratio, (1920, 1080))
        
        # Create canvas with background color
        canvas = Image.new('RGB', (target_width, target_height), self.background_color)
        
        # Get product bounds (crop to actual content)
        bbox = self.get_product_bounds(product_image)
        product_cropped = product_image.crop(bbox)
        
        # Calculate available space (with padding)
        padding_x = int(target_width * self.PADDING_PERCENT)
        padding_y = int(target_height * self.PADDING_PERCENT)
        available_width = target_width - (2 * padding_x)
        available_height = target_height - (2 * padding_y)
        
        # Calculate scale to fit product in available space
        product_width, product_height = product_cropped.size
        scale_x = available_width / product_width
        scale_y = available_height / product_height
        scale = min(scale_x, scale_y)  # Fit within bounds
        
        # Resize product
        new_width = int(product_width * scale)
        new_height = int(product_height * scale)
        product_resized = product_cropped.resize(
            (new_width, new_height),
            Image.Resampling.LANCZOS
        )
        
        # Calculate position to center product
        x = (target_width - new_width) // 2
        y = (target_height - new_height) // 2
        
        # Paste product onto canvas (using alpha channel as mask)
        canvas.paste(product_resized, (x, y), product_resized)
        
        return canvas

    def process_image(
        self,
        image_path: str,
        output_path: str,
        aspect_ratio: str = "16:9",
    ) -> str:
        """
        Full processing pipeline: remove background and place on canvas.
        
        Args:
            image_path: Path to the input image
            output_path: Path to save the processed image
            aspect_ratio: Target aspect ratio ("16:9", "9:16", or "1:1")
            
        Returns:
            Path to the processed image
        """
        # Remove background
        product_image = self.remove_background(image_path)
        
        # Place on canvas with target aspect ratio
        final_image = self.place_on_canvas(product_image, aspect_ratio)
        
        # Save as JPEG (good quality, smaller size)
        final_image.save(output_path, format='JPEG', quality=95)
        
        return output_path

