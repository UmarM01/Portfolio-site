'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Layers, Cpu, Check, Sparkles } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);


  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#0d0d10] border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
          >
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 bg-zinc-950/60">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {project.status === 'production' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Live in Production
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-white/10">
                      Completed System
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 text-zinc-300 border border-white/10">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-7 custom-scrollbar">
              
              {/* Action Links Bar */}
              <div className="flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors shadow-xl"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-bold hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>

              {/* Key Metrics / Highlights Grid */}
              {project.keyMetrics && project.keyMetrics.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Performance & SLA Metrics</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.keyMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5">
                        <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                          {metric.label}
                        </div>
                        <div className="text-base sm:text-lg font-black text-white mb-0.5">
                          {metric.value}
                        </div>
                        {metric.desc && (
                          <div className="text-[10px] text-zinc-400 leading-tight">
                            {metric.desc}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Executive Overview & Description */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Executive Overview
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* System Architecture */}
              {project.architecture && project.architecture.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span>System Architecture & Engineering Highlights</span>
                  </h3>
                  <div className="space-y-2">
                    {project.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-white/5 text-xs text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Key Features & Workflows</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Tech Stack */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Technologies & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-white/10 text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
