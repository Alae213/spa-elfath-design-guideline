"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { useI18n } from "@/components/providers/I18nProvider";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- mount guard
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label={t.theme.toggle}
        aria-hidden
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-transparent text-[var(--apple-muted)] opacity-0"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextLabel = isDark ? t.theme.toLight : t.theme.toDark;

  // Cycle: system -> light -> dark -> system via long press / respect resolved theme for simple toggle
  // Simple click toggles resolved theme; explicit system is preserved if user hasn't overridden
  const handleToggle = () => {
    if (theme === "system") {
      setTheme(isDark ? "light" : "dark");
    } else {
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <button
      aria-label={nextLabel}
      title={theme === "system" ? `${t.theme.systemLabel} (${resolvedTheme}) — ${nextLabel}` : nextLabel}
      onClick={handleToggle}
      onContextMenu={(e) => {
        e.preventDefault();
        setTheme("system");
      }}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-transparent text-[var(--apple-muted)] hover:text-[var(--apple-text)] transition-colors"
    >
      {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  );
}