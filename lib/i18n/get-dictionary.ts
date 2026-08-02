import { cache } from "react";
import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { id } from "./dictionaries/id";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, id };

export const getDictionary = cache((locale: Locale): Dictionary => {
  return dictionaries[locale] ?? en;
});
