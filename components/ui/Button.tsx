"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-gradient text-brand-blue-royal shadow-gold hover:shadow-lift",
  secondary:
    "bg-white text-brand-blue-deep border-2 border-brand-blue-50 hover:border-brand-blue shadow-soft",
  ghost: "bg-transparent text-brand-blue-deep hover:bg-brand-blue-50",
};

/**
 * Brand CTA button. Uses a Framer Motion tap/hover lift plus a subtle radial
 * "ripple" pseudo-element that expands from the pointer on click.
 */
export function Button({
  variant = "primary",
  icon,
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-base font-semibold transition-shadow duration-300",
    variantStyles[variant],
    className
  );

  const content = (
    <motion.span
      className={classes}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...props} className="inline-block">
      {content}
    </button>
  );
}
