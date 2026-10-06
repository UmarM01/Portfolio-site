'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Zap } from 'lucide-react';
import gsap from "gsap";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { Spotlight } from "@/components/ui/spotlight-new";
import { portfolioData } from "@/data/portfolio";

export function HeroVisual() {
  const { personal } = portfolioData;
  const [showProfile, setShowProfile] = useState(false);

  const zapRef = useRef<HTMLDivElement>(null);
  const botRef = useRef<HTMLDivElement>(null);
  const profileTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zap pulse
      if (zapRef.current) {
        gsap.to(zapRef.current, {
          scale: 1.25,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Bot float
      if (botRef.current) {
        gsap.to(botRef.current, {
          rotation: 8,
          y: -8,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleProfileEnter = () => {
    if (profileTimeoutRef.current) {
      clearTimeout(profileTimeoutRef.current);
      profileTimeoutRef.current = null;
    }
    setShowProfile(true);
  };

  const handleProfileLeave = () => {
    profileTimeoutRef.current = setTimeout(() => {
      setShowProfile(false);
    }, 200);
  };

  const handleToggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between bg-[#000000] text-white overflow-hidden selection:bg-white/20"
    >
      {/* Background Pattern - Deep Jet Black with subtle dark radial dots */}
      <div className="w-full absolute inset-0 z-0 bg-[radial-gradient(circle,_#262626_1px,_transparent_1px)] opacity-35 [background-size:24px_24px] pointer-events-none" />

      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <Spotlight
          duration={10}
          xOffset={120}
          translateY={-300}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .22) 0, hsla(0, 0%, 100%, .06) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .03) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, 0) 80%, transparent 100%)"
        />
      </div>

      <main className="relative flex-1 flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 md:pb-12 z-10 max-w-[115rem] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        
        {/* Main Center Content: Perfectly Aligned 3-Line Monolithic Typography */}
        <div className="flex-1 flex flex-col items-start md:items-center justify-center w-full my-auto py-2 sm:py-4 pr-12 sm:pr-14 md:pr-0">
          <div className="flex relative gap-1 sm:gap-1.5 md:gap-2 flex-col items-start md:items-center justify-center w-full">

            {/* Line 1: Intro Tagline + SOFTWARE */}
            <div className="flex flex-col md:flex-row gap-1.5 sm:gap-2 md:gap-8 lg:gap-10 items-start md:items-center justify-start md:justify-center relative w-full md:w-auto">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] sm:text-xs md:text-sm text-zinc-400 text-left md:text-right leading-relaxed max-w-[280px] md:max-w-[240px] font-medium uppercase tracking-[0.16em]"
              >
                Hi, I&apos;m Umar. I build scalable full-stack platforms and intelligent systems.
              </motion.p>
              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(3rem,11.5vw,13.5rem)] font-black leading-[0.82] tracking-tighter text-shiny will-change-transform select-none whitespace-nowrap text-left md:text-center"
                >
                  SOFTWARE
                </motion.h1>
              </div>
            </div>

            {/* Line 2: FULL [ICON] STACK */}
            <div className="flex flex-row items-center justify-start md:justify-center relative w-full md:w-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11.5vw,13.5rem)] flex items-center justify-start md:justify-center font-black leading-[0.82] tracking-tighter text-shiny will-change-transform select-none whitespace-nowrap text-left md:text-center"
              >
                <span>FULL</span>
                <div
                  ref={zapRef}
                  className="mx-[0.03em] relative inline-flex items-center justify-center shrink-0 pointer-events-none"
                >
                  <Zap className="w-[0.82em] h-[0.82em] text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]" strokeWidth={2.4} />
                </div>
                <span>STACK</span>
              </motion.h1>
            </div>

            {/* Line 3: EN [ICON] GINEER + Collaboration Note */}
            <div className="flex flex-col md:flex-row gap-1.5 sm:gap-2 md:gap-8 lg:gap-10 items-start md:items-center justify-start md:justify-center relative w-full md:w-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,11.5vw,13.5rem)] flex items-center justify-start md:justify-center font-black leading-[0.82] tracking-tighter text-shiny will-change-transform select-none whitespace-nowrap text-left md:text-center"
              >
                <span>EN</span>
                <div
                  ref={botRef}
                  className="mx-[0.03em] relative inline-flex items-center justify-center shrink-0 pointer-events-none"
                >
                  <Bot className="w-[0.85em] h-[0.85em] text-yellow-400 fill-yellow-400/20 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)]" />
                </div>
                <span>GINEER</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[10px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed max-w-[280px] md:max-w-[240px] font-medium uppercase tracking-[0.14em] sm:tracking-widest text-left"
              >
                Open to internships, full-time opportunities, freelance, and startups globally.
              </motion.p>
            </div>

            {/* Action CTA Buttons: View Projects & Clean Minimal Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-start md:justify-center gap-3 sm:gap-4 mt-5 sm:mt-7 md:mt-8 w-full select-none"
            >
              {/* 1. View Projects */}
              <a
                href="/projects"
                className="w-36 sm:w-44 h-10 sm:h-11 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 border border-white/15 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 hover:border-white/30 transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <span className="text-sky-400 font-bold">→</span>
              </a>

              {/* 2. Distinct Clean Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-36 sm:w-44 h-10 sm:h-11 group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Resume</span>
                <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <span className="text-[9px] sm:text-[10px]">↗</span>
                </div>
              </a>
            </motion.div>

          </div>
        </div>

      </main>

      {/* Award/Badge Vertical - Right Side Pop-out on Hover with Umar's Photo */}
      <div
        className="absolute right-0 top-1/2 z-50 flex flex-row-reverse items-center transform -translate-y-1/2 group/container py-6"
        onMouseEnter={handleProfileEnter}
        onMouseLeave={handleProfileLeave}
      >
        {/* The Badge Trigger */}
        <div className="relative z-50">
          <motion.button
            whileHover={{ x: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleProfile}
            className="bg-white text-black py-8 sm:py-10 px-2.5 sm:px-4 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] shadow-2xl rounded-l-2xl sm:rounded-l-3xl border-l border-y border-zinc-200 cursor-pointer select-none"
            aria-label="Toggle Profile Drawer"
          >
            <span className="rotate-180 [writing-mode:vertical-rl]">
              AVAILABLE FOR OPPORTUNITY
            </span>
          </motion.button>
        </div>

        {/* Profile Card Pop-out Effect with Photo & Details */}
        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ x: 30, opacity: 0, scale: 0.96 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 30, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="pr-2 sm:pr-4 pointer-events-auto"
              style={{ width: 'max-content' }}
            >
              <ProfileCard
                name={personal.name}
                title={personal.title}
                description={personal.bio}
                imageUrl={personal.avatar}
                onClose={() => setShowProfile(false)}
                className="!max-w-4xl scale-[0.82] sm:scale-[0.85] origin-right"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
