import React from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { MessageCircle, PlayCircle, Sparkles, ArrowRight, Smartphone, CheckCircle2 } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const { getClickableWhatsAppUrl, trackTikTokEvent } = useMasterclass();

  const steps = [
    {
      step: "01",
      title: "Join on WhatsApp",
      description: "Click any button on this page to open our official WhatsApp channel and connect directly with the instructor.",
      details: "Quick, hassle-free onboarding without complicated checkout forms.",
      icon: MessageCircle,
      accent: "from-yellow-400 to-amber-500"
    },
    {
      step: "02",
      title: "Receive Instant Course Access",
      description: "Get direct entry to the pre-recorded video tutorials, downloadable prompt pack, and private student community.",
      details: "Stream all 10 modules on your phone anytime, day or night.",
      icon: PlayCircle,
      accent: "from-amber-400 to-yellow-500"
    },
    {
      step: "03",
      title: "Create & Share Your First Video",
      description: "Follow the smartphone screen recordings step by step. Create your video advert or AI concept and get supportive feedback.",
      details: "Learn at your own pace with lifetime access and zero deadlines.",
      icon: Sparkles,
      accent: "from-yellow-300 to-amber-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#150F0B] border-t border-amber-900/30 relative overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            How The Masterclass Works
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg leading-relaxed">
            From clicking the WhatsApp link to creating your very first smartphone video advert, the entire journey is designed to be effortless.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#1C140E] border border-amber-900/40 p-7 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-xl group"
              >
                {/* Step Number Watermark / Kicker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black font-mono text-amber-500/40 tracking-wider">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-amber-100/75 text-sm sm:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-900/30 flex items-center gap-2 text-xs text-amber-200/70">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{item.details}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#22160E] to-[#170E08] border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              Ready to begin your first video lesson?
            </h4>
            <p className="text-xs sm:text-sm text-amber-200/70">
              Join hundreds of other learners already mastering AI videos with their phones.
            </p>
          </div>

          <a
            href={getClickableWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTikTokEvent("Contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-black text-stone-950 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl hover:from-yellow-300 hover:to-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/30 uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-stone-950" />
            <span>Join Now on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
