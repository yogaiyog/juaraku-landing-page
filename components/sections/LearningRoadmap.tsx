"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Learning Roadmap — a real, ordered curriculum sequence, so numbered
 * milestones here genuinely encode progression (unlike decorative 01/02/03
 * markers elsewhere on the web).
 */
export function LearningRoadmap({ dict }: { dict: Dictionary["roadmap"] }) {
  return (
    <section id="roadmap" className="relative py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <ol className="relative mx-auto flex w-full max-w-2xl flex-col gap-0">
          {/* Connecting line (draws top-to-bottom on enter) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-10 left-6 top-10 w-0.5 bg-gradient-to-b from-brand-blue via-brand-blue-royal to-brand-gold-light sm:left-8"
          />

          {dict.steps.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
            >
              {/* Step marker */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-white shadow-soft sm:h-16 sm:w-16 sm:text-xl">
                {step.step}
              </div>

              <div
                className={cn(
                  "flex-1 rounded-3xl border border-black/5 bg-white p-5 shadow-card sm:p-6",
                  step.isChoice && "border-dashed border-brand-gold-light/60 bg-surface-mist"
                )}
              >
                <h3 className="font-display text-xl font-bold text-ink-strong">
                  {step.title}
                  {step.isChoice ? (
                    <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-[#B8860B]">
                      {dict.chooseOne}
                    </span>
                  ) : null}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue-deep"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}

          {/* Graduate */}
          <motion.li
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: dict.steps.length * 0.08 }}
            className="relative flex gap-5 sm:gap-7"
          >
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient shadow-gold sm:h-16 sm:w-16">
              <Trophy size={22} className="text-brand-blue-royal" />
            </div>
            <div className="flex-1 rounded-3xl bg-brand-gradient p-5 text-white shadow-lift sm:p-6">
              <h3 className="font-display text-xl font-bold">{dict.graduateTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {dict.graduateOutcomes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        </ol>
      </div>
    </section>
  );
}
