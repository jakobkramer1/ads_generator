# Ads Generator

AI-powered advertisement video generator using Google's Veo 3.1 API.

## Project Structure

```
ads_gen/
├── backend/                    # FastAPI Backend
│   ├── main.py                # API endpoints
│   ├── config.py              # Configuration & settings
│   └── services/
│       └── video_generator.py # Video generation logic
├── frontend/                   # Next.js Frontend
│   └── src/
│       ├── app/               # Next.js app router
│       └── components/        # React components
│           └── video-generator.tsx
├── images/                     # Input images
└── videos/                     # Generated videos
```

## Setup

### Backend

1. Install Python dependencies:
```bash
uv sync
```

2. Create a `.env` file in the root:
```
GOOGLE_AI_API_KEY=your_api_key_here
```

3. Start the backend server:
```bash
uv run uvicorn backend.main:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend

1. Install Node dependencies:
```bash
cd frontend
npm install
```

2. Create a `.env.local` file in the frontend folder:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Features

- **Image Upload**: Drag & drop or click to upload an image
- **Prompt Input**: Describe the video you want to create
- **Format Selection**: Choose between 16:9 (landscape) or 9:16 (portrait)
- **Quality Selection**: Choose between 1080p (Full HD) or 720p (HD)
- **Video Generation**: Generate AI-powered advertisement videos

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/generate` | Generate video from uploaded image |
| GET | `/api/jobs/{job_id}` | Check job status |
| GET | `/videos/{filename}` | Serve generated videos |

### Generate Video Example

```bash
curl -X POST http://localhost:8000/api/generate \
  -F "image=@images/sprite.jpg" \
  -F "prompt=Water drops dripping off the cold bottle" \
  -F "duration_seconds=4" \
  -F "resolution=1080p" \
  -F "format=16:9"
```
# ads_generator
