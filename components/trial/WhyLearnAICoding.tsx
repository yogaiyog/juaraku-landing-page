"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconBadge } from "@/components/ui/Card";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Section 3 — "Why Learn Coding & AI?" helps parents understand why coding
 * matters, not just what JuaraKu teaches. Ends with the closing statement
 * that frames coding as creation, not consumption.
 */
export function WhyLearnAICoding({ dict }: { dict: Dictionary["trial"]["whyCoding"] }) {
  return (
    <section id="why-coding" className="relative overflow-hidden py-20 sm:py-28">
      <FloatingBlob color="gold" className="left-[-100px] top-10 h-[300px] w-[300px]" />

      <div className="section-shell relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, i) => (
            <Card key={item.title} delay={i * 0.06} className="flex flex-col gap-4">
              <IconBadge icon={item.icon} color={i % 2 === 0 ? "blue" : "gold"} />
              <h3 className="text-lg font-bold text-ink-strong">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/75">{item.description}</p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center rounded-4xl bg-brand-gradient px-8 py-12 text-center text-white shadow-lift sm:px-14"
        >
          <p className="text-lg font-semibold leading-relaxed sm:text-xl">
            {dict.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
