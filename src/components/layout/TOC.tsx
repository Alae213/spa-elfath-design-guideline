"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; title: string; depth: number };

export function TOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.5, 1] }
    );
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="sticky top-20">
      <ul className="space-y-1 border-l border-hig-border">
        {items.map((it) => (
          <li key={it.id} className={it.depth === 3 ? "ml-3" : ""}>
            <a
              href={`#${it.id}`}
              className={`block border-l-2 -ml-px pl-3 py-1 text-sm leading-snug transition-colors ${
                activeId === it.id ? "border-brand-300 text-brand-400 font-medium" : "border-transparent text-system-400 hover:text-foreground hover:border-system-300"
              }`}
            >
              {it.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
