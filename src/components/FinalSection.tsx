import React, { useState } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { ExternalLink } from "lucide-react";

export const FinalSection: React.FC = () => {
  const { getClickableWhatsAppUrl } = useMasterclass();
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
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
                    <strong>Course Inclusions:</strong> The AI Video Creation Masterclass is a pre-recorded, self-paced video training course with lifetime access and future updates included.
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
