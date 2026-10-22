import React, { useState, useEffect } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { MessageCircle, ArrowRight } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  const { getClickableWhatsAppUrl } = useMasterclass();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky bar once user scrolls past hero section (~350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#160E09]/95 backdrop-blur-md border-t border-amber-600/30 px-4 py-2.5 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-amber-300 uppercase tracking-wider font-bold">
            One-time Access
          </span>
          <span className="text-xl font-black text-yellow-400 tracking-tight leading-none">
            ₦2,000
          </span>
        </div>

        <a
          href={getClickableWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-black text-stone-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl shadow-lg shadow-amber-500/30 active:scale-95 transition-transform uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
          <span>JOIN ON WHATSAPP</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
