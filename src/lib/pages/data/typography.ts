import type { Localized, PageData } from "@/lib/pages/types";
import { Layers01Icon, TextFontIcon } from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/typography",
  accent: "#af52de",
  hero: {
    title: "Typography",
    intro:
      "One voice needs one typeface. Every locale — Arabic, French, English — speaks in IBM Plex Sans Arabic, so a headline keeps its posture when the language changes underneath it.",
  },
  sections: [
    { kind: "heading", id: "family", number: "01", title: "Family & Weights", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "Plex Arabic for all locales, loaded once, substituted never. The approved range runs 300 to 700 — Light lives in the range because production uses it for hero subtitles, not by accident:",
    },
    {
      kind: "typeDemo",
      variant: "weights",
      label: "The approved range",
      note: "300 Light through 700 Bold, as loaded. No Condensed, no Italic, no second family.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Never substitute without owner approval.",
          text: "A “close enough” Arabic-capable family is a different voice — the lockup, the measure, and the numerals all shift with it.",
        },
        {
          strong: "Western digits everywhere.",
          text: "Years, prices, phones, and stats set in Western numerals in all locales — no Arabic-Indic digits, and a number never reorders its digits:",
        },
      ],
    },
    {
      kind: "typeDemo",
      variant: "numerals",
      label: "The house numerals",
      note: "0123456789 · years, phones, and percents read left to right in every locale.",
    },
    {
      kind: "dodont",
      doItems: [
        "IBM Plex Sans Arabic for AR, FR, and EN alike.",
        "Weights 300–700 as loaded; Light reserved for large subtitles.",
        "Western digits for every number in every locale.",
      ],
      dontItems: [
        "A system fallback stack as a “temporary” voice.",
        "Bold everything — 700 is a headline weight, not a default.",
        "Arabic-Indic digits or reordered digit strings.",
      ],
    },
    { kind: "heading", id: "ladder", number: "02", title: "Scale Ladder", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Three rungs carry the whole product, plus the eyebrow that introduces them. Rendered below at true size in the true face:",
    },
    {
      kind: "typeDemo",
      variant: "ladder",
      label: "The ladder at true size",
      h1: "Real lines, real output",
      h2: "Seven integrated sectors",
      body: "Certified solutions for industry and construction nationwide.",
      eyebrow: "SECTORS",
      note: "H1 52/700, H2 28/700, Body 18/600 — the official scale, verbatim.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "FR and EN may scale down, never up.",
          text: "Where a translation overflows its layout, French and English set slightly smaller to fit — Arabic never shrinks to match, and nothing ever scales up past the rung.",
        },
        {
          strong: "The eyebrow is a lockup, not a label.",
          text: "text-xs font-bold tracking-widest in brand-300, preceded by the h-1 w-6 brand dash — always paired, never restyled per section.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "H1 for the page promise, H2 for section titles, Body 18/600 for reading.",
        "Tight leading on display, generous leading on body.",
        "Overflow fixed by scaling FR/EN down — layout never stretches.",
      ],
      dontItems: [
        "Intermediate sizes (“24px feels better here”) between rungs.",
        "All-caps body copy or letterspaced paragraphs.",
        "Eyebrows without the dash, or dashes without the eyebrow.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/typography",
  accent: "#af52de",
  hero: {
    title: "الخطوط",
    intro:
      "الصوت الواحد يحتاج خطًا واحدًا. كل لغة — العربية والفرنسية والإنجليزية — تتكلم بـIBM Plex Sans Arabic، فيحافظ العنوان على وقفته حين تتغير اللغة تحته.",
  },
  sections: [
    { kind: "heading", id: "family", number: "01", title: "العائلة والأوزان — Family & Weights", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "بلكس العربي لكل اللغات، محمّل مرة واحدة ولا يُستبدَل أبدًا. المدى المعتمد يمتد من 300 إلى 700 — الخفيف يعيش في المدى لأن الإنتاج يستعمله للعناوين الفرعية البطولية لا مصادفة:",
    },
    {
      kind: "typeDemo",
      variant: "weights",
      label: "المدى المعتمد",
      note: "من 300 Light إلى 700 Bold كما هو محمّل. لا مضغوط ولا مائل ولا عائلة ثانية.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "لا استبدال دون موافقة المالك.",
          text: "عائلة «قريبة بما يكفي» تدعم العربية صوت مختلف — فالتكوين والقياس والأرقام كلها تتحرك معها.",
        },
        {
          strong: "الأرقام الغربية في كل مكان.",
          text: "السنوات والأسعار والهواتف والإحصاءات بالأرقام الغربية في كل اللغات — لا أرقام عربية مشرقية ولا إعادة ترتيب لأرقام عدد:",
        },
      ],
    },
    {
      kind: "typeDemo",
      variant: "numerals",
      label: "أرقام الدار",
      note: "0123456789 · السنوات والهواتف والنسب تُقرَأ من اليسار إلى اليمين في كل لغة.",
    },
    {
      kind: "dodont",
      doItems: [
        "بلكس العربي للعربية والفرنسية والإنجليزية معًا.",
        "الأوزان 300–700 كما حُمّلت؛ والخفيف محفوظ للعناوين الكبيرة.",
        "الأرقام الغربية لكل عدد في كل لغة.",
      ],
      dontItems: [
        "كومة احتياط النظام كصوت «مؤقت».",
        "تعريض كل شيء — الـ700 وزن عناوين لا افتراضي.",
        "الأرقام المشرقية أو سلاسل الأرقام المعاد ترتيبها.",
      ],
    },
    { kind: "heading", id: "ladder", number: "02", title: "سلّم المقاسات — Scale Ladder", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "ثلاث درجات تحمل المنتج كله، والحاجب الذي يقدّمها. معروضة أدناه بحجمها الحقيقي ووجهها الحقيقي:",
    },
    {
      kind: "typeDemo",
      variant: "ladder",
      label: "السلّم بحجمه الحقيقي",
      h1: "خطوط حقيقية وإنتاج حقيقي",
      h2: "سبعة قطاعات متكاملة",
      body: "حلول معتمدة للصناعة والبناء في كل أنحاء الوطن.",
      eyebrow: "القطاعات",
      note: "H1 52/700 وH2 28/700 والمتن 18/600 — المقياس الرسمي حرفيًا.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الفرنسية والإنجليزية قد تصغّران لا تكبّران أبدًا.",
          text: "حيث تفيض الترجمة عن تخطيطها تصغّر الفرنسية والإنجليزية قليلًا لتناسبا — والعربية لا تتقلص لتطابقهما ولا شيء يكبر فوق الدرجة أبدًا.",
        },
        {
          strong: "الحاجب تكوين لا تسمية.",
          text: "text-xs font-bold tracking-widest بلون الهوية-300 مسبوقًا بشرطة الهوية h-1 w-6 — مقترنان دائمًا ولا يعاد تصميمهما من قسم لآخر.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "H1 لوعد الصفحة وH2 لعناوين الأقسام والمتن 18/600 للقراءة.",
        "تباعد ضيق على العرض وسخي على المتن.",
        "الفيض يُصلَح بتصغير الفرنسية/الإنجليزية — لا يتمدد التخطيط.",
      ],
      dontItems: [
        "مقاسات وسيطة («الـ24 أجمل هنا») بين الدرجات.",
        "متن بأحرف كبيرة أو فقرات متباعدة الأحرف.",
        "حواجب دون الشرطة أو شرطات دون الحاجب.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/typography",
  accent: "#af52de",
  hero: {
    title: "Typographie",
    intro:
      "Une seule voix a besoin d'un seul caractère. Chaque locale — arabe, français, anglais — parle en IBM Plex Sans Arabic, pour qu'un titre garde sa posture quand la langue change sous lui.",
  },
  sections: [
    { kind: "heading", id: "family", number: "01", title: "Famille et graisses", icon: TextFontIcon },
    {
      kind: "paragraph",
      text: "Plex Arabic pour toutes les locales, chargé une fois, jamais substitué. La plage approuvée va de 300 à 700 — le Light y vit parce que la production l'emploie pour les sous-titres héros, pas par accident :",
    },
    {
      kind: "typeDemo",
      variant: "weights",
      label: "La plage approuvée",
      note: "De 300 Light à 700 Bold, tel que chargé. Ni condensé, ni italique, ni seconde famille.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Jamais de substitution sans accord du propriétaire.",
          text: "Une famille « assez proche » compatible arabe est une voix différente — chasse, mesure et chiffres bougent avec elle.",
        },
        {
          strong: "Chiffres occidentaux partout.",
          text: "Années, prix, téléphones et stats en chiffres occidentaux dans toutes les locales — pas de chiffres arabes orientaux, et un nombre ne réordonne jamais ses chiffres :",
        },
      ],
    },
    {
      kind: "typeDemo",
      variant: "numerals",
      label: "Les chiffres maison",
      note: "0123456789 · années, téléphones et pourcents se lisent de gauche à droite dans chaque locale.",
    },
    {
      kind: "dodont",
      doItems: [
        "IBM Plex Sans Arabic pour AR, FR et EN ensemble.",
        "Graisses 300–700 telles que chargées ; Light réservé aux grands sous-titres.",
        "Chiffres occidentaux pour chaque nombre dans chaque locale.",
      ],
      dontItems: [
        "La pile système de repli comme voix « temporaire ».",
        "Tout graisser — 700 est une graisse de titres, pas un défaut.",
        "Chiffres orientaux ou chaînes de chiffres réordonnées.",
      ],
    },
    { kind: "heading", id: "ladder", number: "02", title: "Échelle des tailles", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Trois barreaux portent tout le produit, plus l'eyebrow qui les annonce. Rendus ci-dessous en taille et caractère réels :",
    },
    {
      kind: "typeDemo",
      variant: "ladder",
      label: "L'échelle en taille réelle",
      h1: "Lignes réelles, production réelle",
      h2: "Sept secteurs intégrés",
      body: "Des solutions certifiées pour l'industrie et la construction.",
      eyebrow: "SECTEURS",
      note: "H1 52/700, H2 28/700, Corps 18/600 — l'échelle officielle, mot à mot.",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "FR et EN peuvent réduire, jamais grossir.",
          text: "Là où une traduction déborde de sa mise en page, français et anglais composent légèrement plus petit pour tenir — l'arabe ne rétrécit jamais pour suivre, et rien ne grossit jamais au-delà du barreau.",
        },
        {
          strong: "L'eyebrow est un verrou, pas un libellé.",
          text: "text-xs font-bold tracking-widest en brand-300, précédé du tiret de marque h-1 w-6 — toujours appariés, jamais restylés par section.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "H1 pour la promesse de page, H2 pour les titres de sections, Corps 18/600 pour lire.",
        "Interlignage serré sur l'affiche, généreux sur le corps.",
        "Débordement corrigé en réduisant FR/EN — jamais en étirant la mise en page.",
      ],
      dontItems: [
        "Tailles intermédiaires (« 24px sonne mieux ici ») entre barreaux.",
        "Corps tout-capitales ou paragraphes chassés.",
        "Eyebrows sans tiret, ou tirets sans eyebrow.",
      ],
    },
  ],
};

export const typography: Localized<PageData> = { ar, en, fr };
