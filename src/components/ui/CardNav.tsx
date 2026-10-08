'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Trophy, Navigation, Briefcase, Rocket, FileText, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardNavProps {
    theme?: 'light' | 'dark';
    pathname?: string;
}

function GridSnake({ theme }: { theme: string }) {
    const [pathX, setPathX] = useState<number[]>([]);
    const [pathY, setPathY] = useState<number[]>([]);
    
    useEffect(() => {
        const cols = 11;
        const rows = 6;
        const gridSize = 24;
        
        let x = Math.floor(Math.random() * cols) * gridSize;
        let y = Math.floor(Math.random() * rows) * gridSize;
        
        const px = [x];
        const py = [y];
        
        for (let i = 0; i < 30; i++) {
            const isHorizontal = Math.random() > 0.5;
            const step = (Math.random() > 0.5 ? 1 : -1) * gridSize;
            
            if (isHorizontal) {
                x += step;
                if (x < 0) x = (cols - 1) * gridSize;
                else if (x >= cols * gridSize) x = 0;
            } else {
                y += step;
                if (y < 0) y = (rows - 1) * gridSize;
                else if (y >= rows * gridSize) y = 0;
            }
            
            px.push(x);
            py.push(y);
        }
        setPathX(px);
        setPathY(py);
    }, []);

    if (pathX.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 group-hover:opacity-100 transition-opacity duration-700">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "absolute top-0 left-0 w-[24px] h-[24px]",
                        theme === 'dark' ? (i === 0 ? "bg-white/20" : "bg-white/10") : (i === 0 ? "bg-black/20" : "bg-black/10")
                    )}
                    animate={{
                        x: pathX,
                        y: pathY,
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.15
                    }}
                />
            ))}
        </div>
    );
}

function ActiveDot() {
    return (
        <span className="inline-flex ml-2 -translate-y-px align-middle">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#D1FF4D]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1FF4D] shadow-[0_0_5px_rgba(209,255,77,0.8)]"></span>
            </span>
        </span>
    );
}

function BentoCard({
    href,
    icon: Icon,
    title,
    desc,
    badge,
    theme,
    pathname,
    colorClass = "text-sky-400",
    gradientClass = "from-sky-500/10 to-transparent",
}: {
    href: string;
    icon: any;
    title: string;
    desc: string;
    badge?: string;
    theme: string;
    pathname: string;
    colorClass?: string;
    gradientClass?: string;
}) {
    const isActive = pathname === href || (href !== '/' && href !== '#' && pathname?.startsWith(`${href}/`));
    const isExternal = href.endsWith('.pdf') || href.startsWith('http');

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
                "group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 min-h-[140px] overflow-hidden select-none",
                theme === 'dark'
                    ? cn(
                        "bg-[#121214]/90 hover:bg-[#18181c]",
                        isActive 
                            ? "border-[#D1FF4D]/50 shadow-[0_0_20px_rgba(209,255,77,0.08)] ring-1 ring-[#D1FF4D]/30" 
                            : "border-white/10 hover:border-white/25 hover:shadow-2xl hover:shadow-black/70"
                    )
                    : cn(
                        "hover:bg-white hover:shadow-xl hover:shadow-black/10",
                        isActive ? "bg-white border-[#D1FF4D]" : "bg-black/[0.02] border-black/10"
                    )
            )}
        >
            {/* Ambient Gradient on Hover */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                gradientClass
            )} />

            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Snake Animation */}
            <GridSnake theme={theme} />

            {/* Top Bar: Icon + Optional Badge / Active Status */}
            <div className="flex items-center justify-between relative z-10">
                <div className={cn(
                    "p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110",
                    theme === 'dark' ? "bg-white/5 border border-white/10 group-hover:border-white/20" : "bg-black/5"
                )}>
                    <Icon className={cn("w-5 h-5", colorClass)} />
                </div>
                <div className="flex items-center gap-1.5">
                    {badge && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:text-zinc-200">
                            {badge}
                        </span>
                    )}
                    {isActive && <ActiveDot />}
                </div>
            </div>

            {/* Bottom Content: Title + Description */}
            <div className="relative z-10 mt-3">
                <h4 className={cn(
                    "font-bold text-sm tracking-tight mb-1 transition-colors duration-200 flex items-center gap-1.5",
                    theme === 'dark' ? (isActive ? "text-[#D1FF4D]" : "text-white group-hover:text-white") : "text-black"
                )}>
                    {title}
                </h4>
                <p className={cn(
                    "text-xs leading-relaxed line-clamp-2",
                    theme === 'dark' ? "text-zinc-400 group-hover:text-zinc-300" : "text-zinc-600"
                )}>
                    {desc}
                </p>
            </div>

            {/* Corner Highlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-tr-2xl pointer-events-none" />
        </Link>
    );
}

export function CardNav({
    theme = "dark",
    pathname = "/"
}: CardNavProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsExpanded(false);
        }, 180);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const allHrefs = ['/projects', '/about', '/contact', '/resume'];
    const isActive = useMemo(() => {
        return allHrefs.some(href => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`)));
    }, [pathname]);

    return (
        <div 
            ref={containerRef} 
            className="relative py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-2 group cursor-pointer",
                    isActive
                        ? "text-white bg-white/10 shadow-inner"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
            >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                    {isActive && isExpanded && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center justify-center"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 rounded-full bg-[#D1FF4D] shadow-[0_0_8px_rgba(209,255,77,0.6)]"
                            />
                        </motion.div>
                    )}
                    About
                </span>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                >
                    <ChevronDown className="w-4 h-4 opacity-50" />
                </motion.div>
            </motion.button>

            {/* Mega Menu Dropdown: Clean 2x2 Bento Grid */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97, x: "-50%" }}
                        animate={{ opacity: 1, y: 12, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 6, scale: 0.97, x: "-50%" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 z-[100] pointer-events-auto pt-2"
                    >
                        <div className={cn(
                            "relative w-[580px] max-w-[92vw] rounded-[1.75rem] border shadow-2xl backdrop-blur-2xl transition-all overflow-hidden p-3.5 sm:p-4.5",
                            theme === 'dark'
                                ? "bg-[#0b0b0d]/95 border-white/10 shadow-black/90 ring-1 ring-white/5"
                                : "bg-white/95 border-black/10 shadow-black/10"
                        )}>
                            {/* 2x2 Bento Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* 1. Projects */}
                                <BentoCard
                                    href="/projects"
                                    icon={Rocket}
                                    colorClass="text-sky-400"
                                    gradientClass="from-sky-500/15 via-sky-500/5 to-transparent"
                                    title="Projects"
                                    desc="Production platforms, Zoopify, Selligo & systems"
                                    badge="Live"
                                    theme={theme}
                                    pathname={pathname}
                                />

                                {/* 2. About Umar */}
                                <BentoCard
                                    href="/about"
                                    icon={Trophy}
                                    colorClass="text-primary"
                                    gradientClass="from-primary/15 via-primary/5 to-transparent"
                                    title="About Umar"
                                    desc="Engineering background, Cambridge (ISE) & Lowe's India"
                                    badge="Bio"
                                    theme={theme}
                                    pathname={pathname}
                                />


                                {/* 3. Resume */}
                                <BentoCard
                                    href="/resume.pdf"
                                    icon={FileText}
                                    colorClass="text-emerald-400"
                                    gradientClass="from-emerald-500/15 via-emerald-500/5 to-transparent"
                                    title="Resume"
                                    desc="View & download official CV and credentials"
                                    badge="PDF"
                                    theme={theme}
                                    pathname={pathname}
                                />

                                {/* 4. Contact */}
                                <BentoCard
                                    href="/contact"
                                    icon={MessageCircle}
                                    colorClass="text-purple-400"
                                    gradientClass="from-purple-500/15 via-purple-500/5 to-transparent"
                                    title="Contact"
                                    desc="Get in touch for internships, full-time & freelance"
                                    badge="Let's Talk"
                                    theme={theme}
                                    pathname={pathname}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default CardNav;
