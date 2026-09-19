"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

// Strict Apple HIG minimal — thin hig-border, transparent/hover only, no fills, no gradients, no 2xl
// Keep typography 13-14px, muted #6e6e73, text #1d1d1f, blue #0071e3 only for links

export function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 border-t border-[var(--hig-border)] pt-8 mt-10 flex items-baseline gap-3 text-[17px] font-semibold leading-6 text-[var(--apple-text)]"
    >
      <span className="font-mono text-[12px] font-normal tabular-nums text-[var(--apple-muted)]">{number}</span>
      <span>{title}</span>
    </h2>
  );
}

export function DoList({ items = [] }: { items?: string[] }) {
  return (
    <ul className="space-y-2">
      {(items ?? []).map((t, i) => (
        <li key={i} className="flex gap-2.5 text-[13.5px] leading-6 text-[var(--apple-text)]">
          <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--apple-text)]" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
export function DontList({ items = [] }: { items?: string[] }) {
  return (
    <ul className="space-y-2">
      {(items ?? []).map((t, i) => (
        <li key={i} className="flex gap-2.5 text-[13.5px] leading-6 text-[var(--apple-text-secondary)]">
          <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--apple-muted)]" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

// Minimal DoDont — two columns, thin border only, no emerald/red fills
export function DoDontGrid({ doItems = [], dontItems = [] }: { doItems?: string[]; dontItems?: string[] }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="border-t border-[var(--hig-border)] pt-3">
        <div className="mt-2">
          <DoList items={doItems ?? []} />
        </div>
      </div>
      <div className="border-t border-[var(--hig-border)] pt-3">
        <div className="mt-2">
          <DontList items={dontItems ?? []} />
        </div>
      </div>
    </div>
  );
}

export function ContrastTable() {
  const { t } = useI18n();
  const data = t.demos.contrast;
  return (
    <div className="mt-4 overflow-hidden border-y border-[var(--hig-border)]">
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead className="border-b border-[var(--hig-border)] text-[11px] font-normal text-[var(--apple-muted)]">
            <tr>
              <th className="py-2.5 pe-2 ps-3 font-normal text-start">{data.columns.pair}</th>
              <th className="px-3 py-2.5 font-mono font-normal whitespace-nowrap tabular-nums text-start">{data.columns.ratio}</th>
              <th className="px-3 py-2.5 font-mono font-normal whitespace-nowrap tabular-nums text-start">{data.columns.aa}</th>
              <th className="py-2.5 ps-2 pe-3 font-normal text-start">{data.columns.status}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--hig-border)]">
            {data.rows.map((r) => (
              <tr key={r.pair}>
                <td className="py-2.5 pe-2 ps-3 text-[13px] leading-5 text-[var(--apple-text)]">{r.pair}</td>
                <td className="px-3 py-2.5 font-mono text-[12px] tabular-nums text-[var(--apple-text)]">{r.ratio}</td>
                <td className="px-3 py-2.5 font-mono text-[12px] tabular-nums text-[var(--apple-muted)]">{r.need}</td>
                <td className={`py-2.5 ps-2 pe-3 text-[12px] ${r.ok ? "text-[var(--apple-text)]" : "text-red-700 dark:text-red-400"}`}>
                  {r.ok ? data.passLabel : data.failLabel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="py-2.5 text-[12px] leading-5 text-[var(--apple-muted)]">{data.footnote}</p>
    </div>
  );
}

export function SemanticTokens() {
  const { t } = useI18n();
  const tokens = [
    { name: "--color-text-primary", val: "#1d1d1f" },
    { name: "--color-text-secondary", val: "#515154" },
    { name: "--color-bg", val: "#ffffff" },
    { name: "--color-accent", val: "#0071e3" },
    { name: "--color-error", val: "#BE123C" },
    { name: "--color-success", val: "#0A7A42" },
  ];
  return (
    <div className="mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      {tokens.map((tkn, i) => (
        <div key={tkn.name} className="flex items-center justify-between gap-3 py-2.5">
          <span className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full border border-[var(--hig-border)]" style={{ background: tkn.val }} />
            <span className="font-mono text-[12px] text-[var(--apple-text)]">{tkn.name}</span>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--apple-muted)]">{tkn.val}</span>
          </span>
          <span className="text-[12px] text-[var(--apple-muted)]">{t.demos.tokens.use[i]}</span>
        </div>
      ))}
      <p className="py-2.5 text-[12px] leading-5 text-[var(--apple-muted)]">{t.demos.tokens.footnote}</p>
    </div>
  );
}

export function SpacingRuler() {
  const { t } = useI18n();
  const steps = [8, 16, 24, 32, 48];
  return (
    <div className="mt-4 border-y border-[var(--hig-border)] py-4">
      <div className="flex items-end gap-6">
        {steps.map((s) => (
          <div key={s} className="flex flex-col items-center gap-1.5">
            <div className="w-[1px] bg-[var(--apple-muted-2)]" style={{ height: s }} />
            <span className="font-mono text-[11px] tabular-nums text-[var(--apple-muted)]">{s}</span>
          </div>
        ))}
        <span className="ms-auto text-[12px] text-[var(--apple-muted)]">{t.demos.spacing.caption}</span>
      </div>
      <p className="mt-3 text-[12px] leading-5 text-[var(--apple-muted)]">{t.demos.spacing.footnote}</p>
    </div>
  );
}

export function TouchTargetDemo() {
  const { t } = useI18n();
  return (
    <div className="mt-4 flex items-center gap-4 border-y border-[var(--hig-border)] py-4">
      <div className="flex h-11 w-11 items-center justify-center border border-dashed border-[var(--apple-muted-2)] text-[11px] font-mono tabular-nums text-[var(--apple-muted)]">
        44
      </div>
      <div className="h-8 w-8 border border-[var(--hig-border)] bg-[var(--apple-hover)]" aria-hidden />
      <p className="text-[12px] leading-5 text-[var(--apple-muted)]">
        {t.demos.touch.textStart} <span className="font-mono text-[var(--apple-text)]">44×44px</span> {t.demos.touch.textEnd}
      </p>
    </div>
  );
}

export function MotionDemo() {
  const { t } = useI18n();
  return (
    <div className="mt-4 border-y border-[var(--hig-border)] py-4">
      <p className="text-[13px] leading-6 text-[var(--apple-text)]">{t.demos.motion.intro}</p>
      <pre className="mt-3 overflow-x-auto border border-[var(--hig-border)] bg-[var(--system-100)] p-3 text-left font-mono text-[11px] leading-5 text-[var(--apple-text)]" dir="ltr">
        {`@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}`}
      </pre>
      <p className="mt-2 text-[12px] leading-5 text-[var(--apple-muted)]">{t.demos.motion.footnote}</p>
    </div>
  );
}

export function AltChecklist() {
  const { t } = useI18n();
  return (
    <div className="mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      {t.demos.alt.items.map((item, i) => (
        <div key={i} className="flex gap-3 py-2.5">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--apple-text)]" />
          <p className="text-[13px] leading-6 text-[var(--apple-text)]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function PageGoalDemo() {
  const { t } = useI18n();
  const d = t.demos.pageGoal;
  return (
    <div className="mt-4 border border-[var(--hig-border)] p-4">
      <div className="text-[11px] tracking-widest text-[var(--apple-muted)]">{d.label}</div>
      <div className="mt-2 text-[14px] font-semibold text-[var(--apple-text)]">{d.title}</div>
      <p className="mt-1 text-[13px] leading-6 text-[var(--apple-muted)]">{d.body}</p>
      <div className="mt-3 text-[13px] text-[var(--apple-blue)]">{d.cta}</div>
    </div>
  );
}

// Keep legacy export for MDXRemote mapping — no visual change, just re-export minimal
export function Accordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-t border-[var(--hig-border)] pt-4">
      <div className="text-[13px] font-semibold text-[var(--apple-text)]">{title}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}