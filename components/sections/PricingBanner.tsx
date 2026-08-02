"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

/**
 * Slim pricing highlight banner — "starting at Rp500rb/month" plus the key
 * benefits and a WhatsApp trial CTA. Sits between social proof and the FAQ
 * so the price is presented right before conversion.
 */
export function PricingBanner({ dict }: { dict: Dictionary["pricing"] }) {
  return (
    <section className="pt-16 sm:pt-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-brand-gradient px-8 py-10 text-white shadow-lift lg:flex-row lg:gap-12 lg:px-12"
        >
          {/* Price */}
          <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
              {dict.label}
            </span>
            <p className="font-display text-4xl font-extrabold sm:text-5xl">
              {dict.price}
              <span className="text-xl font-bold text-white/70 sm:text-2xl">
                {dict.period}
              </span>
            </p>
          </div>

          {/* Benefits */}
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {dict.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold"
              >
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight size={18} />}
            className="shrink-0"
          >
            {dict.cta}
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
