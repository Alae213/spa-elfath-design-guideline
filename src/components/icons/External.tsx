import type { SVGProps } from "react";

export function ExternalIcon({ size = 14, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3 9 15" />
      <path d="M15 21h6v-6" />
    </svg>
  );
}
