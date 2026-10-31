"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, User, Users, UsersRound, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const optionIcons: Record<string, LucideIcon> = {
  batch: Users,
  "semi-private": UsersRound,
  private: User,
};

/**
 * Class formats & pricing — Batch, Semi Private and Private side by side so
 * parents can compare group size, price and fit at a glance. Each card opens
 * WhatsApp with a message naming the chosen format.
 */
export function ClassOptions({ dict }: { dict: Dictionary["classes"] }) {
  return (
    <section id="kelas" className="relative overflow-hidden bg-surface-soft py-20 sm:py-28">
      <FloatingBlob color="gold" className="left-[-120px] top-24 h-[320px] w-[320px] opacity-50" />

      <div className="section-shell relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {dict.options.map((option, i) => {
            const Icon = optionIcons[option.id] ?? Users;
            const featured = option.featured;
            return (
              <motion.article
                key={option.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex flex-col gap-6 overflow-hidden rounded-4xl p-7 shadow-card transition-shadow hover:shadow-lift sm:p-9",
                  featured
                    ? "bg-brand-gradient text-white shadow-lift lg:-my-4 lg:py-12"
                    : "border border-black/5 bg-white"
                )}
              >
                {featured ? (
                  <span className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-bl-2xl bg-gold-gradient px-4 py-1.5 text-sm font-bold text-brand-blue-royal">
                    <Sparkles size={14} aria-hidden="true" />
                    {dict.featuredLabel}
                  </span>
                ) : null}

                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                      featured ? "bg-white/15 text-white" : "bg-brand-blue-50 text-brand-blue-deep"
                    )}
                    aria-hidden="true"
                  >
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className={cn("font-display text-2xl font-extrabold", featured && "text-white")}>
                      {option.name}
                    </h3>
                    <p className={cn("text-sm font-semibold", featured ? "text-white/75" : "text-ink/60")}>
                      {option.size}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-display text-5xl font-extrabold leading-none">
                    {option.price}
                    <span className={cn("text-lg font-bold", featured ? "text-white/75" : "text-ink/55")}>
                      {dict.perMonth}
                    </span>
                  </p>
                  <p className={cn("mt-2 text-sm font-semibold", featured ? "text-white/75" : "text-ink/55")}>
                    {option.perSession}
                  </p>
                </div>

                <p className={cn("text-base leading-relaxed", featured ? "text-white/90" : "text-ink/75")}>
                  {option.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-semibold">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          featured ? "bg-brand-gold-light text-brand-blue-royal" : "bg-brand-blue-50 text-brand-blue-deep"
                        )}
                        aria-hidden="true"
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    href={whatsappLink(dict.ctaMessage.replace("{name}", option.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={featured ? "primary" : "secondary"}
                    icon={<ArrowRight size={18} />}
                    className="w-full"
                  >
                    {dict.cta.replace("{name}", option.name)}
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-black/5 bg-white px-6 py-6 text-center shadow-soft sm:px-10"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-ink/50">{dict.includedLabel}</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {dict.included.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue-deep"
              >
                <Check size={14} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink/65">{dict.packagesNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
