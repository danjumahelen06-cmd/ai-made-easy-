import React from "react";
import { WHY_JOIN_DATA } from "../config/courseConfig";
import { 
  Smile, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Infinity as InfinityIcon, 
  RefreshCw, 
  Users, 
  Gift 
} from "lucide-react";

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case "Smile":
      return <Smile className="w-5 h-5 text-yellow-400" />;
    case "Smartphone":
      return <Smartphone className="w-5 h-5 text-amber-400" />;
    case "CheckCircle2":
      return <CheckCircle2 className="w-5 h-5 text-yellow-300" />;
    case "Clock":
      return <Clock className="w-5 h-5 text-amber-300" />;
    case "Zap":
      return <Zap className="w-5 h-5 text-yellow-400" />;
    case "Infinity":
      return <InfinityIcon className="w-5 h-5 text-amber-400" />;
    case "RefreshCw":
      return <RefreshCw className="w-5 h-5 text-yellow-300" />;
    case "Users":
      return <Users className="w-5 h-5 text-amber-300" />;
    case "Gift":
      return <Gift className="w-5 h-5 text-yellow-400" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-yellow-400" />;
  }
};

export const WhyJoinSection: React.FC = () => {
  return (
    <section id="why-join" className="py-20 md:py-28 bg-[#150F0B] border-t border-amber-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Built Specifically For Beginners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Join The AI Video Creation Masterclass?
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg">
            Everything in this course has been structured to make learning intuitive, practical, and frustration-free for anyone with a phone.
          </p>
        </div>

        {/* 9 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_JOIN_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#1C140E] border border-amber-900/30 hover:border-amber-500/50 transition-all hover:-translate-y-1 group flex gap-4 items-start shadow-lg"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-950/80 border border-amber-600/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {getWhyIcon(item.iconName)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-amber-100/75 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
