// Minimal Apple HIG image demos — thin border only, no radius, no fills.
// Abstract gray slots stand in for photography (no pixels ship with the
// guide). Overlay uses the exact production hero grade. Server-safe.

import type { CSSProperties, ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayCircleIcon } from "@hugeicons/core-free-icons";

// Production hero grade — HomeHero truth, documented on the images page.
export const HERO_GRADE =
  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.65) 100%)";

export function ImageGrid({ children }: { children?: ReactNode }) {
  return <div className="not-prose mt-4 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function ImageDemo({
  label,
  ratio = "16 / 9",
  ratioTag,
  overlay = false,
  video = false,
  caption = "Sample headline",
  note,
  boxStyle,
}: {
  label: string;
  ratio?: string;
  ratioTag?: string;
  overlay?: boolean;
  video?: boolean;
  caption?: string;
  note?: string;
  boxStyle?: CSSProperties;
}) {
  return (
    <div className="border border-[var(--hig-border)]" style={boxStyle}>
      <div className="relative overflow-hidden bg-[var(--system-300)]" style={{ aspectRatio: ratio }}>
        <span className="absolute start-2 top-2 font-mono text-[10px] tabular-nums text-[var(--system-500)] opacity-70" dir="ltr">
          {ratioTag ?? ratio.replace(/ \/ /g, ":")}
        </span>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-widest text-[var(--system-500)] opacity-50" dir="ltr">
          PHOTO
        </span>
        {overlay ? (
          <span className="absolute inset-0" style={{ background: HERO_GRADE }} aria-hidden="true" />
        ) : null}
        {overlay ? (
          <span className="absolute bottom-2 start-3 end-3 text-[13px] font-semibold leading-5 text-white">
            {caption}
          </span>
        ) : null}
        {video ? (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white">
            <HugeiconsIcon icon={PlayCircleIcon as never} size={28} strokeWidth={1.5} color="currentColor" />
            <span className="font-mono text-[10px] tabular-nums opacity-90" dir="ltr">
              remote · poster · muted loop
            </span>
          </span>
        ) : null}
      </div>
      <div className="border-t border-[var(--hig-border)] px-3 py-2">
        <p className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</p>
        {note ? <p className="mt-1 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
      </div>
    </div>
  );
}
