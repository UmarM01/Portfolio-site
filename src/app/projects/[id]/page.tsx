import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Sparkles, Cpu, Layers, Check } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export async function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    id: p.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = portfolioData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Main Header Card */}
      <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.status === 'production' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live in Production
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 border border-white/10">
                Completed Project
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-zinc-300 border border-white/10">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors shadow-xl"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-bold hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      {project.keyMetrics && project.keyMetrics.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Key Performance & SLA Metrics</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.keyMetrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950 border border-white/10 shadow-xl">
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mb-1">
                  {metric.value}
                </div>
                {metric.desc && (
                  <div className="text-xs text-zinc-400 leading-tight">
                    {metric.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overview & Deep Dive */}
      <div className="space-y-12">
        <section className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">
            System Overview & Problem Statement
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <section className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Core System Architecture</span>
            </h2>
            <div className="space-y-3">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/40 border border-white/5 text-sm text-zinc-300">
                  <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Functional Highlights</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-zinc-900/30 border border-white/5 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="rounded-3xl bg-zinc-950 border border-white/10 p-6 sm:p-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
            Technology Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-900 border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
