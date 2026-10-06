'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Code, Mail, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black border-t border-zinc-900 pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Compact Grid: Identity (Left), Nav & Builds (Center), Socials & Resume (Right) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Identity & Location (Span 5 on Desktop, Span 2 on Mobile) */}
          <div className="col-span-2 md:col-span-5 space-y-1.5">
            <h3 className="text-sm sm:text-base font-black tracking-tight text-white">
              {personal.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-400 max-w-xs leading-relaxed">
              Software Engineer & Full-Stack Developer building scalable web platforms and intelligent systems.
            </p>
            <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 pt-0.5">
              📍 Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Navigation (Span 1 on Mobile, Span 2 on Desktop) */}
          <div className="col-span-1 md:col-span-2 space-y-2">
            <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs text-zinc-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Umar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Builds (Span 1 on Mobile, Span 2 on Desktop) */}
          <div className="col-span-1 md:col-span-2 space-y-2">
            <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-zinc-400">
              Builds
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs text-zinc-400 font-medium">
              <li>
                <a
                  href="https://zoopify.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Zoopify</span>
                  <ArrowUpRight className="w-2.5 h-2.5 text-zinc-600 group-hover:text-primary transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://selligo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Selligo</span>
                  <ArrowUpRight className="w-2.5 h-2.5 text-zinc-600 group-hover:text-primary transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Resume Pinned on the Right (Span 2 on Mobile, Span 3 on Desktop) */}
          <div className="col-span-2 md:col-span-3 space-y-2 text-left md:text-right">
            <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-zinc-400">
              Connect
            </h4>
            <ul className="flex flex-wrap md:flex-col md:items-end gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-zinc-400 font-medium">
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-zinc-200"
                >
                  <FileText className="w-3 h-3 text-zinc-400" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UmarM01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Github className="w-3 h-3 text-zinc-500" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/umar-m-338726223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3 text-zinc-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/Umar250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Code className="w-3 h-3 text-zinc-500" />
                  <span>LeetCode</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-zinc-500" />
                  <span>{personal.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Minimal Bar */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Umar Munshi.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all text-[10px] sm:text-xs font-semibold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
