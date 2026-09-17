import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { HugeiconsIcon } from "@hugeicons/react";

export default function GuidelinesHome() {
  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-[640px]">
        <h1 className="text-[28px] font-semibold leading-[1.1] text-[var(--apple-text)]">Design Guidelines</h1>
        <p className="mt-2 text-[14px] leading-[1.5] text-[var(--apple-muted)]">Foundation for SPA El Fath.</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {navigation.map((section) => (
          <div key={section.title} className="bg-transparent p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--apple-hover)] text-[var(--apple-muted)]">
                <HugeiconsIcon icon={section.items[0].icon as never} size={14} strokeWidth={1.5} />
              </span>
              <h2 className="text-[13px] font-medium text-[var(--apple-text)]">{section.title}</h2>
            </div>
            <ul className="mt-3 space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-center gap-2.5 rounded-md px-2 py-1 hover:bg-[var(--apple-hover)]">
                    <span className="text-[var(--apple-muted)] group-hover:text-[var(--apple-text)]">
                      <HugeiconsIcon icon={item.icon as never} size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-[13px] font-normal text-[var(--apple-text)] group-hover:text-[var(--apple-blue)]">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
