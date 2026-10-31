"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, IconBadge } from "@/components/ui/Card";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Trust-building feature grid aimed squarely at parents evaluating JuaraKu.
 */
export function WhyParents({ dict }: { dict: Dictionary["parents"] }) {
  return (
    <section className="relative bg-surface-soft py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.features.map((feature, i) => (
            <Card key={feature.title} delay={i * 0.05} className="flex flex-col gap-3">
              <IconBadge icon={feature.icon} color={i % 2 === 0 ? "blue" : "gold"} size="sm" />
              <h3 className="text-base font-bold text-ink-strong">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
