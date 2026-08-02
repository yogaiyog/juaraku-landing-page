"use client";

import { motion } from "framer-motion";
import { Laptop, Gamepad2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { flagshipPrograms } from "@/lib/data";
import { cn } from "@/lib/utils";

type Program = (typeof flagshipPrograms)[number];

/**
 * Flagship Programs — the two capstone tracks students choose between:
 * VibeCoder App (web/mobile) and VibeCoder Game (game development).
 */
export function FlagshipPrograms() {
  return (
    <section id="programs" className="relative bg-surface-soft py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Flagship Programs"
          title="Where Learning Becomes Real Creation"
          description="Every JuaraKu student works toward one of two capstone tracks — building portfolio-ready projects with real code and real AI tools."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {flagshipPrograms.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  const isBlue = program.accent === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-4xl border border-black/5 bg-white p-8 shadow-card sm:p-10"
    >
      {/* Decorative corner illustration */}
      <div
        className={cn(
          "absolute -right-8 -top-8 flex h-32 w-32 items-center justify-center rounded-full opacity-90",
          isBlue ? "bg-brand-blue-50" : "bg-brand-gold-light/25"
        )}
        aria-hidden="true"
      >
        {isBlue ? (
          <Laptop size={40} className="text-brand-blue-deep" strokeWidth={1.75} />
        ) : (
          <Gamepad2 size={40} className="text-[#B8860B]" strokeWidth={1.75} />
        )}
      </div>

      <span
        className={cn(
          "eyebrow",
          isBlue ? "" : "bg-brand-gold-light/20 text-[#8A6300]"
        )}
      >
        {program.tag}
      </span>

      <h3 className="mt-4 font-display text-2xl font-extrabold text-ink-strong sm:text-3xl">
        {program.name}
      </h3>

      <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
        {program.description}
      </p>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/50">
          Student projects
        </p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {program.projects.map((project) => (
            <li
              key={project}
              className="flex items-center gap-2 rounded-xl bg-surface-mist px-3 py-2 text-sm font-medium text-ink"
            >
              <CheckCircle2
                size={16}
                className={isBlue ? "text-brand-blue" : "text-[#F6B800]"}
              />
              {project}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button variant={isBlue ? "primary" : "secondary"} href="#roadmap">
          Explore {program.name}
        </Button>
      </div>
    </motion.div>
  );
}
