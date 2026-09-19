import type { Localized, PageData, Section } from "@/lib/pages/types";

// ─────────────────────────────────────────────────────────────────────────────
// Selection Controls — GREENFIELD: the production site ships zero selection
// controls (no type="checkbox", no role="switch" anywhere). This page is the
// standard for the first one. Every specimen is INVENTED and tagged, built
// strictly from the skin already documented in this guide.
// ─────────────────────────────────────────────────────────────────────────────

const enA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "Anatomy" },
  {
    kind: "paragraph",
    text: "Two controls, one voice. The checkbox is a 20×20 sharp-cornered square wearing the field skin — border-system-200 #ECE8E4 at rest, brand-300 #1D65AF when checked, white square-cap check glyph. The switch is a 44×28 track with a 24px circular thumb — grey at rest, brand-300 with a white thumb when on. Both sit inside a 44×44 target. The check and dash glyphs are inline SVG, not the icon pipeline, so they render deterministically at 20px:",
  },
  {
    kind: "selectionDemo",
    variant: "anatomy",
    label: "Two controls, one voice",
    tags: [
      "checkbox off · 20×20 · sharp",
      "checkbox on · brand-300 #1D65AF",
      "indeterminate · dash glyph",
      "switch off · 44×28 track",
      "switch on · thumb 24px white",
    ],
    tOption: "Subscribe to news",
    tParent: "All products",
    tSetting: "Newsletter",
    note: "EVERY specimen on this page is INVENTED — the production site ships zero selection controls today. The skin is not: border #ECE8E4 and system-50 floor come verbatim from the field skin, brand-300 #1D65AF from buttons/inputs, white glyphs from the button rule. Indeterminate: a DOM property with no HTML attribute — set it in JS for a parent row of mixed children.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Greenfield, but not unrooted.",
        text: "Production has no checkboxes or switches yet — so this page defines the first one. Nothing here is a new color or a new radius: the rest state wears the field skin, the on state wears the button blue, the glyph wears the button's white-on-fill rule. When the first checkbox ships, it must look like it always lived here.",
      },
      {
        strong: "One state color for every control.",
        text: "Checked box, on-track switch, focus ring, link, primary button — all brand-300 #1D65AF. A page never argues about which blue means \"on\". If a future control needs a second accent, that is a design-system decision, not a component decision.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "20×20 checkbox, 44×28 switch, both in 44×44 targets.",
      "Brand-300 #1D65AF as the single on-state color.",
      "Indeterminate for a parent of mixed children.",
    ],
    dontItems: [
      "New accent colors per component.",
      "Rounded checkboxes — corners stay sharp.",
      "Glyphs smaller than 12px or lighter than 2px stroke.",
    ],
  },
];

const enB: Section[] = [
  { kind: "heading", id: "states", number: "02", title: "States" },
  {
    kind: "paragraph",
    text: "Four moments per control, same as every other component in this guide. Rest wears the field skin; focus pairs the global 2px brand ring from globals.css with the control; disabled follows the button rule — opacity-50, not-allowed, and the resting floor system-50 #FAF8F6 for the unchecked box:",
  },
  {
    kind: "selectionDemo",
    variant: "states",
    label: "One checkbox, four moments",
    tags: [
      "rest · system-200 border",
      "focus · 2px brand ring — offset 2",
      "disabled off · system-50 floor · opacity-50",
      "disabled on · brand-300 · opacity-50",
    ],
    tOption: "Subscribe to news",
    note: "ALL INVENTED, per the greenfield rule — and built only from documented tokens. Focus: the global 2px brand ring with a 2px white gap on light ground (box-shadow ring), the same pairing inputs use. Disabled: opacity-50 and not-allowed like every other disabled control; a disabled ON box keeps its brand-300 fill.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Focus is a ring, not a glow.",
        text: "Keyboard users get the same 2px brand ring with a 2px gap that every control in this system gets — the pairing documented in Inputs, applied here. No glows, no double borders, no surprises when Tab reaches the first checkbox the site ever ships.",
      },
      {
        strong: "Disabled still speaks its state.",
        text: "A disabled checkbox keeps its checked fill; only the opacity and cursor change. A control that goes pale grey and unreadable when disabled fails the same test as color-only errors — state must survive the greyscale.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "The shared 2px brand focus ring, offset 2.",
      "Disabled at opacity-50, keeping its on/off state readable.",
      "Focus ring on the control, not the 44×44 label.",
    ],
    dontItems: [
      "Glows, double borders or custom focus colors.",
      "Disabled states that erase the on/off difference.",
      "Hover states replacing focus for keyboard users.",
    ],
  },
];

const enC: Section[] = [
  { kind: "heading", id: "targets", number: "03", title: "Targets & RTL" },
  {
    kind: "paragraph",
    text: "The target is the label, not the glyph. A 20×20 box or a 44×28 track floats inside a 44×44 hit area — Apple's floor and this guide's a11y default — so a thumb never misses. Rows stack with zero gap and the label takes the remaining line width, the list rhythm from Cards. In RTL the switch travels the other way through one logical variable:",
  },
  {
    kind: "selectionDemo",
    variant: "targets",
    label: "Thumb travel mirrors with the page",
    tags: [
      "44×44 target · rows stack gap-0",
      "RTL mirror · translate via var(--thumb-dx)",
    ],
    tOption: "Subscribe to news",
    note: "Targets and row stacking: INVENTED per the greenfield rule, from the documented 44×44 default and the Cards list rhythm. The switch thumb travels +8px LTR and −8px RTL through the --thumb-dx custom property — mirroring is one variable, not a second component.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "The target is 44, the drawing is not.",
        text: "20px of drawing inside 44px of hit area. The visual stays delicate; the touch stays forgiving. Never draw the target — a 44px grey square reads as a button, not a checkbox.",
      },
      {
        strong: "Direction is data, not a variant.",
        text: "The switch tracks the page: the thumb starts at the leading edge and travels forward when on. One CSS variable carries the travel, exactly like ps/start do for the field. No dir=\"rtl\" special-case components, ever.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "44×44 label as the hit area; the control floats inside.",
      "Rows stacked with no gap, label filling the line.",
      "Switch travel via a logical variable (--thumb-dx).",
    ],
    dontItems: [
      "20×20 clickable boxes on touch screens.",
      "Drawing the 44px target as a visible box.",
      "A separate RTL switch component.",
    ],
  },
];

const enD: Section[] = [
  { kind: "heading", id: "choosing", number: "04", title: "Choosing the control" },
  {
    kind: "paragraph",
    text: "The choice is semantic, not aesthetic. Checkboxes answer \"which of these?\" — multi-select, batch actions, consent. A switch answers \"is this active?\" — instant settings with no submit step. Radios are excluded from this system by scope: they duplicate what a native select does, with worse touch ergonomics. The pending jobs are already visible in production — three search boxes waiting for filter rows, and a map disclosure waiting for an on/off switch:",
  },
  {
    kind: "selectionDemo",
    variant: "choosing",
    label: "Which control, which job",
    tags: [
      "multi-select · checkboxes",
      "binary choice · NOT checkboxes",
      "instant effect · switch",
    ],
    tItems: "Mutually exclusive choice",
    note: "INVENTED, per the greenfield rule. Checkboxes for the product/project/news filter rows the three search boxes imply. Never checkboxes for mutually-exclusive choices — that is the native select's job. Switches act instantly with no submit; if the change needs a save step, use a checkbox.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Checkboxes count; switches act.",
        text: "If the user expects a summary — \"3 selected\" — checkboxes. If the user expects an effect — \"now on\" — a switch, and it takes effect the moment it flips, never behind a Save button.",
      },
      {
        strong: "First shipped, then standardized.",
        text: "This page is written before the first component exists — on purpose. The first real checkbox should be extracted into this system, not reinvented beside it. When it lands, its classes become the canonical specimen and the INVENTED tags on this page retire.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Checkboxes for multi-select and consent.",
      "Switches for instant, binary settings.",
      "Native select for mutually-exclusive choices.",
    ],
    dontItems: [
      "Checkboxes posing as radios.",
      "Switches behind a Save button.",
      "Radios — excluded from this system by scope.",
    ],
  },
];

const en: PageData = {
  slug: "components/core-ui/selection-controls",
  accent: "#34c759",
  hero: {
    title: "Selection Controls",
    intro:
      "Checkboxes and switches — the controls that answer with a state, not a navigation. The production site ships none yet, so this page is the standard for the first one: every specimen is invented here, tagged as such, and built strictly from tokens the guide already documents — the field skin at rest, brand-300 when on, the 2px brand ring for focus, 44×44 targets throughout. When the first real checkbox ships, these tags retire and its classes become the canonical specimen.",
  },
  sections: [...enA, ...enB, ...enC, ...enD],
};

const arA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "التشريح" },
  {
    kind: "paragraph",
    text: "عنصران بصوت واحد. خانة الاختيار مربع 20×20 حاد الزوايا بلقشرة الحقول — حدّ system-200 #ECE8E4 في الوضع العادي، وbrand-300 #1D65AF عند التأشير، وعلامة صح بيضاء بأطراف مربعة. والمفتاح مسار 44×28 بإبهام دائري 24px — رمادي في الوضع العادي، وbrand-300 بإبهام أبيض عند التشغيل. وكلاهما داخل هدف 44×44. علامتا الصح والشرطة SVG مضمّنان لا من خط الأيقونات، ليظهرا حتميًا في 20px:",
  },
  {
    kind: "selectionDemo",
    variant: "anatomy",
    label: "عنصران بصوت واحد",
    tags: [
      "checkbox off · 20×20 · sharp",
      "checkbox on · brand-300 #1D65AF",
      "indeterminate · dash glyph",
      "switch off · 44×28 track",
      "switch on · thumb 24px white",
    ],
    tOption: "الاشتراك في الأخبار",
    tParent: "كل المنتجات",
    tSetting: "النشرة",
    note: "كل عينة في هذه الصفحة مبتكرَة — الموقع الرسمي لا يضم اليوم أي عنصر اختيار. القشرة ليست كذلك: الحدّ #ECE8E4 وأرضية system-50 منسوخان من قشرة الحقول، وbrand-300 #1D65AF من الأزرار والحقول، والعلامات البيضاء من قاعدة الأزرار. الحالة المختلطة indeterminate: خاصية DOM بلا وسم HTML — تُضبط بالجافاسكربت لصف أب لأبناء متضاربين.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "أرض فارغة لكنها متجذّرة.",
        text: "الإنتاج لا يملك خانات ولا مفاتيح بعد — فهذه الصفحة تعرّف الأول منها. لا يوجد هنا لون جديد ولا نصف قطر جديد: الوضع العادي بلقشرة الحقول، وحالة التشغيل بأزرق الأزرار، والعلامة بقاعدة الأبيض على التعبئة. عندما تُشحن أول خانة، يجب أن تبدو وكأنها عاشت هنا دائمًا.",
      },
      {
        strong: "لون حالة واحد لكل عنصر.",
        text: "خانة مؤشّرة، مفتاح مشغّل، حلقة تركيز، رابط، زر أساسي — كلها brand-300 #1D65AF. الصفحة لا تجادل أبدًا عن أيّ أزرق يعني «مفعّل». وإذا احتاج عنصر مستقبلي لهجة ثانية، فذلك قرار نظام تصميم لا قرار مكوّن.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "خانة 20×20، مفتاح 44×28، كلاهما في هدف 44×44.",
      "brand-300 #1D65AF لونًا وحيدًا لحالة التشغيل.",
      "الحالة المختلطة لأبٍ لأبناء متضاربين.",
    ],
    dontItems: [
      "ألوان لهجة جديدة لكل مكوّن.",
      "خانات دائرية — الزوايا تبقى حادة.",
      "علامات أصغر من 12px أو أخف من 2px.",
    ],
  },
  { kind: "heading", id: "states", number: "02", title: "الحالات" },
  {
    kind: "paragraph",
    text: "أربع لحظات لكل عنصر، ككل مكوّن آخر في هذا الدليل. الوضع العادي بلقشرة الحقول؛ والتركيز يقرن حلقة العلامة 2px العامة من globals.css بالعنصر؛ والمعطّل يتبع قاعدة الأزرار — opacity-50 وnot-allowed وأرضية الوضع العادي system-50 #FAF8F6 للخانة غير المؤشّرة:",
  },
  {
    kind: "selectionDemo",
    variant: "states",
    label: "خانة واحدة، أربع لحظات",
    tags: [
      "rest · system-200 border",
      "focus · 2px brand ring — offset 2",
      "disabled off · system-50 floor · opacity-50",
      "disabled on · brand-300 · opacity-50",
    ],
    tOption: "الاشتراك في الأخبار",
    note: "كلها مبتكرَة وفق قاعدة الأرض الفارغة — ومبنية من الرموز الموثّقة فقط. التركيز: حلقة العلامة 2px العامة بفجوة بيضاء 2px على الأرض الفاتحة (box-shadow)، نفس اقتران الحقول. المعطّل: opacity-50 وnot-allowed ككل عنصر معطّل؛ والخانة المؤشّرة المعطّلة تحتفظ بتعبئة brand-300.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "التركيز حلقة لا توهّج.",
        text: "مستخدمو لوحة المفاتيح يحصلون على نفس حلقة brand 2px بفجوة 2px التي يحصل عليها كل عنصر في هذا النظام — الاقتران الموثّق في الحقول، مطبَّق هنا. لا توهّج، ولا حدود مزدوجة، ولا مفاجآت عندما يصل Tab إلى أول خانة تُشحنها الموقع.",
      },
      {
        strong: "المعطّل ما زال ينطق حالته.",
        text: "الخانة المعطّلة تحتفظ بتعبئتها المؤشّرة؛ يتغير العتامة والمؤشر فقط. العنصر الذي يصير رماديًا باهتًا غير مقروء عند التعطيل يفشل بنفس اختبار أخطاء اللون-فقط — الحالة يجب أن تنجو من التدرج الرمادي.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "حلقة التركيز العامة 2px بفجوة 2.",
      "المعطّل بـ opacity-50 مع بقاء حالته مقروءة.",
      "حلقة التركيز على العنصر لا على ملصق 44×44.",
    ],
    dontItems: [
      "توهّج أو حدود مزدوجة أو ألوان تركيز مخصصة.",
      "حالات معطّلة تمحو الفرق بين on/off.",
      "حالات hover بديلة عن التركيز لمستخدمي لوحة المفاتيح.",
    ],
  },
];

const arB: Section[] = [
  { kind: "heading", id: "targets", number: "03", title: "الأهداف والاتجاهية" },
  {
    kind: "paragraph",
    text: "الهدف هو الملصق، لا الرسم. مربع 20×20 أو مسار 44×28 يطفوان داخل منطقة لمس 44×44 — أرضية آبل وافتراض الوصولية في هذا الدليل — فلن يخيب الإبهام أبدًا. الصفوف تتراصف بلا فجوة والملصق يأخذ عرض السطر المتبقي، على إيقاع القوائم من البطاقات. وفي RTL يسير الإبهام بالاتجاه المعاكس عبر متغير منطقي واحد:",
  },
  {
    kind: "selectionDemo",
    variant: "targets",
    label: "مسار الإبهام ينعكس مع الصفحة",
    tags: [
      "44×44 target · rows stack gap-0",
      "RTL mirror · translate via var(--thumb-dx)",
    ],
    tOption: "الاشتراك في الأخبار",
    note: "الأهداف وتراصف الصفوف: مبتكرَة وفق قاعدة الأرض الفارغة، من الافتراض الموثّق 44×44 وإيقاع قوائم البطاقات. إبهام المفتاح يسير ‎+8px في LTR و‎−8px في RTL عبر خاصية --thumb-dx المخصصة — الانعكاس متغير واحد، لا مكوّن ثانٍ.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الهدف 44، والرسم ليس كذلك.",
        text: "20px من الرسم داخل 44px من منطقة اللمس. الشكل يبقى رشيقًا واللمس متسامحًا. لا ترسم الهدف أبدًا — مربع رمادي 44px يُقرأ كزر، لا كخانة اختيار.",
      },
      {
        strong: "الاتجاه بيانات، لا نسخة.",
        text: "المفتاح يلاحق الصفحة: الإبهام يبدأ من الحافة القائدة ويسير للأمام عند التشغيل. متغير CSS واحد يحمل المسافة، تمامًا كما تفعل ps/start للحقول. لا مكوّنات خاصة بـ dir=\"rtl\" أبدًا.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "ملصق 44×44 منطقة لمس؛ والعنصر يطفو داخله.",
      "صفوف متراصّة بلا فجوة والملصق يملأ السطر.",
      "مسار المفتاح عبر متغير منطقي (--thumb-dx).",
    ],
    dontItems: [
      "مربعات ناشرة 20×20 على شاشات اللمس.",
      "رسم هدف 44px كمربع ظاهر.",
      "مكوّن مفتاح منفصل لـ RTL.",
    ],
  },
  { kind: "heading", id: "choosing", number: "04", title: "اختيار العنصر" },
  {
    kind: "paragraph",
    text: "الاختيار دلالي لا جمالي. خانات الاختيار تجيب عن «أيّ منها؟» — تعدد اختيار، إجراءات مجمّعة، موافقة. والمفتاح يجيب عن «هل هذا مفعّل؟» — إعدادات فورية بلا خطوة إرسال. أما أزرار الراديو فمستبعدة من هذا النظام بالتعريف: فهي تكرر ما تفعله القائمة الأصلية بأسوأ بيئة لمس. والمهام المنتظرة مرئية أصلًا في الإنتاج — ثلاثة صناديق بحث تنتظر صفوف مرشّحات، وإفصاح خريطة ينتظر مفتاح تشغيل/إيقاف:",
  },
  {
    kind: "selectionDemo",
    variant: "choosing",
    label: "أي عنصر، أي مهمة",
    tags: [
      "multi-select · checkboxes",
      "binary choice · NOT checkboxes",
      "instant effect · switch",
    ],
    tItems: "خيار حصري متبادل",
    note: "مبتكرَة وفق قاعدة الأرض الفارغة. خانات لصفوف مرشّحات المنتجات والمشاريع والأخبار التي توحي بها صناديق البحث الثلاثة. ولا خانات أبدًا للخيارات الحصرية المتبادلة — فذلك عمل القائمة الأصلية. المفاتيح تؤثر فورًا بلا إرسال؛ وإذا احتاج التغيير خطوة حفظ فاستعمل خانة.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الخانات تعدّ؛ والمفاتيح تؤثر.",
        text: "إذا توقع المستخدم ملخصًا — «3 مختارة» — فخانات. وإذا توقع تأثيرًا — «مفعّل الآن» — فمفتاح، يعمل لحظة قلبه، ولا خلف زر حفظ أبدًا.",
      },
      {
        strong: "تُشحن أولًا ثم تُقيَّس.",
        text: "هذه الصفحة كُتبت قبل وجود أول مكوّن — عمدًا. أول خانة حقيقية يجب أن تُستخرج إلى هذا النظام لا أن تُعاد كتابته بجانبه. وعندما تهبط تصبح أصنافها العينة المرجعية وتتقاعد وسوم «مبتكرَة» من هذه الصفحة.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "خانات للتعدد والموافقة.",
      "مفاتيح للإعدادات الفورية الثنائية.",
      "القائمة الأصلية للخيارات الحصرية المتبادلة.",
    ],
    dontItems: [
      "خانات تتصنع راديو.",
      "مفاتيح خلف زر حفظ.",
      "أزرار راديو — مستبعدة من النظام بالتعريف.",
    ],
  },
];

const ar: PageData = {
  slug: "components/core-ui/selection-controls",
  accent: "#34c759",
  hero: {
    title: "عناصر الاختيار",
    intro:
      "خانات الاختيار والمفاتيح — العناصر التي تجيب بحالة لا بانتقال. الموقع الرسمي لا يشحن شيئًا منها بعد، فهذه الصفحة هي المعيار للأول منها: كل عينة مبتكرَة هنا ومعلَّمة كذلك، ومبنية حصريًا من الرموز التي يوثّقها الدليل — قشرة الحقول في الوضع العادي، وbrand-300 عند التشغيل، وحلقة brand‏ 2px للتركيز، وأهداف 44×44 في كل مكان. وعندما تُشحن أول خانة حقيقية، تتقاعد هذه الوسوم وتصبح أصنافها العينة المرجعية.",
  },
  sections: [...arA, ...arB],
};

const frA: Section[] = [
  { kind: "heading", id: "anatomy", number: "01", title: "Anatomie" },
  {
    kind: "paragraph",
    text: "Deux contrôles, une voix. La case à cocher est un carré de 20×20 aux coins vifs, habillé de la peau des champs — bordure system-200 #ECE8E4 au repos, brand-300 #1D65AF cochée, coche blanche à bouts carrés. L'interrupteur est une piste de 44×28 avec un pouce circulaire de 24px — gris au repos, brand-300 avec pouce blanc allumé. Les deux flottent dans une cible de 44×44. Les glyphes coche et tiret sont des SVG en ligne, pas du pipeline d'icônes, pour un rendu déterministe à 20px:",
  },
  {
    kind: "selectionDemo",
    variant: "anatomy",
    label: "Deux contrôles, une voix",
    tags: [
      "checkbox off · 20×20 · sharp",
      "checkbox on · brand-300 #1D65AF",
      "indeterminate · dash glyph",
      "switch off · 44×28 track",
      "switch on · thumb 24px white",
    ],
    tOption: "S'abonner aux actualités",
    tParent: "Tous les produits",
    tSetting: "Infolettre",
    note: "CHAQUE spécimen de cette page est INVENTÉ — le site de production ne livre aujourd'hui aucun contrôle de sélection. La peau, elle, ne l'est pas : bordure #ECE8E4 et fond system-50 repris verbatim de la peau des champs, brand-300 #1D65AF des boutons/champs, glyphes blancs de la règle des boutons. Indeterminate : une propriété DOM sans attribut HTML — à définir en JS pour un parent aux enfants mixtes.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Champ vierge, mais enraciné.",
        text: "La production n'a ni case ni interrupteur — cette page définit donc le premier. Rien ici n'est une nouvelle couleur ni un nouveau rayon : le repos porte la peau des champs, l'état actif le bleu des boutons, le glyphe la règle blanc-sur-remplissage. Quand la première case sera livrée, elle devra sembler avoir toujours vécu ici.",
      },
      {
        strong: "Une seule couleur d'état, partout.",
        text: "Case cochée, piste activée, anneau de focus, lien, bouton primaire — tous brand-300 #1D65AF. Une page ne discute jamais pour savoir quel bleu signifie « actif ». Si un futur contrôle exige un second accent, c'est une décision de design system, pas de composant.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Case 20×20, interrupteur 44×28, tous deux en cible 44×44.",
      "Brand-300 #1D65AF comme unique couleur d'état actif.",
      "Indeterminate pour un parent aux enfants mixtes.",
    ],
    dontItems: [
      "Nouvelles couleurs d'accent par composant.",
      "Cases arrondies — les coins restent vifs.",
      "Glyphes inférieurs à 12px ou plus fins que 2px.",
    ],
  },
  { kind: "heading", id: "states", number: "02", title: "États" },
  {
    kind: "paragraph",
    text: "Quatre moments par contrôle, comme chaque composant de ce guide. Le repos porte la peau des champs ; le focus associe l'anneau marque 2px global de globals.css au contrôle ; le désactivé suit la règle des boutons — opacity-50, not-allowed, et le fond system-50 #FAF8F6 pour la case décochée:",
  },
  {
    kind: "selectionDemo",
    variant: "states",
    label: "Une case, quatre moments",
    tags: [
      "rest · system-200 border",
      "focus · 2px brand ring — offset 2",
      "disabled off · system-50 floor · opacity-50",
      "disabled on · brand-300 · opacity-50",
    ],
    tOption: "S'abonner aux actualités",
    note: "TOUT EST INVENTÉ, selon la règle du champ vierge — et construit uniquement avec des jetons documentés. Focus : l'anneau marque 2px global avec un écart blanc de 2px sur fond clair (box-shadow), le même appariement que les champs. Désactivé : opacity-50 et not-allowed comme tout contrôle désactivé ; une case cochée désactivée garde son remplissage brand-300.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Le focus est un anneau, pas une lueur.",
        text: "Les claviers obtiennent le même anneau marque de 2px avec un écart de 2px que tout contrôle de ce système — l'appariement documenté dans Champs, appliqué ici. Pas de lueurs, pas de doubles bordures, pas de surprise quand Tab atteint la première case du site.",
      },
      {
        strong: "Le désactivé énonce toujours son état.",
        text: "Une case désactivée garde son remplissage ; seule l'opacité et le curseur changent. Un contrôle qui pâlit au point de devenir illisible échoue au même test que les erreurs par couleur seule — l'état doit survivre au passage au gris.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "L'anneau de focus marque 2px partagé, écart 2.",
      "Désactivé à opacity-50, état on/off restant lisible.",
      "Anneau de focus sur le contrôle, pas sur l'étiquette 44×44.",
    ],
    dontItems: [
      "Lueurs, doubles bordures ou couleurs de focus maison.",
      "États désactivés effaçant la différence on/off.",
      "États hover substitués au focus pour les claviers.",
    ],
  },
];

const frB: Section[] = [
  { kind: "heading", id: "targets", number: "03", title: "Cibles & RTL" },
  {
    kind: "paragraph",
    text: "La cible est l'étiquette, pas le dessin. Un carré de 20×20 ou une piste de 44×28 flotte dans une zone de 44×44 — le plancher Apple et le défaut d'accessibilité de ce guide — pour qu'un pouce ne manque jamais. Les lignes s'empilent sans écart et l'étiquette prend la largeur restante, le rythme des listes des Cartes. En RTL, le pouce voyage dans l'autre sens via une seule variable logique:",
  },
  {
    kind: "selectionDemo",
    variant: "targets",
    label: "Le voyage du pouce se reflète avec la page",
    tags: [
      "44×44 target · rows stack gap-0",
      "RTL mirror · translate via var(--thumb-dx)",
    ],
    tOption: "S'abonner aux actualités",
    note: "Cibles et empilement : INVENTÉS selon la règle du champ vierge, à partir du défaut 44×44 documenté et du rythme des listes des Cartes. Le pouce voyage de +8px en LTR et −8px en RTL via la propriété personnalisée --thumb-dx — le reflet est une variable, pas un second composant.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "La cible fait 44, le dessin non.",
        text: "20px de dessin dans 44px de zone tactile. Le visuel reste délicat, le toucher indulgent. Ne dessinez jamais la cible — un carré gris de 44px se lit comme un bouton, pas comme une case.",
      },
      {
        strong: "La direction est une donnée, pas une variante.",
        text: "L'interrupteur suit la page : le pouce part du bord de tête et avance quand il s'allume. Une variable CSS porte le voyage, exactement comme ps/start le font pour les champs. Aucun composant spécial dir=\"rtl\", jamais.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Étiquette 44×44 comme zone tactile ; le contrôle flotte dedans.",
      "Lignes empilées sans écart, étiquette remplissant la ligne.",
      "Voyage du pouce via une variable logique (--thumb-dx).",
    ],
    dontItems: [
      "Carrés cliquables de 20×20 sur écrans tactiles.",
      "Dessiner la cible de 44px en carré visible.",
      "Un composant interrupteur séparé pour RTL.",
    ],
  },
  { kind: "heading", id: "choosing", number: "04", title: "Choisir le contrôle" },
  {
    kind: "paragraph",
    text: "Le choix est sémantique, pas esthétique. Les cases répondent à « lesquels ? » — multi-sélection, actions groupées, consentement. L'interrupteur répond à « est-ce actif ? » — réglages instantanés sans étape d'envoi. Les radios sont exclues du système par définition : elles doublonnent ce que fait le select natif, avec une ergonomie tactile pire. Les tâches en attente sont déjà visibles en production — trois boîtes de recherche qui attendent des lignes de filtres, et un divulgateur de carte qui attend un interrupteur:",
  },
  {
    kind: "selectionDemo",
    variant: "choosing",
    label: "Quel contrôle, quel travail",
    tags: [
      "multi-select · checkboxes",
      "binary choice · NOT checkboxes",
      "instant effect · switch",
    ],
    tItems: "Choix exclusif mutuel",
    note: "INVENTÉ, selon la règle du champ vierge. Cases pour les lignes de filtres produits/projets/actualités qu'impliquent les trois boîtes de recherche. Jamais de cases pour des choix exclusifs mutuels — c'est le travail du select natif. Les interrupteurs agissent immédiatement, sans envoi ; si le changement exige une sauvegarde, utilisez une case.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Les cases comptent ; les interrupteurs agissent.",
        text: "Si l'utilisateur attend un récapitulatif — « 3 sélectionnés » — des cases. S'il attend un effet — « actif maintenant » — un interrupteur, qui s'applique dès qu'il bascule, jamais derrière un bouton Enregistrer.",
      },
      {
        strong: "Livré d'abord, standardisé ensuite.",
        text: "Cette page est écrite avant que le premier composant existe — exprès. La première vraie case devra être extraite vers ce système, pas réinventée à côté. Quand elle atterrit, ses classes deviennent le spécimen canonique et les étiquettes INVENTÉ de cette page prennent leur retraite.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Cases pour la multi-sélection et le consentement.",
      "Interrupteurs pour les réglages binaires instantanés.",
      "Select natif pour les choix exclusifs mutuels.",
    ],
    dontItems: [
      "Cases jouant les radios.",
      "Interrupteurs derrière un bouton Enregistrer.",
      "Radios — exclues de ce système par définition.",
    ],
  },
];

const fr: PageData = {
  slug: "components/core-ui/selection-controls",
  accent: "#34c759",
  hero: {
    title: "Contrôles de sélection",
    intro:
      "Cases à cocher et interrupteurs — les contrôles qui répondent par un état, pas par une navigation. Le site de production n'en livre aucun encore, donc cette page est la norme du premier : chaque spécimen y est inventé, étiqueté comme tel, et construit strictement avec les jetons déjà documentés — la peau des champs au repos, brand-300 allumé, l'anneau marque 2px au focus, des cibles 44×44 partout. Quand la première vraie case sera livrée, ces étiquettes prendront leur retraite et ses classes deviendront le spécimen canonique.",
  },
  sections: [...frA, ...frB],
};

export const selectionControls: Localized<PageData> = { ar: ar, en: en, fr: fr };







