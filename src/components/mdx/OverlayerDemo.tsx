// Overlayer demos — drawer, dropdown, map overlay. Production truth:
//  · Mobile drawer (SiteNavBar.tsx): fixed inset-0 z-[100] lg:hidden, backdrop
//    absolute inset-0 bg-black/40, panel absolute top-0 h-full w-[300px]
//    bg-white shadow-xl flex flex-col overflow-y-auto, body scroll-lock via
//    document.body.style.overflow = "hidden". Links border-b border-system-100
//    py-3.5 text-sm text-system-500 hover:text-brand-300; CTA h-11 bg-brand-300
//    text-white font-bold hover:bg-brand-200.
//  · Language dropdown (LanguageSwitcher.tsx): trigger h-9 bg-black/20
//    backdrop-blur hover:bg-black/30, chevron rotate-180 on open (150ms),
//    menu absolute right-0 top-full z-50 mt-2 min-w-[160px] bg-black/80
//    backdrop-blur shadow-lg, options role="option" — selected bg-white/10
//    font-semibold text-white, unselected text-white/80 hover:bg-white/10.
//    GAP: no role="listbox"/aria-expanded on the menu/trigger — tagged.
//  · Map overlay (LocationsMap.tsx): pins rounded-full border-2
//    border-brand-300 — active h-9 w-9 bg-brand-300 text-white scale-110,
//    inactive h-7 w-7 bg-white text-brand-300 hover:scale-105; info card
//    animate-[fadeIn_180ms_ease] border border-system-200 bg-white p-5;
//    mobile map is a disclosure (h-10 toggle, hidden lg:block).
//  · Navbar (same file): hide-on-scroll -translate-y-full duration-300,
//    dark bg-black/80 backdrop-blur / light bg-white/95 backdrop-blur, h-16.
// INVENTED and tagged: Esc/Backdrop dismiss pairings, focus-trap note,
// aria-expanded/role=listbox pairing, motion tokens (the production drawer
// has NO transition — it snaps; the demo adds duration-300, reduced-motion
// gated by the guide's global rule).
// Demos open/close with the peer-checkbox trick (zero JS, clickable here).
// Server-safe: no hooks.

import type { ReactNode } from "react";

export type OverlayerDemoVariant = "drawer" | "dropdown" | "pins" | "motion";

const BRAND_300 = "#1d65af";

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

// Chevron glyph for the dropdown trigger (inline SVG — deterministic at 14px).
function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className ?? "h-3 w-3"} fill="none" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

// ── Drawer ───────────────────────────────────────────────────────────────────
// Live specimen. The sr-only checkbox is the FIRST child of the stage; the
// toggle pill, backdrop and panel are its SIBLINGS, so peer-checked drives
// them all with zero JS. Toggle and backdrop both carry htmlFor → clicking
// the backdrop really closes the drawer, exactly like production.
function DrawerDemo({ tTitle, tLinks, tCta, tToggle, tags }: { tTitle: string; tLinks: string[]; tCta: string; tToggle: string; tags: string[] }) {
  return (
    <div className="px-4 py-4">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{tTitle}</span>
        <Tag>{tags[0]}</Tag>
      </div>
      <div className="relative h-72 overflow-hidden border border-[var(--hig-border)] bg-[#eaf0f7]">
        <input id="ovl-drawer-tgl" type="checkbox" className="peer sr-only" />
        {/* Backdrop — fades in, click closes */}
        <label
          htmlFor="ovl-drawer-tgl"
          aria-hidden="true"
          className="absolute inset-0 cursor-pointer bg-black/40 opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
        />
        {/* Panel — slides from the start edge, mirrors in RTL */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 start-0 flex w-[240px] -translate-x-full flex-col overflow-y-auto bg-white opacity-0 shadow-xl transition-all duration-300 peer-checked:translate-x-0 peer-checked:opacity-100 rtl:translate-x-full rtl:peer-checked:translate-x-0"
        >
          <div className="flex h-16 items-center border-b border-[#ece8e4] px-5">
            <span className="text-sm font-bold text-[#1f1f1f]">SPA El Fath</span>
          </div>
          {tLinks.map((l) => (
            <span key={l} className="border-b border-[#f5f4f3] py-3.5 text-sm font-medium text-[#1f1f1f] transition-colors hover:text-[#1d65af] px-5">
              {l}
            </span>
          ))}
          <span className="mt-auto flex h-11 items-center justify-center bg-[#1d65af] text-sm font-bold text-white transition-colors hover:bg-[#69a2e5]">
            {tCta}
          </span>
        </div>
        {/* Toggle pill — floats over the stage, always clickable */}
        <label
          htmlFor="ovl-drawer-tgl"
          className="absolute start-4 top-4 z-10 inline-flex h-9 cursor-pointer items-center gap-2 bg-black/20 px-3 text-xs font-bold text-white backdrop-blur transition-colors hover:bg-black/30 peer-focus-visible:[box-shadow:0_0_0_2px_#ffffff,0_0_0_4px_#1d65af]"
        >
          {tToggle}
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center border border-white/60 text-white peer-checked:bg-[#1d65af]"
          />
        </label>
      </div>
    </div>
  );
}

// ── Dropdown ─────────────────────────────────────────────────────────────────
// LanguageSwitcher verbatim, in the stage: trigger h-9 bg-black/20
// backdrop-blur, chevron rotates 180° on open, menu bg-black/80 backdrop-blur
// min-w-[160px] with role=listbox (INVENTED — production omits it) and
// role=option rows. Peer-driven open/close.
function DropdownDemo({ tTrigger, tOptions, tSelected, tags }: { tTrigger: string; tOptions: string[]; tSelected: string; tags: string[] }) {
  return (
    <div className="px-4 py-4">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{tTrigger}</span>
        <Tag>{tags[0]}</Tag>
      </div>
      <div className="relative h-48 border border-[var(--hig-border)] bg-[#eaf0f7] p-4">
        <div className="relative inline-block">
          <input id="ovl-dd-tgl" type="checkbox" className="peer sr-only" />
          <label
            htmlFor="ovl-dd-tgl"
            className="inline-flex h-9 cursor-pointer items-center gap-2 bg-[#1f1f1f]/20 px-2 text-xs font-semibold text-[#1f1f1f] backdrop-blur transition-colors hover:bg-[#1f1f1f]/30 peer-focus-visible:[box-shadow:0_0_0_2px_#ffffff,0_0_0_4px_#1d65af]"
          >
            {tOptions[0]}
            <span aria-hidden="true" className="transition-transform duration-150 peer-checked:rotate-180">
              <Chevron />
            </span>
          </label>
          {/* Menu — top-full mt-2, z-50, dark glass */}
          <div
            aria-hidden="true"
            className="absolute end-0 top-full z-50 mt-2 min-w-[160px] border-0 bg-[#1f1f1f]/80 opacity-0 shadow-lg backdrop-blur transition-opacity duration-150 peer-checked:opacity-100"
          >
            <div role="listbox" aria-label={tOptions[0]}>
              {tOptions.map((o) => (
                <span
                  key={o}
                  role="option"
                  aria-selected={o === tSelected ? "true" : "false"}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm ${
                    o === tSelected ? "bg-white/10 font-semibold text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {o}
                  <span className="ms-auto text-[11px] font-medium tracking-wider text-white/50">
                    {o === tSelected ? "•" : ""}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-40 text-[11px] text-[#737373]">{tags[1]}</p>
      </div>
    </div>
  );
}

// ── Map pins ─────────────────────────────────────────────────────────────────
// LocationsMap verbatim: circular pins border-2 border-brand-300 — active
// h-9 w-9 filled scale-110, inactive h-7 w-7 white with brand dot — and the
// info card that fades in (animate-[fadeIn_180ms_ease]).
function PinsDemo({ tCard, tBody, tDirs, tags }: { tCard: string; tBody: string; tDirs: string; tags: string[] }) {
  return (
    <div className="px-4 py-4">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{tCard}</span>
        <Tag>{tags[0]}</Tag>
      </div>
      <div className="relative h-56 overflow-hidden border border-[var(--hig-border)] bg-[#eaf0f7]">
        {/* inactive pin */}
        <span className="absolute left-[18%] top-[28%] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white shadow-md transition-all duration-150 hover:scale-105" style={{ borderColor: BRAND_300 }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_300 }} />
        </span>
        {/* active pin */}
        <span className="absolute left-[46%] top-[38%] z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 scale-110 items-center justify-center rounded-full border-2 shadow-md" style={{ borderColor: BRAND_300, backgroundColor: BRAND_300 }}>
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        {/* info card — fades in 180ms */}
        <div className="absolute end-3 top-3 w-[220px] animate-[fadeIn_180ms_ease] border border-[#ece8e4] bg-white p-4">
          <span className="text-sm font-bold text-[#1f1f1f]">{tCard}</span>
          <p className="mt-1 text-xs leading-5 text-[#737373]">{tBody}</p>
          <span className="mt-2 inline-flex h-8 items-center border border-[#ece8e4] px-3 text-[11px] font-bold text-[#1f1f1f] transition-colors hover:border-[#1d65af] hover:text-[#1d65af]">
            {tDirs}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Motion ───────────────────────────────────────────────────────────────────
// The one motion production wrote: navbar -translate-y-full on scroll-up,
// duration-300. Rows show both positions; the drawer/dropdown fades ride
// the same 150–300ms band. INVENTED: the band, since the drawer itself snaps.
function MotionDemo({ tShow, tHide, tBand, tags }: { tShow: string; tHide: string; tBand: string; tags: string[] }) {
  return (
    <div className="divide-y divide-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <div className="flex h-11 items-center bg-white/95 px-3 text-xs font-bold text-[#1f1f1f] shadow-sm backdrop-blur">
          {tShow}
        </div>
      </Row>
      <Row tag={tags[1]}>
        <div className="flex h-11 -translate-y-full items-center bg-white/95 px-3 text-xs font-bold text-[#1f1f1f] shadow-sm opacity-0 backdrop-blur">
          {tHide}
        </div>
      </Row>
      <Row tag={tags[2]}>
        <span className="text-sm text-[#1f1f1f]">{tBand}</span>
      </Row>
    </div>
  );
}

const DEFAULT_TAGS: Record<OverlayerDemoVariant, string[]> = {
  drawer: [
    "fixed inset-0 · z-[100] · lg:hidden",
    "backdrop bg-black/40 · click closes",
    "panel w-[300px] · shadow-xl · scroll-lock",
  ],
  dropdown: [
    "trigger h-9 · bg-black/20 · backdrop-blur",
    "menu top-full mt-2 · z-50 · bg-black/80",
    "role=listbox INVENTED · options role=option",
  ],
  pins: [
    "pin inactive h-7 · border-2 · scale-105 hover",
    "pin active h-9 · scale-110 · filled",
    "card fadeIn 180ms · border-system-200",
  ],
  motion: [
    "visible · translate-y-0",
    "hidden · -translate-y-full · duration-300",
    "band 150–300ms · INVENTED · reduced-motion gated",
  ],
};

export function OverlayerDemo({
  variant,
  label,
  note,
  tags,
  tTitle,
  tLinks,
  tCta,
  tToggle,
  tTrigger,
  tOptions,
  tSelected,
  tCard,
  tBody,
  tDirs,
  tShow,
  tHide,
  tBand,
}: {
  variant: OverlayerDemoVariant;
  label: string;
  note?: string;
  tags?: string[];
  tTitle?: string;
  tLinks?: string[];
  tCta?: string;
  tToggle?: string;
  tTrigger?: string;
  tOptions?: string[];
  tSelected?: string;
  tCard?: string;
  tBody?: string;
  tDirs?: string;
  tShow?: string;
  tHide?: string;
  tBand?: string;
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      {variant === "drawer" ? (
        <DrawerDemo tTitle={tTitle ?? ""} tLinks={tLinks ?? []} tCta={tCta ?? ""} tToggle={tToggle ?? ""} tags={t} />
      ) : null}
      {variant === "dropdown" ? (
        <DropdownDemo tTrigger={tTrigger ?? ""} tOptions={tOptions ?? []} tSelected={tSelected ?? ""} tags={t} />
      ) : null}
      {variant === "pins" ? <PinsDemo tCard={tCard ?? ""} tBody={tBody ?? ""} tDirs={tDirs ?? ""} tags={t} /> : null}
      {variant === "motion" ? <MotionDemo tShow={tShow ?? ""} tHide={tHide ?? ""} tBand={tBand ?? ""} tags={t} /> : null}
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}




