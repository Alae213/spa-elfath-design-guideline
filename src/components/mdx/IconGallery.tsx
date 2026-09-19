// Minimal Apple HIG icon gallery — thin border only, no radius, no fills.
// Glyphs render live from @hugeicons/core-free-icons; translatable text
// (usage labels) stays in MDX. Server-safe: no hooks.

import type { CSSProperties, ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Idea01Icon,
  AccessibilityIcon,
  PaintBoardIcon,
  ColorsIcon,
  Layers01Icon,
  Image01Icon,
  Layout01Icon,
  RightToLeftListTriangleIcon,
  TextFontIcon,
  Touch01Icon,
  InputTextIcon,
  ToggleOnIcon,
  ChatFeedbackIcon,
  GroupLayersIcon,
  Cards01Icon,
  Database01Icon,
  PlayCircleIcon,
} from "@hugeicons/core-free-icons";

// Curated to the set actually in use (navigation + guide chrome).
// Unknown names render a "?" slot instead of crashing the page.
const ICONS: Record<string, unknown> = {
  Idea01Icon,
  AccessibilityIcon,
  PaintBoardIcon,
  ColorsIcon,
  Layers01Icon,
  Image01Icon,
  Layout01Icon,
  RightToLeftListTriangleIcon,
  TextFontIcon,
  Touch01Icon,
  InputTextIcon,
  ToggleOnIcon,
  ChatFeedbackIcon,
  GroupLayersIcon,
  Cards01Icon,
  Database01Icon,
  PlayCircleIcon,
};

export function IconGrid({ children }: { children?: ReactNode }) {
  return <div className="not-prose mt-4 grid gap-4 sm:grid-cols-3">{children}</div>;
}

export function IconCell({
  name,
  usage,
  size = 20,
  boxStyle,
  iconStyle,
  bare = false,
}: {
  name: string;
  usage?: string;
  size?: number;
  boxStyle?: CSSProperties;
  iconStyle?: CSSProperties;
  bare?: boolean;
}) {
  const icon = ICONS[name];
  const glyph = icon ? (
    <span className="inline-flex" style={iconStyle}>
      <HugeiconsIcon icon={icon as never} size={size} strokeWidth={1.5} color="currentColor" />
    </span>
  ) : (
    <span className="font-mono text-[11px] text-[var(--apple-muted)]">?</span>
  );
  if (bare) return glyph;
  return (
    <div className="border border-[var(--hig-border)]" style={boxStyle}>
      <div className="flex h-16 items-center justify-center">
        {glyph}
      </div>
      <div className="border-t border-[var(--hig-border)] px-3 py-2">
        <p className="font-mono text-[11px] text-[var(--apple-text)]" dir="ltr">
          {name}
        </p>
        {usage ? <p className="mt-1 text-[12px] leading-5 text-[var(--apple-muted)]">{usage}</p> : null}
      </div>
    </div>
  );
}
