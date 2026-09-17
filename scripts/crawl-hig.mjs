#!/usr/bin/env node
/**
 * scripts/crawl-hig.mjs
 * Crawl https://developer.apple.com/design/human-interface-guidelines/
 * Extract IA + SVG icons → context/design/ICONS.md + src/content stubs + tmp/raw-icons
 *
 * Usage:
 *   NODE_OPTIONS=--dns-result-order=ipv4first node scripts/crawl-hig.mjs
 *   # or with Playwright:
 *   npx playwright install chromium
 *   NODE_OPTIONS=--dns-result-order=ipv4first node scripts/crawl-hig.mjs --playwright
 *
 * NOTE: Apple HIG is JS-rendered. This stub implements a fetch+cheerio fallback and a Playwright branch.
 * Fill in selectors after first live run (see context/design/ICONS.md).
 */

import fs from "node:fs";
import path from "node:path";

const HIG_ROOT = "https://developer.apple.com/design/human-interface-guidelines/";
const OUT_ICON_DIR = "tmp/raw-icons";
const ICONS_MD = "context/design/ICONS.md";

async function fetchFallback() {
  console.log(`[crawl-hig] Fetching ${HIG_ROOT} (fallback, no JS)…`);
  const res = await fetch(HIG_ROOT, { headers: { "User-Agent": "SPA-ElFath-Guideline-Bot/0.1" } });
  const html = await res.text();
  console.log(`[crawl-hig] Got ${html.length} chars — page is JS-heavy, expect incomplete IA.`);
  // TODO: picks up <a href="/design/human-interface-guidelines/..."> links via regex
  const hrefs = [...html.matchAll(/href="(\\/design\\/human-interface-guidelines\\/[^"]+)"/g)].map((m) => m[1]);
  console.log(`[crawl-hig] Found ${hrefs.length} HIG hrefs (static HTML).`);
  for (const h of hrefs.slice(0, 10)) console.log("  -", h);
  console.log(`[crawl-hig] For full IA, run with --playwright.`);
}

async function crawlWithPlaywright() {
  let pw;
  try {
    pw = await import("playwright");
  } catch {
    console.error("[crawl-hig] Playwright not installed. Run: npm install -D playwright && npx playwright install chromium");
    process.exit(1);
  }
  console.log("[crawl-hig] Launching Chromium…");
  const browser = await pw.chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("[page]", msg.text()));
  await page.goto(HIG_ROOT, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(3000);

  // Try common selectors — update after live inspection
  const selectors = [
    'nav a[href*="/design/human-interface-guidelines/"]',
    'a[href*="/design/human-interface-guidelines"]',
    "[data-test*='sidebar'] a",
  ];
  let links = [];
  for (const sel of selectors) {
    const els = await page.$$(sel);
    if (els.length) {
      console.log(`[crawl-hig] Selector "${sel}" matched ${els.length} links`);
      for (const el of els) {
        const href = await el.getAttribute("href");
        const text = (await el.textContent())?.trim();
        if (href) links.push({ href, text });
      }
      break;
    }
  }
  console.log(`[crawl-hig] Collected ${links.length} links`);
  links.slice(0, 20).forEach((l) => console.log(`  ${l.text} → ${l.href}`));

  // SVG inventory
  const svgs = await page.$$eval("svg", (els) => els.map((e) => ({ html: e.outerHTML.slice(0, 200), viewBox: e.getAttribute("viewBox") })));
  console.log(`[crawl-hig] Found ${svgs.length} inline SVGs`);
  svgs.slice(0, 5).forEach((s) => console.log("  svg", s.viewBox, s.html.slice(0, 120)));

  // Save raw SVGs
  fs.mkdirSync(OUT_ICON_DIR, { recursive: true });
  const rawSvgs = await page.$$eval("svg", (els) => els.map((e) => e.outerHTML));
  rawSvgs.forEach((html, i) => fs.writeFileSync(path.join(OUT_ICON_DIR, `raw-${i}.svg`), html, "utf-8"));
  console.log(`[crawl-hig] Wrote ${rawSvgs.length} raw SVGs to ${OUT_ICON_DIR}/`);

  await browser.close();
}

const usePw = process.argv.includes("--playwright");
if (usePw) {
  await crawlWithPlaywright();
} else {
  await fetchFallback();
}

console.log(`[crawl-hig] Done. Next: run scripts/icons-build.mjs and update ${ICONS_MD}.`);
