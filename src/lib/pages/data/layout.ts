import type { Localized, PageData } from "@/lib/pages/types";
import {
  Layers01Icon,
  Layout01Icon,
  PlayCircleIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/layout",
  accent: "#0071e3",
  hero: {
    title: "Layout",
    intro:
      "Layout is the factory floor plan: every block has a fixed place, walls touch walls, and nothing floats. The system below is the website's own — this guide's narrow reading column is not the reference.",
  },
  sections: [
    { kind: "heading", id: "container", number: "01", title: "Container & Gutters", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "No cap. Every section runs edge to edge — viewport start to viewport end. Backgrounds, borders, and media are always full-bleed; the only inset is the gutter as inner padding:",
    },
    {
      kind: "layoutDemo",
      variant: "container",
      label: "The container contract",
      note: "Sections are w-full edge-to-edge. No max-width. Content breathes inside px-6 gutters, px-8 from lg up — applied as inner padding, not as a centered capsule.",
    },
    {
      kind: "dodont",
      doItems: [
        "w-full on every section — edge to edge, start to end.",
        "px-6 gutters on mobile, px-8 from lg upward as inner padding.",
        "Background, borders, and media always full-bleed.",
      ],
      dontItems: [
        "A centered max-width capsule (1440, 1280, 1200) that leaves side whitespace.",
        "Content or cards touching the raw viewport edge with no gutter padding.",
        "Gutters that change per section instead of per breakpoint.",
      ],
    },
    { kind: "heading", id: "breakpoints", number: "02", title: "Breakpoints", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Mobile-first across the full scale, with one architectural switch. Stack below lg, row at lg and above — sm tunes type and spacing, xl and up simply hold the line:",
    },
    {
      kind: "layoutDemo",
      variant: "breakpoints",
      label: "The scale and the switch",
      note: "sm tunes, lg restructures. Desktop-only architecture collapses to accent strips on mobile — never a shrunken desktop.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Design small first.",
          text: "Every composition starts as the single-column stack, then earns its row at lg. A layout that only works wide is unfinished.",
        },
        {
          strong: "Match the code switch.",
          text: 'Interactive behavior flips at the same lg line — matchMedia("(max-width: 1024px)") — so hover-driven desktop and tap-driven mobile never disagree about which layout they are in.',
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Single-column mobile base for every composition.",
        "The stack-to-row flip at lg as the primary switch.",
        "Desktop bricks collapsing to thin accent strips on mobile.",
      ],
      dontItems: [
        "Desktop-first compositions squeezed to fit phones.",
        "Mid-breakpoint snowflakes that exist on one page only.",
        "Hiding content on mobile instead of restacking it.",
      ],
    },
    { kind: "heading", id: "hero", number: "03", title: "Bricks Identity & Masonry System" },
    {
      kind: "paragraph",
      text: "Bricks are not a hero-only treatment — they are a section system. Every section on the site is either Bricks (flush blocks, hairline joints, zero gap zero radius) or Masonry (dense 4-column masonry, no gaps). The assignment is random per section and alternates down the page, so the page reads as a factory floor: unpredictable cuts, same industrial joint. Borders are never drawn; they are inset shadows of half a pixel:",
    },
    {
      kind: "layoutDemo",
      variant: "bricks",
      label: "The bricks map — used in any section",
      note: "Flush joins, 0.5px inset joints, fixed brick widths on desktop; thin accent strips on mobile. Any section may be Bricks or Masonry — chosen at random. Grid stays LTR, content inside flips.",
    },
    {
      kind: "code",
      lang: "css",
      code: "box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);",
      intro: "The joint, as shipped in AboutHero — every brick carries it, nothing else draws a line:",
    },
    {
      kind: "paragraph",
      text: "One joint, two languages. Whether a section renders as Bricks or as Masonry, it is flush, sharp, and gapless. Both languages collapse to accent strips on mobile; neither invents a third language. Randomize per section — never lock \u201Chero = bricks, rest = masonry.\u201D",
    },
    {
      kind: "heading",
      id: "cinematic",
      number: "03.1",
      title: "Cinematic Media & Universal Video Grade",
      icon: PlayCircleIcon,
    },
    {
      kind: "paragraph",
      text: "The cinematic full-bleed media from the home hero is not hero-exclusive — every video on the site carries the same treatment: full-bleed cover, poster underneath, same grade on top. The grade below lives on all videos, not just the hero; white text sits only inside its dark zone:",
    },
    {
      kind: "layoutDemo",
      variant: "hero",
      label: "Every video — real playback with universal grade",
      note: "Real <video> (remote, poster, muted loop) with the exact grade from \u00A7 Images. Full-bleed media, caption inside the grade.",
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro:
        "The exact grade, as shipped on every video \u2014 copy it, don\u2019t approximate it (see also \u00A7 Images \u2014 Text on Image):",
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>\n<div className=\"absolute inset-0\" style={{ background: VIDEO_GRADE }} />",
      intro:
        "The video contract (every video): remote file only, poster required, autoPlay loop muted playsInline. Poster doubles as the reduced-motion and no-JS fallback. Never commit video files to the repo.",
    },
    {
      kind: "dodont",
      doItems: [
        "0 gap between joined blocks, 0px radius on every block \u2014 in Bricks and Masonry alike.",
        "Inset 0.5px joints instead of drawn borders.",
        "Same video grade and same video contract on every video, hero or not.",
      ],
      dontItems: [
        "Gutters between bricks or masonry items \u201Cfor air\u201D \u2014 air lives in gutters, not joints.",
        "Rounded cards inside the architectural grid.",
        "Per-video grades or per-section caps invented for one page.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/layout",
  accent: "#0071e3",
  hero: {
    title: "التخطيط",
    intro:
      "التخطيط مخطط أرضية المصنع: لكل كتلة مكان ثابت والجدران تلامس الجدران ولا شيء يطفو. النظام أدناه نظام الموقع نفسه — عمود القراءة الضيق في هذا الدليل ليس المرجع.",
  },
  sections: [
    { kind: "heading", id: "container", number: "01", title: "الحاوية والهوامش — Container & Gutters", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "بدون سقف. كل قسم يمتد من حافة إلى حافة — من أول بكسل إلى آخر بكسل. الخلفيات والحدود والوسائط دائمًا بملء النزف؛ والانحسار الوحيد هو الهامش كحشوة داخلية:",
    },
    {
      kind: "layoutDemo",
      variant: "container",
      label: "عقد الحاوية",
      note: "الأقسام بعرض w-full من حافة إلى حافة. لا max-width. المحتوى يتنفس داخل هوامش px-6 وpx-8 من lg فصاعدًا — كحشوة داخلية لا ككبسولة ممركزة.",
    },
    {
      kind: "dodont",
      doItems: [
        "عرض w-full على كل قسم — من حافة إلى حافة، من بداية إلى نهاية.",
        "هوامش px-6 على الجوال وpx-8 من lg فصاعدًا كحشوة داخلية.",
        "الخلفية والحدود والوسائط دائمًا بملء النزف.",
      ],
      dontItems: [
        "كبسولة ممركزة بسقف max-width (1440 أو 1280) تترك فراغًا جانبيًا.",
        "محتوى يلامس حافة العرض الخام بلا حشوة هامش.",
        "هوامش تتغير بتغير القسم بدل أن تتغير بتغير نقطة التوقف.",
      ],
    },
    { kind: "heading", id: "breakpoints", number: "02", title: "نقاط التوقف — Breakpoints", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "الجوال أولًا عبر المقياس الكامل وبمفتاح معماري واحد. التكديس تحت lg والصف عند lg فأعلى — الـsm يضبط الخط والتباعد والـxl فأعلى يحمل الخط ببساطة:",
    },
    {
      kind: "layoutDemo",
      variant: "breakpoints",
      label: "المقياس والمفتاح",
      note: "الـsm يضبط والـlg يعيد الهيكلة. العمارة المكتبية تنهار إلى شرائح تكميلية على الجوال — لا مكتب مصغّر أبدًا.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "صمّم صغيرًا أولًا.",
          text: "كل تكوين يبدأ كومة أحادية العمود ثم يستحق صفّه عند lg. التخطيط الذي يعمل عريضًا فقط غير مكتمل.",
        },
        {
          strong: "طابِق مفتاح الشيفرة.",
          text: 'السلوك التفاعلي ينقلب عند خط lg نفسه — matchMedia("(max-width: 1024px)") — فلا يختلف مكتب التحويم عن جوال اللمس حول أي تخطيط هما فيه.',
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "قاعدة جوال أحادية العمود لكل تكوين.",
        "انقلاب التكديس إلى الصف عند lg كمفتاح أساسي.",
        "انهيار طوب المكتب إلى شرائح تكميلية رفيعة على الجوال.",
      ],
      dontItems: [
        "تكوينات المكتب أولًا المضغوطة لتناسب الهواتف.",
        "استثناءات نقاط وسطى تعيش في صفحة واحدة فقط.",
        "إخفاء المحتوى على الجوال بدل إعادة تكديسه.",
      ],
    },
    { kind: "heading", id: "hero", number: "03", title: "هوية الطوب ونظام Masonry — Bricks & Masonry" },
    {
      kind: "paragraph",
      text: "الطوب ليس معالجة للبطل فقط — هو نظام أقسام. كل قسم في الموقع إما طوب Bricks (كتل متلاصقة ووصلات شعرية وفجوة صفر ونصف قطر صفر) أو Masonry (ماسونري كثيف بأربعة أعمدة بلا فجوات). التعيين عشوائي لكل قسم ويتناوب نزولًا في الصفحة، فتُقرأ الصفحة كأرضية مصنع: تقطيعات غير متوقعة ونفس الوصلة الصناعية. الحدود لا تُرسَم بل ظلال داخلية من نصف بكسل:",
    },
    {
      kind: "layoutDemo",
      variant: "bricks",
      label: "خريطة الطوب — تُستخدم في أي قسم",
      note: "وصلات متلاصقة ووصلات 0.5px داخلية وعروض طوب ثابتة على المكتب؛ وشرائح تكميلية على الجوال. أي قسم قد يكون طوبًا أو Masonry — اختيار عشوائي. الشبكة تبقى LTR والمحتوى داخلها ينقلب.",
    },
    {
      kind: "code",
      lang: "css",
      code: "box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);",
      intro: "الوصلة كما هي مشحونة في AboutHero — كل طوبة تحملها ولا شيء آخر يرسم خطًا:",
    },
    {
      kind: "paragraph",
      text: "وصلة واحدة ولغتان. سواء ظهر القسم كطوب أو كـ Masonry فهو متلاصق وحاد وبلا فجوة. اللغتان تنهاران إلى شرائح تكميلية على الجوال؛ ولا تخترع أي منهما لغة ثالثة. وزّع عشوائيًا لكل قسم — لا تثبت \u00ABالبطل = طوب والباقي = Masonry\u00BB.",
    },
    {
      kind: "heading",
      id: "cinematic",
      number: "03.1",
      title: "الوسائط السينمائية والدرجة الشاملة للفيديو",
      icon: PlayCircleIcon,
    },
    {
      kind: "paragraph",
      text: "الوسائط السينمائية بملء النزف من بطل الرئيسية ليست حصرية للبطل — كل فيديو في الموقع يحمل نفس المعالجة: تغطية بملء النزف وملصق تحته ونفس الدرجة فوقه. الدرجة أدناه تعيش على كل الفيديوهات لا على البطل وحده؛ والنص الأبيض لا يسكن إلا منطقتها الداكنة:",
    },
    {
      kind: "layoutDemo",
      variant: "hero",
      label: "كل فيديو — تشغيل حقيقي بدرجة شاملة",
      note: "عنصر <video> حقيقي (بعيد وملصق وحلقة صامتة) بنفس درجة \u00A7 الصور. وسائط بملء النزف والتسمية داخل الدرجة.",
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro: "الدرجة الدقيقة كما هي مشحونة على كل فيديو — انسخها ولا تقاربها (انظر أيضًا \u00A7 الصور — Text on Image):",
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>\n<div className=\"absolute inset-0\" style={{ background: VIDEO_GRADE }} />",
      intro:
        "عقد الفيديو (كل فيديو): ملف بعيد فقط وملصق مطلوب وautoPlay loop muted playsInline. الملصق هو بديل تقليل الحركة وبدون JS. لا تُسجل ملفات فيديو أبدًا في المستودع.",
    },
    {
      kind: "dodont",
      doItems: [
        "فجوة 0 بين الكتل الملتحمة ونصف قطر 0px على كل كتلة — في الطوب وMasonry معًا.",
        "وصلات 0.5px داخلية بدل حدود مرسومة.",
        "نفس درجة الفيديو ونفس عقد الفيديو على كل فيديو، بطلًا كان أم لا.",
      ],
      dontItems: [
        "هوامش بين الطوب أو عناصر Masonry \u00ABللتهوية\u00BB — الهواء يسكن الهوامش لا الوصلات.",
        "بطاقات مدوّرة داخل الشبكة المعمارية.",
        "درجات لكل فيديو أو أسقف لكل قسم مخترَعة لصفحة واحدة.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/layout",
  accent: "#0071e3",
  hero: {
    title: "Mise en page",
    intro:
      "La mise en page est le plan de sol de l'usine : chaque bloc a une place fixe, les murs touchent les murs, et rien ne flotte. Le système ci-dessous est celui du site lui-même — l'étroite colonne de lecture de ce guide n'est pas la référence.",
  },
  sections: [
    { kind: "heading", id: "container", number: "01", title: "Conteneur et gouttières", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Pas de cap. Chaque section va de bord à bord — du premier pixel au dernier. Fonds, bordures et médias sont toujours plein-bleed ; seul le retrait est la gouttière en padding interne :",
    },
    {
      kind: "layoutDemo",
      variant: "container",
      label: "Le contrat du conteneur",
      note: "Sections en w-full de bord à bord. Pas de max-width. Le contenu respire dans des gouttières px-6, px-8 dès lg — en padding interne, pas en capsule centrée.",
    },
    {
      kind: "dodont",
      doItems: [
        "w-full sur chaque section — de bord à bord, du début à la fin.",
        "Gouttières px-6 sur mobile, px-8 dès lg en padding interne.",
        "Fond, bordures et médias toujours plein-bleed.",
      ],
      dontItems: [
        "Une capsule centrée max-width (1440, 1280) qui laisse des marges latérales.",
        "Contenu touchant le bord brut du viewport sans padding de gouttière.",
        "Des gouttières qui changent par section au lieu de par breakpoint.",
      ],
    },
    { kind: "heading", id: "breakpoints", number: "02", title: "Breakpoints", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Mobile-first sur toute l'échelle, avec un seul interrupteur architectural. Empilement sous lg, rangée à lg et au-delà — sm règle la typo et l'espacement, xl et au-delà tiennent simplement la ligne :",
    },
    {
      kind: "layoutDemo",
      variant: "breakpoints",
      label: "L'échelle et l'interrupteur",
      note: "sm règle, lg restructure. L'architecture desktop s'effondre en bandes d'accent sur mobile — jamais un desktop rétréci.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Concevoir petit d'abord.",
          text: "Chaque composition naît comme pile à une colonne, puis gagne sa rangée à lg. Une mise en page qui ne fonctionne qu'en large est inachevée.",
        },
        {
          strong: "Suivre l'interrupteur du code.",
          text: 'Le comportement interactif bascule sur la même ligne lg — matchMedia("(max-width: 1024px)") — pour que desktop au survol et mobile au tactile ne se disputent jamais la mise en page où ils sont.',
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Base mobile à une colonne pour chaque composition.",
        "Le basculement pile-vers-rangée à lg comme interrupteur principal.",
        "Briques desktop effondrées en fines bandes d'accent sur mobile.",
      ],
      dontItems: [
        "Compositions desktop-first compressées pour tenir dans les téléphones.",
        "Exceptions de breakpoints médians qui n'existent que sur une page.",
        "Masquer du contenu sur mobile au lieu de le réempiler.",
      ],
    },
    { kind: "heading", id: "hero", number: "03", title: "Identité briques et système Masonry" },
    {
      kind: "paragraph",
      text: "Les briques ne sont pas un traitement réservé au héros — c'est un système de sections. Chaque section du site est soit Briques (blocs jointifs, joints capillaires, gouttière zéro, rayon zéro) soit Masonry (masonry dense 4 colonnes, sans espacement). L'affectation est aléatoire par section et alterne le long de la page, pour une lecture d'usine : découpes imprévisibles, même joint industriel. Les bordures ne sont pas dessinées ; ce sont des ombres inset d'un demi-pixel :",
    },
    {
      kind: "layoutDemo",
      variant: "bricks",
      label: "La carte des briques — utilisable dans toute section",
      note: "Joints jointifs, joints inset 0.5px, largeurs de briques fixes sur desktop ; bandes d'accent sur mobile. Toute section peut être Briques ou Masonry — choix aléatoire. La grille reste LTR, le contenu dedans bascule.",
    },
    {
      kind: "code",
      lang: "css",
      code: "box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.25);",
      intro: "Le joint, tel que livré dans AboutHero — chaque brique le porte, rien d'autre ne trace de ligne :",
    },
    {
      kind: "paragraph",
      text: "Un joint, deux langages. Qu'une section s'affiche en Briques ou en Masonry, elle est jointive, nette et sans gouttière. Les deux langages s'effondrent en bandes d'accent sur mobile ; aucun n'invente un troisième langage. Randomisez par section — ne figez jamais \u00AB h\u00E9ros = briques, reste = masonry \u00BB.",
    },
    {
      kind: "heading",
      id: "cinematic",
      number: "03.1",
      title: "Média cinématique et grade vidéo universel",
      icon: PlayCircleIcon,
    },
    {
      kind: "paragraph",
      text: "Le média plein-bleed cinématique du héros d'accueil n'est pas exclusif au héros — chaque vidéo du site porte le même traitement : cover plein-bleed, poster dessous, même grade par dessus. Le grade ci-dessous vit sur toutes les vidéos, pas seulement le héros ; le texte blanc n'habite que sa zone sombre :",
    },
    {
      kind: "layoutDemo",
      variant: "hero",
      label: "Chaque vidéo — lecture réelle avec grade universel",
      note: "Vraie <video> (distante, poster, boucle muette) avec le grade exact de \u00A7 Images. Média plein-bleed, légende dans le grade.",
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro: "Le grade exact, tel que livré sur chaque vidéo — copiez-le, ne l'approximez pas (voir aussi \u00A7 Images — Text on Image) :",
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>\n<div className=\"absolute inset-0\" style={{ background: VIDEO_GRADE }} />",
      intro:
        "Le contrat vid\u00E9o (chaque vid\u00E9o) : fichier distant uniquement, poster requis, autoPlay loop muted playsInline. Le poster sert de fallback reduced-motion et no-JS. Ne jamais committer de vid\u00E9os dans le repo.",
    },
    {
      kind: "dodont",
      doItems: [
        "Goutti\u00E8re 0 entre blocs joints, rayon 0px sur chaque bloc \u2014 en Briques comme en Masonry.",
        "Joints inset 0.5px au lieu de bordures dessin\u00E9es.",
        "M\u00EAme grade vid\u00E9o et m\u00EAme contrat vid\u00E9o sur chaque vid\u00E9o, h\u00E9ros ou non.",
      ],
      dontItems: [
        "Des goutti\u00E8res entre briques ou items masonry \u00AB pour a\u00E9rer \u00BB \u2014 l'air vit dans les goutti\u00E8res, pas dans les joints.",
        "Des cartes arrondies dans la grille architecturale.",
        "Des grades par vid\u00E9o ou des caps par section invent\u00E9s pour une seule page.",
      ],
    },
  ],
};

export const layout: Localized<PageData> = { ar, en, fr };
