# AI Code Agent Instructions

This document provides essential context for AI code assistants working on this project.

## Tech Stack

### Backend (Python)

- **Framework**: FastAPI
- **Python Version**: 3.12+
- **Package Manager**: uv (use `uv sync` and `uv run`)
- **Key Dependencies**:
  - `google-genai` - Google's Generative AI SDK (Veo 3.1 for video, Gemini 2.5 Flash for images)
  - `pydantic-settings` - Configuration management via environment variables
  - `python-multipart` - File upload handling

### Frontend (TypeScript/React)

- **Framework**: Next.js 16 with App Router
- **React Version**: 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (new-york style)
- **Package Manager**: npm

## Project Architecture

```
ads_gen/
├── backend/
│   ├── main.py              # FastAPI app, routes, background tasks
│   ├── config.py            # Settings via pydantic-settings (.env)
│   └── services/
│       ├── video_generator.py   # Veo 3.1 API integration
│       └── image_generator.py   # Gemini 2.5 Flash image generation
├── frontend/
│   └── src/
│       ├── app/             # Next.js App Router (page.tsx, layout.tsx)
│       └── components/
│           ├── ui/          # shadcn/ui primitives
│           └── video-generator.tsx  # Main UI component (handles both modes)
├── images/                  # Uploaded input images (UUID-named)
├── generated-images/        # AI-generated images output
└── videos/                  # AI-generated videos output
```

## Code Conventions

### Backend

- Use type hints everywhere
- Pydantic models for request/response schemas
- Background tasks for long-running AI operations
- Simple in-memory job tracking (dict)
- Service classes encapsulate AI API logic

### Frontend

- Client components marked with `"use client"`
- Single main component handles both video and image modes
- State management via React hooks (useState, useCallback, useRef)
- Polling pattern for checking job status (3s interval)
- shadcn/ui components from `@/components/ui/`

## API Endpoints

| Method | Endpoint                       | Description                                          |
| ------ | ------------------------------ | ---------------------------------------------------- |
| GET    | `/`                            | Health check                                         |
| POST   | `/api/generate`                | Generate video from image + prompt                   |
| POST   | `/api/generate-image`          | Generate image from reference image + prompt         |
| GET    | `/api/jobs/{job_id}`           | Poll job status (queued/processing/completed/failed) |
| GET    | `/videos/{filename}`           | Serve generated videos (static)                      |
| GET    | `/images/{filename}`           | Serve uploaded images (static)                       |
| GET    | `/generated-images/{filename}` | Serve generated images (static)                      |

## Key Implementation Details

### Video Generation Flow

1. Frontend uploads image + form data to `/api/generate`
2. Backend saves image to `images/` with UUID filename
3. Background task starts with status "queued"
4. `VideoGenerator` calls Veo 3.1 API, polls until done
5. Video saved to `videos/`, job status updated to "completed"
6. Frontend polls `/api/jobs/{id}` every 3s until done

### Image Generation Flow

- Same pattern as video, but uses `ImageGenerator` with Gemini 2.5 Flash
- Output goes to `generated-images/`
- Model: `gemini-2.5-flash-image` with `response_modalities=["IMAGE", "TEXT"]`

### Format/Resolution Options

- **Video formats**: `16:9`, `9:16`
- **Image formats**: `1:1`, `16:9`, `9:16`
- **Video resolutions**: `720p`, `1080p`
- **Video durations**: 4, 6, 8 seconds

## Environment Variables

### Backend (.env in project root)

```
GOOGLE_AI_API_KEY=your_api_key_here
```

### Frontend (frontend/.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Running the Project

### Backend

```bash
uv sync
uv run uvicorn backend.main:app --reload
# Runs on http://localhost:8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

## Things to Watch Out For

1. **CORS**: Backend allows all origins (`allow_origins=["*"]`) - fine for dev
2. **Job Storage**: Jobs stored in-memory dict - lost on restart
3. **File Cleanup**: No automatic cleanup of uploaded/generated files
4. **API Rate Limits**: Google AI APIs have rate limits; generation takes time
5. **File Size**: Frontend limits uploads to 10MB
6. **Prompt Validation**: Minimum 10 characters required in frontend

## When Making Changes

### Adding New API Endpoints

- Add route in `backend/main.py`
- Add background task if long-running
- Update job tracking dict structure if needed
- Update `VideoGenerationResponse` model if response fields change

### Adding New UI Features

- Modify `video-generator.tsx` (main component)
- Use existing shadcn/ui components from `@/components/ui/`
- Follow existing state patterns and Tailwind styling
- Update API_URL usage for new endpoints

### Adding New AI Services

- Create new service class in `backend/services/`
- Follow `VideoGenerator`/`ImageGenerator` patterns
- Use `google-genai` SDK consistently

### Modifying shadcn/ui Components

- Components are in `frontend/src/components/ui/`
- Use `npx shadcn@latest add <component>` for new ones
- Style: "new-york", uses CSS variables

## Testing

Dev dependencies include pytest and httpx for testing:

```bash
uv run pytest
```

## Do NOT

- Commit `.env` files or API keys
- Push changes without user permission
- Add unnecessary abstractions for simple operations
- Over-engineer features beyond what's requested
