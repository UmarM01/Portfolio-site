'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function TechRadarSection() {
  const { skills } = portfolioData;

  const stackCategories = [
    {
      title: 'Frontend & UI Engineering',
      icon: Code2,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
      skills: skills.frontend,
      description: 'Building ultra-responsive, zero-CLS client interfaces with high-performance animations and reactive state management.',
    },
    {
      title: 'Backend & Distributed Systems',
      icon: Server,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      skills: skills.backend,
      description: 'Designing resilient microservices, high-throughput RESTful/GraphQL endpoints, and event-driven architecture.',
    },
    {
      title: 'Databases & In-Memory Caching',
      icon: Database,
      color: 'text-white',
      bg: 'bg-white/10',
      border: 'border-white/20',
      skills: skills.databases,
      description: 'Schema modeling, index optimization, distributed transactions, and low-latency cache invalidation.',
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      icon: Cloud,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      skills: skills.devops,
      description: 'Containerized orchestration, automated CI/CD deployment pipelines, and scalable cloud hosting infrastructure.',
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-shiny">
            Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
            Core technologies, distributed paradigms, and cloud infrastructure powering scalable platforms.
          </p>
        </div>
        <Link
          href="/about#skills"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-primary/40 hover:bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-all shadow-md group shrink-0 self-start md:self-auto"
        >
          <span>View Full Skill Matrix</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid of 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {stackCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-all p-5 sm:p-7 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${cat.bg} ${cat.border} border`}>
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-medium bg-zinc-900/90 border border-white/5 text-zinc-200 group-hover:border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
