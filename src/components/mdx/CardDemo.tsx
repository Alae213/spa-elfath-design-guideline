// CardDemo — live specimens for the Cards guideline page.
// Server Component: zero hooks, zero handlers. Hover states are shown as a
// static "hover" twin, not simulated.
//
// Production truth (verbatim, from context/design/DESIGN_SYSTEM.md — the SPA
// Website's own card spec):
//   · Card (category grid): border border-system-200 bg-white p-5
//     hover:shadow-md transition, sharp 0px corners per SPA masonry override
//     (0 radius, flush), hover:border-brand-200.
//   · Interaction: hover = lighter blue #69A2E5 (brand-200), 150ms.
//   · Skeleton intros: cards group image + title + description in one
//     container — sharp corners, thin borders, no shadows at rest.
//   · FORBIDDEN (anti-patterns): rounded-2xl cards, generic gradients.
// INVENTED, tagged: the image placeholder block (production spec names the
// image slot but ships no placeholder in this repo), the 2-col grid gap, and
// the title/caption type sizes (from the documented scale: h3 17/24 600,
// body 15/22, caption 12/16 500).
import type { ReactNode } from "react";

export type CardDemoVariant = "anatomy" | "states" | "grid";

const BRAND_200 = "#69a2e5";
const BRAND_300 = "#1d65af";
const SYS_200 = "#ece8e4";
const SYS_400 = "#737373";
const SYS_500 = "#1f1f1f";

function Tag({ children }: { children?: ReactNode }) {
  return (
    <span className="ms-auto inline-flex items-center border border-[var(--hig-border)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--apple-muted)]">
      {children}
    </span>
  );
}

function Row({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="min-w-0">{children}</div>
      <span className="shrink-0 text-[11px] font-medium text-[var(--apple-muted)]">{tag}</span>
    </div>
  );
}

// One card, exploded into tagged rows: the container skin, the image slot,
// the title, the description. All measurements verbatim from the spec.
function CardAnatomy({ tImage, tTitle, tBody, tAction, tags }: { tImage: string; tTitle: string; tBody: string; tAction: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)]">
      <Row tag={tags[0]}>
        {/* The card itself — verbatim: border-system-200, bg-white, p-5, 0 radius */}
        <div className="w-full max-w-[320px] border bg-white p-5" style={{ borderColor: SYS_200 }}>
          {/* Image slot — INVENTED placeholder: production names the image, ships no fallback */}
          <div className="flex aspect-[16/9] items-center justify-center bg-[#f5f4f3] text-[11px] font-medium text-[#737373]">
            {tImage}
          </div>
          <span className="mt-4 block text-[17px] font-semibold leading-6" style={{ color: SYS_500 }}>
            {tTitle}
          </span>
          <p className="mt-2 text-[15px] leading-[22px]" style={{ color: SYS_400 }}>
            {tBody}
          </p>
          <span className="mt-3 inline-flex h-8 items-center text-[12px] font-semibold" style={{ color: BRAND_300 }}>
            {tAction}
          </span>
        </div>
      </Row>
      <Row tag={tags[1]}>
        <span className="text-[13px]" style={{ color: SYS_500 }}>border-system-200 #ECE8E4 · bg-white · p-5</span>
      </Row>
      <Row tag={tags[2]}>
        <span className="text-[13px]" style={{ color: SYS_500 }}>radius 0 · no shadow at rest · hover 150ms</span>
      </Row>
    </div>
  );
}

// Rest vs hover twins. The hover card wears the real hover classes verbatim:
// shadow-md + border-brand-200 #69A2E5, 150ms.
function CardStates({ tRest, tHover, tags }: { tRest: string; tHover: string; tags: string[] }) {
  return (
    <div className="grid gap-4 px-4 py-4 sm:grid-cols-2">
      <div>
        <div className="mb-2 flex items-center">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--apple-muted)]">{tRest}</span>
          <Tag>{tags[0]}</Tag>
        </div>
        <div className="border bg-white p-5" style={{ borderColor: SYS_200 }}>
          <div className="aspect-[16/9] bg-[#f5f4f3]" />
          <span className="mt-4 block text-[17px] font-semibold leading-6" style={{ color: SYS_500 }}>{tRest}</span>
          <p className="mt-2 text-[13px] leading-5" style={{ color: SYS_400 }}>border-system-200 · no shadow</p>
        </div>
      </div>
      <div>
        <div className="mb-2 flex items-center">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--apple-muted)]">{tHover}</span>
          <Tag>{tags[1]}</Tag>
        </div>
        <div className="border p-5 shadow-md" style={{ borderColor: BRAND_200 }}>
          <div className="aspect-[16/9] bg-[#f5f4f3]" />
          <span className="mt-4 block text-[17px] font-semibold leading-6" style={{ color: BRAND_300 }}>{tHover}</span>
          <p className="mt-2 text-[13px] leading-5" style={{ color: SYS_400 }}>border-brand-200 #69A2E5 · shadow-md</p>
        </div>
      </div>
    </div>
  );
}

// 2-col grid rhythm — sharp corners flush, gap only. Third card spans full
// width to show the masonry override: cards tile, they never stretch radius.
function CardGrid({ tA, tB, tC, tags }: { tA: string; tB: string; tC: string; tags: string[] }) {
  return (
    <div className="px-4 py-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {[tA, tB, tC].map((t, i) => (
          <div
            key={t}
            className={`border bg-white p-5 ${i === 2 ? "sm:col-span-2" : ""}`}
            style={{ borderColor: SYS_200 }}
          >
            <div className="aspect-[16/9] bg-[#f5f4f3]" />
            <span className="mt-4 block text-[15px] font-semibold leading-[22px]" style={{ color: SYS_500 }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const DEFAULT_TAGS: Record<CardDemoVariant, string[]> = {
  anatomy: [
    "image 16:9 slot · INVENTED placeholder",
    "border-system-200 · bg-white · p-5",
    "radius 0 · hover 150ms",
  ],
  states: ["rest · no shadow", "hover · shadow-md + brand-200"],
  grid: ["gap-3 · sm:grid-cols-2 · flush 0-radius"],
};

export function CardDemo({
  variant,
  label,
  note,
  tags,
  tImage,
  tTitle,
  tBody,
  tAction,
  tRest,
  tHover,
  tA,
  tB,
  tC,
}: {
  variant: CardDemoVariant;
  label: string;
  note?: string;
  tags?: string[];
  tImage?: string;
  tTitle?: string;
  tBody?: string;
  tAction?: string;
  tRest?: string;
  tHover?: string;
  tA?: string;
  tB?: string;
  tC?: string;
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      {variant === "anatomy" ? (
        <CardAnatomy tImage={tImage ?? ""} tTitle={tTitle ?? ""} tBody={tBody ?? ""} tAction={tAction ?? ""} tags={t} />
      ) : null}
      {variant === "states" ? <CardStates tRest={tRest ?? ""} tHover={tHover ?? ""} tags={t} /> : null}
      {variant === "grid" ? <CardGrid tA={tA ?? ""} tB={tB ?? ""} tC={tC ?? ""} tags={t} /> : null}
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}


