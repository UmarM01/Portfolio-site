'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolio';
import { ProjectDetailModal } from '@/components/ui/ProjectDetailModal';
import { NotchedProjectCard } from '@/components/ui/notched-project-card';

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header (Centered) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-shiny mb-1 text-center">
          Projects
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mt-1 text-center">
          Selected work showcasing full-stack development, problem-solving, and scalable system design.
        </p>
      </motion.div>

      {/* Projects Grid with NotchedProjectCards matching Home Page */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {projects.map((project: Project) => {
          const projectImages: Record<string, string> = {
            zoopify: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
            selligo: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80',
            vitalbridge: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
            meraki: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            termizen: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
            'traffic-surveillance': 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
          };

          const image = projectImages[project.id] || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80';

          return (
            <NotchedProjectCard
              key={project.id}
              title={project.title}
              description={project.subtitle || project.description}
              image={image}
              tags={project.techStack.slice(0, 4)}
              surface="#000000"
              accent="#D1FF4D"
              onClick={() => setActiveProject(project)}
            />
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
