import React from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { HeroVideoPlayer } from "./HeroVideoPlayer";
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Clock
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const { getClickableWhatsAppUrl } = useMasterclass();

  const heroBenefits = [
    "Beginner-friendly lessons.",
    "Learn with your smartphone.",
    "Explore free AI tools.",
    "Learn at your own pace.",
    "Lifetime course access."
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-warm">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-amber-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-yellow-500/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-orange-700/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Price & Primary Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Meta indicator (clean unboxed text per constitution) */}
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase mb-4">
              <span>Mobile-First Masterclass</span>
              <span aria-hidden="true" className="text-amber-800">·</span>
              <span>100% Smartphone Friendly</span>
              <span aria-hidden="true" className="text-amber-800">·</span>
              <span>Instant Access</span>
            </div>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-5 text-balance">
              CREATE AMAZING AI VIDEOS WITH JUST YOUR SMARTPHONE — <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 bg-clip-text text-transparent">EVEN IF YOU'RE A COMPLETE BEGINNER!</span>
            </h1>

            {/* Exact Subheadline */}
            <p className="text-base sm:text-lg text-amber-100/80 leading-relaxed mb-6 max-w-2xl">
              Learn how to create stunning AI images, engaging videos, animated adverts, AI music, and more with simple, beginner-friendly steps. No previous experience is required.
            </p>

            {/* Exact Benefits List */}
            <div className="space-y-2.5 mb-8 w-full max-w-xl">
              {heroBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#FDF8F3]">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price Callout Banner */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#1C140E] to-[#2B1D12] border-2 border-amber-500/40 w-full max-w-xl flex items-center justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold block">
                  Limited One-Time Enrollment
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  JOIN TODAY FOR JUST <span className="text-yellow-400">₦2,000</span>
                </span>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs text-amber-200/60 block">Single payment</span>
                <span className="text-xs font-semibold text-yellow-300">Lifetime access included</span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="w-full max-w-xl space-y-3">
              <a
                href={getClickableWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl hover:from-yellow-300 hover:to-amber-300 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/30 group tracking-wide uppercase"
              >
                <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950/20 group-hover:scale-110 transition-transform" />
                <span>JOIN THE MASTERCLASS NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Exact Supporting Line */}
              <p className="text-xs sm:text-sm text-amber-200/70 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Instant access after payment. Learn anytime, anywhere.</span>
              </p>
            </div>

          </div>

          {/* Right Column: AI Video Demonstration & Interactive Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <HeroVideoPlayer />
            
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-amber-200/60">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>Runs on Android & iPhone</span>
              </span>
              <span aria-hidden="true" className="text-amber-900">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Self-Paced Lessons</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
