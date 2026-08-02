"use client";

import { motion } from "framer-motion";
import { Gamepad2, Code2, Globe, Sparkles, Joystick, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { studentProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

const thumbnailIcons = [Gamepad2, Code2, Globe, Sparkles, Joystick, Cpu];

/**
 * Large showcase cards for the categories of projects JuaraKu students
 * build. Thumbnails are illustrative gradient panels with a representative
 * icon (no stock photography required, keeps the page fast and consistent).
 */
export function StudentProjects() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow="Student Work"
          title="Real Projects, Built by Real Students"
          description="A glimpse of what JuaraKu students create — from their very first Scratch game to full AI-powered applications."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentProjects.map((project, i) => {
            const Icon = thumbnailIcons[i % thumbnailIcons.length];
            const isGold = project.color === "gold";
            return (
              <motion.article
                key={project.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-card transition-shadow hover:shadow-lift"
              >
                {/* Thumbnail */}
                <div
                  className={cn(
                    "flex h-40 items-center justify-center",
                    isGold
                      ? "bg-gradient-to-br from-brand-gold-light/70 to-brand-gold"
                      : "bg-brand-gradient"
                  )}
                >
                  <Icon size={48} className={isGold ? "text-brand-blue-royal" : "text-white"} strokeWidth={1.75} />
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold text-ink-strong">{project.category}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-brand-blue-50 px-3 py-1 text-brand-blue-deep">
                      {project.level}
                    </span>
                    <span className="rounded-full bg-surface-mist px-3 py-1 text-ink/70">
                      {project.tech}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
