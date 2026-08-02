import { cn } from "@/lib/utils";

interface FloatingBlobProps {
  className?: string;
  color?: "blue" | "gold";
}

/**
 * Purely decorative, animated gradient blob used to add soft color and depth
 * to section backgrounds without resorting to imagery or 3D scenes.
 * `aria-hidden` because it carries no content.
 */
export function FloatingBlob({ className, color = "blue" }: FloatingBlobProps) {
  const gradient =
    color === "blue"
      ? "bg-gradient-to-br from-brand-blue/25 to-brand-blue-royal/10"
      : "bg-gradient-to-br from-brand-gold-light/35 to-brand-gold/15";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "blob-shape pointer-events-none absolute -z-10 blur-2xl",
        gradient,
        className
      )}
    />
  );
}
