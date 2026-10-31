"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  FileText,
  Hammer,
  LayoutGrid,
  Sparkles,
  Trophy,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { whatsappLink } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const highlightIcons: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  brain: Brain,
  bot: Bot,
  trophy: Trophy,
  video: Video,
  users: Users,
  hammer: Hammer,
  "file-text": FileText,
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
      {/* Decorative background blobs */}
      <FloatingBlob color="gold" className="right-[-120px] top-[-100px] h-[360px] w-[360px]" />
      <FloatingBlob color="blue" className="left-[-140px] top-[220px] h-[420px] w-[420px]" />

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

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button
              href={whatsappLink(dict.trialMessage)}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight size={18} />}
              className="w-full sm:w-auto"
            >
              {dict.startLearning}
            </Button>
            <Button
              href="#kelas"
              variant="secondary"
              icon={<LayoutGrid size={18} />}
              className="w-full sm:w-auto"
            >
              {dict.viewRoadmap}
            </Button>
          </div>

          {/* Trust highlights */}
          <ul className="mt-4 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {dict.highlights.map(({ icon, title }) => {
              const Icon = highlightIcons[icon] ?? Sparkles;
              return (
                <li
                  key={title}
                  className="flex flex-col items-start gap-2 rounded-2xl border border-black/5 bg-white/70 p-3 shadow-soft backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-deep">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
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
