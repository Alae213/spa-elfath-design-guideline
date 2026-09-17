"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

type Theme = "light" | "dark" | "system";
type Resolved = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  resolvedTheme: Resolved;
  systemTheme: Resolved | undefined;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "spa-elfath-theme";
const DEFAULT_THEME: Theme = "system";

function getSystemTheme(): Resolved {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved: Resolved) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [resolvedTheme, setResolvedTheme] = useState<Resolved>("light");
  const [systemTheme, setSystemTheme] = useState<Resolved | undefined>(undefined);

  // hydrate from storage + system (runs after blocking script, so no FOUC)
  useEffect(() => {
    let stored: Theme | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY) as Theme | null;
      // migrate legacy key if present
      if (!raw) {
        const legacy = localStorage.getItem("theme") as Theme | null;
        if (legacy) {
          stored = legacy;
          localStorage.setItem(STORAGE_KEY, legacy);
        }
      } else {
        stored = raw;
      }
    } catch {}
    const initial: Theme = stored ?? DEFAULT_THEME;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate theme from storage on mount
    setThemeState(initial);

    const sys = getSystemTheme();
    setSystemTheme(sys);
    const resolved: Resolved = initial === "system" ? sys : (initial as Resolved);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  // listen system changes — always keep systemTheme up to date, only apply when theme === system
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const sys: Resolved = e.matches ? "dark" : "light";
      setSystemTheme(sys);
    };
    handler(mql);
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler as (e: MediaQueryListEvent) => void);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler as (e: MediaQueryListEvent) => void);
    };
  }, []);

  // apply when theme or systemTheme changes
  useEffect(() => {
    const resolved: Resolved = theme === "system" ? (systemTheme ?? getSystemTheme()) : (theme as Resolved);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync resolved theme to html class
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, [theme, systemTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
      // clean legacy
      localStorage.removeItem("theme");
    } catch {}
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
      themes: ["light", "dark", "system"],
    }),
    [theme, resolvedTheme, systemTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
