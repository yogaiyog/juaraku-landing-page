"use client";

import { motion } from "framer-motion";

/**
 * Hand-built SVG hero illustration: a central "kid at laptop" scene
 * surrounded by floating badges (AI robot, medal, rocket, code blocks,
 * graduation cap, game controller, Python-style mark, Scratch-style mark).
 * Everything is flat SVG + CSS transforms — no 3D engine, no raster image —
 * per the "no Three.js / no canvas 3D" constraint.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px] lg:h-[540px]" aria-hidden="true">
      {/* Center stage: child at laptop with a friendly AI companion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-x-8 bottom-6 top-10 flex items-end justify-center"
      >
        <svg viewBox="0 0 320 320" className="h-full w-full drop-shadow-2xl">
          {/* soft ground shadow */}
          <ellipse cx="160" cy="300" rx="110" ry="14" fill="#0B5FAF" opacity="0.08" />

          {/* Desk */}
          <rect x="70" y="230" width="180" height="14" rx="7" fill="#1E4AA8" />
          <rect x="90" y="244" width="14" height="46" rx="4" fill="#1E4AA8" />
          <rect x="216" y="244" width="14" height="46" rx="4" fill="#1E4AA8" />

          {/* Laptop */}
          <rect x="118" y="176" width="84" height="56" rx="8" fill="#0B5FAF" />
          <rect x="126" y="184" width="68" height="40" rx="4" fill="#EAF3FC" />
          {/* code lines on screen */}
          <rect x="132" y="190" width="30" height="4" rx="2" fill="#1E78C8" />
          <rect x="132" y="198" width="46" height="4" rx="2" fill="#F6B800" />
          <rect x="132" y="206" width="22" height="4" rx="2" fill="#1E78C8" />
          <rect x="102" y="230" width="116" height="8" rx="4" fill="#1E4AA8" />

          {/* Child silhouette (friendly, simple, non-identifiable) */}
          <circle cx="160" cy="150" r="22" fill="#FFC83D" />
          <path
            d="M126 232C126 202 140 186 160 186C180 186 194 202 194 232"
            fill="#1E78C8"
          />
          <path d="M138 168 Q160 156 182 168 L182 178 Q160 168 138 178 Z" fill="#0B5FAF" />

          {/* Graduation cap floating just above child's head */}
          <g transform="translate(132,96)">
            <path d="M28 0 L56 12 L28 24 L0 12 Z" fill="#1E4AA8" />
            <rect x="24" y="12" width="8" height="14" rx="2" fill="#1E4AA8" />
            <circle cx="52" cy="16" r="3" fill="#F6B800" />
          </g>
        </svg>
      </motion.div>

      {/* Floating: AI robot */}
      <FloatingItem className="left-0 top-2 sm:top-0" delay={0.1} duration={6.5}>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <rect x="14" y="20" width="42" height="34" rx="10" fill="#1E78C8" />
          <rect x="22" y="28" width="10" height="10" rx="3" fill="#F8FAFC" />
          <rect x="38" y="28" width="10" height="10" rx="3" fill="#F8FAFC" />
          <rect x="24" y="44" width="22" height="4" rx="2" fill="#FFC83D" />
          <rect x="30" y="8" width="10" height="12" rx="4" fill="#0B5FAF" />
          <circle cx="35" cy="6" r="4" fill="#F6B800" />
        </svg>
      </FloatingItem>

      {/* Floating: Gold medal */}
      <FloatingItem className="right-0 top-6 sm:right-2" delay={0.5} duration={5.5}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path d="M22 4L32 26L18 30L10 8Z" fill="#1E4AA8" />
          <path d="M42 4L32 26L46 30L54 8Z" fill="#1E78C8" />
          <circle cx="32" cy="38" r="20" fill="#FFC83D" stroke="#F6B800" strokeWidth="2" />
          <path
            d="M32 28L35 35.5L43 36.5L37 41.8L38.7 49.5L32 45.5L25.3 49.5L27 41.8L21 36.5L29 35.5Z"
            fill="#FFFFFF"
          />
        </svg>
      </FloatingItem>

      {/* Floating: Rocket */}
      <FloatingItem className="bottom-16 left-[-8px] sm:left-0" delay={0.9} duration={7}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 4C36 12 38 26 34 38L22 38C18 26 20 12 28 4Z" fill="#1E78C8" />
          <circle cx="28" cy="20" r="6" fill="#F8FAFC" />
          <path d="M22 34L12 44L20 42Z" fill="#F6B800" />
          <path d="M34 34L44 44L36 42Z" fill="#F6B800" />
          <path d="M24 40 L28 52 L32 40Z" fill="#FFC83D" />
        </svg>
      </FloatingItem>

      {/* Floating: Code block chip */}
      <FloatingItem className="bottom-8 right-[-4px] sm:right-4" delay={0.3} duration={6}>
        <div className="flex items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow-card">
          <span className="font-mono text-sm font-bold text-brand-blue-deep">&lt;/&gt;</span>
        </div>
      </FloatingItem>

      {/* Floating: Game controller */}
      <FloatingItem className="left-6 top-[42%] sm:left-2" delay={1.1} duration={6.2}>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
          <rect x="6" y="18" width="42" height="22" rx="11" fill="#1E4AA8" />
          <circle cx="18" cy="29" r="3" fill="#F8FAFC" />
          <rect x="15" y="26" width="6" height="6" fill="#F8FAFC" />
          <circle cx="38" cy="25" r="3" fill="#FFC83D" />
          <circle cx="44" cy="30" r="3" fill="#F6B800" />
        </svg>
      </FloatingItem>

      {/* Floating: Python-style badge */}
      <FloatingItem className="right-4 top-[46%] sm:right-0" delay={0.7} duration={5.8}>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-royal shadow-card">
          <span className="font-display text-lg font-extrabold text-white">Py</span>
        </div>
      </FloatingItem>

      {/* Floating: sparkle / AI icon */}
      <FloatingItem className="left-[38%] top-[-6px]" delay={1.3} duration={5}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 2L21 15L34 18L21 21L18 34L15 21L2 18L15 15Z" fill="#F6B800" />
        </svg>
      </FloatingItem>
    </div>
  );
}

function FloatingItem({
  children,
  className,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className ?? ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}
