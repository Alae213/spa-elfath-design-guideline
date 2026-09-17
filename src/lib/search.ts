import Fuse from "fuse.js";
import { navigation, type NavItem } from "./navigation";

export type SearchDoc = NavItem & { category: string };

export function buildSearchIndex(): Fuse<SearchDoc> {
  const docs: SearchDoc[] = navigation.flatMap((sec) =>
    sec.items.map((item) => ({ ...item, category: sec.title }))
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
