import React, { useState } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { MessageCircle, ArrowRight, Sparkles, Shield, Lock, ExternalLink } from "lucide-react";

export const FinalSection: React.FC = () => {
  const { getClickableWhatsAppUrl } = useMasterclass();
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <section className="py-20 md:py-28 bg-[#150F0B] relative border-t border-amber-900/30 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Begin Today</span>
          </div>

          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            IT'S TIME TO START CREATING!
          </h2>

          {/* Exact Required Body Copy */}
          <p className="text-amber-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Your first AI video does not have to be perfect. Start learning, practice the steps, experiment with creative ideas, and improve as you go.
          </p>

          <p className="text-[#FDF8F3] font-bold text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Join the AI Video Creation Masterclass for just <span className="text-yellow-400 font-extrabold text-2xl">₦2,000</span> and start exploring what you can create with AI.
          </p>

          {/* CTA Button */}
          <div className="space-y-4 max-w-md mx-auto">
            <a
              href={getClickableWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl hover:from-yellow-300 hover:to-amber-300 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/30 group tracking-wide uppercase"
            >
              <MessageCircle className="w-5 h-5 text-stone-950 fill-stone-950/20 group-hover:scale-110 transition-transform" />
              <span>JOIN THE MASTERCLASS NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-amber-200/70">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-yellow-400" />
                <span>Self-Paced Learning</span>
              </span>
              <span aria-hidden="true" className="text-amber-900">·</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-yellow-400" />
                <span>One-Time Fee ₦2,000</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-[#0E0906] border-t border-amber-900/30 py-10 text-xs text-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-stone-950 font-bold text-xs">
              AI
            </div>
            <span className="font-heading font-bold text-[#FDF8F3]">
              AI Video Creation Masterclass
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="hover:text-yellow-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="hover:text-yellow-300 transition-colors cursor-pointer"
            >
              Terms of Access
            </button>
            <a
              href={getClickableWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors flex items-center gap-1"
            >
              <span>Contact via WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-amber-200/50">
            © {new Date().getFullYear()} AI Video Creation Masterclass. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#1C140E] border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-900/30">
              <h3 className="text-lg font-bold text-white">
                {activeModal === "privacy" ? "Privacy Policy" : "Terms of Access"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-amber-300 hover:text-white p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-amber-100/80 space-y-3 leading-relaxed">
              {activeModal === "privacy" ? (
                <>
                  <p>
                    We value your privacy. When you communicate with us through WhatsApp to enroll in the AI Video Creation Masterclass, we only use your contact information to send course access links, answer your questions, and grant student community membership.
                  </p>
                  <p>
                    We do not sell, rent, or distribute your telephone number or personal messages to any third-party advertisers or marketing agencies.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Course Inclusions:</strong> The AI Video Creation Masterclass is a pre-recorded, self-paced video training course priced at a one-time fee of ₦2,000 Nigerian Naira.
                  </p>
                  <p>
                    <strong>Tools & Platforms:</strong> The course teaches students how to use free and accessible mobile tools. Independent AI third-party platforms reserve the right to alter their individual terms and credit allowances.
                  </p>
                  <p>
                    <strong>No False Guarantees:</strong> While students learn practical, monetization-relevant video skills, we make no promises or guarantees of specific earnings, views, or viral fame.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-amber-900/30 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 rounded-lg text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
