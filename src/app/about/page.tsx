'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Code2, Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function AboutPage() {
  const { personal, experience, education, skills } = portfolioData;

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. Single Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 sm:mb-10"
      >
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-shiny">
          About Umar Munshi
        </h1>
      </motion.div>

      {/* 2. Top Profile Row: Compact Pic on Left + Unboxed Info on Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 mb-6 sm:mb-8"
      >
        {/* Compact Photo: Full size on mobile, fixed width on desktop */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:w-64 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 shrink-0 mx-auto md:mx-0 group">
          <Image
            src={personal.avatar}
            alt={personal.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-center sm:text-left">
            <h3 className="text-sm font-black text-white">{personal.name}</h3>
            <p className="text-[11px] font-semibold text-zinc-400">{personal.title}</p>
          </div>
        </div>

        {/* Unboxed Bio Info on the Right - Perfectly Matching Photo Height */}
        <div className="flex-1 flex flex-col justify-between self-stretch space-y-4 md:space-y-0 text-zinc-300">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Software Engineer & Full-Stack Architect
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                I am a Software Engineer based in Bengaluru passionate about designing resilient, high-throughput systems. My experience covers the complete product lifecycle—from schema modeling and API design to reactive frontend interfaces, distributed caching, and cloud deployments.
              </p>
              <p>
                As the lead engineer behind <span className="text-white font-bold">Zoopify</span> (a 60-minute quick-commerce platform in Bangalore) and with enterprise engineering experience at <span className="text-white font-bold">Lowe&apos;s India</span>, I specialize in building zero-latency Next.js applications, robust Node.js/PostgreSQL backends, and automated AI agent pipelines.
              </p>
              <p>
                I focus on writing clean, modular code with clear architectural boundaries, low latency overhead, and rock-solid reliability under production load.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center gap-3 pt-2 w-full md:w-auto">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="w-full md:w-48 h-11 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg group"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Download Resume</span>
            </Link>

            <Link
              href="/contact"
              className="w-full md:w-48 h-11 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 border border-white/10 hover:border-primary/40 text-xs font-bold text-zinc-300 hover:text-white transition-all shadow-md group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 3. Two Boxes Below: Education & Location/Contact (Tighter Spacing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-16">
        
        {/* Box 1: Education */}
        <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 p-5 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Academics</span>
                <h3 className="text-base font-bold text-white">Education & Degree</h3>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">{edu.institution}</h4>
                  {edu.grade && (
                    <span className="text-xs font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 w-fit">
                      {edu.grade}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-300 font-medium">{edu.degree}</p>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-1">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Box 2: Location & Contact */}
        <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 p-5 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Location & Reach</span>
                <h3 className="text-base font-bold text-white">{personal.location}</h3>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">{personal.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${personal.phone}`} className="hover:text-white transition-colors">{personal.phone}</a>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for global roles, freelance, and startups</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Experience Section */}
      <section id="experience" className="mb-20 pt-8 border-t border-zinc-900">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Work Experience</h2>
            <p className="text-xs text-zinc-400">Industry & Enterprise Impact</p>
          </div>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-zinc-950/70 border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-primary">{exp.company}</p>
                </div>
                <div className="text-xs font-mono text-zinc-400 sm:text-right">
                  <span>{exp.period}</span>
                  <p className="text-[11px] text-zinc-500">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed list-disc list-inside">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full text-[10px] font-bold bg-zinc-900 border border-white/10 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="mb-20 pt-8 border-t border-zinc-900">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Technical Stack</h2>
            <p className="text-xs text-zinc-400">Languages, Frameworks & Tooling</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Frontend */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-sky-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases - White Header */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-purple-400">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skills.devops.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
