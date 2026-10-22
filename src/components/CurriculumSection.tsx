import React from "react";
import { CURRICULUM_DATA, CurriculumItem } from "../config/courseConfig";
import { 
  FileText, 
  Sparkles, 
  Film, 
  Smartphone, 
  Zap, 
  Scissors, 
  Music, 
  Apple, 
  Compass, 
  Briefcase,
  Check,
  Video
} from "lucide-react";

// Icon mapping helper
const getCurriculumIcon = (iconName: string) => {
  switch (iconName) {
    case "FileText":
      return <FileText className="w-5 h-5 text-yellow-400" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-amber-400" />;
    case "Film":
      return <Film className="w-5 h-5 text-yellow-300" />;
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-amber-300" />;
    case "Zap":
      return <Zap className="w-5 h-5 text-yellow-400" />;
    case "Scissors":
      return <Scissors className="w-5 h-5 text-amber-400" />;
    case "Music":
      return <Music className="w-5 h-5 text-yellow-300" />;
    case "Apple":
      return <Apple className="w-5 h-5 text-amber-400" />;
    case "Compass":
      return <Compass className="w-5 h-5 text-yellow-400" />;
    case "Briefcase":
      return <Briefcase className="w-5 h-5 text-amber-300" />;
    default:
      return <Video className="w-5 h-5 text-yellow-400" />;
  }
};

export const CurriculumSection: React.FC = () => {
  const coreModules = CURRICULUM_DATA.filter((item) => item.category === "core");
  const exploreModules = CURRICULUM_DATA.filter((item) => item.category === "explore");

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-[#120D0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Comprehensive Course Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What You Will Learn In The Masterclass
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg">
            Ten practical, beginner-friendly modules taking you from scratch to producing polished, scroll-stopping videos with free smartphone tools.
          </p>
        </div>

        {/* TRACK 1: 🎬 AI VIDEO CREATION (Modules 1 to 6) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-amber-900/30">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-yellow-300 flex items-center justify-center font-bold text-lg">
              🎬
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                AI VIDEO CREATION
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/60">
                Core foundation: Scripting, high-end AI product imagery, video animation, and mobile CapCut editing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreModules.map((module) => (
              <div
                key={module.id}
                className="p-6 rounded-2xl bg-[#1C140E] border border-amber-900/30 hover:border-amber-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCurriculumIcon(module.iconName)}
                    </div>
                    <span className="text-xs font-mono text-yellow-300 bg-amber-950/80 border border-amber-600/30 px-2.5 py-1 rounded-md font-bold">
                      Module {String(module.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-300 transition-colors">
                    {module.title}
                  </h4>
                  <p className="text-amber-100/75 text-sm leading-relaxed mb-4">
                    {module.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/30">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Key Practical Skills:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {module.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-amber-200/90 bg-[#281A10] border border-amber-900/30 px-2 py-0.5 rounded text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 2: 🎨 EXPLORE MORE WITH AI (Modules 7 to 10) */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-amber-900/30">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-yellow-300 flex items-center justify-center font-bold text-lg">
              🎨
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                EXPLORE MORE WITH AI
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/60">
                Creative exploration: Original AI music, trending viral concepts, realistic wildlife, and freelance opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreModules.map((module) => (
              <div
                key={module.id}
                className="p-6 rounded-2xl bg-[#1C140E] border border-amber-900/30 hover:border-amber-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCurriculumIcon(module.iconName)}
                    </div>
                    <span className="text-xs font-mono text-yellow-300 bg-amber-950/80 border border-amber-600/30 px-2.5 py-1 rounded-md font-bold">
                      Module {String(module.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-yellow-300 transition-colors">
                    {module.title}
                  </h4>
                  <p className="text-amber-100/75 text-sm leading-relaxed mb-4">
                    {module.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/30">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                    Key Practical Skills:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {module.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-amber-200/90 bg-[#281A10] border border-amber-900/30 px-2 py-0.5 rounded text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
