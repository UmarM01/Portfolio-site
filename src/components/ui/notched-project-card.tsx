'use client';

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NotchedProjectCardProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  title: string;
  description?: string;
  /** cover photograph */
  image: string;
  imageAlt?: string;
  /** a pill at the top of the cover, e.g. the year or status */
  badge?: string;
  tags?: string[];
  /** a product screen over the photo (transparent PNG/WebP works best) */
  screen?: { src: string; alt: string; className?: string };
  /** a dark wash between the photo and the screen, 0 to 1 */
  dim?: number;
  monochrome?: boolean;
  /** the colour behind the card; the notch is painted in it */
  surface?: string;
  /** the arrow disc's fill on hover (any CSS colour); defaults to the theme's primary */
  accent?: string;
  /** the arrow's colour on that fill; pick one that contrasts with `accent` */
  accentForeground?: string;
  className?: string;
}

const DISC = 56; // the arrow disc, px
const BLOCK = 72; // the notch block, px (radius = BLOCK - DISC / 2)
const FILLET = 24; // the curve where the cut meets the cover's edges, px

export function NotchedProjectCard({
  href = "#",
  onClick,
  title,
  description,
  image,
  imageAlt = "",
  badge,
  tags = [],
  screen,
  dim = screen ? 0.45 : 0.2,
  monochrome = false,
  surface = "#000000",
  accent = "#D1FF4D",
  accentForeground = "#000000",
  className,
}: NotchedProjectCardProps) {
  const tone = monochrome
    ? "grayscale transition-[filter,scale] duration-500 group-hover:grayscale-0 group-focus-visible:grayscale-0"
    : "transition-[scale] duration-500";

  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex flex-col rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background cursor-pointer select-none",
        className,
      )}
    >
      <div className="relative">
        {/* the cover */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-[22px] sm:rounded-[26px] bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors">
          <img
            src={image}
            alt={screen ? "" : imageAlt || title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              tone,
            )}
          />
          {dim > 0 && (
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
            />
          )}
          {screen && (
            <img
              src={screen.src}
              alt={screen.alt}
              className={cn(
                "absolute bottom-0 right-0 w-[82%] origin-bottom-right drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)]",
                tone,
                screen.className,
              )}
            />
          )}
          {badge && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-start p-3 sm:p-4">
              <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md shadow-lg">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* the notch: a block with a concave corner, and a fillet at each
            end where the cut meets the cover's right and bottom edges */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0"
          style={{ width: BLOCK, height: BLOCK, borderTopLeftRadius: BLOCK - DISC / 2, background: surface }}
        />
        {[
          { bottom: BLOCK, right: 0 },
          { bottom: 0, right: BLOCK },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute"
            style={{
              ...pos,
              width: FILLET,
              height: FILLET,
              background: `radial-gradient(circle at top left, transparent ${FILLET - 0.5}px, ${surface} ${FILLET}px)`,
            }}
          />
        ))}

        {/* the arrow, nested in the notch */}
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-zinc-900 border border-white/15 text-white transition-all duration-300 group-hover:scale-105 shadow-xl",
            accent
              ? "group-hover:bg-[#D1FF4D] group-hover:text-black group-hover:border-[#D1FF4D]"
              : "group-hover:bg-white group-hover:text-black",
          )}
          style={{
            width: DISC,
            height: DISC,
          }}
        >
          <ArrowUpRight className="size-4 sm:size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div className="mt-3 px-1">
        <h3 className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-primary transition-colors flex items-center justify-between">
          <span>{title}</span>
        </h3>
        {description && (
          <p className="mt-1 text-xs text-zinc-400 font-medium line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap items-center gap-1.5">
            <ul className="flex flex-wrap gap-1.5">
              {tags.map((t, i) => (
                <li
                  key={`${t}-${i}`}
                  className="rounded-md bg-zinc-900 border border-white/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotchedProjectCard;
