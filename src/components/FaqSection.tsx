import React, { useState } from "react";
import { FAQS_DATA } from "../config/courseConfig";
import { useMasterclass } from "../context/MasterclassContext";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const { getClickableWhatsAppUrl } = useMasterclass();
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // Open first two by default

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#120D0A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-amber-100/80 text-base sm:text-lg">
            Clear, straightforward answers about course access, tools, and the masterclass.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#1C140E] border border-amber-900/30 transition-colors overflow-hidden shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-500/20 text-yellow-300" : "bg-[#251910] text-amber-200/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-amber-100/80 leading-relaxed border-t border-amber-900/30 pt-3">
                    <p>{faq.answer}</p>
                    {faq.id === 9 && (
                      <div className="mt-3">
                        <a
                          href={getClickableWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chat with me directly on WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-[#20140D] border border-amber-600/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs text-amber-200/70 mt-1">Feel free to message me directly on WhatsApp anytime.</p>
          </div>
          <a
            href={getClickableWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-black text-stone-950 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 whitespace-nowrap uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
