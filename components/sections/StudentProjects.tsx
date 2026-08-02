"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const thumbnailImages = [
  "/images/project-card/scratch.png",
  "/images/project-card/python.png",
  "/images/project-card/website.png",
  "/images/project-card/ai.png",
  "/images/project-card/gamedev.png",
  "/images/project-card/robotika.png",
];

/**
 * Large showcase cards for the categories of projects JuaraKu students
 * build. Thumbnails are illustrative gradient panels with a representative
 * icon (no stock photography required, keeps the page fast and consistent).
 */
export function StudentProjects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-shell flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={dict.title}
          description={dict.description}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((project, i) => {
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
                <div className="relative h-40 w-full overflow-hidden bg-surface-mist">
                  <Image
                    src={thumbnailImages[i % thumbnailImages.length]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
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
