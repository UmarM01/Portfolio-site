import { HeroVisual } from "@/components/sections/HeroVisual";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { TechRadarSection } from "@/components/sections/TechRadarSection";
import { ExperienceHighlightSection } from "@/components/sections/ExperienceHighlightSection";
import { ConnectTerminalSection } from "@/components/sections/ConnectTerminalSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroVisual />

      {/* 2. Flagship Production Projects (Zoopify & Selligo) */}
      <FeaturedProjectsSection />

      {/* 3. Experience (Lowe's India) & Education Highlight */}
      <ExperienceHighlightSection />

      {/* 4. Technical Stack & Architecture Radar */}
      <TechRadarSection />

      {/* 5. Direct Connect & Collaboration Terminal */}
      <ConnectTerminalSection />
    </main>
  );
}
