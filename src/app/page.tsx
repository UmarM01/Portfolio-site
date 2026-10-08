'use client';

import React, { useState, useEffect } from 'react';
import { HeroVisual } from "@/components/sections/HeroVisual";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ExperienceHighlightSection } from "@/components/sections/ExperienceHighlightSection";
import { TechRadarSection } from "@/components/sections/TechRadarSection";
import { ConnectTerminalSection } from "@/components/sections/ConnectTerminalSection";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem('hasSeenHelloIntro');
      if (!hasSeen) {
        setShowLoading(true);
      }
    } catch {
      setShowLoading(false);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem('hasSeenHelloIntro', 'true');
    } catch {
      // ignore
    }
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={handleComplete} />
      )}
      <main className="min-h-screen bg-black overflow-x-hidden">
        {/* 1. Hero Section */}
        <HeroVisual />

        {/* 2. Flagship Production Projects (Zoopify & Selligo) */}
        <FeaturedProjectsSection />

        {/* 3. Experience & Education Highlight */}
        <ExperienceHighlightSection />

        {/* 4. Technical Stack & Architecture Radar */}
        <TechRadarSection />

        {/* 5. Direct Connect & Collaboration Terminal */}
        <ConnectTerminalSection />
      </main>
    </>
  );
}
