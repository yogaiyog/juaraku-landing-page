"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * "How to start" — the four steps from free trial to first class, next to a
 * photo of a live online lesson and the weekly class schedule, so parents
 * know exactly what happens after they reach out.
 */
export function HowItWorks({ dict }: { dict: Dictionary["howItWorks"] }) {
  return (
    <section id="cara-belajar" className="relative py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo + schedule card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl shadow-lift">
              <Image
                src="/images/how-it-works.jpg"
                alt={dict.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-royal/40 via-transparent to-transparent" />
            </div>

            <div className="relative -mt-16 ml-4 mr-4 rounded-3xl border border-black/5 bg-white p-5 shadow-card sm:absolute sm:-bottom-8 sm:-right-4 sm:ml-0 sm:mr-0 sm:mt-0 sm:w-80">
              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-strong">
                <CalendarDays size={18} className="text-brand-blue" aria-hidden="true" />
                {dict.scheduleTitle}
              </p>
              <ul className="flex flex-col gap-2">
                {dict.schedule.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-xl bg-surface-mist px-3 py-2 text-sm"
                  >
                    <span className="font-semibold text-ink">{row.label}</span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap font-bold text-brand-blue-deep">
                      <Clock size={14} aria-hidden="true" />
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Steps */}
          <ol className="flex flex-col gap-5">
            {dict.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 rounded-3xl border border-black/5 bg-white p-5 shadow-soft sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient font-display text-xl font-extrabold text-brand-blue-royal shadow-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-strong">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
