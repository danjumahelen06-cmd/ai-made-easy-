import React, { useState } from "react";
import { useMasterclass } from "../context/MasterclassContext";
import { COURSE_CONFIG } from "../config/courseConfig";
import { 
  Settings, 
  MessageCircle, 
  X, 
  Check, 
  ExternalLink, 
  RotateCcw, 
  HelpCircle,
  Link as LinkIcon
} from "lucide-react";

export const WhatsAppConfigModal: React.FC = () => {
  const { 
    whatsappUrl, 
    setWhatsappUrl, 
    resetWhatsappUrl, 
    getClickableWhatsAppUrl, 
    isSettingsOpen, 
    setIsSettingsOpen 
  } = useMasterclass();

  const [inputUrl, setInputUrl] = useState(whatsappUrl);
  const [phoneQuickInput, setPhoneQuickInput] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl) return;
    setWhatsappUrl(inputUrl);
    setIsSettingsOpen(false);
  };

  const handlePhoneApply = () => {
    if (!phoneQuickInput) return;
    const cleaned = phoneQuickInput.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${cleaned}?text=Hello!%20I%20want%20to%20join%20the%20AI%20Video%20Creation%20Masterclass%20for%20%E2%82%A62,000.`;
    setInputUrl(waUrl);
    setWhatsappUrl(waUrl);
    setPhoneQuickInput("");
    setIsSettingsOpen(false);
  };

  return (
    <>
      {/* Floating Settings Tool in bottom left */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          type="button"
          onClick={() => {
            setInputUrl(whatsappUrl);
            setIsSettingsOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1C140E]/95 hover:bg-[#2A1D14] border border-amber-600/40 text-amber-200 text-xs font-bold shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer group"
          title="Configure your WhatsApp link & verify landing page behavior"
        >
          <Settings className="w-3.5 h-3.5 text-yellow-400 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Instructor Settings</span>
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#1C140E] border border-amber-500/40 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-4 right-4 text-amber-300 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-yellow-400 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Instructor WhatsApp Setup
              </h3>
            </div>
            
            <p className="text-xs text-amber-200/75 mb-6 leading-relaxed">
              Configure the WhatsApp link destination for all <strong>"JOIN THE MASTERCLASS NOW"</strong> buttons on this landing page.
            </p>

            {/* Quick Generator by Phone Number */}
            <div className="p-4 rounded-xl bg-[#241910] border border-amber-900/40 mb-6">
              <label className="block text-xs font-bold text-amber-200 mb-1">
                Quick Setup: Enter Your WhatsApp Phone Number
              </label>
              <p className="text-[11px] text-amber-200/60 mb-2">
                Enter your international number (e.g. <code>2348012345678</code> for Nigeria)
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="234..."
                  value={phoneQuickInput}
                  onChange={(e) => setPhoneQuickInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#120D0A] border border-amber-800/40 rounded-lg text-sm text-white placeholder-amber-600/40 focus:outline-none focus:border-amber-400 font-mono text-xs"
                />
                <button
                  type="button"
                  onClick={handlePhoneApply}
                  className="px-3.5 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 rounded-lg text-xs font-bold shrink-0 cursor-pointer"
                >
                  Apply Phone
                </button>
              </div>
            </div>

            {/* Custom URL Input */}
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-1">
                  Or Paste Full WhatsApp Link / Channel URL:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://wa.me/... or https://whatsapp.com/channel/..."
                    className="w-full px-3 py-2.5 bg-[#120D0A] border border-amber-800/40 rounded-lg text-xs font-mono text-amber-100 placeholder-amber-600/40 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div className="mt-1 text-[11px] text-amber-200/60">
                  Default placeholder: <code>{COURSE_CONFIG.whatsappLink}</code> (in <code>src/config/courseConfig.ts</code>)
                </div>
              </div>

              {/* Live Test Preview */}
              <div className="p-3 bg-[#241910] border border-amber-600/30 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-amber-200/60 block text-[11px]">Active Test Link:</span>
                  <span className="text-yellow-300 font-mono truncate max-w-[240px] block font-semibold">
                    {getClickableWhatsAppUrl()}
                  </span>
                </div>
                <a
                  href={getClickableWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-stone-950 font-black text-xs whitespace-nowrap shadow-sm"
                >
                  <span>Test Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={resetWhatsappUrl}
                  className="text-xs text-amber-200/60 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to Default</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSettingsOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-amber-200 hover:text-white rounded-lg bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-black text-stone-950 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-lg shadow-md uppercase tracking-wider"
                  >
                    Save URL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
