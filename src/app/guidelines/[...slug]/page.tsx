import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { findNavItemBySlug } from "@/lib/navigation";
import { getDictionary, resolveLocale } from "@/i18n";
import { HugeiconsIcon } from "@hugeicons/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "@/components/mdx/Callout";
import { ColorSwatch, ColorRow } from "@/components/mdx/ColorSwatch";
import { IconGrid, IconCell } from "@/components/mdx/IconGallery";
import { ImageGrid, ImageDemo } from "@/components/mdx/ImageDemo";
import { LayoutDemo } from "@/components/mdx/LayoutDemo";
import { RtlDemo, HigFigure } from "@/components/mdx/RtlDemo";
import { TypeDemo } from "@/components/mdx/TypeDemo";
import {
  SectionHeading,
  Accordion,
  DoDontGrid,
  ContrastTable,
  SemanticTokens,
  SpacingRuler,
  TouchTargetDemo,
  MotionDemo,
  AltChecklist,
  PageGoalDemo,
} from "@/components/mdx/AccessibilityDemos";
import { getPageData, getPrinciplesData, isDesignPrinciplesSlug } from "@/lib/pages/registry";
import { DesignPage, DesignPrinciplesPage } from "@/components/pages/DesignPage";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const store = await cookies();
  const locale = resolveLocale(store.get("sdg-lang")?.value);
  if (!slug) return {};
  const doc = getDocBySlug(slug, locale);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

export default async function GuidelinePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  if (!slug || slug.length === 0) notFound();

  const store = await cookies();
  const locale = resolveLocale(store.get("sdg-lang")?.value);
  const dict = getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  const doc = getDocBySlug(slug, locale);
  if (!doc) notFound();

  const navItem = findNavItemBySlug(slug, dict);
  const slugStr = slug.join("/");

  // Hardcoded Design Principles — pixel-perfect 2×2 grid
  if (isDesignPrinciplesSlug(slugStr)) {
    const data = getPrinciplesData(locale) as { title: string; intro: string; items: { title: string; icon: unknown; color: string; text: string }[] };
    return <DesignPrinciplesPage data={data} locale={locale} navIcon={navItem?.icon} />;
  }

  // Registry-driven pages — all foundations + skeletons
  const pageData = getPageData(slugStr, locale);
  if (pageData) {
    return <DesignPage data={pageData} locale={locale} navIcon={navItem?.icon} />;
  }

  // Fallback: generic MDX (should not be reached for known slugs)
  const isEmpty = doc.content.trim().startsWith("Empty foundation");

  return (
    <div className="w-full px-6 py-10">
      <div className="mx-auto flex max-w-[640px] flex-col items-center text-center" dir={dir}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--apple-hover)]">
          {navItem?.icon ? (
            <HugeiconsIcon icon={navItem.icon as never} size={24} strokeWidth={1.5} color="var(--apple-muted)" />
          ) : null}
        </div>
        <h1 className="mt-3 text-[22px] font-semibold text-[var(--apple-text)]">{doc.frontmatter.title}</h1>
        {doc.frontmatter.description ? (
          <p className="mt-1 text-[13px] text-[var(--apple-muted)]">{doc.frontmatter.description}</p>
        ) : null}
      </div>

      {!isEmpty ? (
        <div dir={dir} className="mx-auto mt-10 max-w-[640px]">
          <div className="prose prose-neutral max-w-none bg-transparent">
            <MDXRemote
              source={doc.content}
              options={{
                blockJS: false,
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
              components={{
                h2: (props) => <h2 className="mt-8 text-[16px] font-semibold text-[var(--apple-text)]" {...props} />,
                h3: (props) => <h3 className="mt-6 text-[14px] font-semibold text-[var(--apple-text)]" {...props} />,
                p: (props) => <p className="mt-3 text-[14px] leading-7 text-[var(--apple-text)]" {...props} />,
                ul: (props) => (
                  <ul className="my-3 list-disc ps-6 text-[14px] leading-7 marker:text-[var(--apple-muted)]" {...props} />
                ),
                ol: (props) => (
                  <ol className="my-3 list-decimal ps-6 text-[14px] leading-7 marker:text-[var(--apple-muted)]" {...props} />
                ),
                a: (props) => (
                  <a className="text-[var(--apple-blue)] underline underline-offset-4 hover:text-[var(--apple-blue-hover)]" {...props} />
                ),
                code: (props) => <code className="rounded bg-[var(--apple-hover)] px-1.5 py-0.5 font-mono text-[12px]" {...props} />,
                Callout,
                SectionHeading,
                Accordion,
                DoDontGrid,
                ContrastTable,
                SemanticTokens,
                SpacingRuler,
                TouchTargetDemo,
                MotionDemo,
                AltChecklist,
                PageGoalDemo,
                ColorSwatch,
                ColorRow,
                IconGrid,
                IconCell,
                ImageGrid,
                ImageDemo,
                LayoutDemo,
                RtlDemo,
                HigFigure,
                TypeDemo,
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
