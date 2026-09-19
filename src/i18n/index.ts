import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import type { Dictionary } from "./dictionary";
import type { Locale } from "./locale";

export * from "./locale";
export type { Dictionary } from "./dictionary";

const dictionaries: Record<Locale, Dictionary> = { ar, en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}