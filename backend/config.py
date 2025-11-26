from pathlib import Path
from functools import lru_cache
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    google_ai_api_key: str
    
    # Paths
    images_dir: Path = Path("images")
    output_dir: Path = Path("videos")
    generated_images_dir: Path = Path("generated-images")
    prompts_dir: Path = Path("prompts")
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
