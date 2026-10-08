'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, X, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
  onClose?: () => void;
}

export function ProfileCard({
  name = portfolioData.personal.name,
  title = portfolioData.personal.title,
  imageUrl = portfolioData.personal.avatar,
  className,
  onClose,
}: ProfileCardProps) {
  const { personal } = portfolioData;

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute -top-10 right-2 z-50 p-2 bg-zinc-900 text-white rounded-full border border-white/10 hover:bg-zinc-800 transition-colors cursor-pointer shadow-lg"
          aria-label="Close Profile"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Desktop Card Layout - Single View, No Scrolling (Sleeker & More Compact) */}
      <div className="hidden md:flex items-center relative">
        {/* Profile Image Container: Wider in width, comfortably sized */}
        <div className="w-[245px] h-[335px] rounded-3xl overflow-hidden bg-zinc-950 border border-[#D1FF4D]/30 shadow-2xl relative z-0 shrink-0">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-[11px] font-bold text-zinc-300 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
              <span className="truncate">{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Overlapping Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#0f0f10] border border-[#D1FF4D]/35 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_24px_rgba(209,255,77,0.12)] p-4 sm:p-5 ml-[-24px] z-10 w-[395px] flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Subtle top edge highlight line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D1FF4D]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#D1FF4D]/[0.03] to-transparent pointer-events-none" />

          {/* Compact Body Content */}
          <div className="space-y-2 relative z-10">
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">{name}</h3>
              <p className="text-[11px] font-bold text-zinc-400">{title}</p>
            </div>

            <p className="text-[11px] tracking-tight font-black text-[#D1FF4D]">
              Told you not to click. Well, you clicked. Here&apos;s who I am:
            </p>

            <div className="space-y-1.5 text-[10.5px] leading-[1.55] text-zinc-300">
              <p>
                I&apos;m an engineer who genuinely enjoys figuring things out — turning vague ideas and messy problems into software people can depend on. I&apos;ve built products that solve real problems, and each one has taught me something new about building, shipping, and thinking like an engineer. I&apos;m also interested in how technology, people, and business come together — understanding why something should exist and who it serves.
              </p>
              <p>
                I enjoy working with teams, communicating clearly, and challenging assumptions to find better solutions. I&apos;m here to show you what I can do right now, keep pushing myself further, and work with people building things that matter. This portfolio is the work so far; the interesting part is what&apos;s next.
              </p>
            </div>

            {/* User's favorite closing box */}
            <div className="p-2.5 rounded-xl bg-black/90 border border-[#D1FF4D]/35 space-y-0.5 shadow-inner">
              <p className="text-[#D1FF4D] font-black text-[11px] tracking-tight">
                Don&apos;t just look at the résumé. Look at the work.
              </p>
              <p className="text-white font-black text-[11px] tracking-tight">
                Give me a hard problem — I challenge you, I&apos;ll build it.
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="pt-2 border-t border-white/10 mt-2 relative z-10 space-y-2">
            <div className="flex justify-between items-center text-[11px] text-zinc-400">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors truncate max-w-[175px]">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personal.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1.5 border-t border-white/5">
              {personal.socialLinks.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#D1FF4D]/40 hover:scale-105 transition-all"
                    title={social.platform}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 bg-[#D1FF4D] text-black text-[10px] font-black uppercase tracking-wider rounded-full hover:bg-[#b8f02e] transition-colors shadow-lg"
              >
                <span>CV</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Card Layout - Compact, All In One Page, No Scroll */}
      <div className="md:hidden bg-[#0e0e10] border border-[#D1FF4D]/35 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_24px_rgba(209,255,77,0.12)] max-w-sm mx-auto text-left relative overflow-hidden">
        {/* Subtle top edge highlight line */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D1FF4D]/40 to-transparent pointer-events-none" />

        <div className="space-y-2.5 relative z-10">
          {/* Header with avatar & info side by side to save space */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#D1FF4D]/35 shrink-0 shadow-md">
              <Image
                src={imageUrl}
                alt={name}
                width={70}
                height={70}
                className="w-full h-full object-cover object-top"
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-black text-white leading-tight truncate">{name}</h3>
              <p className="text-[11px] font-bold text-zinc-400 truncate">{title}</p>
            </div>
          </div>

          <p className="text-xs tracking-tight font-black text-[#D1FF4D]">
            Told you not to click. Well, you clicked. Here&apos;s who I am:
          </p>

          <div className="space-y-1.5 text-[10.5px] text-zinc-300 leading-relaxed">
            <p>
              I&apos;m an engineer who genuinely enjoys figuring things out — turning vague ideas and messy problems into software people can depend on. I&apos;ve built products that solve real problems, and each one has taught me something new about building, shipping, and thinking like an engineer. I&apos;m also interested in how technology, people, and business come together — understanding why something should exist and who it serves.
            </p>
            <p>
              I enjoy working with teams, communicating clearly, and challenging assumptions to find better solutions. I&apos;m here to show you what I can do right now, keep pushing myself further, and work with people building things that matter. This portfolio is the work so far; the interesting part is what&apos;s next.
            </p>
          </div>

          {/* User's favorite closing box */}
          <div className="p-2.5 rounded-xl bg-black/90 border border-[#D1FF4D]/35 space-y-0.5 shadow-inner">
            <p className="text-[#D1FF4D] font-black text-[11px] tracking-tight">
              Don&apos;t just look at the résumé. Look at the work.
            </p>
            <p className="text-white font-black text-[11px] tracking-tight">
              Give me a hard problem — I challenge you, I&apos;ll build it.
            </p>
          </div>

          {/* Mobile Contact Bar: Email & Phone */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-300">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors truncate max-w-[170px]"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{personal.phone}</span>
            </a>
          </div>

          {/* Mobile Action bar */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              {personal.socialLinks.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D1FF4D] text-black text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-[#b8f02e] transition-colors shadow-lg"
            >
              <span>Resume</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
