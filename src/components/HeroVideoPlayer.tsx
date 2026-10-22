import React, { useState, useRef } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Upload, 
  RotateCcw, 
  Maximize2,
  Film,
  Sparkles,
  Smartphone,
  CheckCircle2
} from "lucide-react";

interface VideoPreset {
  id: string;
  label: string;
  icon: string;
  src: string;
  desc: string;
  badge: string;
}

const HERO_VIDEO_PRESETS: VideoPreset[] = [
  {
    id: "fruits_ad",
    label: "Talking Fruits Ad",
    icon: "🍉",
    src: "/assets/aistudio/IMG_5435_51f14107.MP4",
    desc: "Animated talking Watermelon & Mango advert for a juice business made on smartphone",
    badge: "Student Project"
  },
  {
    id: "herbal_ad",
    label: "Herbal Commercial",
    icon: "🌿",
    src: "/assets/aistudio/IMG_5502_0596e785.MP4",
    desc: "Husraj herbal medicine commercial advert with voiceover and product motion",
    badge: "Client Ad"
  },
  {
    id: "student_review",
    label: "Student Video Review",
    icon: "⭐",
    src: "/assets/aistudio/IMG_4674_bc2df2e9.MOV",
    desc: "Real student sharing how easy it was to learn and create on mobile",
    badge: "Video Review"
  },
  {
    id: "character_ad",
    label: "AI Avatar Video",
    icon: "✨",
    src: "/assets/aistudio/IMG_4671_67784918.MOV",
    desc: "Realistic AI talking character with synchronized speech created on mobile",
    badge: "AI Avatar"
  }
];

export const HeroVideoPlayer: React.FC = () => {
  const { 
    heroVideo, 
    uploadHeroVideo, 
    resetHeroVideo 
  } = useMasterclass();

  const [activePresetId, setActivePresetId] = useState<string>("fruits_ad");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const activePreset = HERO_VIDEO_PRESETS.find(p => p.id === activePresetId) || HERO_VIDEO_PRESETS[0];
  const currentVideoSrc = heroVideo.customVideoUrl || activePreset.src;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadHeroVideo(file);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoElementRef.current) return;
    if (videoElementRef.current.paused) {
      videoElementRef.current.play();
      setIsPlaying(true);
    } else {
      videoElementRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoElementRef.current) return;
    videoElementRef.current.muted = !videoElementRef.current.muted;
    setIsMuted(videoElementRef.current.muted);
  };

  const handlePresetChange = (presetId: string) => {
    setActivePresetId(presetId);
    if (heroVideo.customVideoUrl) {
      resetHeroVideo();
    }
    setIsPlaying(true);
    setTimeout(() => {
      if (videoElementRef.current) {
        videoElementRef.current.currentTime = 0;
        videoElementRef.current.play().catch(() => {
          // Autoplay policy fallback
          setIsPlaying(false);
        });
      }
    }, 100);
  };

  const toggleFullscreen = () => {
    if (!videoElementRef.current) return;
    if (videoElementRef.current.requestFullscreen) {
      videoElementRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C140E] to-[#120D0A] border border-amber-800/40 shadow-2xl glow-gold group">
      {/* Top Header bar inside player */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#170F0A]/95 border-b border-amber-900/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-xs font-mono text-amber-200/80 pl-2 truncate max-w-[180px] sm:max-w-xs">
            {heroVideo.customVideoUrl 
              ? heroVideo.fileName || `uploaded_custom_video.mp4`
              : `${activePreset.id}_smartphone_render.mp4`}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-[10px] font-bold text-yellow-300 uppercase tracking-wider">
            {heroVideo.customVideoUrl ? "Custom Video" : activePreset.badge}
          </span>
        </div>

        {/* Upload replacement trigger */}
        <div className="flex items-center gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="video/*" 
            className="hidden" 
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-yellow-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 rounded-lg transition-colors cursor-pointer"
            title="Upload your own MP4 or MOV video"
          >
            <Upload className="w-3 h-3 text-yellow-400" />
            <span className="hidden sm:inline">Replace Video</span>
            <span className="sm:hidden">Upload</span>
          </button>

          {heroVideo.customVideoUrl && (
            <button
              type="button"
              onClick={resetHeroVideo}
              className="p-1 text-amber-300 hover:text-white rounded hover:bg-white/5 cursor-pointer"
              title="Reset to student demo videos"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Video Screen Area (16:9 / 4:3 responsive video container) */}
      <div className="relative aspect-video w-full bg-[#0E0A07] flex items-center justify-center overflow-hidden">
        <video
          ref={videoElementRef}
          key={currentVideoSrc}
          src={currentVideoSrc}
          className="w-full h-full object-contain bg-black"
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Big play button overlay when paused */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/45 hover:bg-black/35 transition-all cursor-pointer group/play z-10"
            aria-label="Play Video"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 transform group-hover/play:scale-110 transition-transform mb-3">
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-stone-950 translate-x-1" />
            </div>
            <div className="px-3.5 py-1 rounded-full bg-black/80 border border-amber-400/40 text-xs sm:text-sm font-bold text-yellow-300 shadow-md">
              Tap to Watch Real Student Video
            </div>
          </button>
        )}
      </div>

      {/* Preset Switcher Bar */}
      <div className="p-3 bg-[#170F0A] border-t border-amber-900/30">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs text-amber-200/80 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Watch Real Videos Created by Students on Smartphone:</span>
          </div>
          <div className="text-[11px] text-amber-300/80 font-medium hidden sm:block">
            {activePreset.desc}
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {HERO_VIDEO_PRESETS.map((preset) => {
            const isActive = !heroVideo.customVideoUrl && activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/30 scale-[1.02]"
                    : "bg-[#24170E] text-amber-100 hover:bg-[#302014] hover:text-white border border-amber-900/40"
                }`}
              >
                <span className="text-sm">{preset.icon}</span>
                <span>{preset.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-950 animate-ping"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom assurance footer */}
      <div className="px-4 py-2 bg-[#120D0A] border-t border-amber-900/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-200/70 gap-1 text-center sm:text-left">
        <span className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
          <span>Created 100% on a smartphone with free AI tools and CapCut.</span>
        </span>
        <span className="text-yellow-400 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> No Laptop Required
        </span>
      </div>
    </div>
  );
};
