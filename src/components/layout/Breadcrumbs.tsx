"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@/components/icons";
import { getBreadcrumbs } from "@/lib/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = getBreadcrumbs(pathname ?? "/guidelines");

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-system-400">
      {crumbs.map((c, idx) => {
        const isLast = idx === crumbs.length - 1;
        return (
          <span key={c.href} className="inline-flex items-center gap-1">
            {idx > 0 ? <ChevronRightIcon size={12} className="text-system-300" /> : null}
            {isLast ? (
              <span className="font-medium text-foreground">{c.title}</span>
            ) : (
              <Link href={c.href} className="hover:text-foreground hover:underline underline-offset-4">
                {c.title}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
