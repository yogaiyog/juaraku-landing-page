"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Pills switching between /id and /en while preserving the current path.
 * Writes the `NEXT_LOCALE` cookie so the root "/" redirect (middleware)
 * keeps the user's chosen language on their next visit.
 */
export function LanguageSwitcher() {
  const pathname = usePathname();

  const firstSegment = pathname.split("/")[1];
  const active = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const rest = isLocale(firstSegment) ? pathname.slice(firstSegment.length + 1) : pathname;
  const cleanRest = rest === "" ? "/" : rest;

  const select = (loc: (typeof locales)[number]) => {
    document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1"
      role="group"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const isActive = loc === active;
        const href = `/${loc}${cleanRest === "/" ? "" : cleanRest}`;
        return isActive ? (
          <span
            key={loc}
            aria-current="true"
            className="rounded-full bg-brand-blue-deep px-3 py-1 text-xs font-bold text-white"
          >
            {loc.toUpperCase()}
          </span>
        ) : (
          <Link
            key={loc}
            href={href}
            onClick={() => select(loc)}
            lang={loc}
            className="rounded-full px-3 py-1 text-xs font-bold text-brand-blue-deep transition-colors hover:bg-brand-blue-50"
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
