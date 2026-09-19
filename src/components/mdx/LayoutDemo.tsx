// Minimal Apple HIG layout demos — thin borders only, sharp corners.
// Abstract maps of the production layout system: container cap, breakpoint
// scale, the bricks identity grid, and the full-bleed hero. Server-safe.

import type { ReactNode } from "react";

export type LayoutVariant = "container" | "breakpoints" | "bricks" | "hero";

const HAIRLINE = "inset 0 0 0 0.5px rgba(0,0,0,0.25)";

function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="font-mono text-[9px] tabular-nums text-[var(--system-500)] opacity-70" dir="ltr">
      {children}
    </span>
  );
}

function ContainerDemo() {
  return (
    <div dir="ltr" className="border border-[var(--hig-border)] bg-[var(--system-50)] p-3">
      {/* Full-bleed section — content touches viewport edges, gutters are inner padding only */}
      <div className="relative overflow-hidden border border-[var(--hig-border)] bg-white">
        <div className="flex h-16 items-center justify-center bg-white">
          <span className="font-mono text-[10px] font-semibold text-[var(--apple-text)]" dir="ltr">
            w-full · edge-to-edge
          </span>
        </div>
        {/* Gutter markers — inner padding, not outer cap */}
        <div className="pointer-events-none absolute inset-y-2 left-2 right-2 border-x border-dashed border-[var(--brand-300)] opacity-60" />
        <span className="pointer-events-none absolute left-2 top-1 font-mono text-[8px] text-[var(--brand-300)]" dir="ltr">
          px-6
        </span>
        <span className="pointer-events-none absolute right-2 top-1 font-mono text-[8px] text-[var(--brand-300)]" dir="ltr">
          px-6
        </span>
      </div>
      <p className="mt-2 text-center font-mono text-[10px] text-[var(--apple-muted)]" dir="ltr">
        no max-width · full start → end · lg:px-8 inner
      </p>
    </div>
  );
}

function BreakpointsDemo() {
  const stops = [
    { key: "sm", value: "640", hot: false },
    { key: "md", value: "768", hot: false },
    { key: "lg", value: "1024", hot: true },
    { key: "xl", value: "1280", hot: false },
    { key: "2xl", value: "1536", hot: false },
  ];
  return (
    <div dir="ltr" className="border border-[var(--hig-border)] p-3">
      <div className="flex h-10 items-stretch gap-0 overflow-hidden border border-[var(--hig-border)]">
        {stops.map((s) => (
          <div
            key={s.key}
            className={`flex flex-1 flex-col items-center justify-center ${
              s.hot ? "bg-[var(--brand-300)]" : "bg-[var(--system-100)]"
            }`}
          >
            <span
              className={`font-mono text-[10px] font-semibold ${s.hot ? "text-white" : "text-[var(--apple-text)]"}`}
              dir="ltr"
            >
              {s.key}
            </span>
            <span className={`font-mono text-[9px] tabular-nums ${s.hot ? "text-white/80" : "text-[var(--apple-muted)]"}`} dir="ltr">
              {s.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="border border-[var(--hig-border)] p-2">
          <div className="flex flex-col gap-1">
            <div className="h-3 bg-[var(--system-300)]" />
            <div className="h-3 bg-[var(--system-300)]" />
            <div className="h-3 bg-[var(--system-300)]" />
          </div>
          <p className="mt-1.5 text-center font-mono text-[10px] text-[var(--apple-muted)]" dir="ltr">
            &lt; lg · stack
          </p>
        </div>
        <div className="border border-[var(--brand-300)] p-2">
          <div className="flex gap-1">
            <div className="h-9 flex-1 bg-[var(--system-300)]" />
            <div className="h-9 flex-1 bg-[var(--system-300)]" />
            <div className="h-9 flex-1 bg-[var(--system-300)]" />
          </div>
          <p className="mt-1.5 text-center font-mono text-[10px] text-[var(--apple-muted)]" dir="ltr">
            lg+ · row
          </p>
        </div>
      </div>
    </div>
  );
}

function BricksDemo() {
  const cell = "min-h-0 min-w-0";
  return (
    <div dir="ltr" className="overflow-hidden border border-[var(--hig-border)]" aria-hidden="true">
      {/* Row 1 — header bricks */}
      <div className="flex h-6">
        <div className={`w-[20%] bg-[var(--system-200)] ${cell}`} style={{ boxShadow: HAIRLINE }} />
        <div className={`flex-1 bg-[var(--system-300)] ${cell}`} style={{ boxShadow: HAIRLINE }} />
        <div className={`flex-1 ${cell}`} style={{ boxShadow: HAIRLINE }} />
        <div className={`w-[15%] bg-[var(--system-200)] ${cell}`} style={{ boxShadow: HAIRLINE }} />
      </div>
      {/* Row 2 — headline cell + emblem + bricks */}
      <div className="flex h-16">
        <div className={`hidden w-[12%] bg-[var(--system-300)] sm:block ${cell}`} style={{ boxShadow: HAIRLINE }} />
        <div className={`flex flex-1 flex-col items-start justify-center gap-1 bg-white px-2 ${cell}`} style={{ boxShadow: HAIRLINE }}>
          <div className="h-1.5 w-3/4 bg-[var(--system-500)]" />
          <div className="h-1.5 w-1/2 bg-[var(--system-500)]" />
          <div className="h-2 w-10 bg-[var(--brand-300)]" />
        </div>
        <div className={`hidden w-[18%] items-center justify-center sm:flex ${cell}`} style={{ boxShadow: HAIRLINE }}>
          <div className="h-6 w-5 border border-[var(--system-400)]" />
        </div>
        <div className={`hidden w-[10%] bg-[var(--system-200)] sm:block ${cell}`} style={{ boxShadow: HAIRLINE }} />
      </div>
      {/* Row 3 — factory image cell + brick */}
      <div className="flex h-12">
        <div className={`flex flex-1 items-center justify-center bg-[var(--system-100)] ${cell}`} style={{ boxShadow: HAIRLINE }}>
          <Tag>aspect 2.818</Tag>
        </div>
        <div className={`hidden w-[18%] bg-[var(--system-300)] sm:block ${cell}`} style={{ boxShadow: HAIRLINE }} />
      </div>
      {/* Mobile accent strip */}
      <div className="flex h-2 gap-[2px] bg-white px-1 py-[2px] sm:hidden">
        <div className="h-full w-[22%] bg-[var(--system-300)]" />
        <div className="h-full w-[18%] bg-[var(--system-200)]" />
        <div className="h-full flex-1 bg-[var(--system-100)]" />
        <div className="h-full w-[14%] bg-[var(--system-300)]" />
      </div>
    </div>
  );
}

const VIDEO_GRADE =
  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.65) 100%)";

function HeroDemo() {
  return (
    <div dir="ltr" className="overflow-hidden border border-[var(--hig-border)] bg-black">
      {/* Real video with universal grade — same overlay on every video, not just the hero */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--system-900)]">
        {/* Base poster/fallback — visible if remote video is blocked */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--system-300)]">
          <span className="font-mono text-[10px] tracking-widest text-[var(--system-500)] opacity-60" dir="ltr">
            VIDEO
          </span>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://framerusercontent.com/images/placeholder-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Sample ambient factory video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        {/* Universal video grade */}
        <div className="absolute inset-0" style={{ background: VIDEO_GRADE }} aria-hidden="true" />
        {/* Caption zone — same grade carries white text on every video */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="h-1.5 w-2/3 bg-white" />
          <div className="mt-1 h-1.5 w-1/3 bg-white/70" />
          <div className="mt-2 flex gap-2">
            <div className="h-5 w-16 bg-white" />
            <div className="h-5 w-16 border border-white/70" />
          </div>
        </div>
        <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-white/80" dir="ltr">
          every video · same grade
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-white/20 px-3 py-1.5">
        <Tag>
          <span className="text-white/70">full-bleed · universal gradient per § Images</span>
        </Tag>
      </div>
    </div>
  );
}

export function LayoutDemo({
  variant,
  label,
  note,
}: {
  variant: LayoutVariant;
  label: string;
  note?: string;
}) {
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "container" ? <ContainerDemo /> : null}
        {variant === "breakpoints" ? <BreakpointsDemo /> : null}
        {variant === "bricks" ? <BricksDemo /> : null}
        {variant === "hero" ? <HeroDemo /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}
