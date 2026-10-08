'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Timeline, TimelineItemData } from '@/components/neonblade-ui/timeline';

export function ExperienceHighlightSection() {
  const { experience, education } = portfolioData;

  const timelineItems: TimelineItemData[] = experience.map((exp) => ({
    date: exp.period,
    title: exp.company ? `${exp.role} • ${exp.company}` : exp.role,
    description: exp.description[0],
    badge: exp.badge,
    active: true,
  }));

  return (
    <section id="experience" className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
          Experience &amp; Education
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
          Where practical engineering experience meets a strong technical foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* Timeline Column (8 Cols on Desktop, Full Width on Mobile) */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
            <Timeline
              items={timelineItems}
              color="#D1FF4D"
              variant="default"
              lineStyle="solid"
              dotStyle="circle"
              dotAnim="none"
              align="left"
              animate={true}
            />
          </div>
        </div>

        {/* Education & CV Download (4 Cols on Desktop, Sticky) */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-white/20 transition-all p-5 sm:p-7 flex flex-col justify-between shadow-xl sticky top-28"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">Degree</h3>
                </div>
              </div>

              <h4 className="text-xs sm:text-sm font-black text-white mb-1">{education[0].institution}</h4>
              <p className="text-[11px] text-zinc-400 mb-3">{education[0].degree}</p>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2 mb-4">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-500">Graduation</span>
                  <span className="text-white font-bold">{education[0].period}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-500">Academic Score</span>
                  <span className="text-white font-bold px-1.5 py-0.5 rounded bg-white/10">{education[0].grade}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-300">{education[0].location}</span>
                </div>
              </div>
            </div>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Centered View Full Background CTA at Bottom */}
      <div className="flex justify-center mt-10 sm:mt-12 w-full">
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D1FF4D] text-black text-xs font-black uppercase tracking-wider hover:bg-[#b8f02e] transition-all shadow-lg shadow-[#D1FF4D]/20 hover:scale-105 active:scale-95 group"
        >
          <span>View Full Background</span>
          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  );
}



