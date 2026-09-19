// Minimal Apple HIG swatch — thin border only, no radius, no fills.
// Chip label auto-inverts for legibility against the color background.

type Swatch = {
  name: string;
  token: string;
  hex: string;
  usage?: string;
};

function contrastText(hex: string): string {
  const clean = hex.replace("#", "");
  if (clean.length < 6) return "#ffffff";
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.62 ? "#1d1d1f" : "#ffffff";
}

export function ColorSwatch({ name, token, hex, usage }: Swatch) {
  const label = contrastText(hex);
  return (
    <div className="border border-[var(--hig-border)]">
      <div
        className="relative flex items-end px-3 pt-2 pb-2 h-16"
        style={{ backgroundColor: hex }}
      >
        <span className="font-mono text-[11px] tabular-nums opacity-90" style={{ color: label }}>
          {hex}
        </span>
      </div>
      <div className="border-t border-[var(--hig-border)] px-3 py-2">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[13px] font-semibold text-[var(--apple-text)]">{name}</span>
          <span className="font-mono text-[11px] text-[var(--apple-muted)]">{token}</span>
        </div>
        {usage ? (
          <p className="mt-1 text-[12px] leading-5 text-[var(--apple-muted)]">{usage}</p>
        ) : null}
      </div>
    </div>
  );
}

export function ColorRow({ token, hex, label }: { token: string; hex: string; label: string }) {
  const chip = contrastText(hex);
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className="h-3 w-3 shrink-0 rounded-full border border-[var(--hig-border)]" style={{ background: hex }} />
      <span className="font-mono text-[12px] text-[var(--apple-text)]">{token}</span>
      <span className="hidden sm:inline font-mono text-[11px] text-[var(--apple-muted-2)]" style={{ color: chip }}>
        {hex}
      </span>
      <span className="ms-auto text-[12px] text-[var(--apple-muted)]">{label}</span>
    </div>
  );
}