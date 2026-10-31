"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// The picture has a plain white backdrop; multiply blending lets the section's
// soft gradient show through it so it never reads as a white rectangle.

/**
 * Hero illustration: a child at a laptop with a friendly robot, code blocks
 * and a rocket drawn around them, floating gently.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-[3/2] w-full"
        >
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 560px"
            className="mix-blend-multiply object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
