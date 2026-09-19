import type { Locale } from "@/i18n/locale";
import type { PageData } from "./types";
import { designPrinciples } from "./data/design-principles";
import { colors } from "./data/colors";
import { typography } from "./data/typography";
import { icons } from "./data/icons";
import { images } from "./data/images";
import { layout } from "./data/layout";
import { rtl } from "./data/rtl";
import { branding } from "./data/branding";
import { accessibility } from "./data/accessibility";
import { skeletons } from "./data/skeletons";

const registry: Record<string, Record<Locale, PageData>> = {
  "get-started/design-principles": designPrinciples as unknown as Record<Locale, PageData>,
  "foundations/colors": colors,
  "foundations/typography": typography,
  "foundations/icons": icons,
  "foundations/images": images,
  "foundations/layout": layout,
  "foundations/rtl": rtl,
  "foundations/branding": branding,
  "foundations/accessibility": accessibility,
  ...skeletons,
};

export function getPageData(slug: string, locale: Locale): PageData | null {
  const entry = registry[slug];
  if (!entry) return null;
  return entry[locale] ?? entry.en ?? null;
}

export function isDesignPrinciplesSlug(slug: string): boolean {
  return slug === "get-started/design-principles";
}

export function getPrinciplesData(locale: Locale) {
  return (designPrinciples as unknown as Record<Locale, unknown>)[locale] ?? designPrinciples.en;
}
