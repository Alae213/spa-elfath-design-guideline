import Link from "next/link";
import { cookies } from "next/headers";
import { getDictionary, resolveLocale } from "@/i18n";
import { getNavigation } from "@/lib/navigation";
import { HugeiconsIcon } from "@hugeicons/react";

export default async function GuidelinesHome() {
  const store = await cookies();
  const locale = resolveLocale(store.get("sdg-lang")?.value);
  const dict = getDictionary(locale);
  const navigation = getNavigation(dict);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-[640px]" dir={dir}>
        <h1 className="text-[28px] font-semibold leading-[1.1] text-[var(--apple-text)]">{dict.home.heading}</h1>
        <p className="mt-2 text-[14px] leading-[1.5] text-[var(--apple-muted)]">{dict.home.subheading}</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2" dir={dir}>
        {navigation.map((section) => (
          <div key={section.key} className="bg-transparent p-4 rounded-lg">
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