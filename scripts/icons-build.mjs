#!/usr/bin/env node
/**
 * scripts/icons-build.mjs
 * Optimize raw SVGs from tmp/raw-icons via svgo (if installed) and generate src/components/icons from them.
 *
 * Usage:
 *   node scripts/icons-build.mjs
 *
 * Requires: npm install -D svgo
 */

import fs from "node:fs";
import path from "node:path";

const RAW_DIR = "tmp/raw-icons";
const OUT_DIR = "src/components/icons/generated";

if (!fs.existsSync(RAW_DIR)) {
  console.log(`[icons-build] No ${RAW_DIR} — run scripts/crawl-hig.mjs first. Skipping (12 priority icons already in src/components/icons/*).`);
  process.exit(0);
}

const files = fs.readdirSync(RAW_DIR).filter((f) => f.endsWith(".svg"));
console.log(`[icons-build] Found ${files.length} raw SVGs`);

fs.mkdirSync(OUT_DIR, { recursive: true });

let svgo = null;
try {
  svgo = await import("svgo");
} catch {
  console.log("[icons-build] svgo not installed — copying raw without optimization. Install: npm install -D svgo");
}

for (const file of files) {
  const raw = fs.readFileSync(path.join(RAW_DIR, file), "utf-8");
  let optimized = raw;
  if (svgo) {
    const res = svgo.optimize(raw, {
      plugins: [
        "removeDimensions",
        { name: "convertColors", params: { currentColor: true } },
        { name: "removeViewBox", active: false },
      ],
    });
    optimized = res.data;
  }
  // Ensure viewBox preserved, replace fill with currentColor if needed
  if (!optimized.includes("viewBox")) {
    optimized = optimized.replace("<svg", '<svg viewBox="0 0 24 24"');
  }
  const name = path.basename(file, ".svg").replace(/[^a-z0-9]/gi, "-").replace(/^-+/, "").replace(/-+$/, "");
  const componentName = name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("") + "Icon";
  const tsx = `import type { SVGProps } from "react";\n\nexport function ${componentName}(props: SVGProps<SVGSVGElement> & { size?: number }) {\n  const { size = 20, ...rest } = props as any;\n  return (\n    ${optimized.replace("<svg", "<svg width={size} height={size}").replace(/aria-hidden="[^"]*"/, 'aria-hidden="true"')}\n  );\n}\n`;
  // Minimal: just copy svg file for now
  fs.writeFileSync(path.join(OUT_DIR, `${componentName}.tsx`), tsx, "utf-8");
  console.log(`  → ${componentName}.tsx`);
}

console.log(`[icons-build] Done. Review ${OUT_DIR}/ and re-export in src/components/icons/index.ts`);
