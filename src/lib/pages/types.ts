import type { Locale } from "@/i18n/locale";

export type PageAccent = string;

export type Localized<T> = Record<Locale, T>;

export type Hero = {
  title: string;
  intro: string;
};

// Section is locale-aware via Localized strings at parent PageData level
// but we keep per-locale PageData for simplicity
export type Section =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; id: string; number: string; title: string; icon?: unknown }
  | { kind: "dodont"; doItems: string[]; dontItems: string[] }
  | { kind: "callout"; paragraphs: { strong: string; text: string }[] }
  | { kind: "code"; lang: "css" | "jsx" | "text"; code: string; intro?: string; caption?: string }
  | { kind: "custom"; node: React.ReactNode }
  | { kind: "swatchGrid"; items: { name: string; token: string; hex: string; usage: string }[] }
  | { kind: "swatchRows"; items: { token: string; hex: string; label: string }[] }
  | { kind: "tokenRows"; items: { name: string; val: string; use: string }[] }
  | { kind: "demo"; variant: "contrast" | "semantic" | "spacing" | "touch" | "motion" | "alt" | "pageGoal" }
  | { kind: "typeDemo"; variant: "weights" | "ladder" | "numerals"; label: string; note?: string; h1?: string; h2?: string; body?: string; eyebrow?: string }
  | { kind: "iconGrid"; cells: { name: string; usage?: string; size?: number; boxStyle?: React.CSSProperties; iconStyle?: React.CSSProperties; bare?: boolean }[] }
  | { kind: "imageGrid"; demos: { label: string; ratio?: string; ratioTag?: string; overlay?: boolean; video?: boolean; caption?: string; note?: string }[] }
  | { kind: "layoutDemo"; variant: "container" | "breakpoints" | "bricks" | "hero"; label: string; note?: string }
  | { kind: "rtlDemo"; variant: "mirror" | "align" | "flip" | "tokens"; label: string; note?: string }
  | { kind: "higFigures"; items: { src: string; width: number; height: number; alt: string; caption: string; credit: string }[] }
  | { kind: "divider" };

export type PageData = {
  slug: string; // e.g. "foundations/colors"
  accent: string;
  hero: Hero;
  sections: Section[];
  // for placeholders: show coming soon skeleton styling
  skeleton?: boolean;
};

export type PageRegistry = Record<string, Localized<PageData>>;
