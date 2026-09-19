import { HugeiconsIcon } from "@hugeicons/react";
import type { Locale } from "@/i18n/locale";
import type { PageData, Section } from "@/lib/pages/types";
import { ColorSwatch, ColorRow } from "@/components/mdx/ColorSwatch";
import { IconGrid, IconCell } from "@/components/mdx/IconGallery";
import { ImageGrid, ImageDemo } from "@/components/mdx/ImageDemo";
import { LayoutDemo } from "@/components/mdx/LayoutDemo";
import { RtlDemo, HigFigure } from "@/components/mdx/RtlDemo";
import { TypeDemo } from "@/components/mdx/TypeDemo";
import { ButtonDemo } from "@/components/mdx/ButtonDemo";
import {
  ContrastTable,
  SemanticTokens,
  SpacingRuler,
  TouchTargetDemo,
  MotionDemo,
  AltChecklist,
  PageGoalDemo,
  DoDontGrid,
} from "@/components/mdx/AccessibilityDemos";

function SectionHeading({
  accent,
  number,
  title,
  icon,
  isRtl,
}: {
  accent: string;
  number: string;
  title: string;
  icon?: unknown;
  isRtl: boolean;
}) {
  return (
    <h2
      className={`scroll-mt-24 mt-10 flex items-center gap-3 border-t border-[var(--hig-border)] pt-8 text-[17px] font-semibold leading-6 text-[var(--apple-text)] ${isRtl ? "font-arabic" : ""}`}
    >
      {icon ? <HugeiconsIcon icon={icon as never} size={18} strokeWidth={1.7} color={accent} /> : null}
      <span className="font-mono text-[12px] font-normal tabular-nums text-[var(--apple-muted)]">{number}</span>
      <span>{title}</span>
    </h2>
  );
}

function renderSection(sec: Section, accent: string, isRtl: boolean, idx: number) {
  switch (sec.kind) {
    case "paragraph":
      return (
        <p key={idx} className={`mt-3 text-[14px] leading-7 text-[var(--apple-text)] ${isRtl ? "font-arabic" : ""}`}>
          {sec.text}
        </p>
      );
    case "heading":
      return <SectionHeading key={idx} accent={accent} number={sec.number} title={sec.title} icon={sec.icon} isRtl={isRtl} />;
    case "dodont":
      return <DoDontGrid key={idx} doItems={sec.doItems} dontItems={sec.dontItems} />;
    case "callout":
      return (
        <div key={idx} className="not-prose mt-3 border-y border-[var(--hig-border)] py-3">
          {sec.paragraphs.map((p, i) => (
            <p key={i} className={`text-[13px] leading-6 text-[var(--apple-text)] ${isRtl ? "font-arabic" : ""} ${i > 0 ? "mt-3" : ""}`}>
              <span className="font-semibold">{p.strong}</span> {p.text}
            </p>
          ))}
        </div>
      );
    case "code":
      return (
        <div key={idx} className="not-prose mt-4 border-y border-[var(--hig-border)] py-4">
          {sec.intro ? <p className={`text-[13px] leading-6 text-[var(--apple-text)] ${isRtl ? "font-arabic" : ""}`}>{sec.intro}</p> : null}
          <pre
            className="mt-3 overflow-x-auto border border-[var(--hig-border)] bg-[var(--system-100)] p-3 text-left font-mono text-[11px] leading-5 text-[var(--apple-text)]"
            dir="ltr"
          >
            {sec.code}
          </pre>
          {sec.caption ? <p className="mt-2 text-[12px] leading-5 text-[var(--apple-muted)]">{sec.caption}</p> : null}
        </div>
      );
    case "custom":
      return (
        <div key={idx} className="not-prose mt-4">
          {sec.node}
        </div>
      );
    case "swatchGrid":
      return (
        <div key={idx} className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
          {sec.items.map((s) => (
            <ColorSwatch key={s.token} {...s} />
          ))}
        </div>
      );
    case "swatchRows":
      return (
        <div key={idx} className="not-prose mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
          {sec.items.map((r) => (
            <ColorRow key={r.token} {...r} />
          ))}
        </div>
      );
    case "demo":
      if (sec.variant === "contrast") return <ContrastTable key={idx} />;
      if (sec.variant === "semantic") return <SemanticTokens key={idx} />;
      if (sec.variant === "spacing") return <SpacingRuler key={idx} />;
      if (sec.variant === "touch") return <TouchTargetDemo key={idx} />;
      if (sec.variant === "motion") return <MotionDemo key={idx} />;
      if (sec.variant === "alt") return <AltChecklist key={idx} />;
      if (sec.variant === "pageGoal") return <PageGoalDemo key={idx} />;
      return null;
    case "typeDemo":
      return <TypeDemo key={idx} variant={sec.variant} label={sec.label} note={sec.note} h1={sec.h1} h2={sec.h2} body={sec.body} eyebrow={sec.eyebrow} />;
    case "buttonDemo":
      return (
        <ButtonDemo
          key={idx}
          variant={sec.variant}
          label={sec.label}
          note={sec.note}
          tags={sec.tags}
          tAction={sec.tAction}
          tMore={sec.tMore}
          tDelete={sec.tDelete}
          tAdd={sec.tAdd}
        />
      );
    case "iconGrid":
      return (
        <IconGrid key={idx}>
          {sec.cells.map((c, i) => (
            <IconCell key={i} {...c} />
          ))}
        </IconGrid>
      );
    case "imageGrid":
      return (
        <ImageGrid key={idx}>
          {sec.demos.map((d, i) => (
            <ImageDemo key={i} {...d} />
          ))}
        </ImageGrid>
      );
    case "layoutDemo":
      return <LayoutDemo key={idx} variant={sec.variant} label={sec.label} note={sec.note} />;
    case "rtlDemo":
      return <RtlDemo key={idx} variant={sec.variant} label={sec.label} note={sec.note} />;
    case "higFigures":
      return (
        <div key={idx} className="not-prose mt-4 grid gap-4 md:grid-cols-2">
          {sec.items.map((f, i) => (
            <HigFigure key={i} {...f} />
          ))}
        </div>
      );
    case "divider":
      return <div key={idx} className="mt-4 border-t border-[var(--hig-border)]" />;
    default:
      return null;
  }
}

export function DesignPage({
  data,
  locale,
  navIcon,
}: {
  data: PageData;
  locale: Locale;
  navIcon?: unknown;
}) {
  const isRtl = locale === "ar";
  return (
    <div className="w-full bg-transparent" dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero — 14×14, 32px title, 15px intro */}
      <div className={`mx-auto max-w-[640px] px-6 pt-12 pb-6 ${isRtl ? "text-right font-arabic" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--apple-hover)] ${isRtl ? "ml-auto" : "mr-auto"}`}>
          {navIcon ? <HugeiconsIcon icon={navIcon as never} size={26} strokeWidth={1.5} color="var(--apple-muted)" /> : null}
        </div>
        <h1 className={`mt-5 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--apple-text)] ${isRtl ? "text-right font-arabic" : "text-left"}`}>
          {data.hero.title}
        </h1>
        <p className={`mt-3 max-w-[560px] text-[15px] leading-7 text-[var(--apple-muted)] ${isRtl ? "ml-auto text-right font-arabic" : "mr-auto text-left"}`}>
          {data.hero.intro}
        </p>
      </div>

      {/* Body — flat sections, 640px */}
      <div className={`mx-auto max-w-[640px] px-6 pb-16 ${isRtl ? "font-arabic" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
        <div className="flex flex-col">
          {data.sections.map((sec, i) => renderSection(sec, data.accent, isRtl, i))}
        </div>
      </div>
    </div>
  );
}

// Special renderer for Design Principles 2×2 grid (kept pixel-perfect)
export function DesignPrinciplesPage({
  data,
  locale,
  navIcon,
}: {
  data: { title: string; intro: string; items: { title: string; icon: unknown; color: string; text: string }[] };
  locale: Locale;
  navIcon?: unknown;
}) {
  const isRtl = locale === "ar";
  return (
    <div className="w-full bg-transparent" dir={isRtl ? "rtl" : "ltr"}>
      <div className={`mx-auto max-w-[640px] px-6 pt-12 pb-6 ${isRtl ? "text-right font-arabic" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--apple-hover)] ${isRtl ? "ml-auto" : "mr-auto"}`}>
          {navIcon ? <HugeiconsIcon icon={navIcon as never} size={26} strokeWidth={1.5} color="var(--apple-muted)" /> : null}
        </div>
        <h1 className={`mt-5 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--apple-text)] ${isRtl ? "text-right font-arabic" : "text-left"}`}>
          {data.title}
        </h1>
        <p className={`mt-3 max-w-[560px] text-[15px] leading-7 text-[var(--apple-muted)] ${isRtl ? "ml-auto text-right font-arabic" : "mr-auto text-left"}`}>
          {data.intro}
        </p>
      </div>
      <div className={`mx-auto max-w-[640px] px-6 pb-16 ${isRtl ? "font-arabic" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {data.items.map((p) => (
            <div key={p.title} className={`flex flex-col items-start gap-2 bg-transparent ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
              <HugeiconsIcon icon={p.icon as never} size={26} strokeWidth={1.7} color={p.color} />
              <h2 className={`text-[19px] font-semibold leading-6 text-[var(--apple-text)] w-full ${isRtl ? "text-right font-arabic" : "text-left"}`}>{p.title}</h2>
              <p className={`text-[14.5px] leading-7 text-[var(--apple-text)] opacity-90 w-full ${isRtl ? "text-right font-arabic" : "text-left"}`}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
