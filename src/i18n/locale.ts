export const locales = ["ar", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const cookieName = "sdg-lang";

export const localeMeta: Record<Locale, { label: string; nativeLabel: string; dir: "ltr" | "rtl"; htmlLang: string }> = {
  ar: { label: "Arabic", nativeLabel: "العربية", dir: "rtl", htmlLang: "ar" },
  en: { label: "English", nativeLabel: "English", dir: "ltr", htmlLang: "en" },
  fr: { label: "Français", nativeLabel: "Français", dir: "ltr", htmlLang: "fr" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function resolveLocale(raw: string | null | undefined): Locale {
  if (isLocale(raw)) return raw;
  return defaultLocale;
}