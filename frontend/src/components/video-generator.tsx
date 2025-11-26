"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Status steps for progress indicator
const STATUS_STEPS = [
  { key: "uploading", label: "Uploading", description: "Sending your image..." },
  { key: "queued", label: "In Queue", description: "Waiting for processing..." },
  { key: "processing", label: "Generating", description: "AI is creating your content..." },
  { key: "completed", label: "Done", description: "Your content is ready!" },
];

function getStatusIndex(status: string): number {
  const index = STATUS_STEPS.findIndex((s) => s.key === status);
  return index === -1 ? 0 : index;
}

export function VideoGenerator() {
  const [mode, setMode] = useState<"video" | "image">("video");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [format, setFormat] = useState<"1:1" | "16:9" | "9:16">("16:9");
  const [quality, setQuality] = useState<"1080p" | "720p">("1080p");
  const [duration, setDuration] = useState<4 | 6 | 8>(8);
  const [isGenerating, setIsGenerating] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to result when ready
  useEffect(() => {
    if ((videoUrl || imageUrl) && videoRef.current) {
      setShowSuccess(true);
      setTimeout(() => {
        videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [videoUrl, imageUrl]);

  // Reset format when switching modes
  useEffect(() => {
    if (mode === "image" && format === "16:9") {
      // Keep current format or default to 1:1 for image mode
    } else if (mode === "video" && format === "1:1") {
      setFormat("16:9");
    }
  }, [mode]);

  // Handle mode change with transition effect
  const handleModeChange = (newMode: "video" | "image") => {
    if (newMode === mode || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(newMode);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 150);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setError(null);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Image too large. Maximum size is 10MB.");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setError("Please upload a valid image file (JPG, PNG, WebP).");
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Image too large. Maximum size is 10MB.");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }, []);

  const removeImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const pollJobStatus = useCallback(async (id: string) => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}/api/jobs/${id}`);
        const data = await res.json();
        setStatus(data.status);

        if (data.status === "completed") {
          clearInterval(interval);
          if (data.video_url) {
            setVideoUrl(`${API_URL}${data.video_url}`);
          }
          if (data.image_url) {
            setImageUrl(`${API_URL}${data.image_url}`);
          }
          setIsGenerating(false);
        } else if (data.status === "failed") {
          clearInterval(interval);
          setIsGenerating(false);
          setError(data.error || `${mode === "video" ? "Video" : "Image"} generation failed. Please try again.`);
        }
      } catch {
        clearInterval(interval);
        setIsGenerating(false);
        setError("Connection lost. Please check your network and try again.");
      }
    }, 3000);
  }, [mode]);

  const handleGenerate = async () => {
    if (!image || !prompt) return;

    setIsGenerating(true);
    setStatus("uploading");
    setVideoUrl(null);
    setImageUrl(null);
    setError(null);
    setShowSuccess(false);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);
    formData.append("format", format);

    const endpoint = mode === "video" ? "/api/generate" : "/api/generate-image";
    
    if (mode === "video") {
      formData.append("resolution", quality);
      formData.append("duration_seconds", duration.toString());
    }

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) {
        throw new Error("Server error");
      }
      
      const data = await res.json();
      setJobId(data.job_id);
      setStatus(data.status);
      pollJobStatus(data.job_id);
    } catch {
      setIsGenerating(false);
      setStatus("");
      setError("Failed to start generation. Please try again.");
    }
  };

  const resetGenerator = () => {
    setImage(null);
    setImagePreview(null);
    setPrompt("");
    setVideoUrl(null);
    setImageUrl(null);
    setError(null);
    setShowSuccess(false);
    setJobId(null);
    setStatus("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const promptLength = prompt.length;
  const isPromptValid = promptLength >= 10;
  const canGenerate = image && isPromptValid && !isGenerating;

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI-Powered Content Generation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
              Create Stunning
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
              {mode === "video" ? "Video Ads" : "Ad Images"}
            </span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg max-w-md mx-auto">
            {mode === "video" 
              ? "Transform static images into captivating video advertisements in minutes"
              : "Generate professional ad images from your reference image and prompt"}
          </p>
          
          {/* Mode Toggle - Animated Pill Switcher */}
          <div className="mt-6 flex items-center justify-center">
            <div className="relative p-1 rounded-2xl bg-zinc-900/80 border border-zinc-800/60 backdrop-blur-xl overflow-hidden">
              {/* Animated glow background */}
              <div 
                className={`
                  absolute inset-0 opacity-40 blur-xl transition-all duration-500 ease-out
                  ${mode === "video" 
                    ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-transparent" 
                    : "bg-gradient-to-r from-transparent via-rose-600 to-rose-600"
                  }
                `}
              />
              
              {/* Sliding pill indicator */}
              <div 
                className={`
                  absolute top-1 bottom-1 w-[calc(50%-5px)] rounded-xl
                  bg-gradient-to-br transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${mode === "video" 
                    ? "left-1 from-indigo-600/90 via-violet-600/90 to-indigo-700/90 shadow-lg shadow-indigo-500/30" 
                    : "right-1 from-rose-600/90 via-pink-600/90 to-rose-700/90 shadow-lg shadow-rose-500/30"
                  }
                  ${isTransitioning ? "scale-[0.95]" : "scale-100"}
                `}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 to-white/10" />
              </div>
              
              {/* Floating particles effect during transition */}
              {isTransitioning && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[
                    { left: 25, top: 30 },
                    { left: 45, top: 55 },
                    { left: 65, top: 25 },
                    { left: 35, top: 70 },
                    { left: 75, top: 45 },
                    { left: 55, top: 65 },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className={`
                        absolute w-1 h-1 rounded-full animate-ping
                        ${mode === "video" ? "bg-rose-400" : "bg-indigo-400"}
                      `}
                      style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                        animationDelay: `${i * 50}ms`,
                        animationDuration: '500ms'
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Toggle buttons */}
              <div className="relative flex items-center gap-0.5">
                <button
                  onClick={() => handleModeChange("video")}
                  className={`
                    relative z-10 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                    flex items-center gap-2
                    ${mode === "video"
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                    }
                  `}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${mode === "video" ? "scale-110" : "scale-100"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Video
                </button>
                <button
                  onClick={() => handleModeChange("image")}
                  className={`
                    relative z-10 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                    flex items-center gap-2
                    ${mode === "image"
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                    }
                  `}
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${mode === "image" ? "scale-110" : "scale-100"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Image
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 animate-in slide-in-from-top-2 duration-300">
            <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-red-300 text-sm font-medium">{error}</p>
            </div>
            <button onClick={() => setError(null)} className="text-red-400 hover:text-red-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Main Content Grid - Different layout for video vs image mode */}
        <div 
          className={`
            transition-all duration-500 ease-out
            ${isTransitioning ? "opacity-0 scale-[0.98] blur-sm" : "opacity-100 scale-100 blur-0"}
          `}
        >
        {mode === "video" ? (
          <>
            {/* Video Mode: 2-column layout for image + prompt */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Image Upload */}
              <Card 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm overflow-hidden group cursor-pointer
                  transition-all duration-300
                  ${isDragOver 
                    ? "bg-indigo-500/10 border-indigo-500/50 ring-2 ring-inset ring-indigo-500/50" 
                    : "hover:bg-zinc-800/60 hover:border-zinc-700/60"
                  }
                `}
              >
                <CardContent className="p-0">
                  <div
                    className="relative min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    
                    {imagePreview ? (
                      <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px]">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-contain p-4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                            <span className="text-white/80 text-sm font-medium">Click to change</span>
                            <button
                              onClick={removeImage}
                              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        {/* Image loaded indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                          <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-emerald-400 text-xs font-medium">Ready</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6 sm:p-8">
                        <div className={`
                          w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 rounded-2xl 
                          flex items-center justify-center transition-all duration-300
                          ${isDragOver 
                            ? "bg-indigo-500/20 border-2 border-dashed border-indigo-500/50 scale-110" 
                            : "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50"
                          }
                        `}>
                          <svg className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${isDragOver ? "text-indigo-400" : "text-zinc-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-zinc-300 font-medium mb-1.5">
                          {isDragOver ? "Drop it here!" : "Drop your image here"}
                        </p>
                        <p className="text-zinc-500 text-sm mb-3">or click to browse</p>
                        <p className="text-zinc-600 text-xs">JPG, PNG, WebP • Max 10MB</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Prompt */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-zinc-300 text-sm font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Describe your video
                    </Label>
                    <span className={`text-xs tabular-nums transition-colors ${
                      promptLength === 0 ? "text-zinc-600" :
                      promptLength < 10 ? "text-amber-500" : "text-emerald-500"
                    }`}>
                      {promptLength} characters
                    </span>
                  </div>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Be specific about motion, lighting, and mood...

Example: 'Slowly zoom in on the product as soft morning light filters through a window. Water droplets form on the cold surface and slowly drip down, creating a fresh, premium feel.'"
                    className="flex-1 bg-zinc-800/30 border-zinc-700/50 text-white placeholder:text-zinc-600 resize-none focus:border-indigo-500/50 focus:ring-indigo-500/20 min-h-[200px] sm:min-h-[240px] text-sm leading-relaxed"
                  />
                  {promptLength > 0 && promptLength < 10 && (
                    <p className="mt-2 text-xs text-amber-500/80 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Add more detail for better results (min. 10 characters)
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Video Settings Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Duration */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5">
                  <Label className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration
                  </Label>
                  <RadioGroup
                    value={duration.toString()}
                    onValueChange={(v) => setDuration(parseInt(v) as 4 | 6 | 8)}
                    className="flex gap-2"
                  >
                    {[4, 6, 8].map((sec) => (
                      <label
                        key={sec}
                        className={`
                          flex-1 flex flex-col items-center justify-center h-[58px] sm:h-[62px] rounded-xl cursor-pointer transition-all duration-200
                          ${duration === sec 
                            ? "bg-amber-500/15 border border-amber-500/40 shadow-lg shadow-amber-500/5" 
                            : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                          }
                        `}
                      >
                        <RadioGroupItem value={sec.toString()} className="sr-only" />
                        <span className={`font-bold text-base ${duration === sec ? "text-amber-300" : "text-zinc-400"}`}>{sec}s</span>
                      </label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Format */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5">
                  <Label className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    Aspect Ratio
                  </Label>
                  <RadioGroup
                    value={format}
                    onValueChange={(v) => setFormat(v as "1:1" | "16:9" | "9:16")}
                    className="flex gap-2"
                  >
                    <label
                      className={`
                        flex-1 flex items-center justify-center gap-2 h-[58px] sm:h-[62px] rounded-xl cursor-pointer transition-all duration-200
                        ${format === "16:9" 
                          ? "bg-indigo-500/15 border border-indigo-500/40 shadow-lg shadow-indigo-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="16:9" className="sr-only" />
                      <div className={`w-6 h-4 rounded border-2 transition-colors ${format === "16:9" ? "border-indigo-400 bg-indigo-500/20" : "border-zinc-600"}`} />
                      <span className={`font-bold text-base ${format === "16:9" ? "text-indigo-300" : "text-zinc-400"}`}>16:9</span>
                    </label>
                    <label
                      className={`
                        flex-1 flex items-center justify-center gap-2 h-[58px] sm:h-[62px] rounded-xl cursor-pointer transition-all duration-200
                        ${format === "9:16" 
                          ? "bg-indigo-500/15 border border-indigo-500/40 shadow-lg shadow-indigo-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="9:16" className="sr-only" />
                      <div className={`w-4 h-6 rounded border-2 transition-colors ${format === "9:16" ? "border-indigo-400 bg-indigo-500/20" : "border-zinc-600"}`} />
                      <span className={`font-bold text-base ${format === "9:16" ? "text-indigo-300" : "text-zinc-400"}`}>9:16</span>
                    </label>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Quality */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5">
                  <Label className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Quality
                  </Label>
                  <RadioGroup
                    value={quality}
                    onValueChange={(v) => setQuality(v as "1080p" | "720p")}
                    className="flex gap-2"
                  >
                    <label
                      className={`
                        flex-1 flex flex-col items-center justify-center h-[58px] sm:h-[62px] rounded-xl cursor-pointer transition-all duration-200
                        ${quality === "1080p" 
                          ? "bg-rose-500/15 border border-rose-500/40 shadow-lg shadow-rose-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="1080p" className="sr-only" />
                      <span className={`font-bold text-base ${quality === "1080p" ? "text-rose-300" : "text-zinc-400"}`}>1080p</span>
                      <span className={`text-[10px] ${quality === "1080p" ? "text-rose-400/70" : "text-zinc-600"}`}>Full HD</span>
                    </label>
                    <label
                      className={`
                        flex-1 flex flex-col items-center justify-center h-[58px] sm:h-[62px] rounded-xl cursor-pointer transition-all duration-200
                        ${quality === "720p" 
                          ? "bg-rose-500/15 border border-rose-500/40 shadow-lg shadow-rose-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="720p" className="sr-only" />
                      <span className={`font-bold text-base ${quality === "720p" ? "text-rose-300" : "text-zinc-400"}`}>720p</span>
                      <span className={`text-[10px] ${quality === "720p" ? "text-rose-400/70" : "text-zinc-600"}`}>HD</span>
                    </label>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Image Mode: 3-column layout with image drop, prompt, and aspect ratio in a row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Image Upload */}
              <Card 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm overflow-hidden group cursor-pointer
                  transition-all duration-300
                  ${isDragOver 
                    ? "bg-indigo-500/10 border-indigo-500/50 ring-2 ring-inset ring-indigo-500/50" 
                    : "hover:bg-zinc-800/60 hover:border-zinc-700/60"
                  }
                `}
              >
                <CardContent className="p-0">
                  <div
                    className="relative min-h-[240px] sm:min-h-[280px] flex flex-col items-center justify-center"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    
                    {imagePreview ? (
                      <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px]">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-contain p-4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                            <span className="text-white/80 text-sm font-medium">Click to change</span>
                            <button
                              onClick={removeImage}
                              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        {/* Image loaded indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                          <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-emerald-400 text-xs font-medium">Ready</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <div className={`
                          w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl 
                          flex items-center justify-center transition-all duration-300
                          ${isDragOver 
                            ? "bg-indigo-500/20 border-2 border-dashed border-indigo-500/50 scale-110" 
                            : "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50"
                          }
                        `}>
                          <svg className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${isDragOver ? "text-indigo-400" : "text-zinc-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-zinc-300 font-medium mb-1.5 text-sm">
                          {isDragOver ? "Drop it here!" : "Drop your image"}
                        </p>
                        <p className="text-zinc-500 text-xs mb-2">or click to browse</p>
                        <p className="text-zinc-600 text-xs">JPG, PNG, WebP • Max 10MB</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Prompt */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-zinc-300 text-sm font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Describe your image
                    </Label>
                    <span className={`text-xs tabular-nums transition-colors ${
                      promptLength === 0 ? "text-zinc-600" :
                      promptLength < 10 ? "text-amber-500" : "text-emerald-500"
                    }`}>
                      {promptLength} chars
                    </span>
                  </div>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the style, composition, lighting...

Example: 'Product on marble surface with soft natural light, minimalist aesthetic, premium feel'"
                    className="flex-1 bg-zinc-800/30 border-zinc-700/50 text-white placeholder:text-zinc-600 resize-none focus:border-indigo-500/50 focus:ring-indigo-500/20 min-h-[160px] sm:min-h-[200px] text-sm leading-relaxed"
                  />
                  {promptLength > 0 && promptLength < 10 && (
                    <p className="mt-2 text-xs text-amber-500/80 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Min. 10 characters
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Aspect Ratio */}
              <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5 h-full flex flex-col">
                  <Label className="text-zinc-300 text-sm font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    Aspect Ratio
                  </Label>
                  <RadioGroup
                    value={format}
                    onValueChange={(v) => setFormat(v as "1:1" | "16:9" | "9:16")}
                    className="flex flex-col gap-2 flex-1"
                  >
                    <label
                      className={`
                        flex items-center justify-center gap-3 flex-1 rounded-xl cursor-pointer transition-all duration-200
                        ${format === "1:1" 
                          ? "bg-indigo-500/15 border border-indigo-500/40 shadow-lg shadow-indigo-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="1:1" className="sr-only" />
                      <div className={`w-5 h-5 rounded border-2 transition-colors ${format === "1:1" ? "border-indigo-400 bg-indigo-500/20" : "border-zinc-600"}`} />
                      <span className={`font-bold text-sm ${format === "1:1" ? "text-indigo-300" : "text-zinc-400"}`}>1:1</span>
                      <span className={`text-xs ${format === "1:1" ? "text-indigo-400/70" : "text-zinc-600"}`}>Square</span>
                    </label>
                    <label
                      className={`
                        flex items-center justify-center gap-3 flex-1 rounded-xl cursor-pointer transition-all duration-200
                        ${format === "16:9" 
                          ? "bg-indigo-500/15 border border-indigo-500/40 shadow-lg shadow-indigo-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="16:9" className="sr-only" />
                      <div className={`w-6 h-4 rounded border-2 transition-colors ${format === "16:9" ? "border-indigo-400 bg-indigo-500/20" : "border-zinc-600"}`} />
                      <span className={`font-bold text-sm ${format === "16:9" ? "text-indigo-300" : "text-zinc-400"}`}>16:9</span>
                      <span className={`text-xs ${format === "16:9" ? "text-indigo-400/70" : "text-zinc-600"}`}>Landscape</span>
                    </label>
                    <label
                      className={`
                        flex items-center justify-center gap-3 flex-1 rounded-xl cursor-pointer transition-all duration-200
                        ${format === "9:16" 
                          ? "bg-indigo-500/15 border border-indigo-500/40 shadow-lg shadow-indigo-500/5" 
                          : "bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600/50 hover:bg-zinc-800/50"
                        }
                      `}
                    >
                      <RadioGroupItem value="9:16" className="sr-only" />
                      <div className={`w-4 h-6 rounded border-2 transition-colors ${format === "9:16" ? "border-indigo-400 bg-indigo-500/20" : "border-zinc-600"}`} />
                      <span className={`font-bold text-sm ${format === "9:16" ? "text-indigo-300" : "text-zinc-400"}`}>9:16</span>
                      <span className={`text-xs ${format === "9:16" ? "text-indigo-400/70" : "text-zinc-600"}`}>Portrait</span>
                    </label>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        </div>

        {/* Progress Indicator */}
        {isGenerating && (
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card className="bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-zinc-300">Generating your video...</h3>
                  <span className="text-xs text-zinc-500">This may take a few minutes</span>
                </div>
                
                {/* Progress Steps */}
                <div className="flex items-center gap-2">
                  {STATUS_STEPS.slice(0, -1).map((step, index) => {
                    const currentIndex = getStatusIndex(status);
                    const isActive = index === currentIndex;
                    const isCompleted = index < currentIndex;
                    
                    return (
                      <div key={step.key} className="flex-1 flex items-center gap-2">
                        <div className="flex-1">
                          <div className={`
                            h-1.5 rounded-full transition-all duration-500
                            ${isCompleted ? "bg-gradient-to-r from-indigo-500 to-violet-500" : 
                              isActive ? "bg-gradient-to-r from-indigo-500 to-violet-500 animate-pulse" : 
                              "bg-zinc-800"
                            }
                          `} />
                          <p className={`mt-2 text-xs transition-colors ${
                            isActive ? "text-indigo-400" : 
                            isCompleted ? "text-zinc-500" : 
                            "text-zinc-700"
                          }`}>
                            {step.label}
                          </p>
                        </div>
                        {index < STATUS_STEPS.length - 2 && (
                          <div className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                            isCompleted ? "bg-violet-500" : "bg-zinc-800"
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Current Status Description */}
                <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-400 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-300">{STATUS_STEPS[getStatusIndex(status)]?.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className={`
            w-full h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300
            ${isGenerating 
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
              : canGenerate
                ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 hover:from-indigo-500 hover:via-violet-500 hover:to-rose-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.01] active:scale-[0.99]"
                : "bg-zinc-800/50 text-zinc-600 cursor-not-allowed"
            }
          `}
        >
          {isGenerating ? (
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              {!image && (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Upload an image to start
                </>
              )}
              {image && !isPromptValid && (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Add a prompt to continue
                </>
              )}
              {canGenerate && (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mode === "video" ? (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </>
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </>
                    )}
                  </svg>
                  Generate {mode === "video" ? "Video" : "Image"}
                </>
              )}
            </span>
          )}
        </Button>

        {/* Disabled state hint */}
        {!canGenerate && !isGenerating && (
          <p className="mt-3 text-center text-xs text-zinc-600">
            {!image ? "Start by uploading your product image above" : 
             !isPromptValid ? "Describe how you want your video to look" : ""}
          </p>
        )}

        {/* Result - Video or Image */}
        {(videoUrl || imageUrl) && (
          <div 
            ref={videoRef}
            className={`mt-8 sm:mt-10 ${showSuccess ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : ""}`}
          >
            <Card className="bg-zinc-900/60 border-zinc-800/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                {/* Success Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Your {mode === "video" ? "Video" : "Image"} is Ready!</h3>
                      <p className="text-sm text-zinc-500">Preview and download below</p>
                    </div>
                  </div>
                  <button
                    onClick={resetGenerator}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create New
                  </button>
                </div>
                
                {/* Video Player or Image Display */}
                {videoUrl ? (
                  <div className="relative rounded-xl overflow-hidden bg-black mb-4 sm:mb-6">
                    <video
                      src={videoUrl}
                      controls
                      className="w-full aspect-video"
                      poster={imagePreview || undefined}
                    />
                  </div>
                ) : imageUrl ? (
                  <div className="relative rounded-xl overflow-hidden bg-black mb-4 sm:mb-6">
                    <img
                      src={imageUrl}
                      alt="Generated ad image"
                      className="w-full object-contain"
                      style={{
                        aspectRatio: format === "1:1" ? "1/1" : format === "16:9" ? "16/9" : "9/16",
                        maxHeight: "80vh"
                      }}
                    />
                  </div>
                ) : null}
                
                {/* Download Button */}
                <a
                  href={videoUrl || imageUrl || "#"}
                  download={`${mode === "video" ? "video" : "image"}-ad-${jobId || "generated"}.${mode === "video" ? "mp4" : "png"}`}
                  className="flex items-center justify-center gap-2.5 w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.99]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download {mode === "video" ? "Video" : "Image"}
                </a>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 text-center">
          <p className="text-xs text-zinc-600">
            Powered by AI • Videos are generated in high quality
          </p>
        </footer>
      </div>
    </div>
  );
}
