/**
 * AI Video Creation Masterclass - High-Converting Landing Page
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MasterclassProvider, useMasterclass } from "./context/MasterclassContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemStorySection } from "./components/ProblemStorySection";
import { CurriculumSection } from "./components/CurriculumSection";
import { StudentShowcaseSection } from "./components/StudentShowcaseSection";
import { BonusesSection } from "./components/BonusesSection";
import { WhoIsThisForSection } from "./components/WhoIsThisForSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhyJoinSection } from "./components/WhyJoinSection";
import { OfferSection } from "./components/OfferSection";
import { FaqSection } from "./components/FaqSection";
import { FinalSection } from "./components/FinalSection";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { CheckCircle } from "lucide-react";

const ToastNotification: React.FC = () => {
  const { toastMessage } = useMasterclass();
  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-5 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#1C140E] text-[#FDF8F3] text-xs font-bold rounded-xl border border-amber-500/50 shadow-2xl animate-fade-in">
      <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FDF8F3] flex flex-col selection:bg-amber-400 selection:text-stone-950 pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemStorySection />
        <CurriculumSection />
        <StudentShowcaseSection />
        <BonusesSection />
        <WhoIsThisForSection />
        <HowItWorksSection />
        <WhyJoinSection />
        <OfferSection />
        <FaqSection />
        <FinalSection />
      </main>
      <MobileStickyBar />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <MasterclassProvider>
      <MainContent />
    </MasterclassProvider>
  );
}
