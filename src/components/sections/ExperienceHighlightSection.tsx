'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight, Download, Building2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ExperienceHighlightSection() {
  const { experience, education } = portfolioData;

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
            Enterprise software engineering impact at Lowe&apos;s India alongside academic foundation.
          </p>
        </div>
        <Link
          href="/about#experience"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-primary/40 hover:bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all shadow-md group shrink-0 self-start md:self-auto"
        >
          <span>Full Background & Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Experience Card (8 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-white/20 transition-all p-5 sm:p-7 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">{experience[0].company}</h3>
              </div>
              <div className="ml-auto text-right text-xs font-mono text-zinc-400">
                <span>{experience[0].period}</span>
                <p className="text-[10px] text-zinc-500">{experience[0].location}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-primary mb-3">{experience[0].role}</p>

            <ul className="space-y-2 mb-4 text-xs text-zinc-300 leading-relaxed list-disc list-inside">
              {experience[0].description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {experience[0].skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-900 border border-white/5 text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & CV Download (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-white/20 transition-all p-5 sm:p-7 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Academics</span>
                <h3 className="text-sm font-bold text-white">Degree & Honors</h3>
              </div>
            </div>

            <h4 className="text-xs sm:text-sm font-black text-white mb-1">{education[0].institution}</h4>
            <p className="text-[11px] text-zinc-400 mb-3">{education[0].degree}</p>

            <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1 mb-4">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">Graduation</span>
                <span className="text-white font-bold">{education[0].period}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">Academic Grade</span>
                <span className="text-primary font-bold">{education[0].grade}</span>
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
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
