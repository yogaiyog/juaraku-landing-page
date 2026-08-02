"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

/**
 * Animates a number counting up from 0 to `value` once it scrolls into view.
 * Uses Framer Motion's imperative `animate` on a motion value for smooth,
 * interruption-safe counting rather than re-rendering on every tick via state.
 */
export function Counter({ value, suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
