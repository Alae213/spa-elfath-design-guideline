import type { ReactNode } from "react";

export function Callout({ variant = "info", title, children }: { variant?: "info" | "warning" | "success"; title?: string; children: ReactNode }) {
  const styles = {
    info: "border-brand-300 bg-brand-100/50 dark:border-brand-300/60 dark:bg-brand-100/15",
    warning: "border-amber-500 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800",
    success: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800",
  }[variant];

  return (
    <div className={`rounded-lg border-l-4 pl-4 pr-4 py-3 my-6 ${styles}`}>
      {title ? <p className="text-sm font-semibold text-foreground mb-1">{title}</p> : null}
      <div className="text-sm leading-relaxed text-system-400 [&_a]:text-brand-300 [&_a]:underline [&_a]:underline-offset-4 dark:text-system-400 [&_a]:dark:text-brand-400">{children}</div>
    </div>
  );
}

export function DoDont({ do: doContent, dont }: { do: ReactNode; dont: ReactNode }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-6">
      <div className="rounded-lg overflow-hidden border border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-800">
        <div className="flex items-center gap-2 bg-emerald-500 text-white px-3 py-1.5 text-xs font-semibold tracking-widest uppercase">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-600">✓</span> Do
        </div>
        <div className="p-4 text-sm leading-relaxed text-foreground">{doContent}</div>
      </div>
      <div className="rounded-lg overflow-hidden border border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-900">
        <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 text-xs font-semibold tracking-widest uppercase">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-red-600">✕</span> Don&apos;t
        </div>
        <div className="p-4 text-sm leading-relaxed text-foreground">{dont}</div>
      </div>
    </div>
  );
}
