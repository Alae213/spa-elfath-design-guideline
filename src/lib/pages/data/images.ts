import type { Localized, PageData } from "@/lib/pages/types";
import {
  Image01Icon,
  Layers01Icon,
  Layout01Icon,
  PaintBoardIcon,
  PlayCircleIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/images",
  accent: "#5ac8fa",
  hero: {
    title: "Images",
    intro:
      "Photography is evidence. El Fath sells real factories, real lines, real output — so every photo must be a real El Fath site. A picture that could be any factory anywhere says nothing about this group.",
  },
  sections: [
    { kind: "heading", id: "real-only", number: "01", title: "Real Photos Only", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "Only photographs taken on El Fath sites ship in El Fath interfaces. Stock libraries, AI-generated scenes, and renders presented as photographs are forbidden — a reader who recognizes a stock photo stops believing the caption next to it:",
    },
    {
      kind: "dodont",
      doItems: [
        "Real factory floors, lines, and output — shot on site.",
        "Real staff on real sites over hired models.",
        "Renders and diagrams labeled as renders and diagrams.",
      ],
      dontItems: [
        "Stock photography, however industrial it looks.",
        "AI-generated scenes passed as places.",
        "A competitor-like site presented as our own.",
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Alt text lives next door.",
          text: "What a photo must say to a screen reader is governed by accessibility § Images & Alt Text — this page governs which photos exist and how they are treated.",
        },
      ],
    },
    { kind: "heading", id: "treatments", number: "02", title: "Treatments & Crops", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Three approved slots cover every context. Sharp corners always — the industrial identity has no radius, and neither do its photographs. Fill with cover, never stretch:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Hero — full-bleed cover",
          ratio: "21 / 9",
          ratioTag: "21:9",
          note: "Full-viewport cover on the home hero; focal point kept clear of the caption zone.",
        },
        {
          label: "Card — section and listing",
          ratio: "16 / 9",
          ratioTag: "16:9",
          note: "Sector cards, news rows, product tiles; one ratio so grids align.",
        },
        {
          label: "Thumb — square detail",
          ratio: "1 / 1",
          ratioTag: "1:1",
          note: "Avatars of product, detail insets, and dense table cells.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "object-fit cover with the ratio locked per slot.",
        "Art-direct the focal point per breakpoint, not per mood.",
        "0px radius on every photographic surface.",
      ],
      dontItems: [
        "Stretching or squashing to “make it fit” the slot.",
        "Filters, duotones, or heavy vignettes over real sites.",
        "Rounded photo cards borrowed from another brand.",
      ],
    },
    { kind: "heading", id: "video", number: "03", title: "Video Rules", icon: PlayCircleIcon },
    {
      kind: "paragraph",
      text: "The home hero is ambient video, not decoration with a play button. Remote file, poster always, silent by construction:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Ambient hero video",
          ratio: "21 / 9",
          ratioTag: "21:9",
          video: true,
          note: "Remote asset, poster underneath, muted loop — atmosphere, never the message.",
        },
      ],
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>",
      intro: "The contract, as shipped in HomeHero:",
    },
    {
      kind: "dodont",
      doItems: [
        "Remote-only files; posters required on every video.",
        "autoplay muted loop playsInline — silent by construction.",
        "Respecting prefers-reduced-motion: poster still, no motion.",
      ],
      dontItems: [
        "Committing video files into the repository.",
        "Audio on ambient video, ever.",
        "Information carried by video alone with no text alternative.",
      ],
    },
    { kind: "heading", id: "text-on-image", number: "04", title: "Text on Image", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "White text sits on photographs only through the production grade below — a black overlay, never blue. The grade guarantees the contrast floor; the thresholds still apply and are still tested:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Graded caption zone",
          ratio: "21 / 9",
          ratioTag: "21:9",
          overlay: true,
          caption: "Real lines, real output — since 1984",
          note: "The exact hero grade with a white headline; the floor every caption stands on.",
        },
      ],
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro: "The exact grade, as shipped in HomeHero — copy it, don't approximate it:",
    },
    {
      kind: "dodont",
      doItems: [
        "The exact grade above for every text-on-photo moment.",
        "White headlines; contrast tested per caption, per photo.",
        "Keeping the focal point clear of the caption zone.",
      ],
      dontItems: [
        "Blue-tinted overlays or brand washes over photography.",
        "Raw ungraded photos with body text on top.",
        "The logo, a chart, or a form field placed over a photo.",
      ],
    },
    { kind: "heading", id: "performance", number: "05", title: "Performance Rules", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "A hero that arrives late is a blank first impression. Images are delivered, not just placed:",
    },
    {
      kind: "dodont",
      doItems: [
        "next/image everywhere: avif/webp, explicit sizes, lazy below the fold.",
        "priority on the hero/LCP image — the first paint is the brand.",
        "Remote imagery only from allowlisted hosts (framerusercontent.com).",
      ],
      dontItems: [
        "Raw multi-megabyte uploads served as-is.",
        "Lazy-loading the LCP hero to “save bandwidth”.",
        "New remote hosts without adding them to next.config.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/images",
  accent: "#5ac8fa",
  hero: {
    title: "الصور",
    intro:
      "التصوير دليل. الفتح تبيع مصانع حقيقية وخطوطًا حقيقية وإنتاجًا حقيقيًا — فكل صورة يجب أن تكون موقعًا حقيقيًا للفتح. الصورة التي قد تكون لأي مصنع في أي مكان لا تقول شيئًا عن هذه المجموعة.",
  },
  sections: [
    { kind: "heading", id: "real-only", number: "01", title: "الصور الحقيقية فقط — Real Photos Only", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "فقط الصور الملتقطة في مواقع الفتح تُشحَن في واجهات الفتح. مكتبات الصور الجاهزة والمشاهد المولّدة بالذكاء الاصطناعي والرسوم المقدَّمة كصور فوتوغرافية ممنوعة — القارئ الذي يتعرّف على صورة جاهزة يتوقف عن تصديق التسمية بجانبها:",
    },
    {
      kind: "dodont",
      doItems: [
        "أرضيات المصانع والخطوط والإنتاج الحقيقية — مصوَّرة في الموقع.",
        "موظفون حقيقيون في مواقع حقيقية بدل عارضين مستأجرين.",
        "الرسوم والمخططات موسومة كرسوم ومخططات.",
      ],
      dontItems: [
        "الصور الجاهزة مهما بدت صناعية.",
        "المشاهد المولّدة بالذكاء الاصطناعي المقدَّمة كأماكن.",
        "موقع يشبه المنافس يُقدَّم كموقعنا.",
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "النص البديل تحكمه صفحة مجاورة.",
          text: "ما يجب أن تقوله الصورة لقارئ الشاشة تحكمه إمكانية الوصول § الصور والنص البديل — هذه الصفحة تحكم أي الصور موجودة وكيف تُعالَج.",
        },
      ],
    },
    { kind: "heading", id: "treatments", number: "02", title: "المعالجات والقص — Treatments & Crops", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "ثلاثة أحياز معتمدة تغطي كل سياق. زوايا حادة دائمًا — الهوية الصناعية لا انحناء فيها، ولا في صورها. الملء بالتغطية، لا بالمدّ أبدًا:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "البطل — تغطية كاملة الحواف",
          ratio: "21 / 9",
          ratioTag: "21:9",
          note: "تغطية كاملة لمنطقة العرض في بطل الرئيسية؛ والنقطة المحورية بعيدة عن منطقة التسمية.",
        },
        {
          label: "البطاقة — للأقسام والقوائم",
          ratio: "16 / 9",
          ratioTag: "16:9",
          note: "بطاقات القطاعات وصفوف الأخبار وبلاطات المنتجات؛ نسبة واحدة لتصطف الشبكات.",
        },
        {
          label: "المصغّرة — للتفاصيل المربعة",
          ratio: "1 / 1",
          ratioTag: "1:1",
          note: "صور المنتجات والتفاصيل المضمّنة وخلايا الجداول الكثيفة.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "ملء object-fit cover مع قفل النسبة لكل حيّز.",
        "توجيه النقطة المحورية لكل عرض لا لكل مزاج.",
        "نصف قطر 0px على كل سطح فوتوغرافي.",
      ],
      dontItems: [
        "المدّ أو السحق «ليناسب» الحيّز.",
        "الفلاتر أو الثنائيات اللونية أو التظليل الثقيل فوق المواقع الحقيقية.",
        "بطاقات صور مدوّرة مستعارة من علامة أخرى.",
      ],
    },
    { kind: "heading", id: "video", number: "03", title: "قواعد الفيديو — Video Rules", icon: PlayCircleIcon },
    {
      kind: "paragraph",
      text: "بطل الرئيسية فيديو محيطي لا زينة بزر تشغيل. ملف بعيد وملصق دائمًا وصامت بالبناء:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "فيديو البطل المحيطي",
          ratio: "21 / 9",
          ratioTag: "21:9",
          video: true,
          note: "أصل بعيد وملصق تحته وحلقة صامتة — أجواء لا رسالة.",
        },
      ],
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>",
      intro: "العقد كما هو مشحون في HomeHero:",
    },
    {
      kind: "dodont",
      doItems: [
        "ملفات بعيدة فقط؛ وملصقات إلزامية على كل فيديو.",
        "تشغيل تلقائي صامت متكرر مضمّن — صامت بالبناء.",
        "احترام prefers-reduced-motion: الملصق ثابت ولا حركة.",
      ],
      dontItems: [
        "حفظ ملفات الفيديو داخل المستودع.",
        "الصوت في الفيديو المحيطي أبدًا.",
        "معلومة يحملها الفيديو وحده دون بديل نصي.",
      ],
    },
    { kind: "heading", id: "text-on-image", number: "04", title: "النص على الصورة — Text on Image", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "النص الأبيض يجلس على الصور فقط عبر الدرجة الإنتاجية أدناه — تراكب أسود لا أزرق أبدًا. الدرجة تضمن أرضية التباين؛ والعتبات تبقى سارية وتُختَبر دومًا:",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "منطقة التسمية المدرَّجة",
          ratio: "21 / 9",
          ratioTag: "21:9",
          overlay: true,
          caption: "خطوط حقيقية وإنتاج حقيقي — منذ 1984",
          note: "الدرجة البطولية الدقيقة مع عنوان أبيض؛ الأرضية التي تقف عليها كل تسمية.",
        },
      ],
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro: "الدرجة الدقيقة كما هي مشحونة في HomeHero — انسخها ولا تقاربها:",
    },
    {
      kind: "dodont",
      doItems: [
        "الدرجة الدقيقة أعلاه لكل لحظة نص على صورة.",
        "عناوين بيضاء؛ والتباين مختبَر لكل تسمية وكل صورة.",
        "إبقاء النقطة المحورية بعيدة عن منطقة التسمية.",
      ],
      dontItems: [
        "التراكبات المزرقّة أو الغسلات الرسمية فوق التصوير.",
        "صور خام غير مدرَّجة ونص متن فوقها.",
        "الشعار أو رسم بياني أو حقل نموذج فوق صورة.",
      ],
    },
    { kind: "heading", id: "performance", number: "05", title: "قواعد الأداء — Performance Rules", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "البطل الذي يصل متأخرًا انطباع أول فارغ. الصور تُسلَّم لا توضَع فقط:",
    },
    {
      kind: "dodont",
      doItems: [
        "next/image في كل مكان: avif/webp ومقاسات صريحة وكسل تحت الطيّة.",
        "الأولوية لصورة البطل/LCP — أول رسم هو الهوية.",
        "الصور البعيدة فقط من المضيفين المعتمدين (framerusercontent.com).",
      ],
      dontItems: [
        "رفوعات خام بعدة ميغابايت تُقدَّم كما هي.",
        "الكسل على بطل LCP «توفيرًا للنطاق».",
        "مضيفون بعيدون جدد دون إضافتهم إلى next.config.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/images",
  accent: "#5ac8fa",
  hero: {
    title: "Images",
    intro:
      "La photographie est une preuve. El Fath vend de vraies usines, de vraies lignes, une vraie production — chaque photo doit donc être un vrai site El Fath. Une image qui pourrait être n'importe quelle usine n'importe où ne dit rien de ce groupe.",
  },
  sections: [
    { kind: "heading", id: "real-only", number: "01", title: "Photos réelles uniquement", icon: Image01Icon },
    {
      kind: "paragraph",
      text: "Seules les photographies prises sur les sites El Fath sont livrées dans les interfaces El Fath. Banques d'images, scènes générées par IA et rendus présentés comme des photographies sont interdits — un lecteur qui reconnaît une photo de stock cesse de croire la légende à côté :",
    },
    {
      kind: "dodont",
      doItems: [
        "Sols d'usine, lignes et production réels — photographiés sur site.",
        "Vrai personnel sur vrais sites plutôt que modèles engagés.",
        "Rendus et schémas étiquetés comme rendus et schémas.",
      ],
      dontItems: [
        "Photographies de stock, aussi industrielles soient-elles.",
        "Scènes générées par IA présentées comme des lieux.",
        "Un site quasi-concurrent présenté comme le nôtre.",
      ],
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Le texte alternatif vit à côté.",
          text: "Ce qu'une photo doit dire à un lecteur d'écran relève de l'accessibilité § Images et texte alternatif — cette page gouverne quelles photos existent et comment elles sont traitées.",
        },
      ],
    },
    { kind: "heading", id: "treatments", number: "02", title: "Traitements et recadrages", icon: Layout01Icon },
    {
      kind: "paragraph",
      text: "Trois formats approuvés couvrent tous les contextes. Angles vifs toujours — l'identité industrielle n'a aucun rayon, ni ses photographies. Remplissage par couverture, jamais d'étirement :",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Héros — couverture plein-bleed",
          ratio: "21 / 9",
          ratioTag: "21:9",
          note: "Couverture plein-viewport sur le héros d'accueil ; point focal tenu à l'écart de la zone de légende.",
        },
        {
          label: "Carte — sections et listings",
          ratio: "16 / 9",
          ratioTag: "16:9",
          note: "Cartes de secteurs, lignes d'actualités, tuiles produits ; un seul ratio pour aligner les grilles.",
        },
        {
          label: "Vignette — détail carré",
          ratio: "1 / 1",
          ratioTag: "1:1",
          note: "Visuels produit, encarts de détail et cellules de tableaux denses.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Remplissage object-fit cover avec ratio verrouillé par format.",
        "Direction du point focal par breakpoint, pas selon l'humeur.",
        "Rayon 0px sur toute surface photographique.",
      ],
      dontItems: [
        "Étirer ou écraser pour « faire tenir » dans le format.",
        "Filtres, duotones ou vignetages lourds sur des sites réels.",
        "Cartes photo arrondies empruntées à une autre marque.",
      ],
    },
    { kind: "heading", id: "video", number: "03", title: "Règles vidéo", icon: PlayCircleIcon },
    {
      kind: "paragraph",
      text: "Le héros d'accueil est une vidéo d'ambiance, pas une décoration avec bouton lecture. Fichier distant, affiche toujours, muet par construction :",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Vidéo d'ambiance du héros",
          ratio: "21 / 9",
          ratioTag: "21:9",
          video: true,
          note: "Ressource distante, affiche en dessous, boucle muette — atmosphère, jamais le message.",
        },
      ],
    },
    {
      kind: "code",
      lang: "jsx",
      code: "<video autoPlay loop muted playsInline poster={poster}>\n  <source src={remoteUrl} type=\"video/mp4\" />\n</video>",
      intro: "Le contrat, tel que livré dans HomeHero :",
    },
    {
      kind: "dodont",
      doItems: [
        "Fichiers distants uniquement ; affiches obligatoires sur chaque vidéo.",
        "Lecture auto muette en boucle intégrée — muet par construction.",
        "Respect de prefers-reduced-motion : affiche fixe, aucun mouvement.",
      ],
      dontItems: [
        "Commiter des fichiers vidéo dans le dépôt.",
        "Du son sur une vidéo d'ambiance, jamais.",
        "Une information portée par la seule vidéo sans alternative texte.",
      ],
    },
    { kind: "heading", id: "text-on-image", number: "04", title: "Texte sur image", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "Le texte blanc ne repose sur des photographies que via l'étalonnage de production ci-dessous — un voile noir, jamais bleu. L'étalonnage garantit le plancher de contraste ; les seuils s'appliquent toujours et restent testés :",
    },
    {
      kind: "imageGrid",
      demos: [
        {
          label: "Zone de légende étalonnée",
          ratio: "21 / 9",
          ratioTag: "21:9",
          overlay: true,
          caption: "Vraies lignes, vraie production — depuis 1984",
          note: "L'étalonnage héros exact avec un titre blanc ; le plancher sur lequel chaque légende se tient.",
        },
      ],
    },
    {
      kind: "code",
      lang: "css",
      code: "background: linear-gradient(180deg,\n  rgba(0, 0, 0, 0.5) 0%,\n  rgba(0, 0, 0, 0.35) 55%,\n  rgba(0, 0, 0, 0.65) 100%);",
      intro: "L'étalonnage exact, tel que livré dans HomeHero — copiez-le, ne l'approximez pas :",
    },
    {
      kind: "dodont",
      doItems: [
        "L'étalonnage exact ci-dessus pour chaque moment texte-sur-photo.",
        "Titres blancs ; contraste testé par légende et par photo.",
        "Point focal tenu à l'écart de la zone de légende.",
      ],
      dontItems: [
        "Voiles teintés bleus ou lavis de marque sur la photographie.",
        "Photos brutes non étalonnées avec du corps par-dessus.",
        "Logo, graphique ou champ de formulaire posé sur une photo.",
      ],
    },
    { kind: "heading", id: "performance", number: "05", title: "Règles de performance", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Un héros qui arrive tard est une première impression vide. Les images sont livrées, pas seulement posées :",
    },
    {
      kind: "dodont",
      doItems: [
        "next/image partout : avif/webp, tailles explicites, paresseux sous la ligne de flottaison.",
        "Priorité à l'image héros/LCP — la première peinture, c'est la marque.",
        "Imagerie distante uniquement depuis des hôtes autorisés (framerusercontent.com).",
      ],
      dontItems: [
        "Téléversements bruts multi-mégaoctets servis tels quels.",
        "Chargement paresseux du héros LCP pour « économiser la bande ».",
        "Nouveaux hôtes distants sans les ajouter à next.config.",
      ],
    },
  ],
};

export const images: Localized<PageData> = { ar, en, fr };
