"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/providers/I18nProvider";
import { cookieName, localeMeta, locales } from "@/i18n";

export function LangSwitcher() {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (next: (typeof locales)[number]) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    // eslint-disable-next-line react-hooks/immutability -- intentional DOM mutation for instant locale switch
    document.cookie = `${cookieName}=${next}; path=/; max-age=31536000; samesite=lax`;
    const meta = localeMeta[next];
    const root = document.documentElement;
    // eslint-disable-next-line react-hooks/immutability -- sync html lang for pre-paint parity
    root.lang = meta.htmlLang;
    // eslint-disable-next-line react-hooks/immutability -- sync dir for RTL
    root.dir = meta.dir;
    // eslint-disable-next-line react-hooks/immutability -- sync data-locale for font switch
    root.dataset.locale = next;
    setOpen(false);
    router.refresh();
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t.lang.label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-7 items-center gap-1.5 rounded-full bg-transparent px-2 text-[13px] font-medium text-[var(--apple-muted)] hover:text-[var(--apple-text)] transition-colors"
      >
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--apple-hover)] text-[9px]">
          {locale.toUpperCase()}
        </span>
        {localeMeta[locale].nativeLabel}
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t.lang.label}
          className="absolute end-0 top-full mt-1 w-[150px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#1c1c1e] z-50"
        >
          {locales.map((l) => {
            const active = locale === l;
            return (
              <button
                key={l}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => select(l)}
                className={`flex w-full items-center justify-between px-3 py-2 text-[13px] text-start hover:bg-[var(--apple-hover)] transition-colors ${
                  active ? "font-medium text-[var(--apple-blue)]" : "text-[var(--apple-text)]"
                }`}
              >
                <span>{localeMeta[l].nativeLabel}</span>
                <span className="font-mono text-[10px] text-[var(--apple-muted-2)]">{l}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}