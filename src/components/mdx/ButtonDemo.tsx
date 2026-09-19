// Minimal Apple HIG button demos — thin borders only, sharp corners.
// Real <button> specimens so hover, disabled, and focus are LIVE.
// Specimens use the official repo's tokens VERBATIM (Button.tsx + globals.css):
// brand-300 #1D65AF, brand-200 #69A2E5, brand-400 #193B62,
// brand-100 rgba(163,192,223,0.35). Literal hexes — NOT this guide's
// bridged brand classes — so the specimens show true El Fath color.
// The destructive red-outline variant + square sizes are GUIDELINE-INVENTED
// (no Button.tsx truth), extrapolated from the same tokens.
// Translatable strings — labels AND spec tags — stay in MDX props.
// Server-safe: no hooks.

import type { CSSProperties, ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export type ButtonDemoVariant = "variants" | "sizes" | "states" | "icons";

const PLEX = "var(--font-plex-arabic), 'IBM Plex Sans Arabic', Tahoma, sans-serif";

// Official truth — Button.tsx verbatim, radius made explicit (0 = sharp).
const BASE =
  "inline-flex items-center justify-center rounded-none tracking-wide transition-colors duration-150 cursor-pointer select-none";
const SIZES = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
} as const;
// INVENTED companions — same heights, no horizontal padding, 20px glyph.
const SQUARES = {
  sm: "h-8 w-8 p-0 text-xs",
  md: "h-10 w-10 p-0 text-sm",
  lg: "h-12 w-12 p-0 text-base",
} as const;
const TRUTH = {
  // bg-brand-300 text-white font-bold hover:bg-brand-200 active:bg-brand-300
  primary: "bg-[#1D65AF] text-white font-bold hover:bg-[#69A2E5] active:bg-[#1D65AF]",
  // border border-brand-300 text-brand-300 font-semibold bg-transparent
  // hover:bg-brand-300 hover:text-white active:bg-brand-400
  secondary:
    "border border-[#1D65AF] text-[#1D65AF] font-semibold bg-transparent hover:bg-[#1D65AF] hover:text-white active:bg-[#193B62]",
  // text-brand-300 font-semibold bg-transparent hover:bg-brand-100 active:bg-brand-100
  ghost:
    "text-[#1D65AF] font-semibold bg-transparent hover:bg-[rgba(163,192,223,0.35)] active:bg-[rgba(163,192,223,0.35)]",
} as const;
// GUIDELINE-INVENTED: red outline mirroring secondary's logic.
const INVENTED = {
  destructive:
    "border border-[#BE123C] text-[#BE123C] font-semibold bg-transparent hover:bg-[#BE123C] hover:text-white active:bg-[#991B1B]",
} as const;

const DEFAULT_TAGS: Record<ButtonDemoVariant, string[]> = {
  variants: [
    "primary · solid · bold",
    "secondary · outline · semibold",
    "ghost · text only · semibold",
    "destructive · INVENTED red outline",
  ],
  sizes: [
    "sm · h-8 · px-4 · xs",
    "md · h-10 · px-5 · sm — default",
    "lg · h-12 · px-7 · base — hero + form",
    "icon-only · square 32/40/48 · INVENTED",
  ],
  states: [
    "default",
    "hover · brand-200 #69A2E5 (primary)",
    "disabled · opacity-40 · not-allowed",
    "focus-visible · 2px brand + 2px offset",
  ],
  icons: [
    "leading · non-directional stays",
    "trailing · directional · LTR",
    "RTL · directional mirrors · non-directional stays",
  ],
};

function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tabular-nums text-[var(--apple-muted)]" dir="ltr">
      {children}
    </span>
  );
}

// Spec tags stay LTR (code tokens) even inside RTL pages — translators
// keep the tokens, translate the descriptors around them.
function LtrTag({ children }: { children?: ReactNode }) {
  return (
    <span dir="ltr" className="inline-block">
      <Tag>{children}</Tag>
    </span>
  );
}

function Row({ tag, children }: { tag: string; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-2.5">
      <span className="flex flex-wrap items-center gap-2">{children}</span>
      <LtrTag>{tag}</LtrTag>
    </div>
  );
}

function SpecButton({
  className,
  size = "md",
  square = false,
  children,
  disabled = false,
  label,
  style,
}: {
  className: string;
  size?: keyof typeof SIZES;
  square?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  label?: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={label}
      style={{ fontFamily: PLEX, ...style }}
      className={`${BASE} ${square ? SQUARES[size] : SIZES[size]} ${className} ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

function VariantsDemo({ tAction, tDelete, tags }: { tAction: string; tDelete: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <SpecButton className={TRUTH.primary}>{tAction}</SpecButton>
      </Row>
      <Row tag={tags[1]}>
        <SpecButton className={TRUTH.secondary}>{tAction}</SpecButton>
      </Row>
      <Row tag={tags[2]}>
        <SpecButton className={TRUTH.ghost}>{tAction}</SpecButton>
      </Row>
      <Row tag={tags[3]}>
        <SpecButton className={INVENTED.destructive}>{tDelete}</SpecButton>
      </Row>
    </div>
  );
}

function SizesDemo({ tAction, tAdd, tags }: { tAction: string; tAdd: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <SpecButton className={TRUTH.primary} size="sm">
          {tAction}
        </SpecButton>
      </Row>
      <Row tag={tags[1]}>
        <SpecButton className={TRUTH.primary} size="md">
          {tAction}
        </SpecButton>
      </Row>
      <Row tag={tags[2]}>
        <SpecButton className={TRUTH.primary} size="lg">
          {tAction}
        </SpecButton>
      </Row>
      <Row tag={tags[3]}>
        {(Object.keys(SQUARES) as (keyof typeof SQUARES)[]).map((s) => (
          <SpecButton key={s} className={TRUTH.secondary} size={s} square label={tAdd}>
            <HugeiconsIcon icon={Add01Icon as never} size={20} strokeWidth={1.5} color="currentColor" />
          </SpecButton>
        ))}
      </Row>
    </div>
  );
}

function StatesDemo({ tAction, tags }: { tAction: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <SpecButton className={TRUTH.primary}>{tAction}</SpecButton>
      </Row>
      <Row tag={tags[1]}>
        <SpecButton className="bg-[#69A2E5] text-white font-bold">{tAction}</SpecButton>
      </Row>
      <Row tag={tags[2]}>
        <SpecButton className={TRUTH.primary} disabled>
          {tAction}
        </SpecButton>
      </Row>
      <Row tag={tags[3]}>
        <SpecButton
          className={TRUTH.primary}
          style={{ outline: "2px solid #1D65AF", outlineOffset: "2px" }}
        >
          {tAction}
        </SpecButton>
      </Row>
    </div>
  );
}

function IconsDemo({ tAction, tMore, tags }: { tAction: string; tMore: string; tags: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
        <Row tag={tags[0]}>
          <SpecButton className={TRUTH.primary}>
            <HugeiconsIcon icon={Add01Icon as never} size={20} strokeWidth={1.5} color="currentColor" />
            <span className="ms-2">{tAction}</span>
          </SpecButton>
        </Row>
        <Row tag={tags[1]}>
          <span dir="ltr">
            <SpecButton className={TRUTH.secondary}>
              <span className="me-2">{tMore}</span>
              <HugeiconsIcon icon={ArrowRight01Icon as never} size={20} strokeWidth={1.5} color="currentColor" />
            </SpecButton>
          </span>
        </Row>
      </div>
      <div className="border border-[var(--hig-border)]">
        <div className="border-b border-[var(--hig-border)] px-4 py-2">
          <LtrTag>{tags[2]}</LtrTag>
        </div>
        <div className="flex flex-wrap items-center gap-2 p-4" dir="rtl">
          <SpecButton className={TRUTH.secondary}>
            <span className="me-2">{tMore}</span>
            <span style={{ transform: "scaleX(-1)" }} className="inline-flex">
              <HugeiconsIcon icon={ArrowRight01Icon as never} size={20} strokeWidth={1.5} color="currentColor" />
            </span>
          </SpecButton>
          <SpecButton className={TRUTH.primary}>
            <HugeiconsIcon icon={Add01Icon as never} size={20} strokeWidth={1.5} color="currentColor" />
            <span className="ms-2">{tAction}</span>
          </SpecButton>
        </div>
      </div>
    </div>
  );
}

export function ButtonDemo({
  variant,
  label,
  note,
  tags,
  tAction = "Request a quote",
  tMore = "Learn more",
  tDelete = "Delete record",
  tAdd = "Add",
}: {
  variant: ButtonDemoVariant;
  label: string;
  note?: string;
  tags?: string[];
  tAction?: string;
  tMore?: string;
  tDelete?: string;
  tAdd?: string;
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "variants" ? <VariantsDemo tAction={tAction} tDelete={tDelete} tags={t} /> : null}
        {variant === "sizes" ? <SizesDemo tAction={tAction} tAdd={tAdd} tags={t} /> : null}
        {variant === "states" ? <StatesDemo tAction={tAction} tags={t} /> : null}
        {variant === "icons" ? <IconsDemo tAction={tAction} tMore={tMore} tags={t} /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}
