"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitcher } from "./LangSwitcher";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Sidebar } from "./Sidebar";
import { useI18n } from "@/components/providers/I18nProvider";

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <header className="sticky top-0 z-40 flex h-[50px] items-center bg-white backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-dark/10 dark:bg-white/10 dark:border-[var(--apple-border)]/5">
        <div className="mx-auto flex h-full w-full max-w-[980px] items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-2.5">
            <button
              aria-label={mobileOpen ? t.topnav.closeNav : t.topnav.openNav}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--apple-muted)] transition-colors hover:bg-[var(--apple-bg-soft)]/50 hover:text-[var(--apple-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--apple-blue)] lg:hidden"
            >
              {mobileOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button> 

            <Link href="/guidelines" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- svg logo, masked white via filter on dark */}
              <img src="/elfath-logo.svg" alt="SPA El Fath" className="h-7 w-auto dark:brightness-0 dark:invert" />
              <span className="hidden sm:inline text-[15px] font-medium text-[var(--apple-text)]/40">{t.topnav.developer}</span>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            aria-label={t.topnav.closeOverlay}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 start-0 w-[280px] max-w-[84%] overflow-y-auto bg-[var(--apple-bg)] shadow-2xl">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
