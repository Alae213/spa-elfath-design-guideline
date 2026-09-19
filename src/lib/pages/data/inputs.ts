import type { Localized, PageData, Section } from "@/lib/pages/types";

// ─────────────────────────────────────────────────────────────────────────────
// Inputs — production truth: QuoteForm.tsx + ProductsGrid/NewsListing/
// ProjectsGrid search boxes. Inventions, all tagged: focus ring pairing,
// error border, disabled field, select chevron, optional suffix.
// ─────────────────────────────────────────────────────────────────────────────

const enA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "Anatomy" },
  {
    kind: "paragraph",
    text: "Every field is one wrapping label with three stacked parts — flex flex-col gap-1.5: a text-xs font-semibold text-system-500 label, the control, and a message slot that stays empty at rest. Because the label wraps the control, clicking the label focuses the field for free. Verbatim from QuoteForm.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "anatomy",
    label: "One label, three jobs",
    tags: ["label · xs · semibold", "error message · text-xs · red-600", "optional suffix · INVENTED"],
    tError: "Name is required",
    note: "Label, control, message slot: QuoteForm.tsx verbatim — the <label> wraps the control so clicks focus the field. Optional suffix: INVENTED — a muted '· optional' inside the label, never a separate line.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "The label is the contract.",
        text: "Every control carries a visible label — the placeholder is never the label. Placeholders vanish on input; labels don't. The message slot stays silent at rest and speaks only when there is something to say.",
      },
      {
        strong: "Required is silence; optional is a whisper.",
        text: "Required fields carry no marker — required is the default state of a form. An optional field gets a muted '· optional' suffix in the label, invented for the guideline. Never asterisk forests, never a legend block.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Wrap every control in a visible label.",
      "Placeholders that show format, never replace the label.",
      "Optional marked with a muted suffix inside the label.",
    ],
    dontItems: [
      "Placeholder-only fields.",
      "Asterisk forests for required fields.",
      "Labels below the field or floating on the border.",
    ],
  },
  { kind: "heading", id: "types", number: "02", title: "Field types" },
  {
    kind: "paragraph",
    text: "Four controls ship, one skin. Text, search, textarea and native select share the same voice — border-system-200 #ECE8E4, bg-system-50 #FAF8F6, text-sm text-system-500 #1F1F1F, placeholder:text-system-400 #737373 — and heights split by job: h-10 for form fields, h-9 for the compact search box. Verbatim from QuoteForm.tsx and ProductsGrid.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "types",
    label: "One skin, five fields",
    tags: [
      "text · h-10 · px-3",
      "search · h-9 · ps-9 · icon start-3",
      "textarea · rows=4 · p-3 · leading-6",
      "select · native · chevron INVENTED",
      "phone · dir=ltr · inputMode=tel",
    ],
    tSearch: "Search products…",
    note: "Text / textarea / select: QuoteForm.tsx verbatim. Search: ProductsGrid.tsx verbatim — 16px magnifier at start-3, type=search, sr-only label in the guideline reading. The select's 16px chevron: INVENTED — production ships the native arrow; adopt the glyph in custom select builds. dir=ltr + inputMode=tel on phone: verbatim.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Search is a different rung.",
        text: "The grid search box is h-9 with a 16px icon in the start gutter — a compact, tool-grade field with three siblings (products, projects, news). Form fields stay h-10. The two rungs coexist by design; never average them.",
      },
      {
        strong: "Select stays native.",
        text: "Production uses the OS <select> — 58 wilayas, then sectors, then products, headed by an empty placeholder option. Native pickers are keyboard-perfect and mobile-perfect; go custom only when a real tree or search-inside-select is needed.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "h-10 for form fields, h-9 for toolbar search.",
      "type=search with a 16px icon in the start gutter.",
      "Native select headed by an empty placeholder option.",
    ],
    dontItems: [
      "Custom dropdowns without a reason.",
      "Search boxes taller than form fields.",
      "Selects without a placeholder option.",
    ],
  },
];

const enB: Section[] = [
  { kind: "heading", id: "states", number: "03", title: "States & validation" },
  {
    kind: "paragraph",
    text: "Production validates after the attempt. The form carries noValidate and JavaScript checks — phone /^\\+?[0-9\\s\\-()]{8,20}$/, email /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ — so nothing is ever wrong before the user has tried. Errors arrive as text-xs text-red-600 #DC2626 under the field. Focus pairs production's border with the global ring — focus:border-brand-300 #1D65AF + focus:bg-white, plus the 2px brand ring from globals.css:",
  },
  {
    kind: "inputDemo",
    variant: "states",
    label: "One field, four moments",
    tags: [
      "filled · system-50 floor",
      "focus · border-brand-300 + 2px ring — both",
      "error · red border INVENTED + message",
      "disabled · INVENTED · opacity-50 · system-100",
    ],
    tLabel: "Phone",
    tError: "Enter a valid phone number",
    note: "Filled and error message: verbatim. Red border: INVENTED — production recolors only the text; the guideline pairs border and message from one red #DC2626. Disabled: INVENTED — opacity-50, not-allowed, system-100 floor. Focus: production border + background AND the global 2px ring — the guideline pairs them; production gets a one-line migration note.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Errors arrive after the attempt.",
        text: "Validation runs on submit, not per keystroke — noValidate plus JS regexes. A field the user hasn't touched is never marked wrong, and the message names the fix: 'Enter a valid phone number', not 'Invalid input'. Errors clear as the user types.",
      },
      {
        strong: "One red, spoken twice.",
        text: "The guideline pairs the red border with the red message — both from #DC2626, the single error source. The field never shakes, never pulses; the message slot it was born with is the only channel.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Validate on submit; messages under the field.",
      "Red border + red message from one red #DC2626.",
      "Disabled at opacity-50 with the reason in nearby copy.",
    ],
    dontItems: [
      "Inline errors before the first submit.",
      "Color-only errors with no text.",
      "Shaking or pulsing fields.",
    ],
  },
  { kind: "heading", id: "rtl", number: "04", title: "Directionality" },
  {
    kind: "paragraph",
    text: "The form is trilingual and the fields know it. Phone and email are pinned dir=\"ltr\" inside the RTL layout — numbers and addresses read one way in any language — while labels, placeholders, textareas and search boxes mirror naturally through logical paddings (ps-9, start-3). Verbatim from QuoteForm.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "rtl",
    label: "Data pins, chrome mirrors",
    tags: ["RTL · label right · paddings mirror", "numbers · dir=ltr pinned"],
    tLabel: "Message",
    note: "QuoteForm.tsx verbatim: dir=ltr on phone and email so +213 numbers never scramble. Error messages localize; their slot mirrors with the field. Logical utilities (ps/pe, start/end) make every field mirror with zero overrides.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Data has one direction; language has another.",
        text: "Phone numbers, emails and serial codes pin dir=ltr even in Arabic — they are data, not prose. Labels, placeholders and messages follow the page language and mirror with the layout.",
      },
      {
        strong: "Logical properties, never left and right.",
        text: "ps-9, start-3, ms-2 — the field vocabulary is already logical, which is why the same classes mirror without a single RTL override. Hardcoding pl/pr on a field breaks the mirror forever.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "dir=ltr on phone, email and code fields.",
      "start/ps logical utilities for icon gutters.",
      "Localized error messages in the mirrored slot.",
    ],
    dontItems: [
      "dir=ltr forgotten on phone or email.",
      "Physical pl/pr classes on fields.",
      "Centering field text in RTL as a 'fix'.",
    ],
  },
];

const en: PageData = {
  slug: "components/core-ui/inputs",
  accent: "#5ac8fa",
  hero: {
    title: "Inputs",
    intro:
      "Inputs are the voice that answers. Everything here is verbatim from production — the quote form's field skin, the grid search box, the label and error voice — plus the states production never wrote: the focus pairing, the error border, the disabled field. Rows tagged invented are guideline additions for future projects; everything else ships today.",
  },
  sections: [...enA, ...enB],
};

const arA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "التشريح" },
  {
    kind: "paragraph",
    text: "كل حقل عبارة عن ملصق واحد يلف ثلاث طبقات — flex flex-col gap-1.5: ملصق text-xs font-semibold text-system-500، ثم الحقل نفسه، ثم خانة رسالة تبقى صامتة في الوضع العادي. ولأن الملصق يلف الحقل، فالنقر عليه ينقل التركيز مجانًا. منسوخ حرفيًا من QuoteForm.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "anatomy",
    label: "ملصق واحد، ثلاث وظائف",
    tags: ["label · xs · semibold", "error message · text-xs · red-600", "optional suffix · INVENTED"],
    tLabel: "الاسم الكامل",
    tPlaceholder: "اكتب هنا",
    tError: "الاسم مطلوب",
    tOptional: "الشركة",
    tOptionalWord: "اختياري",
    note: "الملصق والحقل وخانة الرسالة: QuoteForm.tsx حرفيًا — الملصق يلف الحقل فالنقر عليه يركّزه. لاحقة «اختياري»: مبتكرَة — صامتة داخل الملصق، لا سطر منفصل.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الملصق هو العقد.",
        text: "كل حقل يحمل ملصقًا ظاهرًا — الموضع النائب ليس ملصقًا أبدًا. النائب يختفي مع الكتابة؛ الملصق لا يختفي. خانة الرسالة صامتة في الوضع العادي وتتكلم فقط عندما يكون هناك ما يُقال.",
      },
      {
        strong: "الإلزام هو الصمت؛ والاختيارية همس.",
        text: "الحقول الإلزامية بلا علامة — الإلزام هو الوضع الافتراضي للنموذج. الحقل الاختياري يأخذ لاحقة «اختياري» خافتة داخل الملصق، مبتكرَة لهذا الدليل. لا غابات من النجوم، ولا مفتاح أسفلي.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "لفّ كل حقل بملصق ظاهر.",
      "الموضع النائب يوضّح الصيغة ولا يعوّض الملصق.",
      "الاختيارية بل suffix خافت داخل الملصق.",
    ],
    dontItems: [
      "حقول بموضع نائب فقط.",
      "غابة نجوم للحقول الإلزامية.",
      "ملصق أسفل الحقل أو عائم على الحد.",
    ],
  },
  { kind: "heading", id: "types", number: "02", title: "أنواع الحقول" },
  {
    kind: "paragraph",
    text: "أربعة عناصر، قشرة واحدة. النص والبحث والمنطقة والقائمة تشترك بصوت واحد — border-system-200 #ECE8E4، bg-system-50 #FAF8F6، text-sm text-system-500 #1F1F1F، placeholder:text-system-400 #737373 — والارتفاعات تتبع المهمة: h-10 لحقول النموذج، h-9 لصندوق البحث المدمج. منسوخ من QuoteForm.tsx وProductsGrid.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "types",
    label: "قشرة واحدة، خمسة حقول",
    tags: [
      "text · h-10 · px-3",
      "search · h-9 · ps-9 · icon start-3",
      "textarea · rows=4 · p-3 · leading-6",
      "select · native · chevron INVENTED",
      "phone · dir=ltr · inputMode=tel",
    ],
    tLabel: "الاسم الكامل",
    tPlaceholder: "اكتب هنا",
    tSearch: "ابحث في المنتجات…",
    tMessage: "الرسالة",
    tAreaPlaceholder: "أخبرنا بالمزيد",
    tWilaya: "الولاية",
    tSelectPlaceholder: "اختر ولاية",
    tPhone: "الهاتف",
    note: "النص والمنطقة والقائمة: QuoteForm.tsx حرفيًا. البحث: ProductsGrid.tsx حرفيًا — عدسة 16px عند start-3 وtype=search وملصق sr-only. سهم القائمة: مبتكرَة — الإنتاج يعرض السهم الأصلي؛ تبنّى الرمز في القوائم المخصصة. dir=ltr وinputMode=tel للهاتف: حرفيًا.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "البحث درجة مختلفة.",
        text: "صندوق بحث الشبكة بارتفاع h-9 مع عدسة 16px في هوامش البداية — حقل مدمج من أدوات، بثلاثة إخوة (المنتجات، المشاريع، الأخبار). حقول النماذج تبقى h-10. الدرجتان تتعايشان بالتصميم؛ لا تُوَحِّدهما أبدًا.",
      },
      {
        strong: "القائمة تبقى أصلية.",
        text: "الإنتاج يستخدم select النظام — 58 ولاية ثم القطاعات ثم المنتجات، ويفتتحها خيار نائب فارغ. القوائم الأصلية مثالية بلوحة المفاتيح والهاتف؛ اذهب للقوائم المخصصة فقط عند الحاجة لشجرة حقيقية أو بحث داخل القائمة.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "h-10 لحقول النموذج، h-9 لبحث الأدوات.",
      "type=search مع عدسة 16px في هوامش البداية.",
      "قائمة أصلية يفتتحها خيار نائب فارغ.",
    ],
    dontItems: [
      "قوائم مخصصة بلا مبرر.",
      "بحث أعلى من حقول النموذج.",
      "قائمة بلا خيار نائب.",
    ],
  },
];

const arB: Section[] = [
  { kind: "heading", id: "states", number: "03", title: "الحالات والتحقق" },
  {
    kind: "paragraph",
    text: "الإنتاج يتحقق بعد المحاولة. النموذج يحمل noValidate وتحقق جافاسكربت — الهاتف /^\\+?[0-9\\s\\-()]{8,20}$/، البريد /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ — فلا شيء يكون خاطئًا قبل أن يحاول المستخدم. الأخطاء تصل كـ text-xs text-red-600 #DC2626 أسفل الحقل. التركيز يقرن حدّ الإنتاج بالحلقة العامة — focus:border-brand-300 #1D65AF + focus:bg-white، مع حلقة العلامة 2px من globals.css:",
  },
  {
    kind: "inputDemo",
    variant: "states",
    label: "حقل واحد، أربع لحظات",
    tags: [
      "filled · system-50 floor",
      "focus · border-brand-300 + 2px ring — both",
      "error · red border INVENTED + message",
      "disabled · INVENTED · opacity-50 · system-100",
    ],
    tLabel: "الهاتف",
    tError: "أدخل رقم هاتف صحيحًا",
    note: "المملوء ورسالة الخطأ: حرفيًا. الحد الأحمر: مبتكرَة — الإنتاج يلوّن النص فقط؛ الدليل يقرن الحد والرسالة من أحمر واحد #DC2626. المعطّل: مبتكرَة — opacity-50 وnot-allowed وأرضية system-100. التركيز: حدّ الإنتاج وخلفيته مع الحلقة 2px العامة — الدليل يقرنهما؛ الإنتاج يحصل على ملاحظة ترحيل من سطر واحد.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الأخطاء تصل بعد المحاولة.",
        text: "التحقق عند الإرسال لا مع كل ضغطة — noValidate مع تعابير نمطية. الحقل الذي لم يلمسه المستخدم لا يُعلَّم خاطئًا أبدًا، والرسالة تسمّي الإصلاح: «أدخل رقم هاتف صحيحًا» لا «إدخال غير صالح». الأخطاء تمحى مع الكتابة.",
      },
      {
        strong: "أحمر واحد يُنطق مرتين.",
        text: "الدليل يقرن الحد الأحمر بالرسالة الحمراء — كلاهما من #DC2626، مصدر الخطأ الوحيد. الحقل لا يهتز ولا يومض؛ خانة الرسالة التي وُلد بها هي القناة الوحيدة.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "التحقق عند الإرسال؛ الرسائل أسفل الحقل.",
      "حد أحمر + رسالة حمراء من أحمر واحد #DC2626.",
      "المعطّل بـ opacity-50 مع السبب في نص قريب.",
    ],
    dontItems: [
      "أخطاء فورية قبل أول إرسال.",
      "أخطاء باللون فقط بلا نص.",
      "حقول تهتز أو تومض.",
    ],
  },
  { kind: "heading", id: "rtl", number: "04", title: "الاتجاهية" },
  {
    kind: "paragraph",
    text: "النموذج ثلاثي اللغة وحقوله تعرف ذلك. الهاتف والبريد مثبّتان بـ dir=\"ltr\" داخل التخطيط RTL — الأرقام والعناوين تُقرأ بطريقة واحدة بأي لغة — بينما الملصقات والنوابض والمناطق وصناديق البحث تنعكس طبيعيًا عبر الهوامش المنطقية (ps-9، start-3). منسوخ من QuoteForm.tsx:",
  },
  {
    kind: "inputDemo",
    variant: "rtl",
    label: "البيانات تثبت، والإطار ينعكس",
    tags: ["RTL · label right · paddings mirror", "numbers · dir=ltr pinned"],
    tLabel: "الرسالة",
    tMessage: "أخبرنا بالمزيد",
    tPhone: "الهاتف",
    note: "QuoteForm.tsx حرفيًا: dir=ltr على الهاتف والبريد فلا تتشوّه أرقام +213. رسائل الخطأ تُترجم؛ خانتها تنعكس مع الحقل. الأدوات المنطقية (ps/pe، start/end) تجعل كل حقل ينعكس بلا أي تجاوزات.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "للبيانات اتجاه واحد؛ وللغة آخر.",
        text: "أرقام الهاتف والبريد والرموز تثبَّت بـ dir=ltr حتى في العربية — فهي بيانات لا نثر. الملصقات والنوابض والرسائل تتبع لغة الصفحة وتنعكس مع التخطيط.",
      },
      {
        strong: "خصائص منطقية، لا يمينًا ولا يسارًا.",
        text: "ps-9، start-3، ms-2 — مفردات الحقل منطقية أصلًا، ولهذا تنعكس نفس الأصناف بلا أي تجاوز RTL. ترميز pl/pr على حقل يكسر الانعكاس إلى الأبد.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "dir=ltr على الهاتف والبريد ورموز الكود.",
      "أدوات start/ps المنطقية لهوامش الأيقونات.",
      "رسائل خطأ مترجمة في الخانة المنعكسة.",
    ],
    dontItems: [
      "نسيان dir=ltr على الهاتف أو البريد.",
      "أصناف فيزيائية pl/pr على الحقول.",
      "توسيط نص الحقل في RTL كـ«إصلاح».",
    ],
  },
];

const ar: PageData = {
  slug: "components/core-ui/inputs",
  accent: "#5ac8fa",
  hero: {
    title: "الحقول",
    intro:
      "الحقول هي الصوت الذي يجيب. كل شيء هنا منسوخ حرفيًا من الإنتاج — قشرة حقول نموذج الطلب، صندوق بحث الشبكة، صوت الملصق والخطأ — إضافة إلى الحالات التي لم يكتبها الإنتاج: اقتران التركيز، الحد الأحمر، الحقل المعطّل. الصفوف المعلّمة «مبتكرَة» إضافات للدليل تخص المشاريع القادمة؛ وكل ما عداها يعمل اليوم.",
  },
  sections: [...arA, ...arB],
};

const frA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "Anatomie" },
  {
    kind: "paragraph",
    text: "Chaque champ est un label englobant à trois étages — flex flex-col gap-1.5 : un label text-xs font-semibold text-system-500, le contrôle, puis un slot de message silencieux au repos. Comme le label englobe le contrôle, un clic dessus focus le champ gratuitement. Copié de QuoteForm.tsx :",
  },
  {
    kind: "inputDemo",
    variant: "anatomy",
    label: "Un label, trois rôles",
    tags: ["label · xs · semibold", "error message · text-xs · red-600", "optional suffix · INVENTED"],
    tLabel: "Nom complet",
    tPlaceholder: "Votre réponse",
    tError: "Le nom est requis",
    tOptional: "Société",
    tOptionalWord: "optionnel",
    note: "Label, contrôle, slot de message : QuoteForm.tsx verbatim — le <label> englobe le contrôle, cliquer le focus. Suffixe « optionnel » : INVENTÉ — discret, dans le label, jamais une ligne séparée.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Le label est le contrat.",
        text: "Tout contrôle porte un label visible — le placeholder n'est jamais le label. Le placeholder disparaît à la saisie ; le label non. Le slot de message reste muet au repos et ne parle que s'il a quelque chose à dire.",
      },
      {
        strong: "Le requis se tait ; l'optionnel murmure.",
        text: "Les champs requis ne portent aucune marque — le requis est l'état par défaut d'un formulaire. Un champ optionnel gagne un suffixe « optionnel » discret dans le label, inventé pour ce guide. Jamais de forêt d'astérisques, jamais de légende en pied.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Englober chaque contrôle d'un label visible.",
      "Placeholders qui montrent le format, jamais à la place du label.",
      "Optionnel marqué d'un suffixe discret dans le label.",
    ],
    dontItems: [
      "Champs à placeholder seul.",
      "Forêt d'astérisques pour les requis.",
      "Label sous le champ ou flottant sur la bordure.",
    ],
  },
  { kind: "heading", id: "types", number: "02", title: "Types de champs" },
  {
    kind: "paragraph",
    text: "Quatre contrôles, une peau. Texte, recherche, textarea et select natif partagent la même voix — border-system-200 #ECE8E4, bg-system-50 #FAF8F6, text-sm text-system-500 #1F1F1F, placeholder:text-system-400 #737373 — et la hauteur suit le métier : h-10 pour les champs de formulaire, h-9 pour la recherche compacte. Copié de QuoteForm.tsx et ProductsGrid.tsx :",
  },
  {
    kind: "inputDemo",
    variant: "types",
    label: "Une peau, cinq champs",
    tags: [
      "text · h-10 · px-3",
      "search · h-9 · ps-9 · icon start-3",
      "textarea · rows=4 · p-3 · leading-6",
      "select · native · chevron INVENTED",
      "phone · dir=ltr · inputMode=tel",
    ],
    tLabel: "Nom complet",
    tPlaceholder: "Votre réponse",
    tSearch: "Rechercher des produits…",
    tMessage: "Message",
    tAreaPlaceholder: "Dites-nous en plus",
    tWilaya: "Wilaya",
    tSelectPlaceholder: "Choisir une wilaya",
    tPhone: "Téléphone",
    note: "Texte / textarea / select : QuoteForm.tsx verbatim. Recherche : ProductsGrid.tsx verbatim — loupe 16px à start-3, type=search, label sr-only dans la lecture du guide. Chevron du select : INVENTÉ — la prod affiche la flèche native ; adopter le glyphe dans les builds custom. dir=ltr + inputMode=tel sur le téléphone : verbatim.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "La recherche est un autre cran.",
        text: "La boîte de recherche des grilles fait h-9 avec une loupe 16px dans la gouttière de départ — un champ compact, outil, en trois exemplaires (produits, projets, actualités). Les champs de formulaire restent h-10. Les deux crans coexistent par design ; ne les unissez jamais.",
      },
      {
        strong: "Le select reste natif.",
        text: "La prod utilise le <select> du système — 58 wilayas, puis secteurs, puis produits, ouvertes par une option placeholder vide. Les pickers natifs sont parfaits au clavier comme au mobile ; passer au custom seulement pour un vrai arbre ou une recherche dans la liste.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "h-10 pour les formulaires, h-9 pour la recherche.",
      "type=search avec une loupe 16px en gouttière de départ.",
      "Select natif ouvert par une option placeholder vide.",
    ],
    dontItems: [
      "Dropdowns custom sans raison.",
      "Recherche plus haute que les champs.",
      "Select sans option placeholder.",
    ],
  },
];

const frB: Section[] = [
  { kind: "heading", id: "states", number: "03", title: "États & validation" },
  {
    kind: "paragraph",
    text: "La prod valide après la tentative. Le formulaire porte noValidate et des checks JS — téléphone /^\\+?[0-9\\s\\-()]{8,20}$/, email /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ — donc rien n'est jamais faux avant que l'utilisateur n'essaie. Les erreurs arrivent en text-xs text-red-600 #DC2626 sous le champ. Le focus marie la bordure de prod à l'anneau global — focus:border-brand-300 #1D65AF + focus:bg-white, plus l'anneau 2px de globals.css :",
  },
  {
    kind: "inputDemo",
    variant: "states",
    label: "Un champ, quatre moments",
    tags: [
      "filled · system-50 floor",
      "focus · border-brand-300 + 2px ring — both",
      "error · red border INVENTED + message",
      "disabled · INVENTED · opacity-50 · system-100",
    ],
    tLabel: "Téléphone",
    tError: "Saisissez un numéro valide",
    note: "Rempli et message d'erreur : verbatim. Bordure rouge : INVENTÉE — la prod ne recolore que le texte ; le guide marie bordure et message d'un même rouge #DC2626. Désactivé : INVENTÉ — opacity-50, not-allowed, plancher system-100. Focus : bordure + fond de prod ET l'anneau global 2px — le guide les marie ; la prod reçoit une note de migration d'une ligne.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Les erreurs arrivent après la tentative.",
        text: "La validation tourne au submit, pas à chaque frappe — noValidate plus regexes JS. Un champ jamais touché n'est jamais marqué faux, et le message nomme le remède : « Saisissez un numéro valide », pas « Entrée invalide ». Les erreurs s'effacent à la saisie.",
      },
      {
        strong: "Un rouge, prononcé deux fois.",
        text: "Le guide marie la bordure rouge au message rouge — tous deux issus de #DC2626, l'unique source d'erreur. Le champ ne tremble jamais, ne pulse jamais ; le slot de message qui l'a vu naître est le seul canal.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Valider au submit ; messages sous le champ.",
      "Bordure rouge + message rouge d'un même #DC2626.",
      "Désactivé à opacity-50 avec la raison à proximité.",
    ],
    dontItems: [
      "Erreurs inline avant le premier submit.",
      "Erreurs couleur seule sans texte.",
      "Champs qui tremblent ou pulsent.",
    ],
  },
  { kind: "heading", id: "rtl", number: "04", title: "Directionnalité" },
  {
    kind: "paragraph",
    text: "Le formulaire est trilingue et ses champs le savent. Téléphone et email sont épinglés dir=\"ltr\" dans la mise en page RTL — nombres et adresses se lisent d'une seule façon dans toutes les langues — tandis que labels, placeholders, textareas et recherches se miroir naturellement via les paddings logiques (ps-9, start-3). Copié de QuoteForm.tsx :",
  },
  {
    kind: "inputDemo",
    variant: "rtl",
    label: "Les données s'épinglent, l'habillage se miroite",
    tags: ["RTL · label right · paddings mirror", "numbers · dir=ltr pinned"],
    tLabel: "Message",
    tMessage: "Dites-nous en plus",
    tPhone: "Téléphone",
    note: "QuoteForm.tsx verbatim : dir=ltr sur téléphone et email pour que les +213 ne se brouillent jamais. Les messages d'erreur se traduisent ; leur slot se miroite avec le champ. Les utilitaires logiques (ps/pe, start/end) font que chaque champ se miroite sans un seul override.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "La donnée a un sens ; la langue a le sien.",
        text: "Téléphones, emails et codes série s'épinglent dir=ltr même en arabe — ce sont des données, pas de la prose. Labels, placeholders et messages suivent la langue de la page et se miroitent avec la mise en page.",
      },
      {
        strong: "Propriétés logiques, jamais gauche ni droite.",
        text: "ps-9, start-3, ms-2 — le vocabulaire du champ est déjà logique, c'est pourquoi les mêmes classes se miroitent sans aucun override RTL. coder pl/pr sur un champ brise le miroir pour toujours.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "dir=ltr sur téléphone, email et champs de code.",
      "Utilitaires logiques start/ps pour les gouttières d'icônes.",
      "Messages d'erreur traduits dans le slot miroité.",
    ],
    dontItems: [
      "Oublier dir=ltr sur téléphone ou email.",
      "Classes physiques pl/pr sur les champs.",
      "Centrer le texte du champ en RTL comme « fix ».",
    ],
  },
];

const fr: PageData = {
  slug: "components/core-ui/inputs",
  accent: "#5ac8fa",
  hero: {
    title: "Champs de saisie",
    intro:
      "Les champs sont la voix qui répond. Tout ici est copié de la production — la peau des champs du formulaire de devis, la boîte de recherche des grilles, la voix du label et de l'erreur — plus les états que la prod n'a jamais écrits : l'appariement focus, la bordure rouge, le champ désactivé. Les lignes marquées « INVENTÉ » sont des ajouts du guide pour les projets à venir ; tout le reste se déploie aujourd'hui.",
  },
  sections: [...frA, ...frB],
};

export const inputs: Localized<PageData> = { ar, en, fr };





