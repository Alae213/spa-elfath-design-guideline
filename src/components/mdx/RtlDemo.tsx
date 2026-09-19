// Minimal Apple HIG RTL demos — thin borders only, sharp corners.
// Live direction demos: the same row under dir=ltr vs dir=rtl, alignment
// blocks, the chevron flip technique, and the physical-to-logical map.
// HigFigure embeds vendored Apple HIG reference figures (public/hig)
// with captions and source credit. Server-safe: no hooks.

import type { ReactNode } from "react";
import Image from "next/image";

export type RtlVariant = "mirror" | "align" | "flip" | "tokens";

function Tag({ children, light = false }: { children?: ReactNode; light?: boolean }) {
  return (
    <span
      className={`font-mono text-[9px] tabular-nums ${light ? "text-white/80" : "text-[var(--apple-muted)]"}`}
      dir="ltr"
    >
      {children}
    </span>
  );
}

function MirrorRow({ dir, tag }: { dir: "ltr" | "rtl"; tag: string }) {
  return (
    <div className="border border-[var(--hig-border)]">
      <div dir={dir} className="flex items-center gap-2 p-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--hig-border)]">
          <span className="inline-block h-0 w-0 border-y-4 border-s-8 border-y-transparent border-s-[var(--brand-300)]" aria-hidden="true" />
        </span>
        <span className="flex h-7 min-w-0 flex-1 items-center bg-[var(--system-100)] px-2">
          <Tag>label</Tag>
        </span>
        <span className="shrink-0">
          <Tag>meta</Tag>
        </span>
      </div>
      <p className="border-t border-[var(--hig-border)] px-3 py-1.5 text-center">
        <Tag>{tag}</Tag>
      </p>
    </div>
  );
}

function MirrorDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <MirrorRow dir="ltr" tag="dir=ltr" />
      <MirrorRow dir="rtl" tag="dir=rtl" />
    </div>
  );
}

function AlignDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-[var(--hig-border)] p-3" dir="ltr">
        <div className="flex flex-col gap-1.5 text-start">
          <div className="h-2 w-full bg-[var(--system-300)]" />
          <div className="h-2 w-11/12 bg-[var(--system-300)]" />
          <div className="h-2 w-full bg-[var(--system-300)]" />
          <div className="h-2 w-3/5 bg-[var(--system-300)]" />
        </div>
        <p className="mt-2 text-center">
          <Tag>paragraph follows its language</Tag>
        </p>
      </div>
      <div className="border border-[var(--brand-300)] p-3" dir="rtl">
        <div className="flex flex-col gap-1.5 text-start">
          <div className="h-2 w-full bg-[var(--system-300)]" />
          <div className="h-2 w-2/3 bg-[var(--system-300)]" />
        </div>
        <p className="mt-2 text-center">
          <Tag>1–2 lines follow the context</Tag>
        </p>
      </div>
    </div>
  );
}

function FlipDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-[var(--hig-border)] p-3" dir="ltr">
        <div className="flex h-10 items-center justify-center gap-2">
          <span className="inline-block h-0 w-0 border-y-8 border-r-[12px] border-y-transparent border-r-[var(--apple-text)]" aria-hidden="true" />
          <Tag>back · dir=ltr</Tag>
        </div>
        <p className="mt-2 border-t border-[var(--hig-border)] pt-1.5 text-center">
          <Tag>points with reading flow</Tag>
        </p>
      </div>
      <div className="border border-[var(--brand-300)] p-3" dir="rtl">
        <div className="flex h-10 items-center justify-center gap-2">
          <span className="inline-block h-0 w-0 rotate-180 border-y-8 border-r-[12px] border-y-transparent border-r-[var(--apple-text)]" aria-hidden="true" />
          <Tag>back · dir=rtl</Tag>
        </div>
        <p className="mt-2 border-t border-[var(--hig-border)] pt-1.5 text-center">
          <Tag>same code, mirrored</Tag>
        </p>
      </div>
    </div>
  );
}

function TokensDemo() {
  const rows: [string, string][] = [
    ["ml-* / mr-*", "ms-* / me-*"],
    ["pl-* / pr-*", "ps-* / pe-*"],
    ["left-* / right-*", "start-* / end-*"],
    ["text-left / text-right", "text-start / text-end"],
    ["border-l-* / border-r-*", "border-s-* / border-e-*"],
    ["rounded-l-* / rounded-r-*", "rounded-s-* / rounded-e-*"],
    ["-rotate-90 (fixed)", "rtl:rotate-90 (flip)"],
  ];
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <div className="flex items-center justify-between gap-3 py-2">
        <span className="font-mono text-[11px] text-[var(--apple-muted)]" dir="ltr">
          physical — never
        </span>
        <span className="font-mono text-[11px] text-[var(--apple-muted)]" dir="ltr">
          logical — always
        </span>
      </div>
      {rows.map(([a, b]) => (
        <div key={a} className="flex items-center justify-between gap-3 py-2">
          <span className="font-mono text-[12px] text-[var(--apple-muted)] line-through decoration-red-700/60" dir="ltr">
            {a}
          </span>
          <span className="font-mono text-[12px] text-[var(--apple-text)]" dir="ltr">
            {b}
          </span>
        </div>
      ))}
    </div>
  );
}

export function RtlDemo({
  variant,
  label,
  note,
}: {
  variant: RtlVariant;
  label: string;
  note?: string;
}) {
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "mirror" ? <MirrorDemo /> : null}
        {variant === "align" ? <AlignDemo /> : null}
        {variant === "flip" ? <FlipDemo /> : null}
        {variant === "tokens" ? <TokensDemo /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}

export function HigFigure({
  src,
  width,
  height,
  alt,
  caption,
  credit,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
}) {
  return (
    <div className="border border-[var(--hig-border)]">
      <div className="flex items-center justify-center bg-white px-4 py-6">
        <Image src={src} width={width} height={height} alt={alt} className="h-auto w-auto max-w-full" />
      </div>
      <div className="border-t border-[var(--hig-border)] px-3 py-2">
        <p className="text-[12px] leading-5 text-[var(--apple-text)]">{caption}</p>
        <p className="mt-0.5 font-mono text-[10px] text-[var(--apple-muted)]" dir="ltr">
          {credit}
        </p>
      </div>
    </div>
  );
}
