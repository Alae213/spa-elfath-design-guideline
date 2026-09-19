import * as React from "react";
import type { Localized, PageData } from "@/lib/pages/types";
import {
  AccessibilityIcon,
  Layout01Icon,
  RightToLeftListTriangleIcon,
  TextFontIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/rtl",
  accent: "#ff2d55",
  hero: {
    title: "Right to Left",
    intro:
      "Arabic is not a translation of the interface — it is a direction of it. The default locale of this guide is Arabic, so these rules are not edge cases: they are the first render every visitor meets.",
  },
  sections: [
    { kind: "heading", id: "mirror", number: "01", title: "Mirror the Layout", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "One markup, two readings. Flex and grid follow the nearest dir automatically — the same row below, laid out once, reading correctly in both directions with zero conditional code:",
    },
    {
      kind: "rtlDemo",
      variant: "mirror",
      label: "One row, both directions",
      note: "Chevron, label, and meta exchange sides under dir=rtl. No mirrored stylesheet, no per-locale markup.",
    },
    {
      kind: "paragraph",
      text: "Apple's reference pair — the same content, mirrored positions:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/image-positions-ltr@2x.png",
          width: 220,
          height: 158,
          alt: "Text and images laid out left to right; favorites run heart, circle, star, square, triangle.",
          caption: "LTR — text, media, and favorites order left to right.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/image-positions-rtl@2x.png",
          width: 220,
          height: 158,
          alt: "Same layout right to left; order preserved, sides exchanged.",
          caption: "RTL — same order, positions reversed to preserve meaning.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "A single dir attribute per page or island — layout follows it.",
        "Flex and grid ordering that reads correctly both ways.",
        "Mirrored navigation, sidebars, and breadcrumbs with the flow.",
      ],
      dontItems: [
        "Separate LTR and RTL templates for the same screen.",
        "Absolute left/right positioning for flow content.",
        "Mirroring by hand with per-locale margin hacks.",
      ],
    },
    { kind: "heading", id: "alignment", number: "02", title: "Text Alignment", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Align short text with the context, long text with its language. One- and two-line blocks follow reading direction; a paragraph of three lines or more follows the language it is written in — a right-aligned Latin paragraph hides every line start:",
    },
    {
      kind: "rtlDemo",
      variant: "align",
      label: "Context vs language",
      note: "Short blocks track the reading direction; paragraphs track their own language.",
    },
    {
      kind: "paragraph",
      text: "Apple's correct/wrong pairs — the rule, visualized:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/paragraph-alignment-correct@2x.png",
          width: 307,
          height: 171,
          alt: "Arabic paragraph right-aligned, English paragraph left-aligned.",
          caption: "Correct — each paragraph follows its language.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/paragraph-alignment-wrong@2x.png",
          width: 307,
          height: 171,
          alt: "Arabic and English paragraphs both forced right.",
          caption: "Wrong — both paragraphs forced to one edge.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/mixed-script-list-alignment-correct@2x.png",
          width: 190,
          height: 170,
          alt: "Right-aligned list; every bar shares the edge.",
          caption: "Correct — every item shares the reversed alignment.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/mixed-script-list-alignment-wrong@2x.png",
          width: 190,
          height: 170,
          alt: "One bar wrongly left-aligned among right-aligned bars.",
          caption: "Wrong — one item breaks the edge.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-4" },
        React.createElement(
          "p",
          { className: "text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "Lists align as one."),
          " Every item in a list shares a single alignment, reversed together — including items set in a different script. A list that mixes alignments stops scanning.",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "Headlines may wear kashida."),
          " Display Arabic headlines may stretch with tatweel for ceremony, as shipped in ",
          React.createElement("span", { className: "font-mono" }, "AboutHero"),
          " — letterforms only, never for body text, never for Latin:",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-center text-[22px] font-bold leading-9 text-[var(--apple-text)]", dir: "rtl" },
          "مـــــجموعة الـــــفتح رائـــــدة في الصـــــناعة",
        ),
        React.createElement(
          "p",
          { className: "mt-2 text-center font-mono text-[11px] text-[var(--apple-muted)]" },
          "kashida — display headlines only",
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "text-start everywhere — never text-left or text-right.",
        "Paragraphs aligned to their own language.",
        "Tatweel reserved for display headlines, sparingly.",
      ],
      dontItems: [
        "Forcing Latin alignment rules onto Arabic paragraphs.",
        "Kashida in body copy, buttons, or form labels.",
        "Centered paragraphs of running text in any language.",
      ],
    },
    { kind: "heading", id: "flip", number: "03", title: "Flip vs Never-Flip", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Motion flips; meaning doesn't. Anything that points with the reading flow mirrors — anything that depicts the world, the brand, or time stays fixed:",
    },
    {
      kind: "rtlDemo",
      variant: "flip",
      label: "The back chevron, both states",
      note: "Both states rendered side by side as the rtl: variant renders them; production code uses the variant itself (see below).",
    },
    {
      kind: "code",
      lang: "text",
      code: 'className="-rotate-90 rtl:rotate-90"',
      intro: "The pattern, as shipped in the Sidebar — physical base, directional override:",
    },
    {
      kind: "paragraph",
      text: "Apple's reference pair — the control and its glyphs flip as one:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/flipped-directional-control-ltr@2x.png",
          width: 368,
          height: 48,
          alt: "Volume slider; moving the thumb left to right makes it louder.",
          caption: "LTR — volume grows left to right; glyphs mark the ends.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/flipped-directional-control-rtl@2x.png",
          width: 368,
          height: 48,
          alt: "Volume slider; moving the thumb right to left makes it louder.",
          caption: "RTL — control, glyphs, and order reverse together.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Flip: back chevrons, sliders, progress, and ordered sequences.",
        "Keep: logos, clocks, media playback, phone glyphs, checkmarks.",
        "Keep: photographs and artwork — re-shoot, never mirror.",
      ],
      dontItems: [
        "A mirrored logo “for consistency” — it confuses and risks legal trouble.",
        "Flipping clocks and timers that work the same everywhere.",
        "Mirroring a photo whose content implies a direction.",
      ],
    },
    { kind: "heading", id: "code", number: "04", title: "Code Technique", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "Physical properties are a second bug report waiting to happen. Logical properties and the rtl: variant make directionality a non-issue at authorship time — the struck column below must never appear in new code:",
    },
    {
      kind: "rtlDemo",
      variant: "tokens",
      label: "Physical → logical map",
      note: "Left/right utilities are banned in new code; islands of LTR (code, numerals, embeds) declare dir=ltr explicitly.",
    },
    {
      kind: "dodont",
      doItems: [
        "ms/me, ps/pe, start/end, text-start in all new code.",
        "rtl: variant for the rare directional override.",
        "dir=ltr islands for code, mono, and embeds.",
      ],
      dontItems: [
        "ml/mr, pl/pr, left/right, text-left in any new file.",
        "Assuming the page dir covers embedded LTR content.",
        "rotate utilities without asking which direction they face.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/rtl",
  accent: "#ff2d55",
  hero: {
    title: "اليمين إلى اليسار",
    intro:
      "العربية ليست ترجمة للواجهة — بل اتجاه لها. اللغة الافتراضية لهذا الدليل هي العربية، فقواعدها ليست حالات حدّية: إنها أول عرض يلقاه كل زائر.",
  },
  sections: [
    { kind: "heading", id: "mirror", number: "01", title: "اعكس التخطيط — Mirror the Layout", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "ترميز واحد وقراءتان. الـflex والـgrid يتبعان أقرب dir تلقائيًا — الصف نفسه أدناه، مكتوب مرة واحدة، يُقرَأ صحيحًا في الاتجاهين دون شيفرة شرطية:",
    },
    {
      kind: "rtlDemo",
      variant: "mirror",
      label: "صف واحد باتجاهين",
      note: "السهم والتسمية والبيانات يتبادلون الجوانب تحت dir=rtl. لا ورقة أنماط معكوسة ولا ترميز لكل لغة.",
    },
    {
      kind: "paragraph",
      text: "الثنائية المرجعية من Apple — المحتوى نفسه والمواضع معكوسة:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/image-positions-ltr@2x.png",
          width: 220,
          height: 158,
          alt: "نص وصور مرتبة من اليسار إلى اليمين؛ والمفضلة قلب ودائرة ونجمة ومربع ومثلث.",
          caption: "LTR — النص والوسائط والترتيب من اليسار إلى اليمين.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/image-positions-rtl@2x.png",
          width: 220,
          height: 158,
          alt: "التخطيط نفسه من اليمين إلى اليسار؛ والترتيب محفوظ والجوانب متبادلة.",
          caption: "RTL — الترتيب نفسه والمواضع معكوسة للحفاظ على المعنى.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "سمة dir واحدة لكل صفحة أو جزيرة — والتخطيط يتبعها.",
        "ترتيب flex وgrid يُقرَأ صحيحًا في الاتجاهين.",
        "تنقل وأشرطة جانبية ومسارات تنقل معكوسة مع التدفق.",
      ],
      dontItems: [
        "قالبان LTR وRTL منفصلان للشاشة نفسها.",
        "تموضع مطلق يمين/يسار لمحتوى التدفق.",
        "العكس اليدوي بحيل هوامش لكل لغة.",
      ],
    },
    { kind: "heading", id: "alignment", number: "02", title: "محاذاة النص — Text Alignment", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "صِف النص القصير مع السياق والطويل مع لغته. الكتل من سطر أو سطرين تتبع اتجاه القراءة؛ وفقرة الثلاثة أسطر فأكثر تتبع اللغة المكتوبة بها — فقرة لاتينية بمحاذاة يمين تخفي بداية كل سطر:",
    },
    {
      kind: "rtlDemo",
      variant: "align",
      label: "السياق مقابل اللغة",
      note: "الكتل القصيرة تتبع اتجاه القراءة؛ والفقرات تتبع لغتها.",
    },
    {
      kind: "paragraph",
      text: "ثنائيتا الصحيح والخطأ من Apple — القاعدة مصوَّرة:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/paragraph-alignment-correct@2x.png",
          width: 307,
          height: 171,
          alt: "فقرة عربية بمحاذاة يمين وفقرة إنجليزية بمحاذاة يسار.",
          caption: "صحيح — العربية تتبع العربية والإنجليزية تتبع الإنجليزية.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/paragraph-alignment-wrong@2x.png",
          width: 307,
          height: 171,
          alt: "فقرتان عربية وإنجليزية مدفوعتان معًا إلى اليمين.",
          caption: "خطأ — الفقرتان مدفوعتان إلى حافة واحدة.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/mixed-script-list-alignment-correct@2x.png",
          width: 190,
          height: 170,
          alt: "قائمة بمحاذاة يمين؛ وكل شريط يشترك في الحافة.",
          caption: "صحيح — كل عنصر يشترك في المحاذاة المعكوسة.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/mixed-script-list-alignment-wrong@2x.png",
          width: 190,
          height: 170,
          alt: "شريط واحد بمحاذاة يسار خاطئة وسط أشرطة يمين.",
          caption: "خطأ — عنصر واحد يكسر الحافة.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-4" },
        React.createElement(
          "p",
          { className: "text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "القوائم تصطف كواحد."),
          " كل عنصر في القائمة يشترك في محاذاة واحدة تُعكَس معًا — بما فيها العناصر بخط مختلف. قائمة تختلط محاذاتها تتوقف عن المسح.",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "العناوين قد تلبس الكشيدة."),
          " عناوين العرض العربية قد تُمدَّد بالتطويل للاحتفاء، كما هو مشحون في ",
          React.createElement("span", { className: "font-mono" }, "AboutHero"),
          " — للحروف فقط، لا لمتن النص أبدًا ولا للاتينية:",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-center text-[22px] font-bold leading-9 text-[var(--apple-text)]", dir: "rtl" },
          "مـــــجموعة الـــــفتح رائـــــدة في الصـــــناعة",
        ),
        React.createElement(
          "p",
          { className: "mt-2 text-center font-mono text-[11px] text-[var(--apple-muted)]" },
          "kashida — display headlines only",
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "text-start في كل مكان — لا text-left ولا text-right أبدًا.",
        "فقرات محاذاة للغتها الخاصة.",
        "الكشيدة محفوظة لعناوين العرض وباعتدال.",
      ],
      dontItems: [
        "فرض قواعد المحاذاة اللاتينية على الفقرات العربية.",
        "الكشيدة في المتن أو الأزرار أو تسميات النماذج.",
        "فقرات متن متمركزة بأي لغة.",
      ],
    },
    { kind: "heading", id: "flip", number: "03", title: "اقلِب مقابل لا تقلِب — Flip vs Never-Flip", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "الحركة تُقلَب والمعنى لا. كل ما يشير مع تدفق القراءة يعكَس — وكل ما يصوّر العالم أو الهوية أو الزمن يبقى ثابتًا:",
    },
    {
      kind: "rtlDemo",
      variant: "flip",
      label: "سهم الرجوع بالحالتين",
      note: "الحالتان معروضتان جنبًا إلى جنب كما يرسمهما صنف rtl:؛ وشيفرة الإنتاج تستعمل الصنف نفسه (انظر أدناه).",
    },
    {
      kind: "code",
      lang: "text",
      code: 'className="-rotate-90 rtl:rotate-90"',
      intro: "النمط كما هو مشحون في Sidebar — أساس فيزيائي وتجاوز اتجاهي:",
    },
    {
      kind: "paragraph",
      text: "الثنائية المرجعية من Apple — عنصر التحكم ورموزه تنقلب معًا:",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/flipped-directional-control-ltr@2x.png",
          width: 368,
          height: 48,
          alt: "منزلق الصوت؛ وتحريك المقبض من اليسار إلى اليمين يرفع الصوت.",
          caption: "LTR — الصوت يعلو من اليسار إلى اليمين؛ والرموز تعلّم الطرفين.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/flipped-directional-control-rtl@2x.png",
          width: 368,
          height: 48,
          alt: "منزلق الصوت؛ وتحريك المقبض من اليمين إلى اليسار يرفع الصوت.",
          caption: "RTL — عنصر التحكم والرموز والترتيب تنعكس معًا.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "اقلِب: أسهم الرجوع والمنزلقات والتقدم والمتتاليات المرتبة.",
        "أبقِ: الشعارات والساعات وتشغيل الوسائط والهواتف وعلامات الصح.",
        "أبقِ: الصور والأعمال الفنية — أعِد التصوير ولا تعكس أبدًا.",
      ],
      dontItems: [
        "شعار معكوس «للاتساق» — يربك ويعرّض لمشاكل قانونية.",
        "قلب الساعات والمؤقتات التي تعمل بالطريقة نفسها في كل مكان.",
        "عكس صورة يوحي محتواها باتجاه.",
      ],
    },
    { kind: "heading", id: "code", number: "04", title: "تقنية الشيفرة — Code Technique", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "الخصائص الفيزيائية تقرير خطأ ثانٍ ينتظر الحدوث. الخصائص المنطقية وصنف rtl: يجعلان الاتجاهية لا قضية وقت التأليف — والعمود المشطوب أدناه ممنوع الظهور في أي شيفرة جديدة:",
    },
    {
      kind: "rtlDemo",
      variant: "tokens",
      label: "خريطة الفيزيائي إلى المنطقي",
      note: "أدوات اليسار/اليمين محظورة في الشيفرة الجديدة؛ وجزر LTR (الشيفرة والأرقام والمضمّنات) تعلن dir=ltr صراحةً.",
    },
    {
      kind: "dodont",
      doItems: [
        "ms/me وps/pe وstart/end وtext-start في كل شيفرة جديدة.",
        "صنف rtl: للتجاوز الاتجاهي النادر.",
        "جزر dir=ltr للشيفرة وأحادي المسافة والمضمّنات.",
      ],
      dontItems: [
        "ml/mr وpl/pr وleft/right وtext-left في أي ملف جديد.",
        "افتراض أن dir الصفحة يغطي المحتوى اللاتيني المضمّن.",
        "أدوات التدوير دون سؤال عن الاتجاه الذي تواجهه.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/rtl",
  accent: "#ff2d55",
  hero: {
    title: "Droite à gauche",
    intro:
      "L'arabe n'est pas une traduction de l'interface — c'en est une direction. La locale par défaut de ce guide est l'arabe, donc ces règles ne sont pas des cas limites : elles sont le premier rendu que chaque visiteur rencontre.",
  },
  sections: [
    { kind: "heading", id: "mirror", number: "01", title: "Miroir de mise en page", icon: RightToLeftListTriangleIcon },
    {
      kind: "paragraph",
      text: "Un seul balisage, deux lectures. Flex et grid suivent le dir le plus proche automatiquement — la même rangée ci-dessous, écrite une fois, se lit correctement dans les deux directions sans code conditionnel :",
    },
    {
      kind: "rtlDemo",
      variant: "mirror",
      label: "Une rangée, deux directions",
      note: "Chevron, libellé et méta échangent leurs côtés sous dir=rtl. Ni feuille miroir, ni balisage par locale.",
    },
    {
      kind: "paragraph",
      text: "La paire de référence Apple — même contenu, positions miroir :",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/image-positions-ltr@2x.png",
          width: 220,
          height: 158,
          alt: "Texte et images disposés de gauche à droite ; favoris cœur, cercle, étoile, carré, triangle.",
          caption: "LTR — texte, médias et ordre de gauche à droite.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/image-positions-rtl@2x.png",
          width: 220,
          height: 158,
          alt: "Même disposition de droite à gauche ; ordre préservé, côtés échangés.",
          caption: "RTL — même ordre, positions inversées pour préserver le sens.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Un seul attribut dir par page ou îlot — la mise en page le suit.",
        "Ordre flex et grid lisible dans les deux sens.",
        "Navigation, barres latérales et fils d'Ariane miroirs avec le flux.",
      ],
      dontItems: [
        "Gabarits LTR et RTL séparés pour le même écran.",
        "Positionnement absolu gauche/droite pour du contenu de flux.",
        "Miroir manuel avec astuces de marges par locale.",
      ],
    },
    { kind: "heading", id: "alignment", number: "02", title: "Alignement du texte", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Alignez le texte court sur le contexte, le long sur sa langue. Les blocs d'une ou deux lignes suivent le sens de lecture ; un paragraphe de trois lignes ou plus suit la langue dans laquelle il est écrit — un paragraphe latin aligné à droite cache chaque début de ligne :",
    },
    {
      kind: "rtlDemo",
      variant: "align",
      label: "Contexte contre langue",
      note: "Les blocs courts suivent le sens de lecture ; les paragraphes suivent leur langue.",
    },
    {
      kind: "paragraph",
      text: "Les paires correct/faux d'Apple — la règle visualisée :",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/paragraph-alignment-correct@2x.png",
          width: 307,
          height: 171,
          alt: "Paragraphe arabe aligné à droite, paragraphe anglais aligné à gauche.",
          caption: "Correct — l'arabe suit l'arabe, l'anglais suit l'anglais.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/paragraph-alignment-wrong@2x.png",
          width: 307,
          height: 171,
          alt: "Paragraphes arabe et anglais tous deux forcés à droite.",
          caption: "Faux — deux paragraphes forcés sur un seul bord.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/mixed-script-list-alignment-correct@2x.png",
          width: 190,
          height: 170,
          alt: "Liste alignée à droite ; chaque barre partage le bord.",
          caption: "Correct — chaque élément partage l'alignement inversé.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/mixed-script-list-alignment-wrong@2x.png",
          width: 190,
          height: 170,
          alt: "Une barre faussement alignée à gauche parmi des barres à droite.",
          caption: "Faux — un élément brise le bord.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-4" },
        React.createElement(
          "p",
          { className: "text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "Les listes s'alignent d'un bloc."),
          " Chaque élément d'une liste partage un seul alignement, inversé ensemble — y compris les éléments dans une autre écriture. Une liste aux alignements mélangés cesse de se balayer.",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[13px] leading-6 text-[var(--apple-text)]" },
          React.createElement("span", { className: "font-semibold" }, "Les titres peuvent porter le kashida."),
          " Les titres arabes d'apparat peuvent s'étirer en tatweel pour la cérémonie, comme livré dans ",
          React.createElement("span", { className: "font-mono" }, "AboutHero"),
          " — lettres seulement, jamais pour le corps, jamais pour le latin :",
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-center text-[22px] font-bold leading-9 text-[var(--apple-text)]", dir: "rtl" },
          "مـــــجموعة الـــــفتح رائـــــدة في الصـــــناعة",
        ),
        React.createElement(
          "p",
          { className: "mt-2 text-center font-mono text-[11px] text-[var(--apple-muted)]" },
          "kashida — display headlines only",
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "text-start partout — jamais text-left ni text-right.",
        "Paragraphes alignés sur leur propre langue.",
        "Kashida réservé aux titres d'apparat, avec mesure.",
      ],
      dontItems: [
        "Imposer les règles d'alignement latines aux paragraphes arabes.",
        "Kashida dans le corps, les boutons ou les libellés de formulaires.",
        "Paragraphes courants centrés dans quelque langue que ce soit.",
      ],
    },
    { kind: "heading", id: "flip", number: "03", title: "Inverser contre jamais-inverser", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Le mouvement s'inverse ; le sens non. Tout ce qui pointe avec le flux de lecture se miroir — tout ce qui dépeint le monde, la marque ou le temps reste fixe :",
    },
    {
      kind: "rtlDemo",
      variant: "flip",
      label: "Le chevron retour, deux états",
      note: "Les deux états rendus côte à côte tels que la variante rtl: les rend ; le code de production utilise la variante elle-même (voir ci-dessous).",
    },
    {
      kind: "code",
      lang: "text",
      code: 'className="-rotate-90 rtl:rotate-90"',
      intro: "Le motif, tel que livré dans la Sidebar — base physique, surcharge directionnelle :",
    },
    {
      kind: "paragraph",
      text: "La paire de référence Apple — le contrôle et ses glyphes basculent d'un bloc :",
    },
    {
      kind: "higFigures",
      items: [
        {
          src: "/hig/flipped-directional-control-ltr@2x.png",
          width: 368,
          height: 48,
          alt: "Curseur de volume ; pousser vers la droite rend plus fort.",
          caption: "LTR — le volume croît de gauche à droite ; les glyphes marquent les bouts.",
          credit: "Figures: Apple HIG · Right to left",
        },
        {
          src: "/hig/flipped-directional-control-rtl@2x.png",
          width: 368,
          height: 48,
          alt: "Curseur de volume ; pousser vers la gauche rend plus fort.",
          caption: "RTL — contrôle, glyphes et ordre s'inversent ensemble.",
          credit: "Figures: Apple HIG · Right to left",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Inverser : chevrons retour, curseurs, progressions, séquences ordonnées.",
        "Garder : logos, horloges, lecture média, glyphes téléphone, coches.",
        "Garder : photographies et œuvres — refilmer, jamais miroir.",
      ],
      dontItems: [
        "Un logo miroir « pour la cohérence » — il égare et risque gros juridiquement.",
        "Inverser horloges et minuteurs identiques partout.",
        "Miroir d'une photo dont le contenu implique une direction.",
      ],
    },
    { kind: "heading", id: "code", number: "04", title: "Technique de code", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "Les propriétés physiques sont un second rapport de bug en attente. Propriétés logiques et variante rtl: font de la directionnalité un non-sujet à l'écriture — la colonne barrée ci-dessous ne doit jamais paraître dans du code neuf :",
    },
    {
      kind: "rtlDemo",
      variant: "tokens",
      label: "Table physique → logique",
      note: "Utilitaires gauche/droite bannis du code neuf ; îlots LTR (code, chiffres, embarqués) déclarent dir=ltr explicitement.",
    },
    {
      kind: "dodont",
      doItems: [
        "ms/me, ps/pe, start/end, text-start dans tout code neuf.",
        "Variante rtl: pour la rare surcharge directionnelle.",
        "Îlots dir=ltr pour code, mono et embarqués.",
      ],
      dontItems: [
        "ml/mr, pl/pr, left/right, text-left dans tout fichier neuf.",
        "Supposer que le dir de page couvre le contenu latin embarqué.",
        "Utilitaires de rotation sans demander où ils regardent.",
      ],
    },
  ],
};

export const rtl: Localized<PageData> = { ar, en, fr };
