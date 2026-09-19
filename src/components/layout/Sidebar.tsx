"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation } from "@/lib/navigation";
import { ChevronDownIcon } from "@/components/icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SearchDialog } from "./SearchDialog";
import { useI18n } from "@/components/providers/I18nProvider";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { t } = useI18n();
  const navigation = useMemo(() => getNavigation(t), [t]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const s of navigation) init[s.key] = s.defaultOpen ?? true;
    return init;
  });

  useEffect(() => {
    const raw = localStorage.getItem("sdg-sidebar");
    if (raw) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage after mount
        setOpenSections((prev) => ({ ...prev, ...JSON.parse(raw) }));
      } catch {}
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("sdg-sidebar", JSON.stringify(openSections));
  }, [openSections]);

  useEffect(() => {
    if (!pathname) return;
    const patch: Record<string, boolean> = {};
    for (const sec of navigation) {
      if (sec.items.some((i) => pathname.startsWith(i.href))) patch[sec.key] = true;
    }
    if (!Object.keys(patch).length) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync active section open state to URL
    setOpenSections((p) => {
      let changed = false;
      for (const k of Object.keys(patch)) {
        if (p[k] !== true) {
          changed = true;
          break;
        }
      }
      if (!changed) return p;
      return { ...p, ...patch };
    });
  }, [pathname, navigation]);

  return (
    <nav aria-label={t.sidebar.label} className="flex flex-col py-4">
      <div className="px-2 pb-3">
        <SearchDialog />
      </div>
      <div className="flex flex-col gap-4">
        {navigation.map((section) => {
          const isOpen = openSections[section.key] ?? true;
          return (
            <div key={section.key} className="px-2">
              <button
                onClick={() => setOpenSections((p) => ({ ...p, [section.key]: !isOpen }))}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[13px] font-medium text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
                aria-expanded={isOpen}
              >
                {section.title}
                <ChevronDownIcon size={12} className={`text-[var(--apple-muted-2)] transition-transform ${isOpen ? "" : "-rotate-90 rtl:rotate-90"}`} />
              </button>
              {isOpen ? (
                <ul className="mt-1 flex flex-col gap-0.5">
                  {section.items.map((item) => {
                    const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          aria-current={active ? "page" : undefined}
                          className={`group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[14px] leading-[1.2] ${
                            active ? "bg-[var(--apple-hover)] text-[var(--apple-text)] font-medium" : "text-[var(--apple-text)] hover:bg-[var(--apple-hover)]"
                          }`}
                        >
                          <span className={`shrink-0 ${active ? "text-[var(--brand-300)]" : "text-[var(--apple-muted)] group-hover:text-[var(--apple-text)]"}`}>
                            <HugeiconsIcon icon={item.icon as never} size={16} strokeWidth={1.5} color="currentColor" />
                          </span>
                          <span className={`truncate ${active ? "font-medium" : "font-normal"}`}>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}