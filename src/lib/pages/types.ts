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
  | { kind: "buttonDemo"; variant: "variants" | "sizes" | "states" | "icons"; label: string; note?: string; tags?: string[]; tAction?: string; tMore?: string; tDelete?: string; tAdd?: string }
  | {
      kind: "inputDemo";
      variant: "anatomy" | "types" | "states" | "rtl";
      label: string;
      note?: string;
      tags?: string[];
      tLabel?: string;
      tPlaceholder?: string;
      tError?: string;
      tSearch?: string;
      tOptional?: string;
      tOptionalWord?: string;
      tMessage?: string;
      tAreaPlaceholder?: string;
      tWilaya?: string;
      tSelectPlaceholder?: string;
      tPhone?: string;
    }
  | {
      kind: "selectionDemo";
      variant: "anatomy" | "states" | "targets" | "choosing";
      label: string;
      note?: string;
      tags?: string[];
      tOption?: string;
      tParent?: string;
      tSetting?: string;
      tItems?: string;
    }
  | {
      kind: "overlayerDemo";
      variant: "drawer" | "dropdown" | "pins" | "motion";
      label: string;
      note?: string;
      tags?: string[];
      tTitle?: string;
      tLinks?: string[];
      tCta?: string;
      tToggle?: string;
      tTrigger?: string;
      tOptions?: string[];
      tSelected?: string;
      tCard?: string;
      tBody?: string;
      tDirs?: string;
      tShow?: string;
      tHide?: string;
      tBand?: string;
    }
  | {
      kind: "cardDemo";
      variant: "anatomy" | "states" | "grid";
      label: string;
      note?: string;
      tags?: string[];
      tImage?: string;
      tTitle?: string;
      tBody?: string;
      tAction?: string;
      tRest?: string;
      tHover?: string;
      tA?: string;
      tB?: string;
      tC?: string;
    }
  | {
      kind: "feedbackDemo";
      variant: "banner" | "success" | "pending" | "a11y";
      label: string;
      note?: string;
      tags?: string[];
      tErrTitle?: string;
      tErrDesc?: string;
      tWa?: string;
      tWarnTitle?: string;
      tWarnDesc?: string;
      tTitle?: string;
      tDesc?: string;
      tSubmit?: string;
      tSubmitting?: string;
      tNote?: string;
      tErr?: string;
      tOk?: string;
      tLoading?: string;
    }
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
