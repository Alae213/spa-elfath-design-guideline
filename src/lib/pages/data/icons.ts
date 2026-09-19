import * as React from "react";
import type { Localized, PageData } from "@/lib/pages/types";
import { IconCell } from "@/components/mdx/IconGallery";
import {
  AccessibilityIcon,
  ColorsIcon,
  Layers01Icon,
  Layout01Icon,
  PaintBoardIcon,
  RightToLeftListTriangleIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/icons",
  accent: "#ff9500",
  hero: {
    title: "Icons",
    intro:
      "An icon is a word in a shared vocabulary, not a decoration. Every glyph in this guide comes from a single set, drawn on the same grid, with the same stroke — so a settings gear never looks like it was borrowed from another product.",
  },
  sections: [
    { kind: "heading", id: "set", number: "01", title: "The Approved Set", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "The approved set is HugeIcons (free): stroke glyphs on a 24-pixel grid, drawn for interfaces. The seventeen below are the set in use in this guide — each one marks its section, and no other glyph may mark these meanings:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Idea01Icon", usage: "Get started — design principles." },
        { name: "AccessibilityIcon", usage: "Foundations — accessibility." },
        { name: "PaintBoardIcon", usage: "Foundations — branding." },
        { name: "ColorsIcon", usage: "Foundations — colors." },
        { name: "Layers01Icon", usage: "Foundations — icons (this page)." },
        { name: "Image01Icon", usage: "Foundations — images." },
        { name: "Layout01Icon", usage: "Foundations — layout." },
        { name: "RightToLeftListTriangleIcon", usage: "Foundations — right-to-left." },
        { name: "TextFontIcon", usage: "Foundations — typography." },
        { name: "Touch01Icon", usage: "Components — buttons." },
        { name: "InputTextIcon", usage: "Components — inputs." },
        { name: "ToggleOnIcon", usage: "Components — selection controls." },
        { name: "ChatFeedbackIcon", usage: "Components — feedback." },
        { name: "GroupLayersIcon", usage: "Components — overlayers." },
        { name: "Cards01Icon", usage: "Components — cards." },
        { name: "Database01Icon", usage: "Components — data." },
        { name: "PlayCircleIcon", usage: "Components — media." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "One set, no mixing.",
          text: "New product icons come from HugeIcons (@hugeicons/core-free-icons + @hugeicons/react) — never from a second library, never hand-drawn on the spot to match a mood.",
        },
        {
          strong: "One meaning per glyph.",
          text: "A glyph that marks a section keeps that meaning everywhere. Reassigning a used glyph to a new meaning breaks recognition faster than any redesign.",
        },
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "Sizes & Stroke", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "Three sizes cover every context. The glyph itself never changes — only the box it ships in:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Touch01Icon", size: 16, usage: "16 — inline with text and table rows." },
        { name: "Touch01Icon", size: 20, usage: "20 — the default for buttons and nav." },
        { name: "Touch01Icon", size: 24, usage: "24 — feature and empty-state moments." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Stroke 1.5, always.",
          text: "Every glyph renders at strokeWidth 1.5 on its 24-pixel grid — the weight that reads at 16 and stays light at 24.",
        },
        {
          strong: "12 is a separator, not a size.",
          text: "The single exception is dense inline separators such as breadcrumb chevrons at 12 — never an interactive glyph, never a meaning-carrier.",
        },
        {
          strong: "The 44 belongs to the parent.",
          text: "Glyphs stay 16/20/24; the tappable 44×44 minimum lives on the button or row that carries them.",
        },
      ],
    },
    { kind: "heading", id: "color", number: "03", title: "Color & Context", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "Icons have no color of their own. Every glyph renders in currentColor and inherits the text color of its context — the same glyph below, three contexts, zero recoloring:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "ColorsIcon", usage: "Default text — the glyph takes the body color." },
        { name: "ColorsIcon", usage: "Muted text — the glyph quiets with its row." },
        {
          name: "ChatFeedbackIcon",
          boxStyle: { backgroundColor: "rgba(163,192,223,0.30)" },
          usage: "On a brand tint — still inherited, never hard-coded.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Inherit, don't paint.",
          text: "Hard-coding a blue into a glyph freezes it to one background; inheriting lets the same icon work on white, on tint, and in dark mode without a variant.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "currentColor everywhere — the context decides.",
        "Letting muted rows quiet their own glyphs.",
        "Testing the glyph on every background it ships on.",
      ],
      dontItems: [
        "Baking #1D65AF into a glyph “because it is brand”.",
        "A different color for the same glyph in two places.",
        "Fills, gradients, or shadows inside a stroke glyph.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "Usage Rules", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "A glyph without a label is a guess. Navigation and actions pair the icon with a visible word; the rare icon-only button carries its meaning in code instead:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "flex items-center gap-4" },
          React.createElement(
            "div",
            { className: "flex h-11 w-11 items-center justify-center border border-[var(--hig-border)]", "aria-hidden": true } as React.HTMLAttributes<HTMLDivElement>,
            React.createElement(IconCell, { name: "Idea01Icon", bare: true }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Icon-only buttons"),
            React.createElement(
              "p",
              { className: "mt-1 font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
              'aria-hidden="true" on the svg · aria-label="Search" on the button',
            ),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Icon + visible label for nav items and actions.",
        "aria-hidden on the glyph, accessible name on the control.",
        "The 44×44 minimum on the tappable parent, not the glyph.",
      ],
      dontItems: [
        "An icon alone for a critical action with no name in code.",
        "Emoji as icons — 🚨 is not a glyph and never scales.",
        "Two libraries on one screen, however similar they look.",
      ],
    },
    { kind: "heading", id: "misuse", number: "05", title: "Incorrect Usage", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "The errors below are rejected in review. A stroke glyph is a fixed drawing on a fixed grid; any distortion turns it into another drawing:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Stretch & squash"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, iconStyle: { transform: "scaleX(1.6)" }, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Changing the width/height ratio — wrong even when a space begs to be filled.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Hard-coded brand color"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6 text-[#1D65AF]" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Baking blue into the glyph instead of inheriting the context color.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Below the ladder"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 10, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "10 pixels collapses the 1.5 stroke into a smudge — 16 is the floor for meaning.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Emoji as icon"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement("span", { className: "text-[24px]", "aria-hidden": true } as React.HTMLAttributes<HTMLSpanElement>, "🚨"),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Emoji render per-platform, carry no stroke language, and fail at small sizes.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "The glyph as shipped: ratio, stroke, and size from the ladder.",
        "One set across the product — HugeIcons, currentColor, 1.5.",
      ],
      dontItems: [
        "Stretching, repainting, shrinking, or substituting emoji.",
        "Redrawing a shipped glyph “slightly better” by hand.",
      ],
    },
    { kind: "heading", id: "mirroring", number: "06", title: "Mirroring", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Direction mirrors; everything else stands still. A glyph that points with the reading flow flips in Arabic — a glyph that depicts the world, the brand, or time never does:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Flip"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "directional only"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8", dir: "ltr" },
            React.createElement(IconCell, { name: "RightToLeftListTriangleIcon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "+ rtl: variant"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Back chevrons, text-direction marks, forward/backward motion — mirrored with the flow.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Never flip"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "fixed always"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8" },
            React.createElement(IconCell, { name: "Touch01Icon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "logo · clock · ✓"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Logos, universal marks, clocks, real-world objects — identical in every direction.",
          ),
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "",
          text: "Full mirroring law lives on § Right to Left — flip vs never-flip. The glyph rule in one line: mirror motion and direction, never identity and time.",
        },
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/icons",
  accent: "#ff9500",
  hero: {
    title: "الأيقونات",
    intro:
      "الأيقونة كلمة في مفردات مشتركة، لا زينة. كل رمز في هذا الدليل يأتي من مجموعة واحدة، مرسوم على الشبكة نفسها بالسماكة نفسها — فلا يبدو ترس الإعدادات مستعارًا من منتج آخر.",
  },
  sections: [
    { kind: "heading", id: "set", number: "01", title: "المجموعة المعتمدة — Approved Set", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "المجموعة المعتمدة هي HugeIcons (المجانية): رموز خطّية على شبكة 24 بكسل، مرسومة للواجهات. السبعة عشر أدناه هي المجموعة المستعملة في هذا الدليل — كل واحد يعلّم قسمه، ولا يجوز لرمز آخر أن يحمل هذه المعاني:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Idea01Icon", usage: "البداية — مبادئ التصميم." },
        { name: "AccessibilityIcon", usage: "الأسس — إمكانية الوصول." },
        { name: "PaintBoardIcon", usage: "الأسس — الهوية البصرية." },
        { name: "ColorsIcon", usage: "الأسس — الألوان." },
        { name: "Layers01Icon", usage: "الأسس — الأيقونات (هذه الصفحة)." },
        { name: "Image01Icon", usage: "الأسس — الصور." },
        { name: "Layout01Icon", usage: "الأسس — التخطيط." },
        { name: "RightToLeftListTriangleIcon", usage: "الأسس — اليمين إلى اليسار." },
        { name: "TextFontIcon", usage: "الأسس — الخطوط." },
        { name: "Touch01Icon", usage: "المكونات — الأزرار." },
        { name: "InputTextIcon", usage: "المكونات — الحقول." },
        { name: "ToggleOnIcon", usage: "المكونات — عناصر الاختيار." },
        { name: "ChatFeedbackIcon", usage: "المكونات — التغذية الراجعة." },
        { name: "GroupLayersIcon", usage: "المكونات — الطبقات العلوية." },
        { name: "Cards01Icon", usage: "المكونات — البطاقات." },
        { name: "Database01Icon", usage: "المكونات — البيانات." },
        { name: "PlayCircleIcon", usage: "المكونات — الوسائط." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "مجموعة واحدة دون خلط.",
          text: "الأيقونات الجديدة للمنتج تأتي من HugeIcons (@hugeicons/core-free-icons + @hugeicons/react) — لا من مكتبة ثانية أبدًا، ولا مرسومة يدويًا على عجل لتناسب مزاجًا.",
        },
        {
          strong: "معنى واحد لكل رمز.",
          text: "الرمز الذي يعلّم قسمًا يحافظ على معناه في كل مكان. إعادة توظيف رمز مستعمل لمعنى جديد تكسر التعرّف أسرع من أي إعادة تصميم.",
        },
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "المقاسات والسماكة — Sizes & Stroke", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "ثلاثة مقاسات تغطي كل سياق. الرمز نفسه لا يتغير أبدًا — فقط الصندوق الذي يُشحَن فيه:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Touch01Icon", size: 16, usage: "16 — مدمج مع النص وصفوف الجداول." },
        { name: "Touch01Icon", size: 20, usage: "20 — الافتراضي للأزرار والتنقل." },
        { name: "Touch01Icon", size: 24, usage: "24 — لحظات إبراز الحالات الفارغة." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "السماكة 1.5 دائمًا.",
          text: "كل رمز يُرسَم بـstrokeWidth 1.5 على شبكته من 24 بكسل — السماكة التي تُقرَأ عند 16 وتبقى خفيفة عند 24.",
        },
        {
          strong: "الـ12 فاصل لا مقاس.",
          text: "الاستثناء الوحيد هو الفواصل المدمجة الكثيفة مثل أسهم مسار التنقل عند 12 — لا رمز تفاعلي أبدًا، ولا حامل معنى أبدًا.",
        },
        {
          strong: "الـ44 للأب.",
          text: "تبقى الرموز عند 16/20/24؛ وحدّ اللمس الأدنى 44×44 يعيش على الزر أو الصف الذي يحملها.",
        },
      ],
    },
    { kind: "heading", id: "color", number: "03", title: "اللون والسياق — Color & Context", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "لا لون خاص للأيقونات. كل رمز يُرسَم بـcurrentColor ويرث لون نص سياقه — الرمز نفسه أدناه، في ثلاثة سياقات، دون إعادة تلوين:",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "ColorsIcon", usage: "النص الافتراضي — يأخذ الرمز لون المتن." },
        { name: "ColorsIcon", usage: "النص الخافت — يهدأ الرمز مع صفّه." },
        {
          name: "ChatFeedbackIcon",
          boxStyle: { backgroundColor: "rgba(163,192,223,0.30)" },
          usage: "على صبغة الهوية — موروث أيضًا، لا مطلي.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "وراثة لا طلاء.",
          text: "خبز الأزرق داخل الرمز يجمّده على خلفية واحدة؛ والوراثة تدع الرمز نفسه يعمل على الأبيض والصبغة والوضع الداكن دون صنف بديل.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "currentColor في كل مكان — السياق هو من يقرر.",
        "ترك الصفوف الخافتة تُهدئ رموزها بنفسها.",
        "اختبار الرمز على كل خلفية يُشحَن عليها.",
      ],
      dontItems: [
        "خبز #1D65AF داخل رمز «لأنه من الهوية».",
        "لون مختلف للرمز نفسه في مكانين.",
        "الملء أو التدرجات أو الظلال داخل رمز خطّي.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "قواعد الاستعمال — Usage Rules", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "الرمز دون تسمية تخمين. التنقل والإجراءات يقرنان الأيقونة بكلمة ظاهرة؛ وزر الأيقونة الوحيدة النادر يحمل معناه في الشيفرة بدلًا من ذلك:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "flex items-center gap-4" },
          React.createElement(
            "div",
            { className: "flex h-11 w-11 items-center justify-center border border-[var(--hig-border)]", "aria-hidden": true } as React.HTMLAttributes<HTMLDivElement>,
            React.createElement(IconCell, { name: "Idea01Icon", bare: true }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "أزرار الأيقونة الوحيدة"),
            React.createElement(
              "p",
              { className: "mt-1 font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
              'aria-hidden="true" on the svg · aria-label="Search" on the button',
            ),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "أيقونة + تسمية ظاهرة لعناصر التنقل والإجراءات.",
        "aria-hidden على الرمز، والاسم المُتاح على عنصر التحكم.",
        "الحد الأدنى 44×44 على الأب القابل للمس لا على الرمز.",
      ],
      dontItems: [
        "رمز وحيد لإجراء حرج دون اسم في الشيفرة.",
        "الإيموجي كأيقونات — 🚨 ليس رمزًا ولا يتمدد.",
        "مكتبتان في شاشة واحدة مهما بدتا متشابهتين.",
      ],
    },
    { kind: "heading", id: "misuse", number: "05", title: "الاستعمالات الخاطئة — Incorrect Usage", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "الأخطاء أدناه مرفوضة في المراجعة. الرمز الخطّي رسم ثابت على شبكة ثابتة؛ وأي تشويه يحوّله إلى رسم آخر:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "المدّ والسحق"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, iconStyle: { transform: "scaleX(1.6)" }, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "تغيير نسبة العرض إلى الارتفاع — خطأ حتى حين تتوسل المساحة أن تُملأ.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "لون هوية مخبوز"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6 text-[#1D65AF]" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "خبز الأزرق داخل الرمز بدل وراثة لون السياق.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "تحت السلّم"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 10, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "العشرة بكسلات تسحق سماكة 1.5 إلى لطخة — الـ16 هي أرضية المعنى.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "الإيموجي كأيقونة"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement("span", { className: "text-[24px]", "aria-hidden": true } as React.HTMLAttributes<HTMLSpanElement>, "🚨"),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "الإيموجي يُرسَم حسب المنصة، ولا يحمل لغة الخطوط، ويفشل عند الأحجام الصغيرة.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "الرمز كما شُحِن: النسبة والسماكة والمقاس من السلّم.",
        "مجموعة واحدة عبر المنتج — HugeIcons وcurrentColor و1.5.",
      ],
      dontItems: [
        "المدّ أو إعادة الطلاء أو التصغير أو استبدال الإيموجي.",
        "إعادة رسم رمز مشحون «بشكل أفضل قليلًا» باليد.",
      ],
    },
    { kind: "heading", id: "mirroring", number: "06", title: "العكس المرآتي — Mirroring", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "الاتجاه يعكَس وكل ما عداه يثبت. الرمز الذي يشير مع تدفق القراءة ينقلب في العربية — والرمز الذي يصوّر العالم أو الهوية أو الزمن لا يفعل أبدًا:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "اقلِب"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "الاتجاهي فقط"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8", dir: "ltr" },
            React.createElement(IconCell, { name: "RightToLeftListTriangleIcon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "+ rtl: variant"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "أسهم الرجوع وعلامات اتجاه النص وحركة الأمام/الخلف — معكوسة مع التدفق.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "لا تقلِب أبدًا"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "ثابت دائمًا"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8" },
            React.createElement(IconCell, { name: "Touch01Icon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "logo · clock · ✓"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "الشعارات والعلامات الكونية والساعات وأشياء العالم الحقيقي — متطابقة في كل اتجاه.",
          ),
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "",
          text: "قانون العكس الكامل يعيش في § اليمين إلى اليسار — اقلِب مقابل لا تقلِب. وقاعدة الرمز في سطر واحد: اعكس الحركة والاتجاه ولا تعكس الهوية والزمن أبدًا.",
        },
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/icons",
  accent: "#ff9500",
  hero: {
    title: "Icônes",
    intro:
      "Une icône est un mot d'un vocabulaire partagé, pas une décoration. Chaque glyphe de ce guide vient d'un seul set, dessiné sur la même grille, avec la même graisse — pour qu'un engrenage de réglages ne semble jamais emprunté à un autre produit.",
  },
  sections: [
    { kind: "heading", id: "set", number: "01", title: "Le set approuvé", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Le set approuvé est HugeIcons (gratuit) : des glyphes au trait sur une grille de 24 pixels, dessinés pour les interfaces. Les dix-sept ci-dessous sont le set en usage dans ce guide — chacun marque sa section, et aucun autre glyphe ne peut porter ces sens :",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Idea01Icon", usage: "Démarrage — principes de design." },
        { name: "AccessibilityIcon", usage: "Fondations — accessibilité." },
        { name: "PaintBoardIcon", usage: "Fondations — identité visuelle." },
        { name: "ColorsIcon", usage: "Fondations — couleurs." },
        { name: "Layers01Icon", usage: "Fondations — icônes (cette page)." },
        { name: "Image01Icon", usage: "Fondations — images." },
        { name: "Layout01Icon", usage: "Fondations — mise en page." },
        { name: "RightToLeftListTriangleIcon", usage: "Fondations — droite-à-gauche." },
        { name: "TextFontIcon", usage: "Fondations — typographie." },
        { name: "Touch01Icon", usage: "Composants — boutons." },
        { name: "InputTextIcon", usage: "Composants — champs." },
        { name: "ToggleOnIcon", usage: "Composants — contrôles de sélection." },
        { name: "ChatFeedbackIcon", usage: "Composants — retour utilisateur." },
        { name: "GroupLayersIcon", usage: "Composants — surcouches." },
        { name: "Cards01Icon", usage: "Composants — cartes." },
        { name: "Database01Icon", usage: "Composants — données." },
        { name: "PlayCircleIcon", usage: "Composants — médias." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Un seul set, sans mélange.",
          text: "Les nouvelles icônes produit viennent de HugeIcons (@hugeicons/core-free-icons + @hugeicons/react) — jamais d'une seconde bibliothèque, jamais dessinées à la main sur le moment pour suivre une humeur.",
        },
        {
          strong: "Un sens par glyphe.",
          text: "Un glyphe qui marque une section garde ce sens partout. Réassigner un glyphe utilisé à un sens nouveau casse la reconnaissance plus vite que toute refonte.",
        },
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "Tailles et graisse", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "Trois tailles couvrent tous les contextes. Le glyphe lui-même ne change jamais — seul le conteneur dans lequel il est livré :",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "Touch01Icon", size: 16, usage: "16 — en ligne avec le texte et les lignes de tableau." },
        { name: "Touch01Icon", size: 20, usage: "20 — le défaut pour boutons et navigation." },
        { name: "Touch01Icon", size: 24, usage: "24 — moments de mise en avant et états vides." },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Graisse 1.5, toujours.",
          text: "Chaque glyphe est rendu en strokeWidth 1.5 sur sa grille de 24 pixels — la graisse qui se lit à 16 et reste légère à 24.",
        },
        {
          strong: "12 est un séparateur, pas une taille.",
          text: "La seule exception concerne les séparateurs denses en ligne comme les chevrons de fil d'Ariane à 12 — jamais un glyphe interactif, jamais un porteur de sens.",
        },
        {
          strong: "Le 44 appartient au parent.",
          text: "Les glyphes restent à 16/20/24 ; le minimum tactile de 44×44 vit sur le bouton ou la ligne qui les porte.",
        },
      ],
    },
    { kind: "heading", id: "color", number: "03", title: "Couleur et contexte", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "Les icônes n'ont pas de couleur propre. Chaque glyphe est rendu en currentColor et hérite de la couleur de texte de son contexte — le même glyphe ci-dessous, trois contextes, zéro recoloration :",
    },
    {
      kind: "iconGrid",
      cells: [
        { name: "ColorsIcon", usage: "Texte par défaut — le glyphe prend la couleur du corps." },
        { name: "ColorsIcon", usage: "Texte atténué — le glyphe s'apaise avec sa ligne." },
        {
          name: "ChatFeedbackIcon",
          boxStyle: { backgroundColor: "rgba(163,192,223,0.30)" },
          usage: "Sur teinte de marque — toujours hérité, jamais peint en dur.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Hériter, ne pas peindre.",
          text: "Figer un bleu dans un glyphe le cloue à un seul fond ; l'héritage laisse la même icône fonctionner sur blanc, sur teinte et en mode sombre sans variante.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "currentColor partout — le contexte décide.",
        "Laisser les lignes atténuées apaiser leurs propres glyphes.",
        "Tester le glyphe sur chaque fond sur lequel il est livré.",
      ],
      dontItems: [
        "Figer #1D65AF dans un glyphe « parce que c'est la marque ».",
        "Une couleur différente pour le même glyphe à deux endroits.",
        "Remplissages, dégradés ou ombres dans un glyphe au trait.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "Règles d'usage", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Un glyphe sans libellé est une devinette. La navigation et les actions associent l'icône à un mot visible ; le rare bouton icône seule porte son sens dans le code à la place :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "flex items-center gap-4" },
          React.createElement(
            "div",
            { className: "flex h-11 w-11 items-center justify-center border border-[var(--hig-border)]", "aria-hidden": true } as React.HTMLAttributes<HTMLDivElement>,
            React.createElement(IconCell, { name: "Idea01Icon", bare: true }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Boutons icône seule"),
            React.createElement(
              "p",
              { className: "mt-1 font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
              'aria-hidden="true" on the svg · aria-label="Search" on the button',
            ),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Icône + libellé visible pour la navigation et les actions.",
        "aria-hidden sur le glyphe, nom accessible sur le contrôle.",
        "Le minimum de 44×44 sur le parent tactile, pas sur le glyphe.",
      ],
      dontItems: [
        "Une icône seule pour une action critique sans nom dans le code.",
        "Les emoji comme icônes — 🚨 n'est pas un glyphe et ne passe pas à l'échelle.",
        "Deux bibliothèques sur un même écran, aussi semblables soient-elles.",
      ],
    },
    { kind: "heading", id: "misuse", number: "05", title: "Usages incorrects", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "Les erreurs ci-dessous sont refusées en revue. Un glyphe au trait est un dessin fixe sur une grille fixe ; toute déformation en fait un autre dessin :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Étiré et écrasé"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, iconStyle: { transform: "scaleX(1.6)" }, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Changer le rapport largeur/hauteur — faux même quand un espace supplie d'être rempli.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Couleur de marque figée"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6 text-[#1D65AF]" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 24, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Figer le bleu dans le glyphe au lieu d'hériter la couleur du contexte.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Sous l'échelle"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement(IconCell, { name: "Touch01Icon", size: 10, bare: true }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "10 pixels écrasent la graisse 1.5 en bouillie — 16 est le plancher du sens.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "✕",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Emoji comme icône"),
          ),
          React.createElement(
            "div",
            { className: "flex h-24 items-center justify-center overflow-hidden px-6" },
            React.createElement("span", { className: "text-[24px]", "aria-hidden": true } as React.HTMLAttributes<HTMLSpanElement>, "🚨"),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Les emoji sont rendus par plateforme, sans langage de trait, et échouent en petite taille.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Le glyphe tel que livré : proportions, graisse et taille de l'échelle.",
        "Un seul set sur tout le produit — HugeIcons, currentColor, 1.5.",
      ],
      dontItems: [
        "Étirer, repeindre, rapetisser ou substituer un emoji.",
        "Redessiner un glyphe livré « un peu mieux » à la main.",
      ],
    },
    { kind: "heading", id: "mirroring", number: "06", title: "Miroir", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "La direction se miroir ; tout le reste reste fixe. Un glyphe qui pointe avec le flux de lecture bascule en arabe — un glyphe qui dépeint le monde, la marque ou le temps, jamais :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Inverser"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "directionnel seul"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8", dir: "ltr" },
            React.createElement(IconCell, { name: "RightToLeftListTriangleIcon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "+ rtl: variant"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Chevrons retour, marques de direction du texte, mouvement avant/arrière — miroirs avec le flux.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Jamais inverser"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "fixe toujours"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center gap-6 px-4 py-8" },
            React.createElement(IconCell, { name: "Touch01Icon", bare: true }),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]", dir: "ltr" }, "logo · clock · ✓"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Logos, marques universelles, horloges, objets réels — identiques dans toutes les directions.",
          ),
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "",
          text: "La loi miroir complète vit en § Droite à gauche — inverser contre jamais-inverser. La règle du glyphe en une ligne : miroir du mouvement et de la direction, jamais de l'identité et du temps.",
        },
      ],
    },
  ],
};

export const icons: Localized<PageData> = { ar, en, fr };
