"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Gamepad2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const programImages: Record<string, { src: string; position: string }> = {
  "vibecoder-app": {
    src: "/images/programs/vibecoder-app.jpg",
    position: "70% 35%",
  },
  "vibecoder-game": {
    src: "/images/programs/vibecoder-game.jpg",
    position: "50% 40%",
  },
};

/**
 * Flagship Programs — the two capstone tracks students choose between:
 * VibeCoder App (web/mobile) and VibeCoder Game (game development).
 */
export function FlagshipPrograms({ dict }: { dict: Dictionary["programs"] }) {
  return (
    <section id="programs" className="relative bg-surface-soft py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {dict.items.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  index,
  dict,
}: {
  program: Dictionary["programs"]["items"][number];
  index: number;
  dict: Dictionary["programs"];
}) {
  const isBlue = program.accent === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-4xl border border-black/5 bg-white shadow-card"
    >
      {/* Banner photo */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <Image
          src={programImages[program.id].src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: programImages[program.id].position }}
        />
        {/* Soft fade into the white card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
        <span
          className={cn(
            "absolute bottom-3 left-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-card sm:left-10",
            isBlue ? "bg-brand-gradient text-white" : "bg-gold-gradient text-brand-blue-royal"
          )}
          aria-hidden="true"
        >
          {isBlue ? <Laptop size={28} strokeWidth={2} /> : <Gamepad2 size={28} strokeWidth={2} />}
        </span>
      </div>

      <div className="p-8 sm:p-10">
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
          {dict.studentProjectsLabel}
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
          {dict.explorePrefix} {program.name}
        </Button>
      </div>
      </div>
    </motion.div>
  );
}
