"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlowingLogos, type Logo } from "@/components/ui/logo-cloud-marquee-utils/flowing-logos";
import { cn } from "@/lib/utils";

export type { Logo };

interface LogoCloudMarqueeProps {
  title?: string;
  description?: string;
  row1?: Logo[];
  row2?: Logo[];
  row3?: Logo[];
  className?: string;
}

// ── 3-Line Tier Data ─────────────────────────────────────────────────────────

export const defaultRow1: Logo[] = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    name: "Rust",
  },
];

export const defaultRow2: Logo[] = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    name: "FastAPI",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    name: "Express.js",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    name: "Linux",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
  },
];

export const defaultRow3: Logo[] = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    name: "Supabase",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    name: "AWS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    name: "Cloudflare R2",
  },
];

export default function LogoCloudMarquee({
  title,
  description,
  row1 = defaultRow1,
  row2 = defaultRow2,
  row3 = defaultRow3,
  className,
}: LogoCloudMarqueeProps) {
  const words = title ? title.split(" ") : [];

  return (
    <section className={cn("relative w-full overflow-hidden py-8 sm:py-12", className)}>
      <div className="mx-auto max-w-7xl px-0 sm:px-6">
        
        {/* Section Header (Optional) */}
        {title && (
          <div className="px-4 sm:px-0 text-center mb-8 sm:mb-12">
            <h2 className="relative z-10 mx-auto max-w-4xl text-2xl font-black tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block text-shiny"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative z-10 mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm text-zinc-400 md:text-base leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        {/* 3-Line Flowing Moving Marquee (Always Visible - No Scroll Delay or Entrance Fade) */}
        <div className={cn("relative flex flex-col gap-3 sm:gap-4", title ? "mt-8 sm:mt-12" : "mt-0")}>
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 sm:w-36 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 sm:w-36 bg-gradient-to-l from-black via-black/80 to-transparent" />

          {/* Line 1: Frontend Ecosystem (Scrolls Left) */}
          <FlowingLogos
            data={row1}
            variant="wide"
            reverse={false}
            className="[--duration:65s]"
          />

          {/* Line 2: Backend & Distributed Services (Scrolls Right) */}
          <FlowingLogos
            data={row2}
            variant="wide"
            reverse={true}
            className="[--duration:58s]"
          />

          {/* Line 3: Databases, Cloud & Infrastructure (Scrolls Left) */}
          <FlowingLogos
            data={row3}
            variant="wide"
            reverse={false}
            className="[--duration:72s]"
          />
        </div>
      </div>
    </section>
  );
}

export { LogoCloudMarquee };
