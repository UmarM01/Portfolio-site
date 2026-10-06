'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Github, Linkedin, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ConnectTerminalSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-950 to-black border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
              Let&apos;s Build Together.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
              Available for software engineering roles, full-stack contracts, and ambitious technical projects worldwide.
            </p>
          </div>

          {/* Right Action Box */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between gap-4 px-5 py-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/25 text-white text-xs font-bold transition-all shadow-lg group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary" />
                <span>{personal.email}</span>
              </div>
              <div className="p-1 rounded-md bg-white/5 text-zinc-400 group-hover:text-white">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </div>
            </button>

            {/* Direct Message Link */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-xl group"
            >
              <span>Open Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

          </div>

        </div>

        {/* Footer Meta Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Bengaluru, India • Available Worldwide</span>
          </div>

          <div className="flex items-center gap-4">
            {personal.socialLinks.map((social) => {
              const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  className="hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
