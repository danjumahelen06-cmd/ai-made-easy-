import React, { useState } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const { getClickableWhatsAppUrl, setIsSettingsOpen } = useMasterclass();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Bonuses", href: "#bonuses" },
    { label: "Student Showcase", href: "#student-showcase" },
    { label: "Why Join", href: "#why-join" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#120D0A]/90 border-b border-amber-900/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-amber-500 to-amber-600 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform font-heading font-extrabold text-sm tracking-tighter">
            AI
          </div>
          <span className="font-heading font-bold text-[#FDF8F3] tracking-tight">AI Video Masterclass</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-amber-100/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-yellow-400 transition-colors whitespace-nowrap shrink-0 text-[#E8DCCF] hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getClickableWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold text-stone-950 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-xl hover:from-yellow-300 hover:to-amber-300 active:scale-95 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950/20" />
            <span>Join for ₦2,000</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-amber-200 hover:text-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C140E] border-b border-amber-900/40 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-amber-100 hover:text-yellow-400 hover:bg-white/5 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={getClickableWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-extrabold text-stone-950 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/30 uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-stone-950" />
              <span>Join Masterclass for ₦2,000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
