"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SearchIcon, CloseIcon } from "@/components/icons";
import { buildSearchIndex } from "@/lib/search";
import { useI18n } from "@/components/providers/I18nProvider";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { t } = useI18n();

  const fuse = useMemo(() => buildSearchIndex(t), [t]);
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8);
  }, [fuse, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full h-8 items-center gap-2 rounded-full border border-black/10 bg-white px-3 text-[13px] text-[var(--apple-muted)] hover:text-[var(--apple-text)] hover:border-black/15 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-white/15 justify-between"
        aria-label={t.search.trigger}
      >
        <span className="inline-flex items-center gap-2">
          <SearchIcon size={16} />
          {t.search.placeholder}
        </span>
        <span className="hidden sm:inline-flex items-center bg-[var(--apple-hover)] px-1.5 py-0.5 text-[10px] font-medium">⌘K</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] p-4">
          <button aria-label={t.search.close} className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-xl rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#1c1c1e] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-black/[0.06] px-4 py-3 dark:border-white/[0.06]">
              <SearchIcon className="text-[var(--apple-muted)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.search.placeholder}
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--apple-muted)] rounded-lg px-2"
              />
              <button onClick={() => setOpen(false)} className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-[var(--apple-hover)]" aria-label={t.search.close}>
                <CloseIcon size={16} />
              </button>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {query.trim() && results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-[var(--apple-muted)]">{t.search.noResults}</div>
              ) : null}
              {!query.trim() ? <div className="px-4 py-6 text-sm text-[var(--apple-muted)]">{t.search.typeToSearch}</div> : null}
              <ul className="space-y-1">
                {results.map((r) => (
                  <li key={r.item.href}>
                    <Link
                      href={r.item.href}
                      onClick={() => setOpen(false)}
                      className="flex flex-col rounded-lg px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    >
                      <span className="text-sm font-medium text-[var(--apple-text)]">{r.item.title}</span>
                      <span className="text-xs text-[var(--apple-muted)] line-clamp-1">{r.item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}