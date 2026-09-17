import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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

const themeScript = `(function(){try{var k='spa-elfath-theme';var lk='theme';var s=localStorage.getItem(k);if(!s)s=localStorage.getItem(lk);var m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var r=s==='system'?m:(s==='dark'||s==='light'?s:m);var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(r);d.style.colorScheme=r;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${plexArabic.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
