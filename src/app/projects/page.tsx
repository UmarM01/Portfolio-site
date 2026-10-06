'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolio';
import { ProjectDetailModal } from '@/components/ui/ProjectDetailModal';

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'E-Commerce', 'Recommerce', 'Healthcare'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center sm:text-left"
      >
        <span className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-2 inline-block">
          Engineered Systems
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-shiny mb-3">
          Projects & Builds
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
          Production-grade platforms and systems. Click on any project card to explore full architecture, key metrics, and implementation details.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-white text-black shadow-lg'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Compact, Sleek, Fully-Clickable Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 mb-20">
        {filteredProjects.map((project: Project, idx: number) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0e0e11] border border-white/10 hover:border-white/25 hover:bg-[#131317] p-5 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:scale-[1.01] hover:-translate-y-0.5 select-none"
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 group-hover:bg-primary/10 rounded-full blur-3xl pointer-events-none transition-colors duration-500" />

              <div>
                {/* Top Badges & Expand Indicator */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    {project.status === 'production' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Live</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-white/10">
                        <span>Completed</span>
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 text-zinc-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Concise Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium line-clamp-2 mb-5">
                  {project.subtitle || project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-900 border border-white/5 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-900/60 text-zinc-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Bottom Action Cue */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    Deep Dive & Metrics
                  </span>
                  <span className="text-primary font-bold">Explore →</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />

    </div>
  );
}
