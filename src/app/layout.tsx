import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { localeMeta, resolveLocale } from "@/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SPA El Fath - Design Guidelines",
    template: "%s - SPA El Fath Guidelines",
  },
  description:
    "SPA El Fath Design Guidelines - Human Interface Guidelines clone for internal product reference. Foundations, patterns, components, technologies.",
  metadataBase: new URL("https://spa-elfath-design-guideline.vercel.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("sdg-lang")?.value);
  const meta = localeMeta[locale];
  const themeCookie = (cookieStore.get("spa-elfath-theme")?.value ?? cookieStore.get("theme")?.value ?? "system") as
    | "light"
    | "dark"
    | "system";
  const initialThemeClass = themeCookie === "light" || themeCookie === "dark" ? ` ${themeCookie}` : "";

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      data-locale={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${plexArabic.variable} h-full antialiased${initialThemeClass}`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
