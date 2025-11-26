import uuid
from pathlib import Path
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from backend.config import get_settings
from backend.services.video_generator import VideoGenerator
from backend.services.image_generator import ImageGenerator


app = FastAPI(
    title="Ads Generator API",
    description="API for generating advertisement videos using AI",
    version="0.1.0",
)

# CORS für Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure directories exist
settings = get_settings()
settings.images_dir.mkdir(exist_ok=True)
settings.output_dir.mkdir(exist_ok=True)
settings.generated_images_dir.mkdir(exist_ok=True)

# Serve generated videos and images
app.mount("/videos", StaticFiles(directory=str(settings.output_dir)), name="videos")
app.mount("/images", StaticFiles(directory=str(settings.images_dir)), name="images")
app.mount("/generated-images", StaticFiles(directory=str(settings.generated_images_dir)), name="generated-images")


class VideoGenerationResponse(BaseModel):
    job_id: str
    status: str
    video_url: str | None = None
    image_url: str | None = None
    error: str | None = None


# Simple in-memory job tracking
jobs: dict[str, dict] = {}


def _get_video_generator() -> VideoGenerator:
    """Get configured video generator instance."""
    return VideoGenerator(api_key=settings.google_ai_api_key)


def _get_image_generator() -> ImageGenerator:
    """Get configured image generator instance."""
    return ImageGenerator(api_key=settings.google_ai_api_key)


def generate_video_task(
    job_id: str,
    prompt: str,
    image_path: str,
    output_path: str,
    duration_seconds: int,
    resolution: str,
    aspect_ratio: str,
):
    """Background task for video generation."""
    try:
        jobs[job_id]["status"] = "processing"
        generator = _get_video_generator()
        generator.generate_video_from_image(
            prompt=prompt,
            image_path=image_path,
            output_path=output_path,
            duration_seconds=duration_seconds,
            resolution=resolution,
            aspect_ratio=aspect_ratio,
        )
        jobs[job_id]["status"] = "completed"
        jobs[job_id]["video_url"] = f"/videos/{Path(output_path).name}"
    except Exception as e:
        jobs[job_id]["status"] = "failed"
        jobs[job_id]["error"] = str(e)


def generate_image_task(
    job_id: str,
    prompt: str,
    image_path: str,
    output_path: str,
    aspect_ratio: str,
):
    """Background task for image generation."""
    try:
        jobs[job_id]["status"] = "processing"
        generator = _get_image_generator()
        generator.generate_image_from_reference(
            prompt=prompt,
            reference_image_path=image_path,
            output_path=output_path,
            aspect_ratio=aspect_ratio,
        )
        jobs[job_id]["status"] = "completed"
        jobs[job_id]["image_url"] = f"/generated-images/{Path(output_path).name}"
    except Exception as e:
        jobs[job_id]["status"] = "failed"
        jobs[job_id]["error"] = str(e)


@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "ok", "message": "Ads Generator API is running"}


@app.post("/api/generate", response_model=VideoGenerationResponse)
async def generate_video(
    background_tasks: BackgroundTasks,
    image: UploadFile = File(...),
    prompt: str = Form(...),
    duration_seconds: int = Form(4),
    resolution: str = Form("720p"),
    format: str = Form("16:9"),
):
    """
    Generate a video from an uploaded image.
    
    The video generation runs in the background.
    Use the returned job_id to check the status.
    
    Args:
        image: The input image file
        prompt: Text description for the video
        duration_seconds: Duration of the video (default: 4)
        resolution: Video resolution - "720p" or "1080p" (default: "720p")
        format: Aspect ratio - "16:9" or "9:16" (default: "16:9")
    """
    # Validate format
    if format not in ["16:9", "9:16"]:
        raise HTTPException(status_code=400, detail="Format must be '16:9' or '9:16'")
    
    # Validate resolution
    if resolution not in ["720p", "1080p"]:
        raise HTTPException(status_code=400, detail="Resolution must be '720p' or '1080p'")
    
    # Save uploaded image to images folder
    job_id = str(uuid.uuid4())
    image_ext = Path(image.filename or "image.jpg").suffix or ".jpg"
    image_path = settings.images_dir / f"{job_id}{image_ext}"
    output_path = settings.output_dir / f"{job_id}.mp4"
    
    content = await image.read()
    with open(image_path, "wb") as f:
        f.write(content)
    
    # Initialize job
    jobs[job_id] = {"status": "queued", "video_url": None, "image_url": None, "error": None}
    
    # Start background generation
    background_tasks.add_task(
        generate_video_task,
        job_id=job_id,
        prompt=prompt,
        image_path=str(image_path),
        output_path=str(output_path),
        duration_seconds=duration_seconds,
        resolution=resolution,
        aspect_ratio=format,
    )
    
    return VideoGenerationResponse(job_id=job_id, status="queued")


@app.post("/api/generate-image", response_model=VideoGenerationResponse)
async def generate_image(
    background_tasks: BackgroundTasks,
    image: UploadFile = File(...),
    prompt: str = Form(...),
    format: str = Form("16:9"),
):
    """
    Generate an image from an uploaded reference image and prompt.
    
    The image generation runs in the background.
    Use the returned job_id to check the status.
    
    Args:
        image: The input reference image file
        prompt: Text description for the generated image
        format: Aspect ratio - "1:1", "16:9", or "9:16" (default: "16:9")
    """
    # Validate format
    if format not in ["1:1", "16:9", "9:16"]:
        raise HTTPException(status_code=400, detail="Format must be '1:1', '16:9', or '9:16'")
    
    # Save uploaded image to images folder
    job_id = str(uuid.uuid4())
    image_ext = Path(image.filename or "image.jpg").suffix or ".jpg"
    image_path = settings.images_dir / f"{job_id}{image_ext}"
    output_path = settings.generated_images_dir / f"{job_id}.png"
    
    content = await image.read()
    with open(image_path, "wb") as f:
        f.write(content)
    
    # Initialize job
    jobs[job_id] = {"status": "queued", "video_url": None, "image_url": None, "error": None}
    
    # Start background generation
    background_tasks.add_task(
        generate_image_task,
        job_id=job_id,
        prompt=prompt,
        image_path=str(image_path),
        output_path=str(output_path),
        aspect_ratio=format,
    )
    
    return VideoGenerationResponse(job_id=job_id, status="queued")


@app.get("/api/jobs/{job_id}", response_model=VideoGenerationResponse)
async def get_job_status(job_id: str):
    """Get the status of a video or image generation job."""
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    
    job = jobs[job_id]
    return VideoGenerationResponse(
        job_id=job_id,
        status=job["status"],
        video_url=job.get("video_url"),
        image_url=job.get("image_url"),
        error=job.get("error"),
    )
