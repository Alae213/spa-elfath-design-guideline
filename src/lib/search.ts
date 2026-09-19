import Fuse from "fuse.js";
import type { Dictionary } from "@/i18n";
import { getNavigation, type LocalizedNavItem } from "./navigation";

export type SearchDoc = LocalizedNavItem & { category: string };

export function buildSearchIndex(dict: Dictionary): Fuse<SearchDoc> {
  const docs: SearchDoc[] = getNavigation(dict).flatMap((sec) =>
    sec.items.map((item) => ({ ...item, description: item.description ?? "", category: sec.title }))
  );

  return new Fuse(docs, {
    keys: [
      { name: "title", weight: 2 },
      { name: "description", weight: 1 },
      { name: "category", weight: 0.5 },
    ],
    threshold: 0.35,
    includeScore: true,
  });
}