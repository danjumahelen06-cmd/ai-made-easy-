import React from "react";
import { TARGET_AUDIENCE_DATA } from "../config/courseConfig";
import { 
  Store, 
  Video, 
  GraduationCap, 
  Laptop, 
  Palette, 
  CheckCircle2,
  Users
} from "lucide-react";

const getAudienceIcon = (iconName: string) => {
  switch (iconName) {
    case "Store":
      return <Store className="w-6 h-6 text-yellow-400" />;
    case "Video":
      return <Video className="w-6 h-6 text-amber-400" />;
    case "GraduationCap":
      return <GraduationCap className="w-6 h-6 text-yellow-300" />;
    case "Laptop":
      return <Laptop className="w-6 h-6 text-amber-300" />;
    case "Palette":
      return <Palette className="w-6 h-6 text-yellow-400" />;
    default:
      return <Users className="w-6 h-6 text-yellow-400" />;
  }
};

export const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#120D0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Is This Course Right For You?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Who Is This Masterclass For?
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg">
            You do <strong>not</strong> need to be a designer, programmer, or video professional before joining. If you have a smartphone, this class is tailored for you.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TARGET_AUDIENCE_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#1C140E] border border-amber-900/30 hover:border-amber-500/50 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getAudienceIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-yellow-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-amber-100/75 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-amber-900/30 flex items-center gap-2 text-xs text-amber-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                <span>Zero previous editing skills required</span>
              </div>
            </div>
          ))}

          {/* Special Card: Complete Beginners Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#261A11] via-[#1F150E] to-[#170E09] border-2 border-amber-500/40 flex flex-col justify-center text-center items-center shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-yellow-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Start From Square One
            </h3>
            <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed">
              Every lesson is recorded on screen from a mobile phone, demonstrating each button tap so you can easily follow along and replicate the steps immediately.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
