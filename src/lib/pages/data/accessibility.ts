import * as React from "react";
import type { Localized, PageData } from "@/lib/pages/types";
import {
  AccessibilityIcon,
  ColorsIcon,
  Image01Icon,
  Layout01Icon,
  TextFontIcon,
  Touch01Icon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/accessibility",
  accent: "#34c759",
  hero: {
    title: "Accessibility",
    intro:
      "A guide for design and engineering teams — accessibility is part of the first decision, not a later fix",
  },
  sections: [
    { kind: "heading", id: "text-weight", number: "01", title: "Text Weight & Typography", icon: TextFontIcon },
    {
      kind: "dodont",
      doItems: [
        "Clear weight hierarchy: headings 700+, subheads 600, body 400.",
        "Base size ≥ 16px (1rem); down to 15px is acceptable with 1.4–1.6 line spacing.",
        "Contrast by size and weight together, never color alone.",
        "Line length 45–75 characters and line-height 1.4–1.6.",
      ],
      dontItems: [
        "Thin/Light weights for body text or buttons — they strain at small sizes.",
        "Distinguishing a heading or text by color alone, without a size/weight difference.",
        "Sizes below 12px for content that is actually read.",
        "An overlong line without spacing — it tires the eye.",
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]" },
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[22px] font-bold text-[var(--apple-text)]" }, "Heading 700 — 32px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Bold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[17px] font-semibold text-[var(--apple-text)]" }, "Subheading 600 — 17px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Semibold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement(
            "span",
            { className: "text-[14px] leading-7 text-[var(--apple-text)]" },
            "Body 400 — 14–16px / 1.6 — stays readable at 200%",
          ),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Regular"),
        ),
      ),
    },
    { kind: "heading", id: "color-contrast", number: "02", title: "Color & Contrast", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "Color alone is never enough. Every text/background pair must pass a documented contrast check.",
    },
    { kind: "demo", variant: "contrast" },
    { kind: "demo", variant: "semantic" },
    {
      kind: "dodont",
      doItems: [
        "Test every new color with the WebAIM Contrast Checker and record the result.",
        "Use semantic tokens: --color-text-primary / secondary / bg / accent / error / success.",
        "For error/warning/success cases: color + icon + text together.",
        "Hold 4.5:1 for body text and 3:1 for large text and boundaries.",
      ],
      dontItems: [
        'Picking a color because it "looks nice", without checking it.',
        "Red/green only with no symbol — color blindness can't tell them apart.",
        "Light text on light or dark on dark for stylistic purity.",
        "Raw HEX scattered everywhere instead of a semantic system.",
      ],
    },
    { kind: "heading", id: "spacing-layout", number: "03", title: "Spacing & Layout", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "A unified spacing system creates visual rhythm and helps zoom users and older readers.",
    },
    { kind: "demo", variant: "spacing" },
    { kind: "demo", variant: "touch" },
    {
      kind: "dodont",
      doItems: [
        "Fixed multiple system: 8·16·24·32·48.",
        "Breathing room around every block; crowding makes it harder for everyone.",
        "Layout must stay readable at 200% zoom.",
        "Line-height 1.4–1.6 and a comfortable line length.",
      ],
      dontItems: [
        "Pressing consecutive buttons together with no clear separator.",
        "Random spacing that breaks the visual rhythm.",
        "Buttons smaller than 44px tappable on mobile.",
        "A layout that collapses when zoomed.",
      ],
    },
    { kind: "heading", id: "images-alt", number: "04", title: "Images & Alt Text", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "An image that carries information without alt text is information lost to a screen reader.",
    },
    { kind: "demo", variant: "alt" },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-3" },
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="El Fath steel factory facade — Annaba, 2024 production line"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="Sales growth chart 2019–2024 — 42%"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="" — decorative only',
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "A descriptive alt for every image that carries meaning.",
        'Empty alt="" only for decorative images.',
        "Provide a text alternative for background video.",
      ],
      dontItems: [
        "Leaving alt empty for an informative image.",
        'Repeating a useless "image1.jpg".',
        "Relying on an image alone for core information.",
      ],
    },
    { kind: "heading", id: "motion", number: "05", title: "Motion", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Motion explains a relationship; it doesn't decorate.",
    },
    { kind: "demo", variant: "motion" },
    {
      kind: "dodont",
      doItems: [
        "Functional motion 200–300ms that clarifies a relationship.",
        "Respect prefers-reduced-motion and provide a simple fade.",
        "Make content available immediately.",
      ],
      dontItems: [
        "Continuous automatic motion with no way to stop.",
        "Making reading depend on an animation finishing.",
        "Large decorative-only motion.",
      ],
    },
    { kind: "heading", id: "forms", number: "06", title: "Forms & Inputs", icon: Touch01Icon },
    {
      kind: "paragraph",
      text: "For the web ahead: apps and dashboards.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "space-y-3" },
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "text-[12px] text-[var(--apple-text)]" }, "Email"),
            React.createElement("input", {
              placeholder: "name@elfath.dz",
              className:
                "mt-1 h-11 w-full border border-[var(--hig-border)] bg-transparent px-3 text-[13px] placeholder:text-[var(--apple-muted)] focus:border-[var(--apple-blue)] focus:outline-none",
            }),
          ),
          React.createElement(
            "div",
            { className: "border-t border-[var(--hig-border)] pt-2.5 text-[12px] leading-5 text-[var(--apple-text)]" },
            React.createElement("span", { className: "font-mono text-[11px] text-red-700" }, "!"),
            React.createElement("span", { className: "ms-2" }, "Invalid email — use name@elfath.dz"),
            React.createElement("span", { className: "ms-1 text-[11px] text-[var(--apple-muted)]" }, "(color + icon + text)"),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Every field is linked to a visible label — not placeholder only.",
        "Error messages next to the field, with text explaining the fix.",
        "Field/button heights ≥ 44px.",
      ],
      dontItems: [
        "Relying on red alone.",
        "Hiding the label and relying on the placeholder.",
        "Small fields that are hard to tap.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/accessibility",
  accent: "#34c759",
  hero: {
    title: "إرشادات الوصولية",
    intro: "دليل فريق التصميم والتطوير — وصولية جزء من القرار الأول، لا تصحيح لاحق",
  },
  sections: [
    { kind: "heading", id: "text-weight", number: "01", title: "وزن النص والخطوط — Text Weight & Typography", icon: TextFontIcon },
    {
      kind: "dodont",
      doItems: [
        "تدرّج وزن واضح: عناوين 700+، فرعية 600، نص أساسي 400.",
        "حجم أساسي ≥ 16px (1rem) وحتى 15px مقبول مع تباعد 1.4–1.6.",
        "تباين بالحجم والوزن معًا، لا باللون فقط.",
        "طول سطر 45–75 حرفًا (ما يعادلها عربيًا) وتباعد أسطر 1.4–1.6.",
      ],
      dontItems: [
        "أوزان Thin/Light للنصوص الأساسية أو الأزرار — تصعب عند الصغر.",
        "تمييز عنوان/نص باللون فقط دون فرق حجم/وزن.",
        "أحجام أقل من 12px لمحتوى يُقرأ فعليًا.",
        "سطر طويل جدًا دون تباعد — يرهق العين.",
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]" },
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[22px] font-bold text-[var(--apple-text)]" }, "عنوان 700 — 32px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Bold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[17px] font-semibold text-[var(--apple-text)]" }, "عنوان فرعي 600 — 17px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Semibold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement(
            "span",
            { className: "text-[14px] leading-7 text-[var(--apple-text)]" },
            "نص أساسي 400 — 14–16px / 1.6 — يبقى مقروءًا عند 200%",
          ),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Regular"),
        ),
      ),
    },
    { kind: "heading", id: "color-contrast", number: "02", title: "اختيار الألوان والتباين — Color & Contrast", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "اللون لا يكفي وحده. كل زوج نص/خلفية يجب أن يجتاز فحص تباين موثّق.",
    },
    { kind: "demo", variant: "contrast" },
    { kind: "demo", variant: "semantic" },
    {
      kind: "dodont",
      doItems: [
        "اختبر كل لون جديد بـ WebAIM Contrast Checker ووثّق النتيجة.",
        "استخدم tokens دلالية: --color-text-primary / secondary / bg / accent / error / success.",
        "في حالات خطأ/تحذير/نجاح: لون + أيقونة + نص معًا.",
        "التزم 4.5:1 للنص العادي و 3:1 للنص الكبير والحدود.",
      ],
      dontItems: [
        "اعتماد لون لأنه “يبان حلو” دون فحص.",
        "أحمر/أخضر فقط دون رمز — عمى الألوان لا يميز.",
        "نص فاتح على فاتح أو غامق على غامق “لأنه أنيق”.",
        "HEX مباشر في كل مكان بدون نظام دلالي.",
      ],
    },
    { kind: "heading", id: "spacing-layout", number: "03", title: "المسافات والتخطيط — Spacing & Layout", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "نظام مسافات موحّد يصنع إيقاعًا بصريًا ويساعد مستخدمي التكبير وكبار السن.",
    },
    { kind: "demo", variant: "spacing" },
    { kind: "demo", variant: "touch" },
    {
      kind: "dodont",
      doItems: [
        "نظام مضاعفات ثابتة: 8·16·24·32·48.",
        "مساحة تنفّس حول كل كتلة؛ الازدحام يصعّب على الجميع.",
        "تأكد أن التخطيط يبقى مقروءًا عند 200% تكبير.",
        "تباعد أسطر 1.4–1.6 وطول سطر مريح.",
      ],
      dontItems: [
        "إلصاق أزرار متتالية دون فاصل واضح.",
        "مسافات عشوائية تكسر الإيقاع البصري.",
        "أزرار أصغر من 44px قابلة للنقر على الجوال.",
        "تخطيط ينهار عند التكبير.",
      ],
    },
    { kind: "heading", id: "images-alt", number: "04", title: "الصور والمحتوى البديل — Images & Alt Text", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "الصورة التي تحمل معلومة بلا alt = معلومة مفقودة لقارئ الشاشة.",
    },
    { kind: "demo", variant: "alt" },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-3" },
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="واجهة مصنع الفتح للحديد — عنابة، خط الإنتاج 2024"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="مخطط نمو المبيعات 2019–2024 — 42%"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="" — للزخرفية فقط',
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "alt وصفي لكل صورة تحمل معنى.",
        'alt="" فارغ فقط للزخرفية.',
        "وفّر نصًا بديلًا لفيديو خلفي.",
      ],
      dontItems: ["ترك alt فارغًا لصورة معلومة.", "تكرار “صورة1.jpg” غير مفيد.", "اعتماد الصورة وحدها للمعلومة الأساسية."],
    },
    { kind: "heading", id: "motion", number: "05", title: "الحركة والانتقالات — Motion", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "حركة تشرح علاقة، لا حركة تزين.",
    },
    { kind: "demo", variant: "motion" },
    {
      kind: "dodont",
      doItems: [
        "حركة وظيفية 200–300ms توضح علاقة.",
        "احترم prefers-reduced-motion ووفّر تلاشي بسيط.",
        "اجعل المحتوى متاحًا فورًا.",
      ],
      dontItems: ["حركات تلقائية مستمرة دون إيقاف.", "جعل القراءة مشروطة بانتهاء انتقال.", "حركة كبيرة زخرفية فقط."],
    },
    { kind: "heading", id: "forms", number: "06", title: "النماذج والتفاعل — Forms & Inputs", icon: Touch01Icon },
    {
      kind: "paragraph",
      text: "للويب الحالي مستقبلًا: تطبيقات ولوحات تحكم.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "space-y-3" },
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "text-[12px] text-[var(--apple-text)]" }, "البريد الإلكتروني"),
            React.createElement("input", {
              placeholder: "name@elfath.dz",
              className:
                "mt-1 h-11 w-full border border-[var(--hig-border)] bg-transparent px-3 text-[13px] placeholder:text-[var(--apple-muted)] focus:border-[var(--apple-blue)] focus:outline-none",
            }),
          ),
          React.createElement(
            "div",
            { className: "border-t border-[var(--hig-border)] pt-2.5 text-[12px] leading-5 text-[var(--apple-text)]" },
            React.createElement("span", { className: "font-mono text-[11px] text-red-700" }, "!"),
            React.createElement("span", { className: "mr-2" }, "البريد غير صالح — استخدم name@elfath.dz"),
            React.createElement("span", { className: "mr-1 text-[11px] text-[var(--apple-muted)]" }, "(لون + أيقونة + نص)"),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "كل حقل مرتبط بـ label ظاهر — لا Placeholder فقط.",
        "رسائل خطأ بجانب الحقل، بنص يشرح التصحيح.",
        "ارتفاع حقول/أزرار ≥ 44px.",
      ],
      dontItems: ["الاعتماد على الأحمر وحده.", "إخفاء التسمية والاعتماد على Placeholder.", "حقول صغيرة يصعب لمسها."],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/accessibility",
  accent: "#34c759",
  hero: {
    title: "Accessibilité",
    intro:
      "Un guide pour les équipes design et développement — l'accessibilité fait partie de la première décision, pas d'une correction tardive",
  },
  sections: [
    { kind: "heading", id: "text-weight", number: "01", title: "Graisses & Typographie", icon: TextFontIcon },
    {
      kind: "dodont",
      doItems: [
        "Hiérarchie de graisses claire : titres 700+, sous-titres 600, corps 400.",
        "Taille de base ≥ 16px (1rem) ; 15px acceptable avec un interligne 1.4–1.6.",
        "Contraste par la taille et la graisse ensemble, jamais la couleur seule.",
        "Longueur de ligne 45–75 caractères et interligne 1.4–1.6.",
      ],
      dontItems: [
        "Graisses Thin/Light pour le corps ou les boutons — elles fatiguent en petite taille.",
        "Distinguer un titre ou un texte par la seule couleur, sans différence de taille/graisse.",
        "Des tailles sous 12px pour un contenu réellement lu.",
        "Une ligne trop longue sans espacement — elle fatigue l'œil.",
      ],
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 divide-y divide-[var(--hig-border)] border-y border-[var(--hig-border)]" },
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[22px] font-bold text-[var(--apple-text)]" }, "Titre 700 — 32px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Bold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement("span", { className: "text-[17px] font-semibold text-[var(--apple-text)]" }, "Sous-titre 600 — 17px"),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Semibold"),
        ),
        React.createElement(
          "div",
          { className: "flex items-baseline justify-between py-3" },
          React.createElement(
            "span",
            { className: "text-[14px] leading-7 text-[var(--apple-text)]" },
            "Corps 400 — 14–16px / 1.6 — lisible à 200 %",
          ),
          React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Regular"),
        ),
      ),
    },
    { kind: "heading", id: "color-contrast", number: "02", title: "Couleur & Contraste", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "La couleur seule ne suffit jamais. Chaque paire texte/fond doit passer un contrôle de contraste documenté.",
    },
    { kind: "demo", variant: "contrast" },
    { kind: "demo", variant: "semantic" },
    {
      kind: "dodont",
      doItems: [
        "Tester chaque nouvelle couleur avec WebAIM Contrast Checker et documenter le résultat.",
        "Utiliser des tokens sémantiques : --color-text-primary / secondary / bg / accent / error / success.",
        "Erreur/avertissement/succès : couleur + icône + texte ensemble.",
        "Tenir 4.5:1 pour le texte et 3:1 pour le texte large et les contours.",
      ],
      dontItems: [
        "Choisir une couleur parce qu'elle « a l'air jolie », sans contrôle.",
        "Rouge/vert seuls sans symbole — le daltonisme ne les distingue pas.",
        "Texte clair sur clair ou foncé sur foncé par pure esthétique.",
        "Des HEX bruts disséminés au lieu d'un système sémantique.",
      ],
    },
    { kind: "heading", id: "spacing-layout", number: "03", title: "Espacements & Disposition", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Un système d'espacements unifié crée un rythme visuel et aide les utilisateurs de zoom et les lecteurs âgés.",
    },
    { kind: "demo", variant: "spacing" },
    { kind: "demo", variant: "touch" },
    {
      kind: "dodont",
      doItems: [
        "Système de multiples fixes : 8·16·24·32·48.",
        "De l'air autour de chaque bloc ; l'entassement complique tout le monde.",
        "La disposition doit rester lisible à 200 % de zoom.",
        "Interligne 1.4–1.6 et longueur de ligne confortable.",
      ],
      dontItems: [
        "Des boutons collés sans séparateur clair.",
        "Des espacements aléatoires qui cassent le rythme visuel.",
        "Des boutons de moins de 44px tactiles sur mobile.",
        "Une disposition qui s'effondre au zoom.",
      ],
    },
    { kind: "heading", id: "images-alt", number: "04", title: "Images & Texte alternatif", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "Une image qui porte une information sans texte alternatif est une information perdue pour le lecteur d'écran.",
    },
    { kind: "demo", variant: "alt" },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border-y border-[var(--hig-border)] py-3" },
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="Façade de l\'usine El Fath acier — Annaba, ligne 2024"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="Graphique de croissance des ventes 2019–2024 — 42%"',
        ),
        React.createElement(
          "p",
          { className: "font-mono text-[11px] leading-5 text-[var(--apple-muted)]", dir: "ltr" },
          'alt="" — décorative uniquement',
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Un alt descriptif pour chaque image porteuse de sens.",
        'alt="" vide uniquement pour les images décoratives.',
        "Fournir une alternative textuelle à la vidéo d'arrière-plan.",
      ],
      dontItems: [
        "Laisser alt vide pour une image informative.",
        "Répéter un « image1.jpg » inutile.",
        "Se fier à l'image seule pour l'information essentielle.",
      ],
    },
    { kind: "heading", id: "motion", number: "05", title: "Mouvement", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Le mouvement explique une relation ; il n'orne pas.",
    },
    { kind: "demo", variant: "motion" },
    {
      kind: "dodont",
      doItems: [
        "Un mouvement fonctionnel de 200–300ms qui clarifie une relation.",
        "Respecter prefers-reduced-motion et proposer un simple fondu.",
        "Rendre le contenu disponible immédiatement.",
      ],
      dontItems: [
        "Un mouvement automatique continu sans moyen de l'arrêter.",
        "Subordonner la lecture à la fin d'une animation.",
        "Un grand mouvement purement décoratif.",
      ],
    },
    { kind: "heading", id: "forms", number: "06", title: "Formulaires & Champs", icon: Touch01Icon },
    {
      kind: "paragraph",
      text: "Pour le web à venir : applications et tableaux de bord.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 border border-[var(--hig-border)] p-4" },
        React.createElement(
          "div",
          { className: "space-y-3" },
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "text-[12px] text-[var(--apple-text)]" }, "E-mail"),
            React.createElement("input", {
              placeholder: "name@elfath.dz",
              className:
                "mt-1 h-11 w-full border border-[var(--hig-border)] bg-transparent px-3 text-[13px] placeholder:text-[var(--apple-muted)] focus:border-[var(--apple-blue)] focus:outline-none",
            }),
          ),
          React.createElement(
            "div",
            { className: "border-t border-[var(--hig-border)] pt-2.5 text-[12px] leading-5 text-[var(--apple-text)]" },
            React.createElement("span", { className: "font-mono text-[11px] text-red-700" }, "!"),
            React.createElement("span", { className: "ms-2" }, "E-mail invalide — utilisez name@elfath.dz"),
            React.createElement("span", { className: "ms-1 text-[11px] text-[var(--apple-muted)]" }, "(couleur + icône + texte)"),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Chaque champ lié à une étiquette visible — pas seulement un placeholder.",
        "Messages d'erreur à côté du champ, avec un texte expliquant la correction.",
        "Hauteur des champs/boutons ≥ 44px.",
      ],
      dontItems: [
        "Se fier au rouge seul.",
        "Cacher l'étiquette et s'appuyer sur le placeholder.",
        "Des petits champs difficiles à toucher.",
      ],
    },
  ],
};

export const accessibility: Localized<PageData> = { ar, en, fr };
