import React, { useState, useRef } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { TestimonialMediaPlaceholder } from "../config/courseConfig";
import { 
  Play, 
  Upload, 
  Image as ImageIcon, 
  Video, 
  MessageSquare, 
  Plus, 
  RotateCcw,
  Maximize2,
  X,
  FileCheck,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export const StudentShowcaseSection: React.FC = () => {
  const { 
    testimonials, 
    uploadTestimonialMedia, 
    addTestimonialItem, 
    resetTestimonials 
  } = useMasterclass();

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeModalMedia, setActiveModalMedia] = useState<TestimonialMediaPlaceholder | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form state for adding new testimonial
  const [newLabel, setNewLabel] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [newType, setNewType] = useState<"video" | "screenshot" | "photo">("video");
  const [newFile, setNewFile] = useState<File | null>(null);

  // Filtered list
  const filteredTestimonials = testimonials.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "videos") return item.type === "video";
    if (activeCategory === "screenshots") return item.type === "screenshot";
    if (activeCategory === "photos") return item.type === "photo";
    return true;
  });

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadTestimonialMedia(id, e.target.files[0]);
    }
  };

  const handleAddNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel) return;
    let previewUrl: string | undefined = undefined;
    if (newFile) {
      previewUrl = URL.createObjectURL(newFile);
    }
    addTestimonialItem({
      type: newType,
      category: newType === "video" ? "student_project" : newType === "screenshot" ? "chat_proof" : "student_photo",
      label: newLabel,
      caption: newCaption || "Genuine student content added by course instructor.",
      authorLabel: "[Instructor Added Proof]",
      previewUrl,
      accentColor: "from-purple-600/30 to-indigo-600/30"
    });
    setNewLabel("");
    setNewCaption("");
    setNewFile(null);
    setIsAddModalOpen(false);
  };

  return (
    <section id="student-showcase" className="py-20 md:py-28 bg-[#120D0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Authentic Student Showcase & Proof
          </div>
          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            SEE WHAT STUDENTS ARE CREATING!
          </h2>
          {/* Exact Required Supporting Text */}
          <p className="text-amber-100/80 text-base sm:text-lg mb-6">
            Discover the creative possibilities of AI video creation. Explore student feedback, video projects, and examples of what learners have created through the class.
          </p>

          {/* Instructor Notice Banner per instructions */}
          <div className="p-3.5 rounded-xl bg-[#20140D] border border-amber-600/30 max-w-2xl mx-auto text-xs text-amber-200 flex items-center justify-between gap-3 text-left shadow-lg">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>
                <strong>Instructor Tool:</strong> Placeholders below are ready for your authentic student videos, photos, and WhatsApp screenshots. Click "Upload" on any card to display your media live.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 rounded-lg whitespace-nowrap cursor-pointer transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Proof</span>
            </button>
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs per constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12]"
            }`}
          >
            All Proof ({testimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("videos")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "videos"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12]"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Student Videos</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("screenshots")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "screenshots"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12]"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Screenshot Testimonials</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("photos")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "photos"
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/25"
                : "bg-[#1F150D] text-amber-200/80 hover:bg-[#2B1D12]"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Student Photos</span>
          </button>
        </div>

        {/* Responsive Testimonials & Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#1C140E] border border-amber-900/30 hover:border-amber-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl group"
            >
              {/* Media Slot Area */}
              <div className="relative aspect-video w-full bg-[#110B07] flex items-center justify-center overflow-hidden border-b border-amber-900/30">
                {item.previewUrl ? (
                  item.type === "video" ? (
                    <video
                      src={item.previewUrl}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.previewUrl}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  /* Clearly Labeled Placeholder Container */
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#160E09] via-[#22160E] to-[#160E09] relative">
                    <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 text-yellow-400 flex items-center justify-center mb-2">
                      {item.type === "video" ? (
                        <Video className="w-6 h-6" />
                      ) : item.type === "screenshot" ? (
                        <MessageSquare className="w-6 h-6" />
                      ) : (
                        <ImageIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-yellow-300 font-bold">
                      {item.authorLabel}
                    </span>
                    <span className="text-[11px] text-amber-200/60 mt-1 max-w-[200px]">
                      Upload genuine {item.type} file to display here
                    </span>
                  </div>
                )}

                {/* Upload overlay button */}
                <label className="absolute top-3 right-3 px-2 py-1 bg-black/85 hover:bg-black text-amber-200 hover:text-yellow-300 rounded-lg text-[10px] font-bold border border-amber-500/30 backdrop-blur-xs flex items-center gap-1 cursor-pointer transition-all">
                  <Upload className="w-3 h-3 text-yellow-400" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    className="hidden"
                    accept={item.type === "video" ? "video/*" : "image/*"}
                    onChange={(e) => handleFileUpload(item.id, e)}
                  />
                </label>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-amber-300/80 mb-1.5">
                    <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                      {item.category.replace("_", " ")}
                    </span>
                    <span className="capitalize">{item.type}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/75 leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-900/30 flex items-center justify-between text-xs text-amber-200/60">
                  <span className="italic">{item.authorLabel}</span>
                  {item.previewUrl && (
                    <span className="text-yellow-400 flex items-center gap-1 text-[11px] font-semibold">
                      <CheckCircle className="w-3 h-3" /> Live Media Active
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reset placeholders */}
        <div className="flex items-center justify-center gap-4 text-xs text-amber-200/60">
          <button
            type="button"
            onClick={resetTestimonials}
            className="hover:text-yellow-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Proof Gallery to Clean Placeholders</span>
          </button>
        </div>

      </div>

      {/* Add New Testimonial Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#1C140E] border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 text-amber-300 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white mb-1">Add Student Proof</h3>
            <p className="text-xs text-amber-200/70 mb-4">
              Add genuine student screenshots, video reviews, or project outputs.
            </p>

            <form onSubmit={handleAddNewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-amber-100 mb-1">
                  Type of Proof
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["video", "screenshot", "photo"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setNewType(t)}
                      className={`py-2 text-xs font-bold rounded-lg capitalize border cursor-pointer ${
                        newType === t
                          ? "bg-gradient-to-r from-yellow-400 to-amber-500 border-yellow-400 text-stone-950"
                          : "bg-[#251910] border-amber-900/40 text-amber-200 hover:bg-[#322115]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-100 mb-1">
                  Title / Label
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Student Ad: Skin Care Commercial"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  className="w-full px-3 py-2 bg-[#120D0A] border border-amber-800/40 rounded-lg text-sm text-white placeholder-amber-500/50 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-100 mb-1">
                  Caption / Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe the student project or feedback..."
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  className="w-full px-3 py-2 bg-[#120D0A] border border-amber-800/40 rounded-lg text-sm text-white placeholder-amber-500/50 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-100 mb-1">
                  Upload Media File
                </label>
                <input
                  type="file"
                  accept={newType === "video" ? "video/*" : "image/*"}
                  onChange={(e) => setNewFile(e.target.files?.[0] || null)}
                  className="w-full text-xs text-amber-200 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-yellow-400 file:text-stone-950 hover:file:bg-yellow-300 cursor-pointer"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-amber-200 hover:text-white rounded-lg bg-white/5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-stone-950 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg shadow-md uppercase tracking-wider"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
