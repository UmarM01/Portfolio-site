'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Terminal, Play, Sparkles, CheckCircle2, ArrowRight, Code } from 'lucide-react';

export function AIAgentSection() {
  const [activeTab, setActiveTab] = useState<'execution' | 'prompt'>('execution');

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-shiny">
            Autonomous AI & Agents
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition-colors group"
        >
          <span>Explore AI Builds</span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Terminal Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-zinc-950/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/60 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-zinc-400">browser-automation-agent ~ v1.0.4</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('execution')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'execution' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              agent.log
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'prompt' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              workflow.py
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
          {activeTab === 'execution' ? (
            <div className="space-y-3 text-zinc-300">
              <p className="text-zinc-500">// Initializing Autonomous Agent Runtime with Gemini Flash + browser-use</p>
              <p className="text-primary font-bold">&gt; agent.execute(&quot;Inspect supplier catalog on Zoopify, update inventory delta, verify Stripe checkout&quot;)</p>
              <div className="pl-4 space-y-1.5 border-l-2 border-primary/30 text-zinc-400">
                <p><span className="text-sky-400">[0.12s]</span> Launched headless browser sandbox (Chromium)</p>
                <p><span className="text-sky-400">[0.45s]</span> Navigated to inventory portal; DOM indexed (142 interactive elements)</p>
                <p><span className="text-sky-400">[0.88s]</span> Extracted SKU delta table; 12 items synced to PostgreSQL</p>
                <p><span className="text-sky-400">[1.34s]</span> Form filled &amp; submitted; Webhook verification passed 200 OK</p>
              </div>
              <p className="text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Task Completed Successfully (Execution time: 1.48s)</span>
              </p>
            </div>
          ) : (
            <div className="space-y-2 text-zinc-300">
              <p className="text-purple-400">from <span className="text-white">browser_use</span> import <span className="text-yellow-300">Agent, Controller</span></p>
              <p className="text-purple-400">from <span className="text-white">langchain_google_genai</span> import <span className="text-yellow-300">ChatGoogleGenerativeAI</span></p>
              <p className="text-zinc-500 mt-2"># Initialize LLM model &amp; controller</p>
              <p>llm = ChatGoogleGenerativeAI(model=<span className="text-emerald-300">&quot;gemini-2.0-flash&quot;</span>)</p>
              <p>agent = Agent(task=<span className="text-emerald-300">&quot;Run automated healthcheck and sync data&quot;</span>, llm=llm)</p>
              <p className="text-primary mt-2">history = await agent.run()</p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-4 bg-zinc-900/40 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-LLM Support</span>
            </span>
            <span>•</span>
            <span>Natural Language Control</span>
          </div>
          <Link
            href="/projects"
            className="text-white hover:text-primary font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <span>View Browser Automation Tool</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

    </section>
  );
}
