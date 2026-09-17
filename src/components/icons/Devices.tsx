import type { SVGProps } from "react";

export function IPhoneIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={7} y={2} width={10} height={20} rx={2} />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function MacIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={3} y={4} width={18} height={12} rx={1.5} />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

export function WatchIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={8} y={7} width={8} height={10} rx={2} />
      <path d="M10 3h4" />
      <path d="M10 21h4" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <path d="M9 17v2a3 3 0 0 0 6 0v-2" />
    </svg>
  );
}

export function TvIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={2} y={7} width={20} height={12} rx={2} />
      <path d="M8 7V5h8v2" />
      <path d="M12 19v2" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function VisionIcon({ size = 16, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 12a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2H2z" />
      <path d="M10 14a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2H10z" />
      <path d="M14 12v2" />
    </svg>
  );
}
