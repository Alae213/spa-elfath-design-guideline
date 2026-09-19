// Feedback demos — the status voice. Production truth: QuoteForm.tsx is the
// ONLY feedback surface (no toasts, no aria-live, no spinners anywhere):
//  · pending = button LABEL SWAP + disabled:opacity-60 (no spinner glyph)
//  · success = a REPLACEMENT PANEL (form swaps out) — ✓ tile brand-300,
//    WhatsApp CTA brand-400 #193b62 hover brand-300
//  · error   = INLINE BANNER at the top of the form (form stays) — red-200/
//    red-50 skin, red-700 title, red-600 desc + green-600 WhatsApp CTA
//  · mount skeleton = animate-pulse bars bg-system-100
// Verbatim hexes: brand-200 #69a2e5, brand-300 #1d65af, brand-400 #193b62,
// red-200 #fecaca, red-50 #fef2f2, red-700 #b91c1c, red-600 #dc2626,
// green-600 #16a34a, green-500 #22c55e, system-100 #f5f4f3.
// INVENTED and tagged: warning banner (uses --color-warning #B45309 from
// Colors), the error-banner icon, aria-live role pairings (deliberately NOT
// set on the specimens — a static role="alert" would announce on page load;
// the tags document the pairing for real implementations).
// Status strings come verbatim from the production dictionaries
// (quotePage.submitting/successTitle/.../whatsappFallback).
// Server-safe: no hooks.

import type { ReactNode } from "react";

export type FeedbackDemoVariant = "banner" | "success" | "pending" | "a11y";

// Verbatim tokens. BRAND_200 (#69a2e5) appears in the success ✓ tile's
// soft variant — see feedback.ts success note; kept here for reference.
const BRAND_300 = "#1d65af";
const BRAND_400 = "#193b62";
const RED_200 = "#fecaca";
const RED_50 = "#fef2f2";
const RED_700 = "#b91c1c";
const RED_600 = "#dc2626";
const GREEN_600 = "#16a34a";

// Production WhatsApp deep link — the fallback channel, verbatim.
const WA = "https://wa.me/213560065422?text=Bonjour%2C%20je%20souhaite%20un%20devis";

// Spec tag, LTR code tokens even on RTL pages.
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

// The error banner, QuoteForm.tsx verbatim: tint + border + bold title +
// desc, and a green WhatsApp CTA (h-9, text-xs). NO icon in production —
// the icon in the a11y variant is INVENTED.
function ErrorBanner({ tErrTitle, tErrDesc, tWa }: { tErrTitle: string; tErrDesc: string; tWa: string }) {
  return (
    <div className="border px-4 py-3" style={{ borderColor: RED_200, backgroundColor: RED_50 }}>
      <div className="text-sm font-bold" style={{ color: RED_700 }}>
        {tErrTitle}
      </div>
      <p className="mt-1 text-sm leading-6" style={{ color: RED_600 }}>
        {tErrDesc}
      </p>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex h-9 items-center px-4 text-xs font-bold text-white hover:bg-[#22c55e]"
        style={{ backgroundColor: GREEN_600 }}
      >
        {tWa}
      </a>
    </div>
  );
}

// Success panel — QuoteForm success screen verbatim: ✓ tile brand-300,
// white ✓ 3xl, bold title, desc, WhatsApp CTA brand-400 → hover brand-300
// (hover as a Tailwind class — server-safe, no JS handlers).
function SuccessPanel({ tTitle, tDesc, tWa }: { tTitle: string; tDesc: string; tWa: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center" style={{ backgroundColor: BRAND_300 }}>
        <svg viewBox="0 0 12 12" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M2 6.2 4.8 9 10 3.4" stroke="white" strokeWidth="2" strokeLinecap="square" />
        </svg>
      </div>
      <h4 className="mt-4 text-lg font-bold text-[#1f1f1f]">{tTitle}</h4>
      <p className="mt-1 text-sm leading-6 text-[#737373]">{tDesc}</p>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex h-11 items-center px-5 text-sm font-bold text-white hover:bg-[#1d65af]"
        style={{ backgroundColor: BRAND_400 }}
      >
        {tWa}
      </a>
    </div>
  );
}

// Pending — the label swap, verbatim: the button keeps its classes and
// turns disabled opacity-60; text reads «Submitting…». NO spinner: the
// label + dimming IS the progress. Also shown: the mount skeleton —
// bg-system-100 animate-pulse bars (specimen is decorative since the
// production pulse runs only while loading).
function PendingDemo({
  tSubmit,
  tSubmitting,
  tNote,
  tags,
}: {
  tSubmit: string;
  tSubmitting: string;
  tNote?: string;
  tags: string[];
}) {
  return (
    <div className="divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]">
      <Row tag={tags[0]}>
        <span className="flex max-w-[320px] flex-col gap-1.5">
          <button type="button" className="h-11 bg-[#1d65af] text-sm font-bold text-white opacity-60 cursor-not-allowed" disabled>
            {tSubmitting}
          </button>
          <span className="text-xs text-[#737373]">{tNote}</span>
        </span>
      </Row>
      <Row tag={tags[1]}>
        <button type="button" className="h-11 bg-[#1d65af] text-sm font-bold text-white">
          {tSubmit}
        </button>
      </Row>
      <Row tag={tags[2]}>
        <span className="block max-w-[320px] space-y-2">
          <span className="block h-3 w-2/3 bg-[#f5f4f3]" />
          <span className="block h-3 w-full bg-[#f5f4f3]" />
          <span className="block h-3 w-4/5 bg-[#f5f4f3]" />
        </span>
      </Row>
    </div>
  );
}

// Banner composition — error verbatim + warning INVENTED side by side.
function BannerDemo({ tErrTitle, tErrDesc, tWa, tWarnTitle, tWarnDesc, tags }: {
  tErrTitle: string;
  tErrDesc: string;
  tWa: string;
  tWarnTitle: string;
  tWarnDesc: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div>
        <div className="mb-1"><Tag>{tags[0]}</Tag></div>
        <ErrorBanner tErrTitle={tErrTitle} tErrDesc={tErrDesc} tWa={tWa} />
      </div>
      <div>
        <div className="mb-1"><Tag>{tags[1]}</Tag></div>
        <div className="border px-4 py-3" style={{ borderColor: "#fde68a", backgroundColor: "#fffbeb" }}>
          <div className="text-sm font-bold" style={{ color: "#b45309" }}>{tWarnTitle}</div>
          <p className="mt-1 text-sm leading-6" style={{ color: "#b45309" }}>{tWarnDesc}</p>
        </div>
      </div>
    </div>
  );
}

// Success composition — full replacement panel.
function SuccessDemo({ tTitle, tDesc, tWa, tags }: { tTitle: string; tDesc: string; tWa: string; tags: string[] }) {
  return (
    <div className="border-y border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2"><Tag>{tags[0]}</Tag></div>
      <SuccessPanel tTitle={tTitle} tDesc={tDesc} tWa={tWa} />
    </div>
  );
}

// A11y pairing table — icon + role pairing documentation (INVENTED:
// production sets neither icons nor aria-live; this is the standard).
function A11yDemo({ tErr, tOk, tLoading, tags }: { tErr: string; tOk: string; tLoading: string; tags: string[] }) {
  const rows: Array<[string, string, string, string]> = [
    [tErr, "role=alert", "❌ circle icon", "assertive"],
    [tOk, "role=status", "✓ in brand-300 tile", "polite"],
    [tLoading, "aria-busy=true on form", "label swap (text only)", "polite"],
  ];
  return (
    <div className="border-y border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2"><Tag>{tags[0]}</Tag></div>
      <div className="divide-y divide-[var(--hig-border)]">
        {rows.map(([name, role, icon, live]) => (
          <div key={name} className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-sm font-semibold text-[#1f1f1f]">{name}</span>
            <span className="text-right font-mono text-[10px] leading-4 text-[#737373]" dir="ltr">
              {role} · {icon} · {live}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const DEFAULT_TAGS: Record<FeedbackDemoVariant, string[]> = {
  banner: [
    "error · VERBATIM · red-200/50 · no icon",
    "warning · INVENTED · amber pairing",
  ],
  success: ["VERBATIM · replacement panel · brand-300 ✓"],
  pending: [
    "pending · VERBATIM · label swap · opacity-60",
    "rest · brand-300 · h-11",
    "skeleton · VERBATIM · system-100 pulse",
  ],
  a11y: ["INVENTED pairing · role + icon + live"],
};

export function FeedbackDemo({
  variant,
  label,
  note,
  tags,
  tErrTitle = "Message not sent",
  tErrDesc = "Something went wrong. Please try again, or reach us on WhatsApp.",
  tWa = "Contact us on WhatsApp",
  tWarnTitle = "Connection is slow",
  tWarnDesc = "Your message has not been sent yet. You can keep waiting or use WhatsApp.",
  tTitle = "Request received",
  tDesc = "We will get back to you within 48 hours.",
  tSubmit = "Send request",
  tSubmitting = "Submitting…",
  tNote = "Button dims at opacity-60 and reads «Submitting…» — no spinner.",
  tErr = "Error",
  tOk = "Success",
  tLoading = "Pending",
}: {
  variant: FeedbackDemoVariant;
  label: string;
  note?: string;
  tags?: string[];
  tErrTitle?: string;
  tErrDesc?: string;
  tWa?: string;
  tWarnTitle?: string;
  tWarnDesc?: string;
  tTitle?: string;
  tDesc?: string;
  tSubmit?: string;
  tSubmitting?: string;
  tNote?: string;
  tErr?: string;
  tOk?: string;
  tLoading?: string;
}) {
  const t = tags ?? DEFAULT_TAGS[variant];
  return (
    <div className="not-prose mt-4 border border-[var(--hig-border)]">
      <div className="border-b border-[var(--hig-border)] px-4 py-2.5">
        <span className="text-[13px] font-semibold text-[var(--apple-text)]">{label}</span>
      </div>
      <div className="p-4">
        {variant === "banner" ? <BannerDemo tErrTitle={tErrTitle} tErrDesc={tErrDesc} tWa={tWa} tWarnTitle={tWarnTitle} tWarnDesc={tWarnDesc} tags={t} /> : null}
        {variant === "success" ? <SuccessDemo tTitle={tTitle} tDesc={tDesc} tWa={tWa} tags={t} /> : null}
        {variant === "pending" ? <PendingDemo tSubmit={tSubmit} tSubmitting={tSubmitting} tNote={tNote} tags={t} /> : null}
        {variant === "a11y" ? <A11yDemo tErr={tErr} tOk={tOk} tLoading={tLoading} tags={t} /> : null}
      </div>
      {note ? <p className="border-t border-[var(--hig-border)] px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]">{note}</p> : null}
    </div>
  );
}


