"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Sidebar } from "./Sidebar";

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-[44px] items-center bg-white/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/60 dark:bg-black/60 dark:supports-[backdrop-filter]:bg-black/50">
        <div className="mx-auto flex h-full w-full max-w-[980px] items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <button
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex lg:hidden h-7 w-7 items-center justify-center text-[var(--apple-muted)] hover:text-[var(--apple-text)]"
            >
              {mobileOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>

            <Link href="/guidelines" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- svg logo, masked white via filter on dark */}
              <img src="/elfath-logo.svg" alt="SPA El Fath" className="h-5 w-auto dark:brightness-0 dark:invert" />
              <span className="hidden sm:inline h-4 w-px bg-[var(--apple-muted-2)]" aria-hidden />
              <span className="hidden sm:inline text-[12px] font-medium text-[var(--apple-text)]">Developer</span>
              <span className="hidden sm:inline text-[12px] font-normal text-[var(--apple-muted)]">|</span>
              <span className="text-[12px] font-medium text-[var(--apple-text)]">Human Interface Guidelines</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button aria-label="Close navigation overlay" className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-[44px] bottom-0 w-[280px] max-w-[84%] overflow-y-auto bg-[var(--apple-bg)]">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
