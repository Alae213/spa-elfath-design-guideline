import type { Localized, PageData } from "@/lib/pages/types";

const en: PageData = {
  slug: "components/core-ui/buttons",
  accent: "#0071e3",
  hero: {
    title: "Buttons",
    intro:
      "Buttons are the only voice that asks for something. Three variants ship in production — every class below is verbatim from Button.tsx — and this page adds the two rules production never wrote: a destructive treatment and icons in buttons. Rows tagged invented are guideline additions for future projects; everything else ships today.",
  },
  sections: [
    { kind: "heading", id: "variants", number: "01", title: "Variants" },
    {
      kind: "paragraph",
      text: "One job each. Primary closes — hero CTAs, the quote form submit. Secondary offers — the alternative beside a primary. Ghost retreats — quiet actions inside dense layouts. All three share the base: inline-flex items-center justify-center tracking-wide transition-colors duration-150, sharp corners, Plex voice:",
    },
    {
      kind: "buttonDemo",
      variant: "variants",
      label: "The three that ship, plus the one we add",
      note: "Primary, secondary, ghost: Button.tsx verbatim. Destructive: INVENTED — red outline mirroring secondary's logic, error #BE123C from the color semantics.",
      tags: [
        "primary · solid · bold",
        "secondary · outline · semibold",
        "ghost · text only · semibold",
        "destructive · INVENTED red outline",
      ],
      tAction: "Request a quote",
      tDelete: "Delete record",
      tAdd: "Add",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Primary is singular.",
          text: "One primary per view — the single thing the page wants. A second primary is a second promise; demote it to secondary.",
        },
        {
          strong: "Destructive is always the red outline — never solid red as a default.",
          text: "Destruction must look reversible until committed: outline at rest, solid fill only on hover. Destructive never shares a row with primary; it sits apart, last, alone.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Primary for the one closing action per view.",
        "Secondary for the safe alternative beside it.",
        "Destructive outline for irreversible acts — apart, last.",
      ],
      dontItems: [
        "Two primaries competing in one view.",
        "Ghost as the only action on a page — it has no presence.",
        "Solid red buttons as a resting state.",
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "Sizes" },
    {
      kind: "paragraph",
      text: "Three heights ship — sm h-8 px-4 text-xs, md h-10 px-5 text-sm, lg h-12 px-7 text-base — and md is the default the component itself falls back to. The square icon-only companions are invented, one square per height:",
    },
    {
      kind: "buttonDemo",
      variant: "sizes",
      label: "Heights at true size",
      note: "sm / md / lg: Button.tsx verbatim, rendered at true height. Squares 32/40/48: INVENTED companions — same heights, zero horizontal padding, 20px glyph.",
      tags: [
        "sm · h-8 · px-4 · xs",
        "md · h-10 · px-5 · sm — default",
        "lg · h-12 · px-7 · base — hero + form",
        "icon-only · square 32/40/48 · INVENTED",
      ],
      tAction: "Request a quote",
      tAdd: "Add",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "lg is earned, not decorative.",
          text: "Hero promises and form submits take lg; everything inline — table rows, card footers, nav bars — stays md or sm. A large button never decorates, it closes.",
        },
        {
          strong: "Touch never drops below 32.",
          text: "The sm 32px height is the floor — anything smaller stops being a button and becomes a link. Icon-only squares keep the full 32/40/48 hit area; the glyph shrinks, the target never does.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "md everywhere unless the action closes the page.",
        "lg for hero CTAs and form submits only.",
        "Icon-only squares at full height — 20px glyph inside.",
      ],
      dontItems: [
        "sm buttons for primary page actions.",
        "Heights between rungs (36px, 44px “feels better”).",
        "Icon-only buttons smaller than 32px.",
      ],
    },
    { kind: "heading", id: "states", number: "03", title: "States" },
    {
      kind: "paragraph",
      text: "Four states, no surprises. Hover lightens primary to brand-200; disabled locks at opacity-40 with cursor-not-allowed; focus-visible draws the global ring — 2px solid brand-300 with 2px offset, straight from globals.css:",
    },
    {
      kind: "buttonDemo",
      variant: "states",
      label: "One button, four moments",
      note: "Hover, disabled, and focus are live — tab through the specimens. The focus row pins the ring statically for reference.",
      tags: [
        "default",
        "hover · brand-200 #69A2E5 (primary)",
        "disabled · opacity-40 · not-allowed",
        "focus-visible · 2px brand + 2px offset",
      ],
      tAction: "Request a quote",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Disabled explains itself.",
          text: "A disabled button never stands alone — it keeps its label visible at 40% and the surrounding copy says why and what unlocks it. No tooltips-as-excuses, no disappearing act.",
        },
        {
          strong: "Focus is never removed.",
          text: "The 2px ring with 2px offset is the keyboard user's cursor — restyling it is allowed, removing it is not. Every variant, including ghost and destructive, takes the same ring.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Hover states that preview the click — lighter, never darker, for primary.",
        "Disabled at opacity-40 with the reason in nearby copy.",
        "The 2px + 2px focus ring on every variant.",
      ],
      dontItems: [
        "Disabled buttons with no explanation anywhere.",
        "outline-none without a replacement ring.",
        "Loading spinners inside the button — see Feedback.",
      ],
    },
    { kind: "heading", id: "icons", number: "04", title: "Icons in Buttons" },
    {
      kind: "paragraph",
      text: "Production ships no icon rule — so this section is invented whole, from the icon and RTL foundations. Leading icons act (Add01 + “Request a quote”); trailing directionals move (“Learn more” + arrow); squares stand alone. One glyph per button, always 20px, always strokeWidth 1.5, always currentColor:",
    },
    {
      kind: "buttonDemo",
      variant: "icons",
      label: "Glyphs with passports",
      note: "INVENTED section. Directional glyphs mirror in RTL; the plus stays put. The RTL strip shows both rules live.",
      tags: [
        "leading · non-directional stays",
        "trailing · directional · LTR",
        "RTL · directional mirrors · non-directional stays",
      ],
      tAction: "Request a quote",
      tMore: "Learn more",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Directional mirrors, functional stays.",
          text: "Arrows, chevrons, and “more” glyphs flip in RTL — they point where the reader goes. Plus, download, close, and status glyphs never flip — they mean, they don't point.",
        },
        {
          strong: "Icon-only is a last resort with a first-class label.",
          text: "A square button always carries an aria-label in the reader's language — the glyph is seen, the label is spoken. Two icons in one button is a sentence; rewrite the label instead.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "One 20px HugeIcon per button, currentColor.",
        "Mirror directional glyphs in RTL; freeze functional ones.",
        "aria-label on every icon-only square.",
      ],
      dontItems: [
        "Two glyphs in one button.",
        "Mirrored plus/download/close icons.",
        "Icon-only squares with no accessible name.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "components/core-ui/buttons",
  accent: "#0071e3",
  hero: {
    title: "الأزرار",
    intro:
      "الأزرار هي الصوت الوحيد الذي يطلب شيئًا. ثلاثة أنواع تُشحَن في الإنتاج — كل صنف أدناه حرفيًا من Button.tsx — وتضيف هذه الصفحة القاعدتين اللتين لم يكتبهما الإنتاج: معالجة المدمّر والأيقونات في الأزرار. الصفوف الموسومة «مخترَع» إضافات الدليل للمشاريع المستقبلية؛ وكل ما عداها يُشحَن اليوم.",
  },
  sections: [
    { kind: "heading", id: "variants", number: "01", title: "الأنواع — Variants" },
    {
      kind: "paragraph",
      text: "مهمة واحدة لكل نوع. الأساسي يُغلِق — أزرار البطل وإرسال نموذج الطلب. الثانوي يعرض — البديل بجانب الأساسي. الشبحي يتراجع — إجراءات هادئة داخل التخطيطات الكثيفة. الثلاثة تشترك في القاعدة: inline-flex items-center justify-center tracking-wide transition-colors duration-150 وزوايا حادة وصوت بلكس:",
    },
    {
      kind: "buttonDemo",
      variant: "variants",
      label: "الثلاثة التي تُشحَن، والذي نضيفه",
      note: "الأساسي والثانوي والشبحي: حرفيًا من Button.tsx. المدمّر: مخترَع — حدود حمراء تعكس منطق الثانوي، والأحمر #BE123C من دلالات الألوان.",
      tags: ["أساسي · مصمت · عريض", "ثانوي · محدود · شبه عريض", "شبحي · نص فقط · شبه عريض", "مدمّر · مخترَع بحدود حمراء"],
      tAction: "اطلب عرض سعر",
      tDelete: "احذف السجل",
      tAdd: "أضف",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الأساسي مفرد.",
          text: "أساسي واحد في كل عرض — الشيء الوحيد الذي تريده الصفحة. الأساسي الثاني وعد ثانٍ؛ اخفضه إلى ثانوي.",
        },
        {
          strong: "المدمّر دائمًا الحدود الحمراء — لا أحمر مصمت كافتراضي أبدًا.",
          text: "يجب أن يبدو التدمير قابلًا للتراجع حتى يُلتَزَم به: حدود في السكون وتعبئة مصمتة عند التحويم فقط. المدمّر لا يشارك صفًا مع الأساسي؛ يجلس منفصلًا في الأخير وحده.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "الأساسي للإجراء الوحيد الذي يُغلِق في كل عرض.",
        "الثانوي للبديل الآمن بجانبه.",
        "المدمّر المحدود بالأحمر للأفعال اللارجوع عنها — منفصلًا في الأخير.",
      ],
      dontItems: [
        "أساسيان يتنافسان في عرض واحد.",
        "الشبحي كإجراء وحيد على صفحة — لا حضور له.",
        "أزرار حمراء مصمتة كحالة سكون.",
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "المقاسات — Sizes" },
    {
      kind: "paragraph",
      text: "ثلاثة ارتفاعات تُشحَن — sm h-8 px-4 text-xs وmd h-10 px-5 text-sm وlg h-12 px-7 text-base — وmd هو الافتراضي الذي يعود إليه المكوّن نفسه. الرفقاء الأيقونيون المربعون مخترَعون، مربع واحد لكل ارتفاع:",
    },
    {
      kind: "buttonDemo",
      variant: "sizes",
      label: "الارتفاعات بحجمها الحقيقي",
      note: "sm / md / lg: حرفيًا من Button.tsx معروضة بارتفاعها الحقيقي. المربعات 32/40/48: رفقاء مخترَعون — الارتفاعات نفسها دون حشو أفقي وبحرف 20px.",
      tags: ["sm · h-8 · px-4 · xs", "md · h-10 · px-5 · sm — الافتراضي", "lg · h-12 · px-7 · base — البطل + النموذج", "أيقوني فقط · مربع 32/40/48 · مخترَع"],
      tAction: "اطلب عرض سعر",
      tAdd: "أضف",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الـlg يُستحَق لا يُزخرف.",
          text: "وعود البطل وعمليات إرسال النماذج تأخذ lg؛ وكل ما هو مضمّن — صفوف الجداول وتذييلات البطاقات وأشرطة التنقل — يبقى md أو sm. الزر الكبير لا يزيّن أبدًا بل يُغلِق.",
        },
        {
          strong: "اللمس لا ينزل أبدًا تحت 32.",
          text: "ارتفاع 32px في sm هو الأرضية — فما هو أصغر يتوقف عن كونه زرًا ويصبح رابطًا. المربعات الأيقونية تحافظ على مساحة الإصابة الكاملة 32/40/48؛ يتقلص الحرف ولا يتقلص الهدف أبدًا.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "md في كل مكان ما لم يُغلِق الإجراء الصفحة.",
        "lg لأزرار البطل وعمليات إرسال النماذج فقط.",
        "المربعات الأيقونية بارتفاعها الكامل — حرف 20px في الداخل.",
      ],
      dontItems: [
        "أزرار sm لإجراءات الصفحة الأساسية.",
        "ارتفاعات بين الدرجات (36px أو 44px «تبدو أفضل»).",
        "أزرار أيقونية أصغر من 32px.",
      ],
    },
    { kind: "heading", id: "states", number: "03", title: "الحالات — States" },
    {
      kind: "paragraph",
      text: "أربع حالات دون مفاجآت. التحويم يفتّح الأساسي إلى brand-200؛ والمعطّل يُقفَل عند opacity-40 مع cursor-not-allowed؛ وتركيز لوحة المفاتيح يرسم الحلقة العامة — 2px solid brand-300 مع إزاحة 2px من globals.css مباشرة:",
    },
    {
      kind: "buttonDemo",
      variant: "states",
      label: "زر واحد وأربع لحظات",
      note: "التحويم والتعطيل والتركيز حيّة — تنقّل بين النماذج بلوحة المفاتيح. صف التركيز يثبّت الحلقة ساكنة للمرجع.",
      tags: ["السكون", "التحويم · brand-200 #69A2E5 (أساسي)", "معطّل · opacity-40 · غير مسموح", "تركيز لوحة المفاتيح · 2px brand + إزاحة 2px"],
      tAction: "اطلب عرض سعر",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "المعطّل يفسّر نفسه.",
          text: "الزر المعطّل لا يقف وحده أبدًا — يُبقي تسميته ظاهرة عند 40% والنص المحيط يقول لماذا وما الذي يفتحه. لا تلميحات كأعذار ولا اختفاء.",
        },
        {
          strong: "التركيز لا يُزال أبدًا.",
          text: "حلقة الـ2px مع إزاحة 2px هي مؤشر مستخدم لوحة المفاتيح — إعادة تصميمها مسموحة وإزالتها ليست كذلك. كل نوع يأخذ الحلقة نفسها بما فيها الشبحي والمدمّر.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "حالات تحويم تبشّر بالنقرة — أفتح لا أغمق للأساسي.",
        "المعطّل عند opacity-40 مع السبب في نص قريب.",
        "حلقة التركيز 2px + 2px على كل نوع.",
      ],
      dontItems: [
        "أزرار معطّلة دون تفسير في أي مكان.",
        "outline-none دون حلقة بديلة.",
        "دوارات التحميل داخل الزر — راجع Feedback.",
      ],
    },
    { kind: "heading", id: "icons", number: "04", title: "الأيقونات في الأزرار — Icons in Buttons" },
    {
      kind: "paragraph",
      text: "الإنتاج لا يشحن قاعدة أيقونات — فهذا القسم مخترَع كله من أساسَي الأيقونات والـRTL. الأيقونات البادئة تتصرّف (Add01 + «اطلب عرض سعر»)؛ والاتجاهية اللاحقة تتحرك («اعرف المزيد» + سهم)؛ والمربعات تقف وحدها. حرف واحد لكل زر دائمًا 20px وstrokeWidth 1.5 وcurrentColor دائمًا:",
    },
    {
      kind: "buttonDemo",
      variant: "icons",
      label: "حروف بجوازات سفر",
      note: "قسم مخترَع. الحروف الاتجاهية تنعكس في RTL؛ والزائد يبقى مكانه. شريط الـRTL يعرض القاعدتين حيًّا.",
      tags: ["بادئة · غير الاتجاهية تبقى", "لاحقة · اتجاهية · LTR", "RTL · الاتجاهية تنعكس · غير الاتجاهية تبقى"],
      tAction: "اطلب عرض سعر",
      tMore: "اعرف المزيد",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "الاتجاهي ينعكس والوظيفي يبقى.",
          text: "الأسهم والشيفرونات وحروف «المزيد» تنقلب في RTL — فهي تشير حيث يذهب القارئ. وحروف الزائد والتنزيل والإغلاق والحالة لا تنقلب أبدًا — فهي تعني لا تشير.",
        },
        {
          strong: "الأيقوني وحده ملاذ أخير بتسمية من الدرجة الأولى.",
          text: "الزر المربع يحمل دائمًا aria-label بلغة القارئ — يُرى الحرف ويُنطَق الاسم. حرفان في زر واحد جملة؛ أعد كتابة التسمية بدلًا من ذلك.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "حرف HugeIcon واحد 20px لكل زر بـcurrentColor.",
        "اعكس الحروف الاتجاهية في RTL وجمّد الوظيفية.",
        "aria-label على كل مربع أيقوني.",
      ],
      dontItems: [
        "حرفان في زر واحد.",
        "حروف الزائد/التنزيل/الإغلاق معكوسة.",
        "مربعات أيقونية دون اسم ميسّر.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "components/core-ui/buttons",
  accent: "#0071e3",
  hero: {
    title: "Boutons",
    intro:
      "Les boutons sont la seule voix qui demande quelque chose. Trois variantes sont livrées en production — chaque classe ci-dessous est mot à mot depuis Button.tsx — et cette page ajoute les deux règles que la production n'a jamais écrites : un traitement destructif et les icônes dans les boutons. Les lignes marquées inventées sont des ajouts du guide pour les projets futurs ; tout le reste est livré aujourd'hui.",
  },
  sections: [
    { kind: "heading", id: "variants", number: "01", title: "Variantes" },
    {
      kind: "paragraph",
      text: "Un rôle chacun. Le primaire conclut — CTA héros, envoi du formulaire de devis. Le secondaire propose — l'alternative à côté du primaire. Le fantôme se retire — actions discrètes dans les mises en page denses. Les trois partagent la base : inline-flex items-center justify-center tracking-wide transition-colors duration-150, angles nets, voix Plex :",
    },
    {
      kind: "buttonDemo",
      variant: "variants",
      label: "Les trois livrées, plus celle qu'on ajoute",
      note: "Primaire, secondaire, fantôme : Button.tsx mot à mot. Destructif : INVENTÉ — contour rouge reflétant la logique du secondaire, rouge erreur #BE123C depuis la sémantique couleur.",
      tags: ["primaire · plein · gras", "secondaire · contour · semi-gras", "fantôme · texte seul · semi-gras", "destructif · contour rouge INVENTÉ"],
      tAction: "Demander un devis",
      tDelete: "Supprimer l'enregistrement",
      tAdd: "Ajouter",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Le primaire est singulier.",
          text: "Un primaire par vue — la seule chose que la page veut. Un second primaire est une seconde promesse ; rétrogradez-le en secondaire.",
        },
        {
          strong: "Le destructif est toujours le contour rouge — jamais de rouge plein par défaut.",
          text: "La destruction doit sembler réversible jusqu'à l'engagement : contour au repos, remplissage plein au survol seulement. Le destructif ne partage jamais une ligne avec le primaire ; il se tient à part, dernier, seul.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Primaire pour l'unique action de conclusion par vue.",
        "Secondaire pour l'alternative sûre à côté.",
        "Contour destructif pour les actes irréversibles — à part, dernier.",
      ],
      dontItems: [
        "Deux primaires en concurrence dans une vue.",
        "Fantôme comme seule action d'une page — il n'a aucune présence.",
        "Boutons rouges pleins comme état de repos.",
      ],
    },
    { kind: "heading", id: "sizes", number: "02", title: "Tailles" },
    {
      kind: "paragraph",
      text: "Trois hauteurs livrées — sm h-8 px-4 text-xs, md h-10 px-5 text-sm, lg h-12 px-7 text-base — et md est le défaut sur lequel le composant lui-même retombe. Les compagnons carrés icône-seule sont inventés, un carré par hauteur :",
    },
    {
      kind: "buttonDemo",
      variant: "sizes",
      label: "Hauteurs en taille réelle",
      note: "sm / md / lg : Button.tsx mot à mot, rendus à hauteur réelle. Carrés 32/40/48 : compagnons INVENTÉS — mêmes hauteurs, zéro padding horizontal, glyphe 20px.",
      tags: ["sm · h-8 · px-4 · xs", "md · h-10 · px-5 · sm — défaut", "lg · h-12 · px-7 · base — héros + formulaire", "icône-seule · carré 32/40/48 · INVENTÉ"],
      tAction: "Demander un devis",
      tAdd: "Ajouter",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Le lg se mérite, il ne décore pas.",
          text: "Promesses héros et envois de formulaires prennent lg ; tout ce qui est inline — lignes de tableau, pieds de carte, barres de nav — reste md ou sm. Un grand bouton ne décore jamais, il conclut.",
        },
        {
          strong: "Le tactile ne descend jamais sous 32.",
          text: "Les 32px de sm sont le plancher — en dessous, ce n'est plus un bouton mais un lien. Les carrés icône-seule gardent toute la zone de frappe 32/40/48 ; le glyphe rétrécit, la cible jamais.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "md partout sauf si l'action conclut la page.",
        "lg pour CTA héros et envois de formulaires uniquement.",
        "Carrés icône-seule à pleine hauteur — glyphe 20px dedans.",
      ],
      dontItems: [
        "Boutons sm pour les actions principales de page.",
        "Hauteurs entre barreaux (36px, 44px « c'est mieux »).",
        "Boutons icône-seule sous 32px.",
      ],
    },
    { kind: "heading", id: "states", number: "03", title: "États" },
    {
      kind: "paragraph",
      text: "Quatre états, sans surprises. Le survol éclaircit le primaire vers brand-200 ; désactivé verrouille à opacity-40 avec cursor-not-allowed ; le focus-visible dessine l'anneau global — 2px solid brand-300 avec offset 2px, direct depuis globals.css :",
    },
    {
      kind: "buttonDemo",
      variant: "states",
      label: "Un bouton, quatre moments",
      note: "Survol, désactivé et focus sont en direct — naviguez au clavier entre les spécimens. La ligne focus fige l'anneau pour référence.",
      tags: ["repos", "survol · brand-200 #69A2E5 (primaire)", "désactivé · opacity-40 · not-allowed", "focus-visible · 2px brand + offset 2px"],
      tAction: "Demander un devis",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Désactivé s'explique.",
          text: "Un bouton désactivé ne se tient jamais seul — il garde son libellé visible à 40 % et la copie autour dit pourquoi et ce qui débloque. Ni infobulles-excuses, ni disparition.",
        },
        {
          strong: "Le focus ne se retire jamais.",
          text: "L'anneau 2px avec offset 2px est le curseur de l'utilisateur clavier — le restyler est permis, le retirer ne l'est pas. Chaque variante, fantôme et destructif inclus, prend le même anneau.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Survols qui annoncent le clic — plus clair, jamais plus sombre, pour le primaire.",
        "Désactivé à opacity-40 avec la raison dans la copie proche.",
        "L'anneau 2px + 2px sur chaque variante.",
      ],
      dontItems: [
        "Boutons désactivés sans explication nulle part.",
        "outline-none sans anneau de remplacement.",
        "Spinners de chargement dans le bouton — voir Feedback.",
      ],
    },
    { kind: "heading", id: "icons", number: "04", title: "Icônes dans les boutons" },
    {
      kind: "paragraph",
      text: "La production ne livre aucune règle d'icônes — cette section est donc inventée entière, depuis les fondations icônes et RTL. Les icônes d'attaque agissent (Add01 + « Demander un devis ») ; les directionnelles de fuite bougent (« En savoir plus » + flèche) ; les carrés se tiennent seuls. Un glyphe par bouton, toujours 20px, toujours strokeWidth 1.5, toujours currentColor :",
    },
    {
      kind: "buttonDemo",
      variant: "icons",
      label: "Glyphes avec passeports",
      note: "Section INVENTÉE. Les glyphes directionnels se reflètent en RTL ; le plus reste en place. La bande RTL montre les deux règles en direct.",
      tags: ["attaque · non-directionnelle reste", "fuite · directionnelle · LTR", "RTL · directionnelles reflétées · fonctionnelles fixes"],
      tAction: "Demander un devis",
      tMore: "En savoir plus",
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Le directionnel se reflète, le fonctionnel reste.",
          text: "Flèches, chevrons et glyphes « suite » se retournent en RTL — ils pointent où va le lecteur. Plus, téléchargement, fermeture et glyphes de statut ne se retournent jamais — ils signifient, ils ne pointent pas.",
        },
        {
          strong: "L'icône-seule est un dernier recours avec un libellé de premier ordre.",
          text: "Un bouton carré porte toujours un aria-label dans la langue du lecteur — le glyphe se voit, le libellé se dit. Deux icônes dans un bouton, c'est une phrase ; réécrivez le libellé plutôt.",
        },
      ],
    },
    {
      kind: "dodont",
      doItems: [
        "Un HugeIcon 20px par bouton, en currentColor.",
        "Refléter les glyphes directionnels en RTL ; figer les fonctionnels.",
        "aria-label sur chaque carré icône-seule.",
      ],
      dontItems: [
        "Deux glyphes dans un bouton.",
        "Icônes plus/téléchargement/fermeture reflétées.",
        "Carrés icône-seule sans nom accessible.",
      ],
    },
  ],
};

export const buttons: Localized<PageData> = { ar, en, fr };
