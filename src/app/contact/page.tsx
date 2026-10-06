'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ContactPage() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default email client with prefilled details
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14 text-center sm:text-left"
      >
        <span className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-2 inline-block">
          Let&apos;s Connect
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-shiny mb-3">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2">
          Available for software engineering roles, full-stack development contracts, and ambitious technical projects worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
        
        {/* Left Column: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white">Direct Communication</h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Email</span>
                  <span className="text-sm font-bold text-white">{personal.email}</span>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-bold text-white">{personal.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-white/10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Location</span>
                  <span className="text-sm font-bold text-white">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-zinc-900">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-4">
              Connect Across Platforms
            </span>
            <div className="flex flex-wrap gap-3">
              {personal.socialLinks.map((social) => {
                const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Code;
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs font-bold text-zinc-300 hover:text-white hover:border-white/30 transition-all shadow-md"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{social.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2">Send a Message</h3>
            <p className="text-xs text-zinc-400 mb-8">Fill out the details below to start a conversation.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-zinc-400">If your mail app didn't open automatically, you can write directly to {personal.email}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-2xl flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>

    </div>
  );
}
