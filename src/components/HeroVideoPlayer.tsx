import React, { useState, useRef, useEffect } from "react";
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
  Check
} from "lucide-react";

export const HeroVideoPlayer: React.FC = () => {
  const { 
    heroVideo, 
    setHeroDemoPreset, 
    uploadHeroVideo, 
    resetHeroVideo 
  } = useMasterclass();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  // Simulation timer for the procedural AI demo showcase
  useEffect(() => {
    if (heroVideo.customVideoUrl) return; // If real video is active, native video handles time
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1.2));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, heroVideo.customVideoUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadHeroVideo(file);
      setIsPlaying(true);
    }
  };

  const demoPresets = [
    { id: "perfume" as const, label: "Product Advert", icon: "💎", desc: "Luxury perfume with AI lighting & water ripples" },
    { id: "fruit" as const, label: "Cosmic Fruit", icon: "🍊", desc: "Glowing citrus with juice sparks & cosmic clouds" },
    { id: "lion" as const, label: "AI Animal", icon: "🦁", desc: "Majestic golden lion with dusk rim lighting" },
    { id: "sneaker" as const, label: "Sneaker Reel", icon: "👟", desc: "Dynamic sneaker commercial with kinetic speed lines" },
  ];

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
          <span className="text-xs font-mono text-amber-200/70 pl-2">
            {heroVideo.customVideoUrl 
              ? `custom_video_preview.mp4` 
              : `ai_render_${heroVideo.activeDemoPreset}_smartphone.mp4`}
          </span>
        </div>

        {/* Upload replacement trigger */}
        <div className="flex items-center gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="video/*,image/*" 
            className="hidden" 
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-yellow-300 bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 rounded-lg transition-colors cursor-pointer"
            title="Upload your own MP4, WebM, or image to replace this placeholder"
          >
            <Upload className="w-3 h-3 text-yellow-400" />
            <span className="hidden sm:inline">Replace With My Video</span>
            <span className="sm:hidden">Upload</span>
          </button>

          {heroVideo.customVideoUrl && (
            <button
              type="button"
              onClick={resetHeroVideo}
              className="p-1 text-amber-300 hover:text-white rounded hover:bg-white/5"
              title="Reset to interactive demo"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Video Screen Area (16:9) */}
      <div className="relative aspect-video w-full bg-[#0E0A07] flex items-center justify-center overflow-hidden">
        {heroVideo.customVideoUrl ? (
          /* User's Uploaded Video */
          <video
            ref={videoElementRef}
            src={heroVideo.customVideoUrl}
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            playsInline
          />
        ) : (
          /* Rich Procedural AI Video Preview Visual */
          <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden bg-[#100B08]">
            {/* Ambient Animated Backdrop */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ${
                heroVideo.activeDemoPreset === "perfume"
                  ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700/35 via-[#23180F] to-[#120D0A]"
                  : heroVideo.activeDemoPreset === "fruit"
                  ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/35 via-[#2A1B0E] to-[#120D0A]"
                  : heroVideo.activeDemoPreset === "lion"
                  ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/35 via-[#21170E] to-[#120D0A]"
                  : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-700/35 via-[#251910] to-[#120D0A]"
              }`}
            />

            {/* Simulated 3D / AI Artwork Canvas Elements */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 max-w-lg">
              {/* Smartphone Frame Silhouette Mockup */}
              <div className="relative w-44 sm:w-56 h-64 sm:h-76 rounded-3xl border-2 border-amber-600/40 bg-[#160E09] shadow-2xl p-2.5 overflow-hidden flex flex-col justify-between">
                {/* Phone Notch & camera */}
                <div className="flex justify-between items-center px-2 py-0.5 text-[10px] text-amber-200/60 font-mono">
                  <span>9:41</span>
                  <div className="w-10 h-3 bg-black rounded-full mx-auto"></div>
                  <span>5G 100%</span>
                </div>

                {/* Inner Screen Content depending on preset */}
                <div className="relative flex-1 rounded-2xl overflow-hidden my-1 bg-gradient-to-b from-[#20150D] to-[#0D0906] flex items-center justify-center border border-amber-900/30">
                  {heroVideo.activeDemoPreset === "perfume" && (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2">
                        <div className="w-14 h-24 rounded-lg bg-gradient-to-tr from-yellow-300 via-amber-400 to-amber-600 opacity-90 shadow-lg shadow-amber-500/50 flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-stone-900/80 rounded"></div>
                        </div>
                        <div className="absolute -bottom-1 -left-2 -right-2 h-4 bg-amber-500/40 blur-sm rounded-full"></div>
                      </div>
                      <div className="text-[11px] font-bold text-white tracking-wider uppercase">L'ÉLIXIR D'OR</div>
                      <div className="text-[9px] text-amber-300">Generated with AI Smartphone Prompt</div>
                    </div>
                  )}

                  {heroVideo.activeDemoPreset === "fruit" && (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2 animate-bounce duration-1000">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-500 to-orange-500 shadow-xl shadow-amber-500/50 flex items-center justify-center text-2xl">
                          🍊
                        </div>
                        <div className="absolute inset-0 rounded-full border border-yellow-300/40 animate-ping"></div>
                      </div>
                      <div className="text-[11px] font-bold text-yellow-200 tracking-wider">NEON GOLDEN CITRUS</div>
                      <div className="text-[9px] text-amber-300">Trending TikTok Fruit Concept</div>
                    </div>
                  )}

                  {heroVideo.activeDemoPreset === "lion" && (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-600 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/40">
                          🦁
                        </div>
                      </div>
                      <div className="text-[11px] font-bold text-yellow-100 tracking-wider">MAJESTIC GOLDEN LION</div>
                      <div className="text-[9px] text-amber-300">4K Cinematic AI Animal Render</div>
                    </div>
                  )}

                  {heroVideo.activeDemoPreset === "sneaker" && (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2 transform -rotate-12">
                        <div className="w-20 h-12 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/40 text-stone-900">
                          👟
                        </div>
                      </div>
                      <div className="text-[11px] font-bold text-yellow-200 tracking-wider">GOLD VELOCITY REEL</div>
                      <div className="text-[9px] text-amber-300">Commercial Advert Motion</div>
                    </div>
                  )}

                  {/* CapCut watermark mockup in bottom corner */}
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-xs rounded text-[8px] font-mono text-amber-200">
                    CapCut Mobile
                  </div>
                </div>

                {/* Smartphone bottom home indicator */}
                <div className="w-16 h-1 bg-amber-400/40 rounded-full mx-auto"></div>
              </div>

              {/* Watermark badge on player */}
              <div className="mt-3 flex items-center gap-2 text-xs text-amber-200/70">
                <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
                <span>100% created on smartphone · Zero editing experience needed</span>
              </div>
            </div>

            {/* Play/Pause overlay toggle on click */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all cursor-pointer"
              aria-label={isPlaying ? "Pause video simulation" : "Play video simulation"}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-xl shadow-amber-500/50 backdrop-blur-sm transform scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-stone-950 translate-x-0.5" />
                </div>
              )}
            </button>
          </div>
        )}

        {/* Video Scrim & Bottom Playback Controls */}
        {!heroVideo.customVideoUrl && (
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col gap-1.5 z-20">
            {/* Scrubber track */}
            <div className="relative w-full h-1.5 bg-amber-950/60 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 transition-all duration-100" 
                style={{ width: `${progress}%` }} 
              />
            </div>

            <div className="flex items-center justify-between text-xs text-amber-100">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-yellow-400 p-1 cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-yellow-400" /> : <Play className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-yellow-400 p-1 cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                </button>
                <span className="font-mono text-[11px] text-amber-200/70">
                  0:0{Math.floor(progress / 33)} / 0:03
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-yellow-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
                <span className="hidden sm:inline">AI Motion Simulation</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Preset Switcher Bar */}
      {!heroVideo.customVideoUrl && (
        <div className="p-3 bg-[#170F0A] border-t border-amber-900/30 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-amber-200/70 font-medium hidden sm:block">
            Sample Masterclass Modules:
          </div>
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {demoPresets.map((preset) => {
              const isActive = heroVideo.activeDemoPreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setHeroDemoPreset(preset.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/30"
                      : "bg-[#24170E] text-amber-100 hover:bg-[#302014] hover:text-white"
                  }`}
                >
                  <span>{preset.icon}</span>
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Custom upload helper badge */}
      <div className="px-4 py-2 bg-[#20140D] border-t border-amber-900/20 flex items-center justify-between text-[11px] text-amber-200/70">
        <span className="flex items-center gap-1.5">
          <Film className="w-3.5 h-3.5 text-yellow-400" />
          <span>Course Instructor: Click <strong>"Replace With My Video"</strong> above to showcase your actual video sample.</span>
        </span>
      </div>
    </div>
  );
};
