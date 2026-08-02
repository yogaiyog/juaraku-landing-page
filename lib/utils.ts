/** Lightweight className combiner (keeps us dependency-free for such a small need). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
