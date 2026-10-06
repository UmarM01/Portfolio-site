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
  description = portfolioData.personal.bio,
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
          className="absolute -top-10 right-2 z-50 p-2 bg-zinc-900 text-white rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
          aria-label="Close Profile"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Desktop Card Layout */}
      <div className="hidden md:flex items-center relative">
        {/* Profile Image Container */}
        <div className="w-[360px] h-[440px] rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl relative z-0 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={480}
            className="w-full h-full object-cover object-top"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-zinc-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Overlapping Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#0f0f10] border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-8 ml-[-60px] z-10 w-[480px] flex flex-col justify-between"
        >
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
              Available for Opportunities
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-1">{name}</h3>
            <p className="text-xs font-semibold text-zinc-400 mb-4">{title}</p>
            <p className="text-xs leading-relaxed text-zinc-300 mb-6 line-clamp-4">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{personal.phone}</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              {personal.socialLinks.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 hover:scale-110 transition-all"
                    title={social.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
              <Link
                href="/resume.pdf"
                target="_blank"
                className="ml-auto inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>CV</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden bg-[#0e0e10] border border-white/15 rounded-3xl p-6 shadow-2xl max-w-sm mx-auto text-center">
        <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-white/15 mb-4 shadow-xl">
          <Image
            src={imageUrl}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover object-top"
            unoptimized
          />
        </div>
        <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
          Available
        </div>
        <h3 className="text-xl font-black text-white">{name}</h3>
        <p className="text-[11px] font-medium text-zinc-400 mb-3">{title}</p>
        <p className="text-xs text-zinc-300 leading-relaxed mb-5">{description}</p>
        
        <div className="flex justify-center gap-3">
          {personal.socialLinks.map((social) => {
            const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
            return (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
