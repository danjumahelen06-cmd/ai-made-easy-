import React from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Infinity as InfinityIcon
} from "lucide-react";

export const OfferSection: React.FC = () => {
  const { getClickableWhatsAppUrl, trackTikTokEvent } = useMasterclass();

  const inclusions = [
    "Complete AI video creation lessons.",
    "AI image and product content lessons.",
    "CapCut editing lessons.",
    "AI music, fruit, and animal video lessons.",
    "AI logo and flyer design bonuses.",
    "AI prompt pack.",
    "Lifetime course access and future updates.",
    "Students' community access."
  ];

  return (
    <section id="offer" className="py-20 md:py-28 bg-[#150F0B] relative border-t border-amber-900/30 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Offer Container Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#22160E] to-[#140D08] border-2 border-amber-500/50 p-6 sm:p-10 md:p-12 shadow-2xl glow-gold text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-yellow-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Complete Masterclass Bundle</span>
          </div>

          {/* Exact Required Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            YOUR AI VIDEO CREATION JOURNEY CAN START TODAY!
          </h2>

          {/* Exact Required Supporting Copy */}
          <p className="text-amber-100/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            You do not need to figure everything out alone. Learn step by step, explore creative AI tools, and start practicing your own AI videos at your pace.
          </p>

          {/* Instant Enrollment Badge */}
          <div className="my-8 py-5 px-6 rounded-2xl bg-[#170E09] border-2 border-amber-500/40 max-w-md mx-auto shadow-xl">
            <div className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">
              Masterclass Enrollment
            </div>
            <div className="text-3xl sm:text-4xl font-black text-yellow-400 tracking-tight uppercase">
              Instant Access
            </div>
            <div className="text-xs text-amber-200/70 mt-1.5 flex items-center justify-center gap-2">
              <InfinityIcon className="w-3.5 h-3.5 text-yellow-400" />
              <span>LIFETIME ACCESS · FUTURE UPDATES INCLUDED</span>
            </div>
          </div>

          {/* Inclusions Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left max-w-2xl mx-auto mb-10">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#281A10] border border-amber-900/30 text-sm text-[#FDF8F3]">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Prominent CTA */}
          <div className="space-y-3 max-w-md mx-auto">
            <a
              href={getClickableWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTikTokEvent("Contact")}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-black text-stone-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl hover:from-yellow-300 hover:to-amber-300 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/35 group tracking-wide uppercase cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950/20 group-hover:scale-110 transition-transform" />
              <span>I'M READY TO JOIN NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Ethical Urgency Note */}
            <p className="text-xs text-amber-200/70 leading-relaxed">
              Clicking opens our WhatsApp channel to connect with the instructor and finalize your access instructions immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
