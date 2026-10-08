'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LogoCloudMarquee } from '@/components/ui/logo-cloud-marquee';

export function TechRadarSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 border-t border-zinc-900 overflow-hidden">
      
      {/* Section Header (Centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
          Technical Stack
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2 text-center">
          Languages, frameworks, and infrastructure
        </p>
      </div>

      {/* 3-Line Flowing Marquee */}
      <LogoCloudMarquee className="py-0" />

      {/* Button below Tech Stack linking to About Skills */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <Link
          href="/about#skills"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#D1FF4D] text-black text-xs font-black uppercase tracking-wider hover:bg-[#b8f02e] transition-all shadow-lg shadow-[#D1FF4D]/20 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Detailed Technical Stack</span>
        </Link>
      </div>
    </section>
  );
}
