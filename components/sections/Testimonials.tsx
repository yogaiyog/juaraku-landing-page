"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

/**
 * Social proof from parents and students. Avatars are initials-based
 * placeholders (no stock photography of real people, per brand guidance to
 * avoid depicting real individuals).
 */
export function Testimonials() {
  return (
    <section className="relative bg-surface-soft py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="What Families Say"
          title="Trusted by Parents, Loved by Kids"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col gap-5 rounded-3xl border border-black/5 bg-white p-7 shadow-card"
            >
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[#F6B800] text-[#F6B800]" />
                ))}
              </div>

              <blockquote className="text-base leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-strong">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
