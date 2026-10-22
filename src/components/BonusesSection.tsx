import React from "react";
import { BONUSES_DATA } from "../config/courseConfig";
import { 
  Layers, 
  TrendingUp, 
  Globe, 
  BookmarkCheck, 
  Gift, 
  CheckCircle2 
} from "lucide-react";

const getBonusIcon = (iconName: string) => {
  switch (iconName) {
    case "Layers":
      return <Layers className="w-6 h-6 text-yellow-400" />;
    case "TrendingUp":
      return <TrendingUp className="w-6 h-6 text-amber-400" />;
    case "Globe":
      return <Globe className="w-6 h-6 text-yellow-300" />;
    case "BookmarkCheck":
      return <BookmarkCheck className="w-6 h-6 text-amber-300" />;
    default:
      return <Gift className="w-6 h-6 text-yellow-400" />;
  }
};

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses" className="py-20 md:py-28 bg-[#150F0B] border-t border-amber-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            <Gift className="w-4 h-4 text-yellow-400" />
            <span>Complimentary Course Materials Included</span>
          </div>
          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            YOU'LL GET MORE THAN JUST AI VIDEO LESSONS!
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg">
            When you join the masterclass today, you also unlock these 4 exclusive bonus resources to accelerate your creative workflow.
          </p>
        </div>

        {/* 4 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#22160E] to-[#170E08] border border-amber-600/30 hover:border-yellow-400/60 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Bonus Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider bg-amber-950/80 border border-amber-500/40 px-2.5 py-1 rounded-full">
                    {bonus.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-amber-100/75 text-sm leading-relaxed mb-6">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-900/30 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  What's Included:
                </div>
                {bonus.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-amber-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
