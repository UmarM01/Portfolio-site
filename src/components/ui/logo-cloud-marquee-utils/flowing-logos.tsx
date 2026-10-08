'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface Logo {
  name: string;
  image: string;
}

interface FlowingLogosProps {
  data?: Logo[];
  variant?: 'wide' | 'compact';
  reverse?: boolean;
  className?: string;
}

export function FlowingLogos({
  data = [],
  variant = 'wide',
  reverse = false,
  className,
}: FlowingLogosProps) {
  // Duplicate data to create a seamless infinite marquee loop
  const repeatedData = [...data, ...data, ...data];
  const animClass = reverse ? 'animate-canopy-x-reverse' : 'animate-canopy-x';

  return (
    <div
      className={cn(
        'group flex flex-nowrap overflow-hidden p-1 [--gap:1rem] sm:[--gap:1.5rem] [gap:var(--gap)] select-none w-full',
        className
      )}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className={cn('flex flex-nowrap shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]', animClass)}>
        {repeatedData.map((item, idx) => (
          <div
            key={`logo-1-${idx}`}
            className={cn(
              'flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-950/80 px-3.5 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-zinc-900 shadow-lg shrink-0',
              variant === 'wide' ? 'min-w-[130px] sm:min-w-[160px]' : 'min-w-[110px] sm:min-w-[120px]'
            )}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-5 sm:h-6 w-auto max-w-[80px] sm:max-w-[100px] object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : null}
            <span className="text-xs sm:text-sm font-bold text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={cn('flex flex-nowrap shrink-0 justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]', animClass)}
      >
        {repeatedData.map((item, idx) => (
          <div
            key={`logo-2-${idx}`}
            className={cn(
              'flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-950/80 px-3.5 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-zinc-900 shadow-lg shrink-0',
              variant === 'wide' ? 'min-w-[130px] sm:min-w-[160px]' : 'min-w-[110px] sm:min-w-[120px]'
            )}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-5 sm:h-6 w-auto max-w-[80px] sm:max-w-[100px] object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : null}
            <span className="text-xs sm:text-sm font-bold text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
