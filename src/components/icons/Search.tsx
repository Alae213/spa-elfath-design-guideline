import type { SVGProps } from "react";

export function SearchIcon({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx={11} cy={11} r={7} />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}
