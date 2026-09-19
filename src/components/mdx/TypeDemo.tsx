// Minimal Apple HIG type demos — thin borders only, sharp corners.
// Live specimens rendered in IBM Plex Sans Arabic (this guide's chrome
// uses Inter, so the component sets the Plex stack explicitly).
// Translatable specimen strings stay in MDX props. Server-safe: no hooks.

import type { ReactNode } from "react";

export type TypeVariant = "weights" | "ladder" | "numerals";

const PLEX = "var(--font-plex-arabic), 'IBM Plex Sans Arabic', Tahoma, sans-serif";

function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tabular-nums text-[var(--apple-muted)]" dir="ltr">
      {children}
    </span>
  );
}

const WEIGHTS: { value: number; name: string }[] = [
  { value: 300, name: "Light" },
  { value: 400, name: "Regular" },
  { value: 500, name: "Medium" },
  { value: 600, name: "SemiBold" },
  { value: 700, name: "Bold" },
];

function WeightsDemo() {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      {WEIGHTS.map((w) => (
        <div key={w.value} className="flex items-baseline justify-between gap-3 py-2.5">
          <span className="text-[22px] leading-7 text-[var(--apple-text)]" style={{ fontFamily: PLEX, fontWeight: w.value }}>
            Aa أب
          </span>
          <span className="flex items-baseline gap-2">
            <span className="text-[12px] text-[var(--apple-muted)]">{w.name}</span>
            <Tag>{w.value}</Tag>
          </span>
        </div>
      ))}
    </div>
  );
}

function LadderDemo({ h1, h2, body, eyebrow }: { h1: string; h2: string; body: string; eyebrow: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-bold leading-[1.1] tracking-tight text-[var(--apple-text)]" style={{ fontFamily: PLEX, fontSize: 52 }}>
          {h1}
        </p>
        <p className="mt-1.5">
          <Tag>H1 · 52 · 700 · tight</Tag>
        </p>
      </div>
      <div>
        <p className="font-bold leading-[1.2] tracking-tight text-[var(--apple-text)]" style={{ fontFamily: PLEX, fontSize: 28 }}>
          {h2}
        </p>
        <p className="mt-1.5">
          <Tag>H2 · 28 · 700 · tight</Tag>
        </p>
      </div>
      <div>
        <p className="font-semibold leading-[1.65] text-[var(--apple-text)]" style={{ fontFamily: PLEX, fontSize: 18 }}>
          {body}
        </p>
        <p className="mt-1.5">
          <Tag>Body · 18 · 600 · 1.65</Tag>
        </p>
      </div>
      <div>
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-widest" style={{ fontFamily: PLEX }}>
          <span className="inline-block h-1 w-6 bg-[var(--brand-300)]" aria-hidden="true" />
          <span className="text-[var(--brand-300)]">{eyebrow}</span>
        </p>
        <p className="mt-1.5">
          <Tag>Eyebrow · xs · 700 · widest + dash</Tag>
        </p>
      </div>
    </div>
  );
}

function NumeralsDemo() {
  const rows = ["0123456789", "1984", "+213 33 83 50 50", "42%"];
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      {rows.map((r) => (
        <div key={r} className="flex items-baseline justify-between gap-3 py-2.5">
          <span className="text-[20px] font-semibold tabular-nums text-[var(--apple-text)]" dir="ltr" style={{ fontFamily: PLEX }}>
            {r}
          </span>
          <Tag>western · LTR always</Tag>
        </div>
      ))}
    </div>
  );
}

export function TypeDemo({
  variant,
  label,
  note,
  h1 = "",
  h2 = "",
  body = "",
  eyebrow = "",
}: {
  variant: TypeVariant;
  label: string;
  note?: string;
  h1?: string;
  h2?: string;
  body?: string;
  eyebrow?: string;
}) {
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "weights" ? <WeightsDemo /> : null}
        {variant === "ladder" ? <LadderDemo h1={h1} h2={h2} body={body} eyebrow={eyebrow} /> : null}
        {variant === "numerals" ? <NumeralsDemo /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}
