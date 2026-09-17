import { notFound } from "next/navigation";
import { getAllSlugs, getDocBySlug } from "@/lib/mdx";
import { findNavItemBySlug } from "@/lib/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  CubeIcon,
  ViewIcon,
  Link01Icon,
  Award01Icon,
} from "@hugeicons/core-free-icons";
import { Callout } from "@/components/mdx/Callout";
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

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  if (!slug) return {};
  const doc = getDocBySlug(slug);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  };
}

const principles = [
  {
    title: "الصلابة",
    icon: CubeIcon,
    color: "#0071e3",
    bg: "bg-[#0071e3]",
    text: "التصميم يبني الثقة لا يوحي بها. بدقة صناعية، زوايا حادة، شبكة صارمة، ومساحات متماسكة بألوان راسخة، نترجم ما نصنعه فعليًا: هياكل ومواد ومصانع على الأرض. كل عنصر يحمل وزنًا باحترافية تنفيذ، لا زخرفة عابرة.",
  },
  {
    title: "الوضوح",
    icon: ViewIcon,
    color: "#34c759",
    bg: "bg-[#34c759]",
    text: "المحتوى أهم من إطاره. بتباين عالٍ، ظلال عميقة وإضاءة مركزة بتجربة سينمائية نظيفة، نوجّه العين فورًا إلى المهم. الأرقام والقطاعات تُعرض بمباشرة فاخرة دون حجب، فيفهم الزائر \"من نحن وماذا نفعل\" خلال ثوانٍ.",
  },
  {
    title: "الانسجام",
    icon: Link01Icon,
    color: "#af52de",
    bg: "bg-[#af52de]",
    text: "قطاعان مختلفان بهدف واحد. يمتد نظام موحّد، ألوان وشبكة وطباعة، عبر كل منتج وموقع. ندمج الخط العربي الأصيل بجماليات عالمية حديثة، فيشعر المستخدم أمام كيان واحد متماسك، لا مشاريع متفرقة.",
  },
  {
    title: "الأصالة",
    icon: Award01Icon,
    color: "#ff9500",
    bg: "bg-[#ff9500]",
    text: "أربعة عقود ميدانية لا تُختزل في موضة لحظية. نفضّل هوية تصمد، كشبكة Masonry بأربعة أعمدة، كثافة عالية وبدون فواصل، حيث يُختبر كل قرار، من اللون إلى الجملة: هل يعكس مؤسسة تأسست 1984 وما تزال تبني بثبات؟",
  },
];

export default async function GuidelinePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  if (!slug || slug.length === 0) notFound();
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const navItem = findNavItemBySlug(slug);
  const isDesignPrinciples = slug.join("/") === "get-started/design-principles";
  const isAccessibility = slug.join("/") === "foundations/accessibility";
  const isArabic =
    doc.frontmatter.title === "مبادئ التصميم" ||
    doc.frontmatter.title === "إرشادات الوصولية" ||
    slug.join("/") === "get-started/design-principles" ||
    isAccessibility;
  const isEmpty = doc.content.trim().startsWith("Empty foundation");

  // Accessibility — strict Apple minimal: flat sections, thin hig-border only, RTL (no TOC)
  if (isAccessibility) {
    return (
      <div className="w-full bg-transparent font-arabic" dir="rtl">
        {/* Hero — identical chrome to Design Principles: 14×14 icon, 32px title, 15px muted */}
        <div className="mx-auto max-w-[640px] px-6 pt-12 pb-6 text-right" dir="rtl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--apple-hover)] ml-auto">
            {navItem?.icon ? (
              <HugeiconsIcon icon={navItem.icon as never} size={26} strokeWidth={1.5} color="var(--apple-muted)" />
            ) : null}
          </div>
          <h1 className="mt-5 text-right text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--apple-text)]">إرشادات الوصولية</h1>
          <p className="mt-3 max-w-[560px] text-right text-[15px] leading-7 text-[var(--apple-muted)] ml-auto">
            دليل فريق التصميم والتطوير — المرجع الموحّد لكل قرار يخص وصول المستخدم إلى المحتوى وفهمه. الهدف ضمان أن أي زائر — بجهازه، سرعة اتصاله، أو قدراته — يفهم من نحن، يلقى المعلومة، وينجز مهمته بأقل جهد.
          </p>
          <p className="mt-4 max-w-[560px] border-t border-[var(--hig-border)] pt-4 text-right text-[13px] leading-6 text-[var(--apple-muted)] ml-auto">
            <span className="font-semibold text-[var(--apple-text)]">رؤيتنا:</span> الوصولية جزء من القرار الأول، لا تصحيح لاحق. إذا كان العنصر غير واضح لأي شخص في أي ظرف، يُعاد النظر فيه قبل الإنتاج.
          </p>
          <div className="mt-3 flex gap-2 text-[11px] text-[var(--apple-muted)]">
            <span>4.5:1</span>
            <span className="text-[var(--hig-border)]">·</span>
            <span>44×44px</span>
            <span className="text-[var(--hig-border)]">·</span>
            <span>200%</span>
            <span className="text-[var(--hig-border)]">·</span>
            <span>RTL أولًا</span>
          </div>
        </div>

        {/* Content — flat sections, 640px centered like Design Principles */}
        <div className="mx-auto max-w-[640px] px-6 pb-16" dir="rtl">
          <div className="prose prose-neutral max-w-none bg-transparent">
            <MDXRemote
              source={doc.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={{
                Callout,
                SectionHeading,
                DoDontGrid,
                ContrastTable,
                SemanticTokens,
                SpacingRuler,
                TouchTargetDemo,
                MotionDemo,
                AltChecklist,
                PageGoalDemo,
                h2: (props) => <h2 className="mt-8 text-[16px] font-semibold text-[var(--apple-text)] font-arabic" {...props} />,
                h3: (props) => <h3 className="mt-6 text-[14px] font-semibold text-[var(--apple-text)] font-arabic" {...props} />,
                p: (props) => <p className="mt-3 text-[14px] leading-7 text-[var(--apple-text)] font-arabic" {...props} />,
                ul: (props) => <ul className="my-3 list-disc pr-6 text-[14px] leading-7 marker:text-[var(--apple-muted)]" {...props} />,
                ol: (props) => <ol className="my-3 list-decimal pr-6 text-[14px] leading-7 marker:text-[var(--apple-muted)]" {...props} />,
                a: (props) => <a className="text-[var(--apple-blue)] underline underline-offset-4 hover:text-[var(--apple-blue-hover)]" {...props} />,
                code: (props) => <code className="rounded bg-[var(--apple-hover)] px-1.5 py-0.5 font-mono text-[12px]" {...props} />,
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Apple-style design principles: big header, clean readability, icon with different color per value، all right aligned
  if (isDesignPrinciples) {
    return (
      <div className="w-full bg-transparent">
        {/* Header، big, clean, like Apple، right aligned */}
        <div className="mx-auto max-w-[640px] px-6 pt-12 pb-6 text-right font-arabic" dir="rtl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--apple-hover)] ml-auto">
            {navItem?.icon ? (
              <HugeiconsIcon icon={navItem.icon as never} size={26} strokeWidth={1.5} color="var(--apple-muted)" />
            ) : null}
          </div>
          <h1 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--apple-text)] text-right">مبادئ التصميم</h1>
          <p className="mt-3 max-w-[560px] text-right text-[15px] leading-7 text-[var(--apple-muted)] ml-auto">
            في كل تفصيلة بصرية لمجموعة الفتح، من الشعار إلى الموقع الإلكتروني، ومن تغليف المنتج إلى لافتة الموقع الصناعي، نستند إلى أربعة مبادئ ثابتة. هذه المبادئ لا تصف &quot;شكل&quot; الهوية فحسب، بل تعكس طبيعة المجموعة ذاتها: قاعدة صناعية متينة، وحضور وطني ممتد منذ 1984.
          </p>
        </div>

        {/* Values، no box, stroke color itself, 2x2 grid on desktop، all right aligned */}
        <div className="mx-auto max-w-[640px] px-6 pb-16 font-arabic" dir="rtl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {principles.map((p) => (
              <div key={p.title} className="flex flex-col items-start gap-2 bg-transparent text-right" dir="rtl">
                <HugeiconsIcon icon={p.icon as never} size={26} strokeWidth={1.7} color={p.color} />
                <h2 className="text-[19px] font-semibold leading-6 text-[var(--apple-text)] text-right w-full">{p.title}</h2>
                <p className="text-right text-[14.5px] leading-7 text-[var(--apple-text)] opacity-90 w-full">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-10">
      <div className={`mx-auto max-w-[640px] flex flex-col items-center text-center ${isArabic ? "font-arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
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
        <div dir={isArabic ? "rtl" : "ltr"} className={`mx-auto mt-10 max-w-[640px] ${isArabic ? "text-right font-arabic" : "text-left"} `}>
          <div className="prose prose-neutral max-w-none bg-transparent">
            <MDXRemote
              source={doc.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
              components={{
                h2: (props) => <h2 className={`mt-8 text-[16px] font-semibold text-[var(--apple-text)] ${isArabic ? "font-arabic" : ""}`} {...props} />,
                p: (props) => <p className={`mt-3 text-[14px] leading-7 text-[var(--apple-text)] ${isArabic ? "font-arabic" : ""}`} {...props} />,
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
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
