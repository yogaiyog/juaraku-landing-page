"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  Map,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { whatsappHref } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const highlightIcons: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  brain: Brain,
  bot: Bot,
  trophy: Trophy,
};

/**
 * Hero section — the page's thesis: a confident, warm promise that coding
 * and AI fluency is the defining skill for the next generation, paired with
 * a layered floating illustration rather than a 3D scene.
 */
export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-glow pb-16 pt-10 sm:pb-24 sm:pt-16"
    >
      {/* Decorative background: blobs + floating code snippets */}
      <FloatingBlob color="gold" className="right-[-120px] top-[-100px] h-[360px] w-[360px]" />
      <FloatingBlob color="blue" className="left-[-140px] top-[220px] h-[420px] w-[420px]" />
      <DecorativeCodeSnippet className="left-4 top-24 hidden lg:block" text="print('Hello, future!')" />
      <DecorativeCodeSnippet className="right-6 top-[60%] hidden lg:block" text="if (curious) { learn() }" />

      <div className="section-shell relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="eyebrow">{dict.eyebrow}</span>

          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {dict.title.pre}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {dict.title.accent}
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            {dict.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight size={18} />}
            >
              {dict.startLearning}
            </Button>
            <Button href="#roadmap" variant="secondary" icon={<Map size={18} />}>
              {dict.viewRoadmap}
            </Button>
          </div>

          {/* Trust highlights */}
          <ul className="mt-6 grid w-full max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {dict.highlights.map(({ icon, title }) => {
              const Icon = highlightIcons[icon] ?? Sparkles;
              return (
                <li key={title} className="flex flex-col items-start gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-deep">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="whitespace-pre-line text-sm font-semibold leading-snug text-ink">
                    {title}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Illustration column */}
        <HeroIllustration />
      </div>
    </section>
  );
}

function DecorativeCodeSnippet({ className, text }: { className?: string; text: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute z-0 select-none rounded-xl bg-white/80 px-4 py-2 font-mono text-xs text-brand-blue-deep shadow-soft ${className ?? ""}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.div>
  );
}
