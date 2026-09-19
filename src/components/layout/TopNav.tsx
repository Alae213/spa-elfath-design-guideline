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
      <header className="sticky top-0 z-40 flex h-[56px] items-center bg-black/4 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-dark/10 dark:bg-white/8">
        <div className="mx-auto flex h-full w-full max-w-[980px] items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <button
              aria-label={mobileOpen ? t.topnav.closeNav : t.topnav.openNav}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex lg:hidden h-7 w-7 items-center justify-center text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
            >
              {mobileOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>

            <Link href="/guidelines" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- svg logo, masked white via filter on dark */}
              <img src="/elfath-logo.svg" alt="SPA El Fath" className="h-8 w-auto dark:brightness-0 dark:invert" />
              <span className="hidden sm:inline text-[16px] font-medium text-[var(--apple-text)]/50">{t.topnav.developer}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            aria-label={t.topnav.closeOverlay}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 start-0 w-[280px] max-w-[84%] overflow-y-auto bg-[var(--apple-bg)]">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}