"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- mount guard
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        aria-hidden
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-transparent text-[var(--apple-muted)] opacity-0"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

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
      title={theme === "system" ? `System (${resolvedTheme}) — ${nextLabel}` : nextLabel}
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
