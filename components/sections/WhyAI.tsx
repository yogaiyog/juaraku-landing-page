"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconBadge } from "@/components/ui/Card";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * "AI is Changing Every Industry" — establishes stakes for parents before
 * introducing JuaraKu's programs. Ends on the reframed question that gives
 * the whole page its urgency.
 */
export function WhyAI({ dict }: { dict: Dictionary["whyAI"] }) {
  return (
    <section id="why-ai" className="relative overflow-hidden py-20 sm:py-28">
      <FloatingBlob color="blue" className="right-[-100px] top-10 h-[300px] w-[300px]" />

      <div className="section-shell relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.industries.map((industry, i) => (
            <Card key={industry.title} delay={i * 0.06} className="flex flex-col gap-4">
              <IconBadge icon={industry.icon} color={i % 2 === 0 ? "blue" : "gold"} />
              <h3 className="text-lg font-bold text-ink-strong">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-ink/75">{industry.description}</p>
            </Card>
          ))}
        </div>

        {/* Bottom reframing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-4xl bg-brand-gradient px-8 py-12 text-center text-white shadow-lift sm:px-14"
        >
          <p className="text-lg text-white/70 line-through decoration-2">
            {dict.reframe.strike}
          </p>
          <p className="text-2xl font-bold sm:text-3xl">{dict.reframe.lead}</p>
          <p className="font-display text-3xl font-extrabold text-[#FFC83D] sm:text-4xl">
            {dict.reframe.question}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
