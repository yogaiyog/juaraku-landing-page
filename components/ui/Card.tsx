"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import * as Icons from "lucide-react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Base floating card: rounded corners, soft shadow, gentle hover lift.
 * Wrapped in a scroll-reveal + staggered entrance animation.
 */
export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={cn(
        "rounded-3xl border border-black/5 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

type IconName = keyof typeof Icons;

interface IconBadgeProps {
  icon: string;
  color?: "blue" | "gold";
  size?: "sm" | "md" | "lg";
}

/**
 * Circular gradient badge rendering a lucide-react icon by (kebab or
 * pascal-ish) name. Falls back to a sparkle icon if the name isn't found,
 * so a typo in content data never breaks the page.
 */
export function IconBadge({ icon, color = "blue", size = "md" }: IconBadgeProps) {
  const pascalName = icon
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("") as IconName;

  const LucideIcon = (Icons[pascalName] as Icons.LucideIcon) ?? Icons.Sparkles;

  const sizeMap = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  };

  const iconSizeMap = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  const bg =
    color === "blue"
      ? "bg-gradient-to-br from-brand-blue to-brand-blue-royal"
      : "bg-gold-gradient";

  const iconColor = color === "blue" ? "text-white" : "text-brand-blue-royal";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl shadow-soft",
        bg,
        sizeMap[size]
      )}
      aria-hidden="true"
    >
      <LucideIcon size={iconSizeMap[size]} className={iconColor} strokeWidth={2.25} />
    </div>
  );
}
