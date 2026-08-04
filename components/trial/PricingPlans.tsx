"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CalendarClock, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/Card";
import { FloatingBlob } from "@/components/ui/FloatingBlob";
import { whatsappHref } from "@/lib/config";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type PricingTab = "batch" | "private";

const PROMO_DAYS = 7;

const localeTag: Record<Locale, string> = {
  id: "id-ID",
  en: "en-US",
};

/**
 * Detailed pricing section for the personalized sales page — a Batch/Private
 * tab switcher over three plans (monthly / 3-month / 9-month) with
 * strikethrough original prices, savings badges, and a rolling promo deadline
 * (today + 7 days) on the 9-month plans, followed by the full benefit
 * checklist parents get when joining.
 */
export function PricingPlans({
  dict,
  lang,
}: {
  dict: Dictionary["trial"];
  lang: Locale;
}) {
  const [tab, setTab] = useState<PricingTab>("batch");
  const [promoDate, setPromoDate] = useState<string | null>(null);
  const plans = dict.pricing[tab].plans;
  const note = tab === "batch" ? dict.pricing.batchNote : dict.pricing.privateNote;

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + PROMO_DAYS);
    setPromoDate(
      new Intl.DateTimeFormat(localeTag[lang], {
        day: "numeric",
        month: "long",
      }).format(end)
    );
  }, [lang]);

  const promoText = promoDate
    ? dict.pricing.promoUntil.replace("{date}", promoDate)
    : null;

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <FloatingBlob color="blue" className="right-[-100px] top-20 h-[320px] w-[320px]" />

      <div className="section-shell relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.pricing.eyebrow}
          title={dict.pricing.title}
          description={dict.pricing.description}
        />

        {/* Batch / Private toggle */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex items-center gap-1 rounded-full border border-black/10 bg-white p-1 shadow-soft"
            role="group"
            aria-label={dict.pricing.eyebrow}
          >
            <button
              type="button"
              onClick={() => setTab("batch")}
              aria-pressed={tab === "batch"}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-bold transition-colors",
                tab === "batch"
                  ? "bg-brand-gradient text-white shadow-gold"
                  : "text-brand-blue-deep hover:bg-brand-blue-50"
              )}
            >
              {dict.pricing.batchLabel}
            </button>
            <button
              type="button"
              onClick={() => setTab("private")}
              aria-pressed={tab === "private"}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-bold transition-colors",
                tab === "private"
                  ? "bg-brand-gradient text-white shadow-gold"
                  : "text-brand-blue-deep hover:bg-brand-blue-50"
              )}
            >
              {dict.pricing.privateLabel}
            </button>
          </div>
          <p className="text-sm font-semibold text-ink/60">{note}</p>
        </div>

        {/* Plans */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3"
        >
          {plans.map((plan, i) => {
            const isFeatured = plan.featured;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex flex-col gap-6 overflow-hidden rounded-4xl p-8 shadow-card transition-shadow hover:shadow-lift sm:p-10",
                  isFeatured
                    ? "bg-brand-gradient text-white shadow-lift"
                    : "border border-black/5 bg-white"
                )}
              >
                {isFeatured ? (
                  <span className="absolute right-0 top-0 rounded-bl-2xl bg-gold-gradient px-4 py-1.5 text-sm font-bold text-brand-blue-royal">
                    {dict.pricing.featuredLabel}
                  </span>
                ) : null}

                <div>
                  <h3 className="font-display text-2xl font-extrabold">{plan.name}</h3>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      isFeatured ? "text-white/75" : "text-ink/60"
                    )}
                  >
                    {plan.sessions}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {plan.wasPrice ? (
                    <span
                      className={cn(
                        "text-base font-semibold line-through",
                        isFeatured ? "text-white/60" : "text-ink/40"
                      )}
                    >
                      {plan.wasPrice}
                    </span>
                  ) : null}
                  <p className="font-display text-4xl font-extrabold leading-none">
                    {plan.price}
                    <span
                      className={cn(
                        "text-xl font-bold",
                        isFeatured ? "text-white/75" : "text-ink/60"
                      )}
                    >
                      {plan.period}
                    </span>
                  </p>
                  {plan.savings ? (
                    <span
                      className={cn(
                        "mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold",
                        isFeatured
                          ? "bg-white/20 text-white"
                          : "bg-brand-gold-light/20 text-[#8A6300]"
                      )}
                    >
                      <Check size={14} aria-hidden="true" />
                      {plan.savings}
                    </span>
                  ) : null}
                  {plan.promo && promoText ? (
                    <span
                      className={cn(
                        "mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold",
                        isFeatured
                          ? "bg-gold-gradient text-brand-blue-royal shadow-gold"
                          : "border-2 border-brand-gold-light/60 bg-brand-gold-light/10 text-[#8A6300]"
                      )}
                    >
                      <CalendarClock size={15} aria-hidden="true" />
                      {promoText}
                    </span>
                  ) : null}
                </div>

                <div className="mt-auto">
                  <Button
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isFeatured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {dict.pricing.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits */}
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={dict.benefits.eyebrow}
            title={dict.benefits.title}
            description={dict.benefits.description}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.benefits.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-4 shadow-soft"
              >
                <IconBadge
                  icon={item.icon}
                  size="sm"
                  color={i % 2 === 0 ? "blue" : "gold"}
                />
                <p className="text-sm font-bold text-ink-strong">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-2xl items-center gap-3 rounded-full border border-brand-blue-100 bg-brand-blue-50/60 px-6 py-3.5 text-center text-sm font-semibold text-brand-blue-deep"
          >
            <Bot size={20} className="shrink-0" aria-hidden="true" />
            {dict.benefits.aiProNote}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
