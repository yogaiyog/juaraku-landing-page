"use client";

import { motion } from "framer-motion";
import { ArrowRight, Pencil } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { whatsappHref } from "@/lib/config";
import { interpolateName } from "@/lib/assessment/generator";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Section 1 of the personalized landing page — a warm "welcome back" message
 * that thanks the family for attending the trial class, mirroring the home
 * Hero's two-column layout and friendly illustration.
 */
export function PersonalizedHero({
  dict,
  name,
  onEdit,
}: {
  dict: Dictionary["trial"];
  name: string;
  onEdit: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-glow pb-16 pt-10 sm:pb-24 sm:pt-16">
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
          <span className="eyebrow">{dict.hero.eyebrow}</span>

          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            {dict.hero.titlePre}{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {interpolateName(dict.hero.titleAccent, name)}
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink/80">
            {interpolateName(dict.hero.description, name)}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight size={18} />}
            >
              {dict.hero.ctaTrial}
            </Button>
            <Button variant="ghost" onClick={onEdit} icon={<Pencil size={18} />}>
              {dict.hero.ctaEdit}
            </Button>
          </div>
        </motion.div>

        {/* Illustration column */}
        <HeroIllustration />
      </div>
    </section>
  );
}
