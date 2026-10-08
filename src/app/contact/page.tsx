'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, CheckCircle, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function ContactPage() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formspree.io/f/mgaokpzw', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Direct Message',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.errors?.[0]?.message || 'Something went wrong while sending your message. Please try again or email directly.'
        );
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please check your connection or reach out via email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header (Centered) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 sm:mb-6 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-shiny mb-1 text-center">
          Contact
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed text-center">
          Let&apos;s discuss engineering opportunities, collaborations, or your product roadmap.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        
        {/* 1. First: Message Form (Main on Desktop, First on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 order-1"
        >
          <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-5 sm:p-6 shadow-2xl">
            <h3 className="text-lg sm:text-xl font-black text-white mb-1">Send a Message</h3>
            <p className="text-xs text-zinc-400 mb-4">Fill out the details below to start a conversation.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out! Your message has been delivered directly to my inbox. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-2xl flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* 2. Then: Direct Connect Info & 3. After that: Icons for Connecting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6 order-2"
        >
          {/* Direct Connect Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-white">Direct Connect</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Reach out directly via email, phone, or location. I typically respond within 24 hours.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-colors group"
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
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Phone</span>
                  <span className="text-sm font-bold text-white">{personal.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-white/10">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Location</span>
                  <span className="text-sm font-bold text-white">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* After that: Icons for Connecting */}
          <div className="pt-6 border-t border-zinc-900">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-4">
              Connect Across Platforms
            </span>
            <div className="flex flex-wrap gap-3">
              {personal.socialLinks.map((social) => {
                const isGithub = social.platform === 'GitHub';
                const isLinkedin = social.platform === 'LinkedIn';
                const Icon = isGithub ? Github : isLinkedin ? Linkedin : Code;
                const iconColor = isGithub ? 'text-white' : isLinkedin ? 'text-sky-400' : 'text-primary';
                
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs font-bold text-zinc-300 hover:text-white hover:border-white/30 transition-all shadow-md group"
                  >
                    <Icon className={`w-4 h-4 ${iconColor} group-hover:scale-110 transition-transform`} />
                    <span>{social.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
