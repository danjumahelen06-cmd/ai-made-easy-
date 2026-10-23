import React, { useState } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { TestimonialMediaPlaceholder } from "../config/courseConfig";
import { 
  Play, 
  Image as ImageIcon, 
  Video, 
  MessageSquare, 
  Maximize2,
  X,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles
} from "lucide-react";

export const StudentShowcaseSection: React.FC = () => {
  const { 
    testimonials, 
    getClickableWhatsAppUrl, 
    trackTikTokEvent 
  } = useMasterclass();

  const [activeTab, setActiveTab] = useState<"all" | "videos" | "chat" | "projects">("all");
  const [activeModalMedia, setActiveModalMedia] = useState<TestimonialMediaPlaceholder | null>(null);

  // Filtered list
  const filteredTestimonials = testimonials.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "videos") return item.type === "video";
    if (activeTab === "chat") return item.category === "chat_proof";
    if (activeTab === "projects") return item.category === "student_project" && item.type !== "video";
    return true;
  });

  // Lightbox navigation
  const openNextModal = () => {
    if (!activeModalMedia) return;
    const currentIndex = filteredTestimonials.findIndex(item => item.id === activeModalMedia.id);
    const nextIndex = (currentIndex + 1) % filteredTestimonials.length;
    setActiveModalMedia(filteredTestimonials[nextIndex]);
  };

  const openPrevModal = () => {
    if (!activeModalMedia) return;
    const currentIndex = filteredTestimonials.findIndex(item => item.id === activeModalMedia.id);
    const prevIndex = (currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length;
    setActiveModalMedia(filteredTestimonials[prevIndex]);
  };

  const videoCount = testimonials.filter(t => t.type === "video").length;
  const chatCount = testimonials.filter(t => t.category === "chat_proof").length;
  const projectCount = testimonials.filter(t => t.category === "student_project" && t.type !== "video").length;

  return (
    <section id="student-showcase" className="py-20 md:py-28 bg-[#120D0A] relative border-t border-amber-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Real Student Work & Results</span>
          </div>

          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            SEE WHAT STUDENTS ARE CREATING!
          </h2>

          {/* Exact Required Supporting Text */}
          <p className="text-amber-100/80 text-base sm:text-lg mb-6 leading-relaxed">
            Discover the creative possibilities of AI video creation. Explore student feedback, video projects, and examples of what learners have created through the class.
          </p>

        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12] border border-amber-900/30"
            }`}
          >
            All Proof ({testimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12] border border-amber-900/30"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Student Videos ({videoCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("chat")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "chat"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12] border border-amber-900/30"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Student Testimonies ({chatCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12] border border-amber-900/30"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Project Screenshots ({projectCount})</span>
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#1C140E] border border-amber-900/40 hover:border-amber-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl group hover:shadow-2xl hover:shadow-amber-950/50"
            >
              {/* Media Slot Area */}
              <div className="relative aspect-[4/3] w-full bg-[#0E0906] flex items-center justify-center overflow-hidden border-b border-amber-900/30">
                {item.previewUrl ? (
                  item.type === "video" ? (
                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                      <video
                        src={item.previewUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                        playsInline
                        preload="metadata"
                      />
                      {/* Enlarge overlay button */}
                      <button
                        type="button"
                        onClick={() => setActiveModalMedia(item)}
                        className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/80 hover:bg-black text-amber-200 hover:text-yellow-300 rounded-lg text-xs font-bold border border-amber-500/30 backdrop-blur-xs flex items-center gap-1.5 cursor-pointer transition-all shadow-md z-10"
                        title="Watch full screen"
                      >
                        <Maximize2 className="w-3 h-3 text-yellow-400" />
                        <span>Watch Full</span>
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer flex items-center justify-center bg-stone-950 overflow-hidden"
                      onClick={() => setActiveModalMedia(item)}
                    >
                      <img
                        src={item.previewUrl}
                        alt={item.label}
                        className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Click to zoom overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                        <span className="px-3 py-1.5 rounded-lg bg-black/85 border border-amber-400/40 text-xs font-bold text-yellow-300 flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Tap to Read Proof</span>
                        </span>
                      </div>
                    </div>
                  )
                ) : (
                  /* Placeholder */
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#160E09] via-[#22160E] to-[#160E09] relative">
                    <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 text-yellow-400 flex items-center justify-center mb-2">
                      {item.type === "video" ? <Video className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono text-yellow-300 font-bold">
                      {item.authorLabel}
                    </span>
                  </div>
                )}

                {/* Badge Tag */}
                {item.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-950/90 border border-amber-500/40 text-yellow-300 text-[10px] font-extrabold uppercase tracking-wider rounded-md backdrop-blur-xs shadow-md z-10">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-amber-300/80 mb-2">
                    <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                      {item.category.replace("_", " ")}
                    </span>
                    <span className="text-[11px] capitalize text-amber-200/60 font-mono">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/75 leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-900/30 flex items-center justify-between text-xs">
                  <span className="italic text-amber-200/60 text-[11px] truncate max-w-[170px]">
                    {item.authorLabel}
                  </span>
                  {item.type === "video" ? (
                    <button
                      type="button"
                      onClick={() => setActiveModalMedia(item)}
                      className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-yellow-400" /> Watch Video
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveModalMedia(item)}
                      className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" /> View Proof
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar right below testimonials */}
        <div className="rounded-2xl bg-gradient-to-r from-[#20150E] via-[#2A1B10] to-[#20150E] border border-amber-600/40 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-2xl mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            Ready to Start Creating Videos Like These?
          </h3>
          <p className="text-sm text-amber-100/80 mb-5 max-w-xl mx-auto">
            You don't need a high-end laptop or prior skills. Join hundreds of students already learning on smartphone.
          </p>
          <a
            href={getClickableWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTikTokEvent("Contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>JOIN THE MASTERCLASS NOW</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal for Full View / Video Playback */}
      {activeModalMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveModalMedia(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#1C140E] border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#140D09] border-b border-amber-900/40">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  {activeModalMedia.badge || activeModalMedia.type}
                </span>
                <span className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
                  {activeModalMedia.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={openPrevModal}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-200 hover:text-white cursor-pointer"
                  title="Previous Proof"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={openNextModal}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-200 hover:text-white cursor-pointer"
                  title="Next Proof"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalMedia(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-amber-200 hover:text-white cursor-pointer ml-2"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Media Display Area */}
            <div className="relative flex-1 bg-black overflow-auto min-h-[300px] max-h-[65vh] flex items-center justify-center p-2 sm:p-4">
              {activeModalMedia.previewUrl ? (
                activeModalMedia.type === "video" ? (
                  <video
                    src={activeModalMedia.previewUrl}
                    className="max-h-[60vh] max-w-full rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={activeModalMedia.previewUrl}
                    alt={activeModalMedia.label}
                    className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                )
              ) : (
                <div className="p-8 text-center text-amber-300">No media available</div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#170F0A] border-t border-amber-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-left max-w-xl">
                <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                  {activeModalMedia.caption}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-amber-200/60">
                  <CheckCircle className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{activeModalMedia.authorLabel}</span>
                </div>
              </div>

              <a
                href={getClickableWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackTikTokEvent("Contact")}
                className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Join Masterclass</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
