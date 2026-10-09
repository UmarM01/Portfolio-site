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
    <section id="projects" className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
          Real-world products built with a focus on performance, usability, and scalability.
        </p>
      </div>

      {/* Notched Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: Zoopify */}
        <NotchedProjectCard
          title={zoopify.title}
          description={zoopify.subtitle || zoopify.description}
          image="/projects/zoopify.png"
          tags={zoopify.techStack.slice(0, 4)}
          surface="#000000"
          accent="#D1FF4D"
          demoUrl={zoopify.demoUrl}
          onLearnMore={() => setActiveProject(zoopify)}
          onClick={() => setActiveProject(zoopify)}
        />

        {/* Card 2: Selligo */}
        <NotchedProjectCard
          title={selligo.title}
          description={selligo.subtitle || selligo.description}
          image="/projects/selligo.png"
          tags={selligo.techStack.slice(0, 4)}
          surface="#000000"
          accent="#D1FF4D"
          demoUrl={selligo.demoUrl}
          onLearnMore={() => setActiveProject(selligo)}
          onClick={() => setActiveProject(selligo)}
        />
      </div>

      {/* Centered View All Projects CTA at Bottom */}
      <div className="flex justify-center mt-10 sm:mt-12 w-full">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D1FF4D] text-black text-xs font-black uppercase tracking-wider hover:bg-[#b8f02e] transition-all shadow-lg shadow-[#D1FF4D]/20 hover:scale-105 active:scale-95 group"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
        </Link>
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

