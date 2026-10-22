import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { COURSE_CONFIG, INITIAL_TESTIMONIAL_PLACEHOLDERS, TestimonialMediaPlaceholder } from "../config/courseConfig";

interface HeroVideoState {
  customVideoUrl: string | null;
  customPosterUrl: string | null;
  activeDemoPreset: "perfume" | "fruit" | "lion" | "sneaker";
  fileName?: string;
}

interface MasterclassContextType {
  whatsappUrl: string;
  setWhatsappUrl: (url: string) => void;
  resetWhatsappUrl: () => void;
  getClickableWhatsAppUrl: () => string;
  heroVideo: HeroVideoState;
  setHeroDemoPreset: (preset: "perfume" | "fruit" | "lion" | "sneaker") => void;
  uploadHeroVideo: (file: File) => void;
  resetHeroVideo: () => void;
  testimonials: TestimonialMediaPlaceholder[];
  uploadTestimonialMedia: (id: string, file: File) => void;
  addTestimonialItem: (item: Omit<TestimonialMediaPlaceholder, "id">) => void;
  resetTestimonials: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  trackTikTokEvent: (eventName?: string) => void;
}

const MasterclassContext = createContext<MasterclassContextType | undefined>(undefined);

export const MasterclassProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [whatsappUrl, setWhatsappUrlState] = useState<string>(() => {
    const saved = localStorage.getItem("masterclass_whatsapp_url");
    if (!saved || saved === "YOUR_WHATSAPP_CHANNEL_LINK") {
      return COURSE_CONFIG.whatsappLink;
    }
    return saved;
  });

  const [heroVideo, setHeroVideo] = useState<HeroVideoState>(() => {
    return {
      customVideoUrl: null,
      customPosterUrl: null,
      activeDemoPreset: "perfume"
    };
  });

  const [testimonials, setTestimonials] = useState<TestimonialMediaPlaceholder[]>(() => {
    return INITIAL_TESTIMONIAL_PLACEHOLDERS;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const setWhatsappUrl = (url: string) => {
    setWhatsappUrlState(url);
    localStorage.setItem("masterclass_whatsapp_url", url);
    showToast("WhatsApp channel link updated successfully!");
  };

  const resetWhatsappUrl = () => {
    setWhatsappUrlState(COURSE_CONFIG.whatsappLink);
    localStorage.removeItem("masterclass_whatsapp_url");
    showToast("Reset to official WhatsApp channel link.");
  };

  const getClickableWhatsAppUrl = (): string => {
    if (!whatsappUrl || whatsappUrl === "YOUR_WHATSAPP_CHANNEL_LINK") {
      // Default friendly WhatsApp prefilled link with clear masterclass greeting
      return "https://wa.me/?text=Hello!%20I%20want%20to%20join%20the%20AI%20Video%20Creation%20Masterclass.";
    }
    // If user provided a link like "wa.me/xxx" without http
    if (!whatsappUrl.startsWith("http://") && !whatsappUrl.startsWith("https://")) {
      return `https://${whatsappUrl}`;
    }
    return whatsappUrl;
  };

  const setHeroDemoPreset = (preset: "perfume" | "fruit" | "lion" | "sneaker") => {
    setHeroVideo(prev => ({
      ...prev,
      activeDemoPreset: preset,
      customVideoUrl: null
    }));
  };

  const uploadHeroVideo = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setHeroVideo(prev => ({
      ...prev,
      customVideoUrl: objectUrl,
      fileName: file.name
    }));
    showToast(`Hero video updated with: ${file.name}`);
  };

  const resetHeroVideo = () => {
    setHeroVideo({
      customVideoUrl: null,
      customPosterUrl: null,
      activeDemoPreset: "perfume"
    });
    showToast("Reset hero video to interactive AI demonstration.");
  };

  const uploadTestimonialMedia = (id: string, file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setTestimonials(prev =>
      prev.map(item => {
        if (item.id === id) {
          const isVid = file.type.startsWith("video/");
          return {
            ...item,
            previewUrl: objectUrl,
            type: isVid ? "video" : item.type,
            label: item.label.replace("[Placeholder", "[Loaded")
          };
        }
        return item;
      })
    );
    showToast(`Uploaded ${file.name} to testimonial placeholder!`);
  };

  const addTestimonialItem = (newItem: Omit<TestimonialMediaPlaceholder, "id">) => {
    const id = `tp-${Date.now()}`;
    setTestimonials(prev => [{ ...newItem, id }, ...prev]);
    showToast("New student testimonial entry created!");
  };

  const resetTestimonials = () => {
    setTestimonials(INITIAL_TESTIMONIAL_PLACEHOLDERS);
    showToast("Reset testimonial gallery to clean placeholders.");
  };

  const trackTikTokEvent = (eventName = "Contact") => {
    try {
      if (typeof window !== "undefined" && (window as unknown as { ttq?: { track: (e: string, p?: Record<string, unknown>) => void } }).ttq) {
        (window as unknown as { ttq: { track: (e: string, p?: Record<string, unknown>) => void } }).ttq.track(eventName, {
          content_name: "Join AI Video Creation Masterclass",
          content_category: "WhatsApp Channel Access"
        });
      }
    } catch {
      // Safe no-op if adblocker or pixel not loaded
    }
  };

  return (
    <MasterclassContext.Provider
      value={{
        whatsappUrl,
        setWhatsappUrl,
        resetWhatsappUrl,
        getClickableWhatsAppUrl,
        heroVideo,
        setHeroDemoPreset,
        uploadHeroVideo,
        resetHeroVideo,
        testimonials,
        uploadTestimonialMedia,
        addTestimonialItem,
        resetTestimonials,
        isSettingsOpen,
        setIsSettingsOpen,
        toastMessage,
        showToast,
        trackTikTokEvent
      }}
    >
      {children}
    </MasterclassContext.Provider>
  );
};

export const useMasterclass = (): MasterclassContextType => {
  const context = useContext(MasterclassContext);
  if (!context) {
    throw new Error("useMasterclass must be used within a MasterclassProvider");
  }
  return context;
};
