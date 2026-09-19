// Selection demos — checkboxes and switches. GREENFIELD by design: the
// production site (SPA elFath Website) ships ZERO selection controls — no
// type="checkbox", no role="switch" anywhere. This page is the standard for
// the first one, so EVERY specimen is INVENTED, tagged as such, and built
// strictly from the skin already documented in this guide: border #ECE8E4,
// system-50 #FAF8F6 floor, brand-300 #1D65AF state color, white glyphs,
// 2px brand focus ring, red-600 #DC2626 errors, 44×44 targets, sharp corners.
// Real <input type="checkbox"> elements drive every visual via peer-checked —
// no JavaScript, clickable right here in the page. Server-safe: no hooks.

import type { CSSProperties, ReactNode } from "react";

export type SelectionDemoVariant = "anatomy" | "states" | "targets" | "choosing";

// GUIDELINE-INVENTED tokens (extend the field skin verbatim). Unused skins
// stay as literals in classnames: floor #faf8f6, muted #737373, ink #1f1f1f.
const BORDER = "#ece8e4"; // system-200 — rest border, from field skin
const BRAND = "#1d65af"; // brand-300 — the "on" color
const RING = "0 0 0 2px #ffffff, 0 0 0 4px #1d65af"; // 2px brand ring, offset 2 — focus pairing

// Glyphs: inline SVG, not the icon pipeline — deterministic at 20px.
function CheckGlyph() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
      <path d="M2 6.2 4.8 9 10 3.4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function DashGlyph() {
  return <span className="h-0.5 w-2.5 bg-white" aria-hidden="true" />;
}

// Spec tag, LTR code tokens even on RTL pages.
function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tabular-nums text-[var(--apple-muted)]" dir="ltr">
      {children}
    </span>
  );
}

function Row({ tag, children }: { tag?: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 px-4 py-3.5">
      <div className="min-w-0 flex-1">{children}</div>
      {tag ? <Tag>{tag}</Tag> : null}
    </div>
  );
}

// ── The checkbox, 20×20 inside a 44×44 label ─────────────────────────────────
// Grid-stack pattern: input, box and glyph are SIBLINGS in one grid cell, so
// peer-checked drives the box fill and the glyph — no JavaScript at all.
function Checkbox({ defaultChecked, disabled }: { defaultChecked?: boolean; disabled?: boolean }) {
  return (
    <label className={`grid h-11 w-11 place-items-center ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>
      <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} className="peer sr-only" />
      <span
        aria-hidden="true"
        className={`col-start-1 row-start-1 h-5 w-5 border transition-colors peer-checked:border-[#1d65af] peer-checked:bg-[#1d65af] peer-focus-visible:[box-shadow:0_0_0_2px_#ffffff,0_0_0_4px_#1d65af] ${
          disabled && !defaultChecked ? "bg-[#faf8f6]" : "bg-transparent"
        }`}
        style={{ borderColor: BORDER }}
      />
      <span aria-hidden="true" className="col-start-1 row-start-1 text-white opacity-0 peer-checked:opacity-100">
        <CheckGlyph />
      </span>
    </label>
  );
}

// Indeterminate — a DOM property with no HTML attribute, so the specimen is
// decorative (no input): the parent row of mixed children renders the dash.
function CheckboxIndeterminate() {
  return (
    <span className="grid h-11 w-11 place-items-center">
      <span aria-hidden="true" className="col-start-1 row-start-1 flex h-5 w-5 items-center justify-center border bg-[#1d65af]" style={{ borderColor: BRAND }}>
        <DashGlyph />
      </span>
    </span>
  );
}

// ── The switch, 44×28 track with 24px thumb in a 44×44 target ────────────────
// Same grid-stack pattern: track and thumb are siblings of the input, so
// peer-checked flips both. Travel is a CSS var so the RTL row mirrors it.
function Switch({ defaultOn = false, rtl = false }: { defaultOn?: boolean; rtl?: boolean }) {
  return (
    <label
      className="grid h-11 w-11 cursor-pointer place-items-center"
      style={{ "--thumb-dx": rtl ? "-0.5rem" : "0.5rem" } as CSSProperties}
    >
      <input type="checkbox" role="switch" defaultChecked={defaultOn} className="peer sr-only" />
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 h-7 w-11 rounded-full border transition-colors duration-200 peer-checked:border-[#1d65af] peer-checked:bg-[#1d65af] peer-focus-visible:[box-shadow:0_0_0_2px_#ffffff,0_0_0_4px_#1d65af]"
        style={{ borderColor: BORDER }}
      />
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 h-6 w-6 rounded-full bg-[#737373] transition-all duration-200 peer-checked:translate-x-[var(--thumb-dx)] peer-checked:bg-white"
      />
    </label>
  );
}

// One selection row: control + label, single line, tag on the right.
function Field({ children, label, muted }: { children: ReactNode; label: string; muted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      {children}
      <span className={`text-sm ${muted ? "text-[#737373]" : "text-[#1f1f1f]"}`}>{label}</span>
    </span>
  );
}

// ── Anatomy ──────────────────────────────────────────────────────────────────
function AnatomyDemo({ tOption, tParent, tSetting, tags }: { tOption: string; tParent: string; tSetting: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <Field label={tOption}><Checkbox /></Field>
      </Row>
      <Row tag={tags[1]}>
        <Field label={tOption}><Checkbox defaultChecked /></Field>
      </Row>
      <Row tag={tags[2]}>
        <Field label={tParent}><CheckboxIndeterminate /></Field>
      </Row>
      <Row tag={tags[3]}>
        <Field label={tSetting}><Switch /></Field>
      </Row>
      <Row tag={tags[4]}>
        <Field label={tSetting}><Switch defaultOn /></Field>
      </Row>
    </div>
  );
}

// ── States ───────────────────────────────────────────────────────────────────
function StatesDemo({ tOption, tags }: { tOption: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <Field label={tOption}><Checkbox /></Field>
      </Row>
      <Row tag={tags[1]}>
        <span className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center">
            <span aria-hidden="true" className="col-start-1 row-start-1 h-5 w-5 border bg-[#1d65af]" style={{ borderColor: BRAND, boxShadow: RING }} />
          </span>
          <span className="text-sm text-[#1f1f1f]">{tOption}</span>
        </span>
      </Row>
      <Row tag={tags[2]}>
        <Field label={tOption} muted><Checkbox disabled /></Field>
      </Row>
      <Row tag={tags[3]}>
        <Field label={tOption} muted><Checkbox defaultChecked disabled /></Field>
      </Row>
    </div>
  );
}

// ── Targets & RTL ────────────────────────────────────────────────────────────
function TargetsDemo({ tOption, tags }: { tOption: string; tags: string[] }) {
  return (
    <div className="border-y border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2">
        <Tag>{tags[0]}</Tag>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <Field label={tOption}><Checkbox /></Field>
        <Field label={tOption}><Checkbox /></Field>
      </div>
      <div className="border-t border-[var(--hig-border)] px-4 py-2">
        <Tag>{tags[1]}</Tag>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3" dir="ltr">
          <Field label="Cookie" muted><Switch defaultOn /></Field>
          <span className="font-mono text-[10px] text-[#737373]">+8px →</span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-3" dir="rtl">
          <Field label="Cookie" muted><Switch defaultOn rtl /></Field>
          <span className="font-mono text-[10px] text-[#737373]">← −8px</span>
        </div>
      </div>
    </div>
  );
}

// ── Choosing ─────────────────────────────────────────────────────────────────
function ChoosingDemo({ tItems, tags }: { tItems: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <span className="flex flex-col gap-1">
          <Field label="Products"><Checkbox defaultChecked /></Field>
          <Field label="Projects"><Checkbox defaultChecked /></Field>
          <Field label="News"><Checkbox /></Field>
        </span>
      </Row>
      <Row tag={tags[1]}>
        <span className="flex flex-col gap-1">
          <Field label={tItems}><Checkbox /></Field>
          <Field label={tItems}><Checkbox /></Field>
        </span>
      </Row>
      <Row tag={tags[2]}>
        <Field label="Newsletter"><Switch defaultOn /></Field>
      </Row>
    </div>
  );
}

const DEFAULT_TAGS: Record<SelectionDemoVariant, string[]> = {
  anatomy: [
    "checkbox off · INVENTED 20×20",
    "checkbox on · brand-300 #1D65AF",
    "indeterminate · dash · INVENTED",
    "switch off · INVENTED 44×28",
    "switch on · thumb 24px white",
  ],
  states: [
    "rest · system-200 border",
    "focus · 2px brand ring — offset 2",
    "disabled off · system-100 · opacity-50",
    "disabled on · brand-300 · opacity-50",
  ],
  targets: [
    "44×44 target · 20px box · rows stack",
    "RTL mirror · var(--thumb-dx)",
  ],
  choosing: [
    "multi-select · checkboxes",
    "mutually exclusive · NOT checkboxes",
    "instant switch · no submit",
  ],
};

export function SelectionDemo({
  variant,
  label,
  note,
  tags,
  tOption = "Option",
  tParent = "All products",
  tSetting = "Newsletter",
  tItems = "Choice",
}: {
  variant: SelectionDemoVariant;
  label: string;
  note?: string;
  tags?: string[];
  tOption?: string;
  tParent?: string;
  tSetting?: string;
  tItems?: string;
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "anatomy" ? <AnatomyDemo tOption={tOption} tParent={tParent} tSetting={tSetting} tags={t} /> : null}
        {variant === "states" ? <StatesDemo tOption={tOption} tags={t} /> : null}
        {variant === "targets" ? <TargetsDemo tOption={tOption} tags={t} /> : null}
        {variant === "choosing" ? <ChoosingDemo tItems={tItems} tags={t} /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}

