"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBlob } from "@/components/ui/FloatingBlob";

/**
 * Final conversion moment — large, colorful, unmissable, with two paths
 * (commit now, or de-risk with a free trial) so parents at any stage of
 * decision-making have a clear next step.
 */
export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20"
        >
          <FloatingBlob color="gold" className="left-[-80px] top-[-80px] h-[260px] w-[260px] opacity-60" />
          <FloatingBlob color="gold" className="bottom-[-100px] right-[-60px] h-[300px] w-[300px] opacity-40" />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              The Future Won&rsquo;t Wait.
              <br />
              Start Building It Today.
            </h2>
            <p className="max-w-xl text-lg text-white/80">
              Give your child a head start in the age of AI — with real projects, real mentors,
              and a roadmap built for where technology is actually headed.
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button icon={<ArrowRight size={18} />}>Join JuaraKu</Button>
              <Button
                variant="ghost"
                className="!border-2 !border-white/40 !text-white hover:!bg-white/10"
                icon={<CalendarCheck size={18} />}
              >
                Book a Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
