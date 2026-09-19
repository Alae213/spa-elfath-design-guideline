#!/usr/bin/env node
// One-off: inspect real images on Apple's HIG right-to-left page.
// Usage: NODE_OPTIONS=--dns-result-order=ipv4first node inspect-rtl-images.mjs
import { chromium } from "playwright";
import fs from "node:fs";

const URL = "https://developer.apple.com/design/human-interface-guidelines/right-to-left";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
await page
  .getByRole("heading", { name: "Right to left", exact: true })
  .waitFor({ timeout: 90000 });
await page.waitForTimeout(8000);

// Dismiss cookie banner if present (best effort)
try {
  const btn = page.getByRole("button", { name: /accept|agree|continue/i }).first();
  if (await btn.count()) await btn.click({ timeout: 3000 });
} catch {}

const images = await page.$$eval("img", (els) =>
  els.map((img) => {
    const r = img.getBoundingClientRect();
    // nearest preceding heading for context
    let ctx = "";
    let el = img;
    for (let i = 0; i < 6 && el; i++) {
      el = el.previousElementSibling;
      if (el && /^H[1-4]$/.test(el.tagName)) {
        ctx = el.innerText.trim().slice(0, 120);
        break;
      }
    }
    if (!ctx) {
      const section = img.closest("section, article, div[class*='content']");
      const h = section?.querySelector("h1,h2,h3,h4");
      ctx = h?.innerText.trim().slice(0, 120) ?? "";
    }
    return {
      src: img.currentSrc || img.src,
      alt: img.alt ?? "",
      w: Math.round(r.width),
      h: Math.round(r.height),
      visible: r.width > 4 && r.height > 4,
      context: ctx,
    };
  })
);

const seen = new Set();
const unique = images.filter((im) => {
  if (!im.visible || !im.src.startsWith("http")) return false;
  if (seen.has(im.src)) return false;
  seen.add(im.src);
  return true;
});

console.log(JSON.stringify({ url: URL, count: unique.length, images: unique }, null, 2));
fs.writeFileSync("rtl-images.json", JSON.stringify({ url: URL, count: unique.length, images: unique }, null, 2));
await browser.close();
