import React from "react";
import { 
  AlertCircle, 
  Smartphone, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2,
  Video
} from "lucide-react";

export const ProblemStorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#140E0A] border-y border-amber-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header / Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            The Content Dilemma
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ever Wondered How Creators Make Those Jaw-Dropping AI Videos?
          </h2>
        </div>

        {/* Story Narrative & Empathetic Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Box 1: The Frustration & Common Roadblocks */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1C140E] border border-amber-900/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-600/30 text-amber-400 flex items-center justify-center mb-5">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                "It Looks Amazing, But I Have No Clue Where To Start..."
              </h3>
              <p className="text-amber-100/80 leading-relaxed mb-4 text-sm sm:text-base">
                Every day on TikTok, Instagram, and WhatsApp, you see mind-blowing videos: luxury products with cinematic lighting, floating futuristic fruits, talking characters, and adverts that make brands look like multimillion-dollar studios.
              </p>
              <p className="text-amber-200/60 leading-relaxed text-sm sm:text-base">
                Naturally, you think: <em>"I don't have a high-end laptop. I don't know how to code prompts or edit complex timelines. I don't even have a professional camera."</em>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-900/30 space-y-2 text-xs sm:text-sm text-amber-200/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Feeling overwhelmed by dozens of random AI tools and tech jargon.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Worrying that you need thousands of Naira in expensive subscriptions.</span>
              </div>
            </div>
          </div>

          {/* Box 2: The Smartphone Breakthrough */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#261A11] via-[#1E140D] to-[#170E09] border-2 border-amber-500/40 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 text-yellow-300 flex items-center justify-center mb-5">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                The Truth: Your Smartphone Is All You Really Need
              </h3>
              <p className="text-amber-100/90 leading-relaxed mb-4 text-sm sm:text-base">
                You do not need a gaming computer, an expensive camera, or a degree in graphic design. 
              </p>
              <p className="text-amber-200/75 leading-relaxed text-sm sm:text-base">
                The most practical, modern AI video tools are completely accessible from your mobile phone. When you know which free tools to use and how to feed them the right prompt structures, creating stunning videos becomes a repeatable, step-by-step process.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-amber-500/20 relative z-10 space-y-2 text-xs sm:text-sm text-amber-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Simple copy-and-paste prompt frameworks designed for mobile.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Zero complex technical jargon—pure, beginner-friendly practice.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bridging Introduction to Masterclass */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1C140E] border border-amber-500/30 text-center max-w-3xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Welcome to Your Practical Learning Space</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Introducing the AI Video Creation Masterclass
          </h3>
          <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed mb-6">
            We built this pre-recorded, self-paced masterclass as a welcoming, hands-on environment where anyone—business owners, creators, freelancers, and complete beginners—can master real AI video skills with zero intimidation, right from their phone.
          </p>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <span>Explore what you will learn in the curriculum</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
