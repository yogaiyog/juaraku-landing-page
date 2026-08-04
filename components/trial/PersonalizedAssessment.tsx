"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { cn } from "@/lib/utils";
import { interpolateName } from "@/lib/assessment/generator";
import type { AssessmentResult } from "@/lib/assessment/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Section 2 — the dynamically generated assessment. Shows the student's name
 * plus the three generated paragraphs (strengths, growth, conclusion) with a
 * copy-to-clipboard action for sharing via WhatsApp.
 */
export function PersonalizedAssessment({
  dict,
  result,
  name,
}: {
  dict: Dictionary["trial"];
  result: AssessmentResult;
  name: string;
}) {
  const [copied, setCopied] = useState(false);
  const [p1, p2, p3] = result.paragraphs;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(result.paragraphs.join("\n\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. permissions) — silently ignore.
    }
  };

  const blocks = [
    { label: dict.assessment.strengthsLabel, text: p1, gold: false },
    { label: dict.assessment.growthLabel, text: p2, gold: true },
    { label: dict.assessment.conclusionLabel, text: p3, gold: false },
  ];

  return (
    <section id="assessment" className="relative bg-surface-soft py-20 sm:py-28">
      <FloatingBlob color="blue" className="left-[-120px] top-24 h-[320px] w-[320px]" />

      <div className="section-shell relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.assessment.eyebrow}
          title={interpolateName(dict.assessment.title, name)}
          description={interpolateName(dict.assessment.description, name)}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-4xl border border-black/5 bg-white p-8 shadow-card sm:p-10"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-deep">
                <User size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {dict.assessment.nameLabel}
                </p>
                <p className="font-display text-xl font-extrabold text-ink-strong">
                  {name}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue-50 px-4 py-2 text-sm font-semibold text-brand-blue-deep transition-colors hover:border-brand-blue"
            >
              {copied ? (
                <>
                  <Check size={16} aria-hidden="true" />
                  {dict.assessment.copied}
                </>
              ) : (
                <>
                  <Copy size={16} aria-hidden="true" />
                  {dict.assessment.copy}
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col gap-7">
            {blocks.map((block) => (
              <div key={block.label} className="flex flex-col gap-2">
                <span
                  className={cn(
                    "inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide",
                    block.gold
                      ? "bg-brand-gold-light/20 text-[#8A6300]"
                      : "bg-brand-blue-50 text-brand-blue-deep"
                  )}
                >
                  {block.label}
                </span>
                <p className="text-base leading-relaxed text-ink/80">{block.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
