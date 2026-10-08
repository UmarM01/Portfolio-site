'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[70] transition-all duration-300">
        {/* Phone Top Backdrop: Strictly behind the navbar, zero downward shadow spill */}
        <div className="md:hidden pointer-events-none absolute inset-x-0 top-0 h-14 -z-10 overflow-hidden">
          {/* Subtle animated grey glow strictly behind navbar */}
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-72 h-14 bg-[radial-gradient(ellipse_at_top,rgba(161,161,170,0.22),transparent_70%)]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav
            className={cn(
              "relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300",
              "bg-black border border-white/10 shadow-none md:shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
            )}
          >
            {/* Left: Avatar with Green Outline + Umar Munshi */}
            <div className="relative z-10 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-[#D1FF4D] shadow-[0_0_12px_rgba(209,255,77,0.35)] transition-all shrink-0">
                  <Image
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-[#D1FF4D] transition-colors whitespace-nowrap">
                  {portfolioData.personal.name}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation: Centered */}
            <div className="relative z-10 hidden md:flex items-center gap-1.5 lg:gap-2">
              <Link
                href="/"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/'
                    ? "text-[#D1FF4D] bg-[#D1FF4D]/10 border border-[#D1FF4D]/25 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                Home
              </Link>

              {/* Direct About Me Link (No Dropdown) */}
              <Link
                href="/about"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/about'
                    ? "text-[#D1FF4D] bg-[#D1FF4D]/10 border border-[#D1FF4D]/25 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                About Me
              </Link>

              <Link
                href="/projects"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/projects'
                    ? "text-[#D1FF4D] bg-[#D1FF4D]/10 border border-[#D1FF4D]/25 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/contact'
                    ? "text-[#D1FF4D] bg-[#D1FF4D]/10 border border-[#D1FF4D]/25 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Right: Balance on Desktop & Hamburger on Mobile */}
            <div className="relative z-10 flex items-center justify-end">
              {/* Mobile Menu Button with Green Outline and Green 3 Lines */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full border border-[#D1FF4D] bg-zinc-950/90 shadow-[0_0_12px_rgba(209,255,77,0.35)] hover:bg-[#D1FF4D]/15 transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#D1FF4D]" strokeWidth={2.4} />
                ) : (
                  <Menu className="w-5 h-5 text-[#D1FF4D]" strokeWidth={2.4} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-black transition-colors py-2 border-b border-white/5",
                  pathname === '/' ? "text-primary" : "text-white"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-black transition-colors py-2 border-b border-white/5",
                  pathname === '/about' ? "text-primary" : "text-white"
                )}
              >
                About Me
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-black transition-colors py-2 border-b border-white/5",
                  pathname === '/projects' ? "text-primary" : "text-white"
                )}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-black transition-colors py-2 border-b border-white/5",
                  pathname === '/contact' ? "text-primary" : "text-white"
                )}
              >
                Contact
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-bold text-zinc-300 py-3 mt-2 px-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="flex items-center justify-between gap-2 text-[11px] text-zinc-300">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors truncate max-w-[180px]"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{portfolioData.personal.email}</span>
                </a>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{portfolioData.personal.phone}</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{portfolioData.personal.location}</span>
                <div className="flex gap-3">
                  <Link href={portfolioData.personal.socialLinks[0].url} target="_blank" className="hover:text-white">
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link href={portfolioData.personal.socialLinks[1].url} target="_blank" className="hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
