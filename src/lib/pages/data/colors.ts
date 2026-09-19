import * as React from "react";
import type { Localized, PageData } from "@/lib/pages/types";
import {
  AccessibilityIcon,
  ColorsIcon,
  Database01Icon,
  Layers01Icon,
  PaintBoardIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/colors",
  accent: "#af52de",
  hero: {
    title: "Colors",
    intro:
      "Color is the fastest way a person reads the product, and it must behave like a system, not like a decoration. Every color in this reference has a name, a token, and a job. If a color has no job, it doesn't exist.",
  },
  sections: [
    { kind: "heading", id: "brand", number: "01", title: "Brand Palette", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: 'Four fixed blues carry the identity. They are the only colors allowed to say "El Fath", and their exact values below are binding — never adjust them, however close a match or however well it seems to fit a campaign:',
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "Primary Blue",
          token: "--brand-300",
          hex: "#1D65AF",
          usage: "Buttons, links, focus, active states, key accents.",
        },
        {
          name: "Deep Navy",
          token: "--brand-400",
          hex: "#193B62",
          usage: "Headings on tinted ground, dark surfaces, selection on white.",
        },
        {
          name: "Hover Blue",
          token: "--brand-200",
          hex: "#69A2E5",
          usage: "Hover and pressed states of the primary blue.",
        },
        {
          name: "Soft Tint",
          token: "--brand-100",
          hex: "#A3C0DF",
          usage: "Selection highlight, tinted chip and callout backgrounds.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Brand-100 is a tint, not a solid.",
          text: "In the source of truth (spa-elfath-website/src/app/globals.css) it is declared as an alpha: rgba(163, 192, 223, 0.35). Overlay it on a surface rather than printing a rough hex approximation.",
        },
        {
          strong: "Never approximate.",
          text: 'If — and only if — the exact hex is unavailable, use the hsl equivalent of the same value; adjusting lightness to "make it pop" changes the brand.',
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "The exact #1D65AF primary for every interactive accent.",
        "Darkening to #193B62 for contrast on tinted ground.",
        "Reading the tint as rgba(163,192,223,0.35), as shipped.",
      ],
      dontItems: [
        "Substituting a “nicer” blue that matches the same family.",
        "Mixing brand blues between themselves into new blends.",
        "Applying the palette to the official logo (§ Branding).",
      ],
    },
    { kind: "heading", id: "neutrals", number: "02", title: "Warm Greys & Neutrals", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "The neutrals are warm — slightly beige, never cold grey — and carry almost the entire page. Blue is the accent; these six steps are the body:",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--system-50", hex: "#FAF8F6", label: "Page background" },
        { token: "--system-100", hex: "#F5F4F3", label: "Section / subtle fill" },
        { token: "--system-200", hex: "#ECE8E4", label: "Borders & dividers" },
        { token: "--system-300", hex: "#D9D9D9", label: "Disabled & placeholder" },
        { token: "--system-400", hex: "#737373", label: "Secondary text" },
        { token: "--system-500", hex: "#1F1F1F", label: "Primary text" },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Grey is the structural system, blue is the accent.",
          text: 'If a design reads as "lots of blue", the palette is being used as decoration — step back to the greys and let the blue point at what matters.',
        },
        {
          strong: "Every step has a purpose.",
          text: "Steps exist to make borders recede, text breathe, and surfaces separate. Two greys pressed side by side that look identical have an undefined job.",
        },
      ],
    },
    { kind: "heading", id: "semantic", number: "03", title: "Semantic Colors", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Semantic accents are reserved for status — success, warning, and danger. They are never decorative, and they never appear without a signal word or icon next to them:",
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "Success",
          token: "--color-success",
          hex: "#0A7A42",
          usage: "Saved, confirmed, in stock, list correct.",
        },
        {
          name: "Warning",
          token: "--color-warning",
          hex: "#B45309",
          usage: "Pending approval, low stock, needs attention.",
        },
        {
          name: "Danger",
          token: "--color-danger",
          hex: "#BE123C",
          usage: "Failed, invalid, deleted, unreachable.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Status color + icon + text, always as one signal.",
        "Semantic colors only in status contexts.",
        "Checking contrast on tinted backgrounds before shipping.",
      ],
      dontItems: [
        "Green for “approved” habit when the system could be red.",
        "Decorating charts in semantic colors by mood.",
        "Relying on the color alone — red/green is not a message.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "Token to Usage Map", icon: Database01Icon },
    {
      kind: "paragraph",
      text: "One token, one job. The mental model: --brand-300 is the only color a user should be able to name, and the greys exist so the blues stay rare:",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--brand-300", hex: "#1D65AF", label: "Interactive: links, buttons, focus outline" },
        { token: "--brand-400", hex: "#193B62", label: "Contrast pair for blue on tinted ground" },
        { token: "--brand-200", hex: "#69A2E5", label: "Hover / pressed state of primary" },
        { token: "--brand-100", hex: "#A3C0DF", label: "Selection and soft tint backgrounds" },
        { token: "--system-50", hex: "#FAF8F6", label: "Canvas — the page background" },
        { token: "--system-500", hex: "#1F1F1F", label: "Primary text & foreground" },
        { token: "--system-200", hex: "#ECE8E4", label: "Borders and structural dividers" },
      ],
    },
    { kind: "heading", id: "gradients", number: "05", title: "Gradients", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "The brand is flat on purpose — industrial, sharp, honest. Gradients that fake depth are the fastest way to lose the identity, so the rule is short: no multi-stop gradients, no mesh backgrounds, no text gradients.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 sm:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Allowed"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Tint wash"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center px-4 py-8", style: { backgroundColor: "rgba(163,192,223,0.30)" } },
            React.createElement("span", { className: "text-[13px] font-medium text-[#193B62]" }, "Flat fill from the palette"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            'A single flat brand tint over white — all the "warmth" a gradient is asked to add, without the depth trick.',
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
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Forbidden"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center px-4 py-8",
              style: { background: "linear-gradient(120deg,#1D65AF,#69A2E5,#0A7A42)" },
            },
            React.createElement("span", { className: "text-[13px] font-medium text-white" }, "Multi-stop mesh"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Multi-stop gradients, mesh backgrounds, and glassy blurs are explicitly out of the identity.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Plain surfaces and flat palette fills.",
        "One flat tint of --brand-100 for warmth on hero and cards.",
        "Using scale, spacing, and type for hierarchy instead of depth.",
      ],
      dontItems: [
        "Any two-step or three-step gradient between brand colors.",
        "Gradient text, mesh backgrounds, or blurred blobs of color.",
        "Buying “premium” gradients that mimic other brands.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/colors",
  accent: "#af52de",
  hero: {
    title: "الألوان",
    intro:
      "اللون أسرع ما يقرأه الإنسان في المنتج، ويجب أن يتصرّف كنظام لا كزينة. لكل لون في هذا المرجع اسم ورمز ووظيفة. اللون الذي لا وظيفة له غير موجود.",
  },
  sections: [
    { kind: "heading", id: "brand", number: "01", title: "لوحة الهوية — Brand Palette", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "أربعة أزرقات ثابتة تحمل الهوية. وهي وحدها المسموح لها أن تقول «الفتح»، وقيمها الدقيقة أدناه ملزِمة — لا تعديل عليها أبدًا مهما بدا التطابق قريبًا أو ملائمًا لحملة ما:",
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "الأزرق الأساسي",
          token: "--brand-300",
          hex: "#1D65AF",
          usage: "الأزرار، الروابط، التركيز، الحالات النشطة، اللمسات المفتاحية.",
        },
        {
          name: "الكحلي العميق",
          token: "--brand-400",
          hex: "#193B62",
          usage: "العناوين على الأرضيات الملوّنة، الأسطح الداكنة، التحديد على الأبيض.",
        },
        {
          name: "أزرق التحويم",
          token: "--brand-200",
          hex: "#69A2E5",
          usage: "حالتا التحويم والضغط للأزرق الأساسي.",
        },
        {
          name: "الصبغة الناعمة",
          token: "--brand-100",
          hex: "#A3C0DF",
          usage: "تظليل التحديد، وخلفيات الشرائح والتنبيهات الملوّنة.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الصبغة brand-100 صبغة شفافة لا لون صلب.",
          text: "في مصدر الحقيقة (spa-elfath-website/src/app/globals.css) مُعلَنة كقيمة ألفا: rgba(163, 192, 223, 0.35). تُركَّب فوق السطح بدل طباعة تقريب ست عشري خشن.",
        },
        {
          strong: "لا تقريب أبدًا.",
          text: "إذا تعذّر — وحصرًا إذا تعذّر — توفير القيمة الست عشرية الدقيقة، استعمل المكافئ اللوني نفسه؛ فتعديل الإضاءة «ليبرز أكثر» يغيّر الهوية.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "الأزرق الدقيق #1D65AF لكل لمسة تفاعلية.",
        "التغميق إلى #193B62 للتباين على الأرضية الملوّنة.",
        "قراءة الصبغة كما هي مشحونة: rgba(163,192,223,0.35).",
      ],
      dontItems: [
        "استبدال أزرق «أجمل» من العائلة نفسها.",
        "مزج الأزرقات الرسمية بعضها ببعض لتوليد درجات جديدة.",
        "تطبيق اللوحة على الشعار الرسمي (§ الهوية البصرية).",
      ],
    },
    { kind: "heading", id: "neutrals", number: "02", title: "الرماديات الدافئة والحيادية — Neutrals", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "الحياديات دافئة — تميل إلى البيج قليلًا، ولا تكون رمادية باردة أبدًا — وتحمل الصفحة كلها تقريبًا. الأزرق هو اللمسة؛ وهذه الدرجات الست هي المتن:",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--system-50", hex: "#FAF8F6", label: "خلفية الصفحة" },
        { token: "--system-100", hex: "#F5F4F3", label: "ملء الأقسام الخفيف" },
        { token: "--system-200", hex: "#ECE8E4", label: "الحدود والفواصل" },
        { token: "--system-300", hex: "#D9D9D9", label: "المعطّل والعناصر النائبة" },
        { token: "--system-400", hex: "#737373", label: "النص الثانوي" },
        { token: "--system-500", hex: "#1F1F1F", label: "النص الأساسي" },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الرمادي هو النظام البنيوي، والأزرق هو اللمسة.",
          text: "إذا بدا التصميم «كثير الأزرق»، فاللوحة تُستعمل زينةً — عُد إلى الرماديات ودَع الأزرق يشير إلى المهم فقط.",
        },
        {
          strong: "كل درجة لها غرض.",
          text: "الدرجات موجودة لتتراجع الحدود، ويتنفس النص، وتنفصل الأسطح. رماديان متجاوران يبدوان متطابقين يعني أن وظيفة أحدهما غير معرّفة.",
        },
      ],
    },
    { kind: "heading", id: "semantic", number: "03", title: "ألوان الدلالة — Semantic Colors", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "لمسات الدلالة محفوظة للحالة — النجاح والتحذير والخطر. لا تُستعمل زينةً أبدًا، ولا تظهر دون كلمة إشارة أو أيقونة بجانبها:",
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "النجاح",
          token: "--color-success",
          hex: "#0A7A42",
          usage: "محفوظ، مؤكَّد، متوفر، القائمة سليمة.",
        },
        {
          name: "التحذير",
          token: "--color-warning",
          hex: "#B45309",
          usage: "بانتظار الموافقة، مخزون منخفض، يحتاج انتباهًا.",
        },
        {
          name: "الخطر",
          token: "--color-danger",
          hex: "#BE123C",
          usage: "فشل، غير صالح، محذوف، تعذّر الوصول.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "لون الحالة + الأيقونة + النص، دائمًا كإشارة واحدة.",
        "ألوان الدلالة في سياقات الحالة فقط.",
        "فحص التباين على الخلفيات الملوّنة قبل الشحن.",
      ],
      dontItems: [
        "الأخضر لعادة «مقبول» حين يمكن أن يكون النظام أحمر.",
        "تزيين الرسوم البيانية بألوان الدلالة حسب المزاج.",
        "الاعتماد على اللون وحده — الأحمر/الأخضر ليس رسالة.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "خريطة الرمز إلى الاستعمال — Token Usage", icon: Database01Icon },
    {
      kind: "paragraph",
      text: "رمز واحد لوظيفة واحدة. النموذج الذهني: --brand-300 هو اللون الوحيد الذي يجوز للمستخدم تسميته، والرماديات موجودة ليبقى الأزرق نادرًا:",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--brand-300", hex: "#1D65AF", label: "التفاعل: الروابط والأزرار وإطار التركيز" },
        { token: "--brand-400", hex: "#193B62", label: "ثنائي التباين للأزرق على الأرضية الملوّنة" },
        { token: "--brand-200", hex: "#69A2E5", label: "حالة التحويم والضغط للأساسي" },
        { token: "--brand-100", hex: "#A3C0DF", label: "التحديد وخلفيات الصبغة الناعمة" },
        { token: "--system-50", hex: "#FAF8F6", label: "اللوحة — خلفية الصفحة" },
        { token: "--system-500", hex: "#1F1F1F", label: "النص الأساسي والمقدمة" },
        { token: "--system-200", hex: "#ECE8E4", label: "الحدود والفواصل البنيوية" },
      ],
    },
    { kind: "heading", id: "gradients", number: "05", title: "التدرجات — Gradients", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "الهوية مسطّحة عن قصد — صناعية، حادة، صادقة. التدرجات التي تزيّف العمق أسرع طريق لخسارة الهوية، فالقاعدة قصيرة: لا تدرجات متعددة الوقفات، لا خلفيات شبكية، لا نص متدرج.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 sm:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "مسموح"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "غسلة صبغية"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center px-4 py-8", style: { backgroundColor: "rgba(163,192,223,0.30)" } },
            React.createElement("span", { className: "text-[13px] font-medium text-[#193B62]" }, "ملء مسطّح من اللوحة"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "صبغة رسمية مسطّحة فوق الأبيض — كل «الدفء» الذي يُطلَب من التدرج، دون حيلة العمق.",
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
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "ممنوع"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center px-4 py-8",
              style: { background: "linear-gradient(120deg,#1D65AF,#69A2E5,#0A7A42)" },
            },
            React.createElement("span", { className: "text-[13px] font-medium text-white" }, "شبكة متعددة الوقفات"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "التدرجات متعددة الوقفات والخلفيات الشبكية والضبابيات الزجاجية خارج الهوية صراحةً.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "أسطح عادية وملء مسطّح من اللوحة.",
        "صبغة مسطّحة واحدة من --brand-100 للدفء في الواجهة والبطاقات.",
        "استعمال الحجم والتباعد والخط للتراتب بدل العمق.",
      ],
      dontItems: [
        "أي تدرج ثنائي أو ثلاثي الوقفات بين ألوان الهوية.",
        "النص المتدرج أو الخلفيات الشبكية أو بقع اللون الضبابية.",
        "شراء تدرجات «فاخرة» تحاكي علامات أخرى.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/colors",
  accent: "#af52de",
  hero: {
    title: "Couleurs",
    intro:
      "La couleur est ce qu'une personne lit le plus vite dans le produit, et elle doit se comporter comme un système, pas comme une décoration. Chaque couleur de cette référence a un nom, un token et un rôle. Une couleur sans rôle n'existe pas.",
  },
  sections: [
    { kind: "heading", id: "brand", number: "01", title: "Palette de marque", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "Quatre bleus fixes portent l'identité. Ce sont les seules couleurs autorisées à dire « El Fath », et leurs valeurs exactes ci-dessous sont contraignantes — ne les ajustez jamais, aussi proche que semble la correspondance ou aussi bien qu'elle paraisse convenir à une campagne :",
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "Bleu primaire",
          token: "--brand-300",
          hex: "#1D65AF",
          usage: "Boutons, liens, focus, états actifs, accents clés.",
        },
        {
          name: "Bleu marine",
          token: "--brand-400",
          hex: "#193B62",
          usage: "Titres sur fond teinté, surfaces sombres, sélection sur blanc.",
        },
        {
          name: "Bleu survol",
          token: "--brand-200",
          hex: "#69A2E5",
          usage: "États de survol et d'appui du bleu primaire.",
        },
        {
          name: "Teinte douce",
          token: "--brand-100",
          hex: "#A3C0DF",
          usage: "Surlignage de sélection, fonds de pastilles et d'encadrés teintés.",
        },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Brand-100 est une teinte, pas un aplat.",
          text: "Dans la source de vérité (spa-elfath-website/src/app/globals.css), elle est déclarée en alpha : rgba(163, 192, 223, 0.35). Superposez-la sur une surface plutôt que d'imprimer une approximation hexadécimale grossière.",
        },
        {
          strong: "Jamais d'approximation.",
          text: "Si — et seulement si — l'hexadécimal exact est indisponible, utilisez l'équivalent hsl de la même valeur ; ajuster la luminosité pour « la faire ressortir » change la marque.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Le #1D65AF primaire exact pour chaque accent interactif.",
        "L'assombrissement vers #193B62 pour le contraste sur fond teinté.",
        "La lecture de la teinte telle qu'elle est livrée : rgba(163,192,223,0.35).",
      ],
      dontItems: [
        "La substitution d'un bleu « plus joli » de la même famille.",
        "Le mélange des bleus de marque entre eux en nouveaux dégradés.",
        "L'application de la palette au logo officiel (§ Identité visuelle).",
      ],
    },
    { kind: "heading", id: "neutrals", number: "02", title: "Gris chauds et neutres", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Les neutres sont chauds — légèrement beiges, jamais gris froids — et portent la quasi-totalité de la page. Le bleu est l'accent ; ces six paliers sont le corps :",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--system-50", hex: "#FAF8F6", label: "Fond de page" },
        { token: "--system-100", hex: "#F5F4F3", label: "Remplissage subtil de section" },
        { token: "--system-200", hex: "#ECE8E4", label: "Bordures et séparateurs" },
        { token: "--system-300", hex: "#D9D9D9", label: "Désactivé et espaces réservés" },
        { token: "--system-400", hex: "#737373", label: "Texte secondaire" },
        { token: "--system-500", hex: "#1F1F1F", label: "Texte principal" },
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Le gris est le système structurel, le bleu est l'accent.",
          text: "Si un design se lit comme « beaucoup de bleu », la palette est utilisée en décoration — revenez aux gris et laissez le bleu pointer vers ce qui compte.",
        },
        {
          strong: "Chaque palier a un rôle.",
          text: "Les paliers existent pour effacer les bordures, aérer le texte et séparer les surfaces. Deux gris côte à côte indiscernables ont un rôle indéfini.",
        },
      ],
    },
    { kind: "heading", id: "semantic", number: "03", title: "Couleurs sémantiques", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Les accents sémantiques sont réservés au statut — succès, avertissement et danger. Ils ne sont jamais décoratifs et n'apparaissent jamais sans mot-signal ou icône à côté d'eux :",
    },
    {
      kind: "swatchGrid",
      items: [
        {
          name: "Succès",
          token: "--color-success",
          hex: "#0A7A42",
          usage: "Enregistré, confirmé, en stock, liste correcte.",
        },
        {
          name: "Avertissement",
          token: "--color-warning",
          hex: "#B45309",
          usage: "En attente d'approbation, stock bas, attention requise.",
        },
        {
          name: "Danger",
          token: "--color-danger",
          hex: "#BE123C",
          usage: "Échec, invalide, supprimé, injoignable.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Couleur de statut + icône + texte, toujours comme un seul signal.",
        "Couleurs sémantiques uniquement dans des contextes de statut.",
        "Vérification du contraste sur fonds teintés avant livraison.",
      ],
      dontItems: [
        "Le vert par habitude pour « approuvé » quand le système pourrait être rouge.",
        "La décoration de graphiques en couleurs sémantiques selon l'humeur.",
        "Le recours à la seule couleur — le rouge/vert n'est pas un message.",
      ],
    },
    { kind: "heading", id: "usage", number: "04", title: "Table token → usage", icon: Database01Icon },
    {
      kind: "paragraph",
      text: "Un token, un rôle. Le modèle mental : --brand-300 est la seule couleur qu'un utilisateur devrait pouvoir nommer, et les gris existent pour que le bleu reste rare :",
    },
    {
      kind: "swatchRows",
      items: [
        { token: "--brand-300", hex: "#1D65AF", label: "Interactif : liens, boutons, contour de focus" },
        { token: "--brand-400", hex: "#193B62", label: "Paire de contraste du bleu sur fond teinté" },
        { token: "--brand-200", hex: "#69A2E5", label: "État de survol et d'appui du primaire" },
        { token: "--brand-100", hex: "#A3C0DF", label: "Sélection et fonds teintés doux" },
        { token: "--system-50", hex: "#FAF8F6", label: "Toile — le fond de page" },
        { token: "--system-500", hex: "#1F1F1F", label: "Texte principal et avant-plan" },
        { token: "--system-200", hex: "#ECE8E4", label: "Bordures et séparateurs structurels" },
      ],
    },
    { kind: "heading", id: "gradients", number: "05", title: "Dégradés", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "La marque est plate à dessein — industrielle, nette, honnête. Les dégradés qui simulent la profondeur sont le moyen le plus rapide de perdre l'identité, donc la règle est courte : pas de dégradés multi-étapes, pas de fonds en maillage, pas de texte en dégradé.",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 sm:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Autorisé"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Voile teinté"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center px-4 py-8", style: { backgroundColor: "rgba(163,192,223,0.30)" } },
            React.createElement("span", { className: "text-[13px] font-medium text-[#193B62]" }, "Aplat uni issu de la palette"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Un seul aplat de teinte de marque sur blanc — toute la « chaleur » qu'on demande à un dégradé, sans l'astuce de profondeur.",
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
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Interdit"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center px-4 py-8",
              style: { background: "linear-gradient(120deg,#1D65AF,#69A2E5,#0A7A42)" },
            },
            React.createElement("span", { className: "text-[13px] font-medium text-white" }, "Maillage multi-étapes"),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Dégradés multi-étapes, fonds en maillage et flous vitreux sont explicitement hors identité.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Surfaces unies et aplats issus de la palette.",
        "Une seule teinte unie de --brand-100 pour la chaleur des héros et cartes.",
        "Échelle, espacement et typographie pour la hiérarchie au lieu de la profondeur.",
      ],
      dontItems: [
        "Tout dégradé à deux ou trois étapes entre couleurs de marque.",
        "Texte en dégradé, fonds en maillage ou taches de couleur floutées.",
        "L'achat de dégradés « premium » qui imitent d'autres marques.",
      ],
    },
  ],
};

export const colors: Localized<PageData> = { ar, en, fr };
