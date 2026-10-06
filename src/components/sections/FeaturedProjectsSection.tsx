'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolio';
import { NotchedProjectCard } from '@/components/ui/notched-project-card';
import { ProjectDetailModal } from '@/components/ui/ProjectDetailModal';

export function FeaturedProjectsSection() {
  const { projects } = portfolioData;
  const zoopify = projects.find(p => p.id === 'zoopify') || projects[0];
  const selligo = projects.find(p => p.id === 'selligo') || projects[1];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
            Production Platforms
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
            High-throughput applications, distributed systems, and real-world production architectures.
          </p>
        </div>

        {/* View All Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-primary/40 hover:bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all shadow-md group shrink-0 self-start md:self-auto"
        >
          <span>View All Projects ({projects.length})</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Notched Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: Zoopify */}
        <NotchedProjectCard
          title={zoopify.title}
          description={zoopify.subtitle || zoopify.description}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
          badge="Live • Quick-Commerce"
          tags={zoopify.techStack.slice(0, 4)}
          surface="#000000"
          accent="#D1FF4D"
          onClick={() => setActiveProject(zoopify)}
        />

        {/* Card 2: Selligo */}
        <NotchedProjectCard
          title={selligo.title}
          description={selligo.subtitle || selligo.description}
          image="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80"
          badge="Live • Recommerce"
          tags={selligo.techStack.slice(0, 4)}
          surface="#000000"
          accent="#D1FF4D"
          onClick={() => setActiveProject(selligo)}
        />
      </div>



      {/* Deep Dive Modal */}
      <ProjectDetailModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
      />

    </section>
  );
}

