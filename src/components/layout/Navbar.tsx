'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CardNav } from '@/components/ui/CardNav';
import { portfolioData } from '@/data/portfolio';

function Clock() {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <span className="font-mono text-xs sm:text-sm font-bold opacity-0">00:00:00</span>;

  return (
    <span className="font-mono text-xs sm:text-sm font-bold text-zinc-400 hover:text-white tracking-widest transition-colors">
      {time}
    </span>
  );
}

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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav
            className={cn(
              "flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300",
              isScrolled
                ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                : "bg-black/30 backdrop-blur-md border border-white/5"
            )}
          >
            {/* Left: Clock / Home Logo */}
            <div className="flex items-center gap-3 min-w-[120px]">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <Clock />
              </Link>
            </div>

            {/* Desktop Navigation: Centered */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              <Link
                href="/"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/'
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                Home
              </Link>

              {/* About with Mega Dropdown */}
              <CardNav pathname={pathname} />

              <Link
                href="/projects"
                className={cn(
                  "px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all rounded-full",
                  pathname === '/projects'
                    ? "text-white bg-white/10 shadow-inner"
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
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Right: Empty / Balanced on Desktop & Hamburger on Mobile */}
            <div className="flex items-center justify-end min-w-[120px]">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-300 hover:text-white bg-white/5 rounded-full border border-white/10 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Navigation</span>
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
                About Umar
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

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
