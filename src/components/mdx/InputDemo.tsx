// Input demos — fields at true production skin: thin borders, sharp corners.
// Real <input>/<textarea>/<select> specimens so typing and focus are LIVE.
// Specimens use the official repo's tokens VERBATIM (QuoteForm.tsx +
// ProductsGrid.tsx + production globals.css): system-50 #FAF8F6, system-200
// #ECE8E4, system-400 #737373, system-500 #1F1F1F, brand-300 #1D65AF,
// error red #DC2626. Literal hexes — NOT this guide's bridged classes —
// so the specimens show true El Fath color.
// INVENTED and tagged: error border, disabled field, select chevron,
// focus ring pairing, optional suffix. Translatable strings — labels,
// placeholders, spec tags — stay in registry/MDX props.
// Server-safe: no hooks.

import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Search01Icon } from "@hugeicons/core-free-icons";

export type InputDemoVariant = "anatomy" | "types" | "states" | "rtl";

// Production truth — QuoteForm.tsx verbatim, width made explicit for row layout.
const FIELD =
  "w-full h-10 border border-[#ece8e4] bg-[#faf8f6] px-3 text-sm text-[#1f1f1f] placeholder:text-[#737373] focus:border-[#1d65af] focus:bg-white focus:outline-none";
// ProductsGrid.tsx verbatim — compact toolbar rung with the icon gutter.
const FIELD_SEARCH =
  "w-full h-9 border border-[#ece8e4] bg-[#faf8f6] ps-9 pe-3 text-sm text-[#1f1f1f] placeholder:text-[#737373] focus:border-[#1d65af] focus:bg-white focus:outline-none";
// QuoteForm.tsx verbatim — p-3 and leading-6, the only field without a height.
const FIELD_AREA =
  "w-full border border-[#ece8e4] bg-[#faf8f6] p-3 text-sm leading-6 text-[#1f1f1f] placeholder:text-[#737373] focus:border-[#1d65af] focus:bg-white focus:outline-none";
// QuoteForm.tsx label voice.
const LABEL = "text-xs font-semibold text-[#1f1f1f]";
const ERR = "text-xs text-[#dc2626]";
// GUIDELINE-INVENTED pairings: red border mirrors the red message;
// disabled mirrors the button rule (opacity + not-allowed, system-100 floor);
// focus ring pairs production's border+bg shift with the global 2px ring.
const ERR_BORDER = "border-[#dc2626] focus:border-[#dc2626]";
const DISABLED = "opacity-50 cursor-not-allowed bg-[#f5f4f3]";
const RING = { outline: "2px solid #1d65af", outlineOffset: "2px" } as const;

function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tabular-nums text-[var(--apple-muted)]" dir="ltr">
      {children}
    </span>
  );
}

// Rows carry spec tags; tags stay LTR (code tokens) even inside RTL pages.
function Row({ tag, children }: { tag?: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-6 px-4 py-3.5">
      <div className="min-w-0 flex-1">{children}</div>
      {tag ? <Tag>{tag}</Tag> : null}
    </div>
  );
}

// ── Anatomy ──────────────────────────────────────────────────────────────────
function AnatomyDemo({
  tLabel,
  tPlaceholder,
  tError,
  tOptional,
  tOptionalWord,
  tags,
}: {
  tLabel: string;
  tPlaceholder: string;
  tError: string;
  tOptional: string;
  tOptionalWord: string;
  tags: string[];
}) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="" placeholder={tPlaceholder} className={FIELD} />
        </label>
      </Row>
      <Row tag={tags[1]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="" placeholder={tPlaceholder} aria-invalid="true" className={FIELD} />
          <span className={ERR}>{tError}</span>
        </label>
      </Row>
      <Row tag={tags[2]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>
            {tOptional} <span className="font-normal text-[#737373]">· {tOptionalWord}</span>
          </span>
          <input defaultValue="" placeholder={tPlaceholder} className={FIELD} />
        </label>
      </Row>
    </div>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────
function TypesDemo({
  tLabel,
  tSearch,
  tMessage,
  tAreaPlaceholder,
  tWilaya,
  tSelectPlaceholder,
  tPhone,
  tags,
}: {
  tLabel: string;
  tSearch: string;
  tMessage: string;
  tAreaPlaceholder: string;
  tWilaya: string;
  tSelectPlaceholder: string;
  tPhone: string;
  tags: string[];
}) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="" placeholder={tMessage} className={FIELD} />
        </label>
      </Row>
      <Row tag={tags[1]}>
        <label className="block max-w-[320px]">
          <span className="sr-only">{tSearch}</span>
          <span className="relative block">
            <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-[#737373]">
              <HugeiconsIcon icon={Search01Icon as never} size={16} strokeWidth={2} color="currentColor" />
            </span>
            <input type="search" defaultValue="" placeholder={tSearch} className={FIELD_SEARCH} />
          </span>
        </label>
      </Row>
      <Row tag={tags[2]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tMessage}</span>
          <textarea rows={4} defaultValue="" placeholder={tAreaPlaceholder} className={FIELD_AREA} />
        </label>
      </Row>
      <Row tag={tags[3]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tWilaya}</span>
          <span className="relative block">
            <select defaultValue="" className={FIELD}>
              <option value="">{tSelectPlaceholder}</option>
              <option>Alger</option>
              <option>Oran</option>
              <option>Sétif</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-[#1f1f1f]">
              <HugeiconsIcon icon={ArrowDown01Icon as never} size={16} strokeWidth={1.5} color="currentColor" />
            </span>
          </span>
        </label>
      </Row>
      <Row tag={tags[4]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tPhone}</span>
          <input dir="ltr" inputMode="tel" defaultValue="" placeholder="+213 560 00 00 00" className={FIELD} />
        </label>
      </Row>
    </div>
  );
}

// ── States ───────────────────────────────────────────────────────────────────
function StatesDemo({ tLabel, tError, tags }: { tLabel: string; tError: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="Valeur saisie" className={FIELD} />
        </label>
      </Row>
      <Row tag={tags[1]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="" className={FIELD} style={RING} />
        </label>
      </Row>
      <Row tag={tags[2]}>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="Donnée invalide" aria-invalid="true" className={`${FIELD} ${ERR_BORDER}`} />
          <span className={ERR}>{tError}</span>
        </label>
      </Row>
      <Row tag={tags[3]}>
        <label className="flex max-w-[320px] flex-col gap-1.5 opacity-50">
          <span className={LABEL}>{tLabel}</span>
          <input
            defaultValue="Verrouillé"
            disabled
            className={`${FIELD} ${DISABLED} [&:focus]:border-[#ece8e4] [&:focus]:bg-[#f5f4f3]`}
          />
        </label>
      </Row>
    </div>
  );
}

// ── RTL ──────────────────────────────────────────────────────────────────────
function RtlDemo({
  tLabel,
  tPhone,
  tMessage,
  tags,
}: {
  tLabel: string;
  tPhone: string;
  tMessage: string;
  tags: string[];
}) {
  return (
    <div className="border-y border-[var(--hig-border)]" dir="rtl">
      <div className="border-b border-[var(--hig-border)] px-4 py-2">
        <LtrTag>{tags[0]}</LtrTag>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>{tLabel}</span>
          <input defaultValue="" placeholder={tMessage} className={FIELD} />
        </label>
        <label className="flex max-w-[320px] flex-col gap-1.5">
          <span className={LABEL}>
            {tPhone} <span className="font-normal text-[#737373]">· dir=ltr</span>
          </span>
          <input dir="ltr" inputMode="tel" defaultValue="" placeholder="+213 560 00 00 00" className={FIELD} />
        </label>
      </div>
    </div>
  );
}

// Spec tags stay LTR (code tokens) even inside RTL pages — translators
// keep the tokens, translate the description.
function LtrTag({ children }: { children?: ReactNode }) {
  return (
    <span className="block font-mono text-[10px] tabular-nums text-[var(--apple-muted)]" dir="ltr">
      {children}
    </span>
  );
}

const DEFAULT_TAGS: Record<InputDemoVariant, string[]> = {
  anatomy: ["label · xs · semibold", "error message · red-600 #DC2626", "optional · tag in label"],
  types: [
    "text · h-10 · px-3",
    "search · h-9 · ps-9 · icon start-3",
    "textarea · rows=4 · leading-6",
    "select · native · chevron INVENTED",
    "phone · dir=ltr · inputMode=tel",
  ],
  states: [
    "filled · system-50 floor",
    "focus · border-brand-300 + 2px ring",
    "error · red border INVENTED + message",
    "disabled · INVENTED opacity-50 · system-100",
  ],
  rtl: ["RTL · paddings mirror · label right", "numbers · dir=ltr pinned"],
};

export function InputDemo({
  variant,
  label,
  note,
  tags,
  tLabel = "Full name",
  tPlaceholder = "Your answer",
  tError = "This field is required",
  tSearch = "Search",
  tOptional = "Company",
  tOptionalWord = "optional",
  tMessage = "Message",
  tAreaPlaceholder = "Tell us more",
  tWilaya = "Wilaya",
  tSelectPlaceholder = "Select a wilaya",
  tPhone = "Phone",
}: {
  variant: InputDemoVariant;
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
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "anatomy" ? (
          <AnatomyDemo tLabel={tLabel} tPlaceholder={tPlaceholder} tError={tError} tOptional={tOptional} tOptionalWord={tOptionalWord} tags={t} />
        ) : null}
        {variant === "types" ? (
          <TypesDemo tLabel={tLabel} tSearch={tSearch} tMessage={tMessage} tAreaPlaceholder={tAreaPlaceholder} tWilaya={tWilaya} tSelectPlaceholder={tSelectPlaceholder} tPhone={tPhone} tags={t} />
        ) : null}
        {variant === "states" ? <StatesDemo tLabel={tLabel} tError={tError} tags={t} /> : null}
        {variant === "rtl" ? <RtlDemo tLabel={tLabel} tPhone={tPhone} tMessage={tMessage} tags={t} /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}

