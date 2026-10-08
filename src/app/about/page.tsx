'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Code2, Download, ArrowRight, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Timeline, TimelineItemData } from '@/components/neonblade-ui/timeline';

const skillLogos: Record<string, string> = {
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Cloudflare R2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

export default function AboutPage() {
  const { personal, experience, education, skills } = portfolioData;

  const timelineItems: TimelineItemData[] = experience.map((exp) => ({
    date: `${exp.period} • ${exp.location}`,
    title: exp.company ? `${exp.role} • ${exp.company}` : exp.role,
    description: exp.description.join(' '),
    badge: exp.badge,
    active: true,
  }));

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-16">
      
      {/* 1. Single Main Heading (Centered, with exact existing position and spacing) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 sm:mb-7 text-center px-4 sm:px-6"
      >
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-shiny text-center">
          About Umar
        </h1>
      </motion.div>

      {/* Content wrapper using full screen width after title */}
      <div className="w-full max-w-7xl lg:max-w-[90rem] xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 2. Top Profile Row: Compact Pic on Left + Unboxed Info on Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8"
        >
          {/* Photo: Slightly wider and more compact in height */}
          <div className="relative w-full max-w-sm sm:max-w-md md:w-[300px] lg:w-[330px] aspect-[4/4.3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 shrink-0 mx-auto md:mx-0 group">
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
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2.5">
              Software Engineer &amp; Full-Stack Builder
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                I&apos;m an engineer who genuinely enjoys <strong className="text-white font-bold">figuring things out</strong>. I like taking something that doesn&apos;t exist yet, understanding what it needs to become, and working through all the messy, uncertain decisions between an early idea and a finished product.
              </p>
              <p>
                I&apos;m naturally curious about <strong className="text-white font-bold">both technology and business</strong> — not just how something is built, but why it should exist, who it helps, and what makes it valuable. I work well with people, enjoy bouncing ideas around, and believe good communication can make a difficult problem much easier to solve. I value <strong className="text-white font-bold">ownership, consistency, and doing things properly</strong>, and when I take responsibility for something, I like seeing it through from the first idea to the final result.
              </p>
              <p>
                Over the past couple of years, I&apos;ve had the opportunity to turn ideas into products like <strong className="text-white font-bold">Zoopify</strong> and <strong className="text-white font-bold">Selligo</strong>, taking them from early concepts to platforms used by real people. I&apos;ve also gained enterprise engineering experience as a <strong className="text-white font-bold">Software Development Intern at Lowe&apos;s India</strong>, where I&apos;ve learned what changes when software has to operate within a much larger engineering environment.
              </p>
              <p className="text-[#D1FF4D] font-black text-xs sm:text-sm tracking-wide pt-1">
                Give me a hard problem — I&apos;ll figure it out, challenge it, and build it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center gap-3 pt-2 w-full md:w-auto">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="w-full md:w-44 h-10 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg group"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Download Resume</span>
            </Link>

            <Link
              href="/contact"
              className="w-full md:w-44 h-10 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-bold text-zinc-300 hover:text-white transition-all shadow-md group"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 3. Two Boxes Below: Education & Location/Availability Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-14">
        
        {/* Box 1: Education */}
        <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">Degree</h3>
              </div>
            </div>

            <h4 className="text-sm sm:text-base font-black text-white mb-0.5">{education[0].institution}</h4>
            <p className="text-xs text-zinc-300 font-medium mb-4">{education[0].degree}</p>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Graduation</span>
                <span className="text-white font-bold">{education[0].period}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Academic Score</span>
                <span className="text-white font-bold px-2 py-0.5 rounded-md bg-white/10 border border-white/15">
                  {education[0].grade}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Location</span>
                <span className="text-zinc-300">{education[0].location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Location & Work Availability */}
        <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl relative overflow-hidden">
          {/* Subtle top edge line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D1FF4D]/30 to-transparent pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#D1FF4D]/10 text-[#D1FF4D] border border-[#D1FF4D]/25">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">Base &amp; Availability</h3>
              </div>
            </div>

            <h4 className="text-sm sm:text-base font-black text-white">{personal.location}</h4>
            <p className="text-xs text-zinc-400 font-medium mb-4">Open to high-impact software engineering roles &amp; ambitious builds</p>

            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Email</span>
                <a href={`mailto:${personal.email}`} className="text-white font-bold hover:text-[#D1FF4D] transition-colors truncate max-w-[200px] sm:max-w-none">
                  {personal.email}
                </a>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Direct Phone</span>
                <a href={`tel:${personal.phone}`} className="text-white font-bold hover:text-[#D1FF4D] transition-colors">
                  {personal.phone}
                </a>
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
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Experience</h2>
            <p className="text-xs text-zinc-400">Engineering roles and production systems</p>
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <Timeline
            items={timelineItems}
            color="#D1FF4D"
            variant="default"
            lineStyle="solid"
            dotStyle="circle"
            dotAnim="pulse"
            align="left"
            animate={true}
          />
        </div>
      </section>

      {/* Technical Stack Matrix */}
      <section id="skills" className="mb-16 pt-8 border-t border-zinc-900">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Skills</h2>
            <p className="text-xs text-zinc-400">Languages, frameworks, and infrastructure</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Frontend */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-sky-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                    {skillLogos[item] && (
                      <img src={skillLogos[item]} alt={item} className="w-3.5 h-3.5 object-contain shrink-0" />
                    )}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                    {skillLogos[item] && (
                      <img src={skillLogos[item]} alt={item} className="w-3.5 h-3.5 object-contain shrink-0" />
                    )}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                    {skillLogos[item] && (
                      <img src={skillLogos[item]} alt={item} className="w-3.5 h-3.5 object-contain shrink-0" />
                    )}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-purple-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-zinc-900 border border-white/5 text-zinc-200">
                    {skillLogos[item] && (
                      <img src={skillLogos[item]} alt={item} className="w-3.5 h-3.5 object-contain shrink-0" />
                    )}
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      </div>
    </div>
  );
}



