import type { Localized, PageData, Section } from "@/lib/pages/types";

// ─────────────────────────────────────────────────────────────────────────────
// Overlayers — drawer, dropdown, map pins, motion. Production truth:
// SiteNavBar.tsx (mobile drawer, hide-on-scroll navbar), LanguageSwitcher.tsx
// (dark-glass dropdown), LocationsMap.tsx (circular pins + fadeIn card).
// Inventions, all tagged: Esc/focus-trap pairings, role=listbox, motion band.
// ─────────────────────────────────────────────────────────────────────────────

const enA: Section[] = [
  { kind: "heading", id: "drawer", number: "01", title: "The drawer" },
  {
    kind: "paragraph",
    text: "Production's one true overlay is the mobile drawer — fixed inset-0 z-[100], lg:hidden, with a bg-black/40 backdrop and a w-[300px] white panel that scrolls its own content (overflow-y-auto) while the page freezes behind it (body scroll-lock). Links are full-width rows — border-b border-system-100, py-3.5, text-sm, hover:text-brand-300 — and the CTA caps the panel as an h-11 bg-brand-300 bar. Live specimen — click the pill, click the backdrop:",
  },
  {
    kind: "overlayerDemo",
    variant: "drawer",
    label: "Mobile drawer — click to open, backdrop to close",
    tags: ["fixed inset-0 · z-[100] · lg:hidden", "backdrop bg-black/40 · click closes", "panel w-[300px] · scroll-lock"],
    tTitle: "Try it",
    tToggle: "Menu",
    tLinks: ["Home", "Products", "Projects", "News", "About", "Contact"],
    tCta: "Get a quote",
    note: "SiteNavBar.tsx verbatim: z-[100], backdrop bg-black/40, panel w-[300px] bg-white shadow-xl overflow-y-auto, body overflow hidden while open. Rows border-b border-system-100 py-3.5 hover:text-brand-300; CTA h-11 bg-brand-300 hover:bg-brand-200. The demo adds a 300ms slide that production doesn't have — it snaps; motion is INVENTED and gated by prefers-reduced-motion.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "One layer owns the screen.",
        text: "When the drawer opens, nothing else competes: the backdrop dims the page to 40% black, the body stops scrolling, and the panel is the only surface. z-[100] is the ceiling — above the sticky navbar's z-50 — and nothing else in the product may claim it.",
      },
      {
        strong: "Every way out is the same gesture.",
        text: "Backdrop click closes (the backdrop is a label for the toggle — the demo does it for real). Esc closes. The CTA and every link navigate, which unmounts the drawer. INVENTED pairing: Esc + focus moves back to the trigger on close; production has no Esc handler yet — a one-line useEffect away.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "z-[100] ceiling for overlays, above the navbar's z-50.",
      "bg-black/40 backdrop; click on it closes.",
      "Body scroll-lock while the layer is open.",
    ],
    dontItems: [
      "A second overlay stacking above the first.",
      "Scrolling the page behind an open drawer.",
      "Closing only via the X — backdrop must dismiss.",
    ],
  },
];

const enB: Section[] = [
  { kind: "heading", id: "dropdown", number: "02", title: "The dropdown" },
  {
    kind: "paragraph",
    text: "The language switcher is production's only menu — and it chose dark glass. The trigger is an h-9 pill, bg-black/20 backdrop-blur, that darkens on hover; the menu hangs at top-full mt-2, z-50, min-w-[160px], in bg-black/80 backdrop-blur with shadow-lg. The chevron rotates 180° on open. Options are role=option rows — selected wears bg-white/10 font-semibold, unselected text-white/80 hover:bg-white/10:",
  },
  {
    kind: "overlayerDemo",
    variant: "dropdown",
    label: "Language switcher — dark glass, top-full",
    tags: [
      "trigger h-9 · bg-black/20 · backdrop-blur",
      "menu top-full mt-2 · z-50 · bg-black/80",
      "role=listbox INVENTED · options role=option",
    ],
    tTrigger: "Language",
    tOptions: ["Français", "English", "العربية"],
    tSelected: "Français",
    note: "LanguageSwitcher.tsx verbatim: trigger bg-black/20 hover:bg-black/30 backdrop-blur, chevron rotate-180 duration-150, menu absolute right-0 top-full z-50 mt-2 min-w-[160px] bg-black/80 backdrop-blur shadow-lg, options role=option with bg-white/10 font-semibold for selected. GAP — production ships no role=listbox on the menu and no aria-expanded on the trigger; both are INVENTED here as the pairing to adopt. Arrow-key navigation: also invented — a native listbox pattern.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Menus can be glass; options cannot be faint.",
        text: "The dark-glass surface is production's signature for anything floating over imagery. But the selected option must stay a full-white semibold row — glass texture never taxes text contrast. White/10 is the floor for hover fills, never for text.",
      },
      {
        strong: "The trigger speaks for the menu.",
        text: "INVENTED pairing: aria-expanded on the trigger, role=listbox on the menu, aria-selected on options — the browser can then announce \"Language, menu, collapsed\" before any click. Production already has role=option; it lacks only the two parent roles.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Menu at top-full mt-2, aligned to the trigger's end edge.",
      "Selected option: bg-white/10 + semibold, never a checkmark alone.",
      "aria-expanded + role=listbox pairing (invented, adopt it).",
    ],
    dontItems: [
      "Menus wider than 240px for three items.",
      "Option text below full contrast on glass.",
      "Opening a second menu while one is open.",
    ],
  },
];

const enC: Section[] = [
  { kind: "heading", id: "pins", number: "03", title: "Map pins & popovers" },
  {
    kind: "paragraph",
    text: "The locations map is a popover system on a brand-colored canvas. Pins are circles — border-2 border-brand-300 — that grow from h-7 to h-9 and fill brand-300 with a white dot when active (scale-110). The active pin's info card fades in with the production's only keyframe: animate-[fadeIn_180ms_ease], a system-200-bordered white card, p-5, with the location's address and a directions action. On mobile the whole map is a disclosure — the h-10 \"Map view\" toggle swaps list for map:",
  },
  {
    kind: "overlayerDemo",
    variant: "pins",
    label: "Pin states + the info card that answers",
    tags: [
      "pin inactive h-7 · border-2 · scale-105 hover",
      "pin active h-9 · scale-110 · filled",
      "card fadeIn 180ms · border-system-200",
    ],
    tCard: "Alger — Main campus",
    tBody: "Rue des Écoles, Hydra, Alger",
    tDirs: "Directions",
    note: "LocationsMap.tsx verbatim: pins rounded-full border-2 border-brand-300, inactive h-7 w-7 bg-white with brand dot and hover:scale-105, active h-9 w-9 bg-brand-300 text-white scale-110 (z-10); card animate-[fadeIn_180ms_ease] border border-system-200 bg-white p-5; mobile map behind an h-10 disclosure toggle (hidden lg:block when off). One card at a time — the active pin is the single source.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "The pin is the button; the card is the answer.",
        text: "A pin without a card is decoration; the card without its pin is lost context. They ship as one unit — selecting a pin swaps the card's content and replays the 180ms fade, so the eye re-anchors. Only one card ever exists.",
      },
      {
        strong: "Small on purpose, bigger when chosen.",
        text: "h-7 at rest keeps the canvas legible with many pins; h-9 + scale-110 when active is the system's selection affordance — the same \"grow, don't glow\" as buttons. The dot color inverts (brand-on-white becomes white-on-brand) to double the signal beyond size alone.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "One active pin and one card at a time.",
      "Selection = fill brand-300 + scale-110.",
      "Card content keyed to the pin, fading 180ms.",
    ],
    dontItems: [
      "Multiple open popovers on one canvas.",
      "Pins below 28px or above 36px.",
      "A card that jumps position with each selection.",
    ],
  },
];

const enD: Section[] = [
  { kind: "heading", id: "motion", number: "04", title: "Motion & dismissal" },
  {
    kind: "paragraph",
    text: "Production wrote exactly one overlay motion: the navbar's hide-on-scroll — translate-y-0 to -translate-y-full, duration-300, on the sticky header (bg-white/95 backdrop-blur when light, bg-black/80 when dark). The drawer and dropdown open without transitions today — they snap. The guideline keeps production's one real motion, and sets a 150–300ms band for the invented ones (chevron 150, drawer slide 300, card fade 180):",
  },
  {
    kind: "overlayerDemo",
    variant: "motion",
    label: "The band: one navbar slide, two invented rides",
    tags: [
      "visible · translate-y-0",
      "hidden · -translate-y-full · duration-300",
      "band 150–300ms · INVENTED · reduced-motion gated",
    ],
    tShow: "Navbar — scrolled to top",
    tHide: "Navbar — scrolled down (hidden)",
    tBand: "150ms chevron · 180ms card · 300ms drawer & navbar",
    note: "Navbar: SiteNavBar.tsx verbatim — transition-transform duration-300 between translate-y-0 and -translate-y-full, hidden state also opacity-0 in the demo for print. The 150–300ms band: INVENTED — it unifies chevron (150, verbatim), card (180, verbatim) and drawer slide (300, invented). All gated by the global prefers-reduced-motion rule: transitions become near-instant.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Motion announces; it never performs.",
        text: "A drawer slides so the eye knows where it came from; a card fades so the eye knows what changed. Nothing bounces, nothing springs — the 150–300ms band keeps every layer gesture in the same voice as the navbar's own slide.",
      },
      {
        strong: "Reduced-motion is not optional.",
        text: "The global rule already converts duration-300 to near-instant for prefers-reduced-motion users — overlays are the biggest beneficiaries. A layer that must animate to be usable is a layer designed wrong.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "150–300ms for every layer transition.",
      "transform/opacity only — never layout properties.",
      "Focus returns to the trigger on close (invented).",
    ],
    dontItems: [
      "Springs, bounces or delays over 300ms.",
      "Animating width/height/top on a layer.",
      "Motion that ignores prefers-reduced-motion.",
    ],
  },
];

const en: PageData = {
  slug: "components/core-ui/overlayers",
  accent: "#af52de",
  hero: {
    title: "Overlayers",
    intro:
      "Anything that floats above the page — drawer, menu, popover, sticky chrome — lives by one contract: one layer owns the screen, the backdrop dims and dismisses, and every exit is the same gesture. Production already ships the drawer, the dark-glass language menu, the map popover and the navbar slide; this page binds them into one system and tags the keyboard pairings production still owes (Esc, focus trap, listbox roles) as the adopt-next list.",
  },
  sections: [...enA, ...enB, ...enC, ...enD],
};

const arA: Section[] = [
  { kind: "heading", id: "drawer", number: "01", title: "الدَرْج الجانبي (Drawer)" },
  {
    kind: "paragraph",
    text: "الطبقة العلوية الوحيدة الحقيقية في المنتج هي دَرْج الجوال — ثابت inset-0 على ارتفاع z-100، مخفي على الشاشات الكبيرة (hidden lg:flex)، مع خلفية سوداء بنسبة 40% ولوحة بيضاء بعرض 300 بكسل تُدير تمريرها بنفسها (overflow-y-auto) بينما تتجمّد الصفحة خلفها (قفل تمرير الجسم). الروابط صفوف بعرض كامل — حد سفلي، حشو عمودي 14 بكسل، ولون hover إلى brand-300 — وينتهي الدرج بزر إجراء بارتفاع 44 بكسل على خلفية brand-300. جرّب بنفسك — انقر الزر ثم انقر الخلفية:",
  },
  {
    kind: "overlayerDemo",
    variant: "drawer",
    label: "درج الجوال — انقر للفتح، وانقر الخلفية للإغلاق",
    tags: ["ثابت inset-0 · z-100 · مخفي على lg", "خلفية أسود 40% · النقر يغلق", "لوحة 300 بكسل · قفل التمرير"],
    tTitle: "جرّبه",
    tToggle: "القائمة",
    tLinks: ["الرئيسية", "المنتجات", "المشاريع", "الأخبار", "من نحن", "اتصل بنا"],
    tCta: "اطلب عرض سعر",
    note: "من SiteNavBar.tsx حرفياً: z-100، خلفية bg-black/40، لوحة w-[300px] بيضاء بظل وتمرير ذاتي وقفل تمرير الجسم. الصفوف بحد سفلي وحشو 14 بكسل ولون تعليق brand-300؛ الزر h-11 على brand-300. يضيف النموذج انزلاقاً بـ300 ملي ثانية لا يملكه الإنتاج — فهو يظهر فوراً؛ الحركة مُبتكَرة ومقيّدة بـ prefers-reduced-motion.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "طبقة واحدة تملك الشاشة.",
        text: "عند فتح الدرج لا ينافسه شيء: الخلفية تعتيم الصفحة بنسبة 40%، والجسم يتوقف عن التمرير، واللوحة هي السطح الوحيد. z-100 هو السقف — فوق z-50 الخاص بشريط التنقل اللاصق — ولا يجوز لأي شيء آخر في المنتج المطالبة به.",
      },
      {
        strong: "كل طريق الخروج إيماءة واحدة.",
        text: "النقر على الخلفية يغلق (الخلفية هنا label للحوالة — النموذج يفعلها فعلاً). Esc يغلق. زر الإجراء وكل رابط يُنقلان، فيُفكّ الدرج. اقتران مُبتكَر: Esc مع إعادة التركيز إلى الزر عند الإغلاق؛ الإنتاج لا يملك معالج Esc بعد — يبعد سطراً واحداً عنها.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "سقف z-100 للطبقات، فوق z-50 لشريط التنقل.",
      "خلفية bg-black/40؛ النقر عليها يغلق.",
      "قفل تمرير الجسم طوال فتح الطبقة.",
    ],
    dontItems: [
      "طبقة ثانية تتراكب فوق الأولى.",
      "تمرير الصفحة خلف درج مفتوح.",
      "الإغلاق عبر زر X وحده — الخلفية يجب أن تُغلق.",
    ],
  },
];

const arB: Section[] = [
  { kind: "heading", id: "dropdown", number: "02", title: "القائمة المنسدلة" },
  {
    kind: "paragraph",
    text: "مبدّل اللغة هو القائمة الوحيدة في الإنتاج — وقد اختار الزجاج الداكن. الزرّ حبوب h-9 بخلفية أسود 20% مع blur يُعتم عند التعليق؛ القائمة تتدلى من top-full بهامش 8 بكسل على z-50 بحد أدنى 160 بكسل داخل bg-black/80 مع blur وظل. السهم يدور 180 درجة عند الفتح. الخيارات صفوف role=option — المُختار يلبس bg-white/10 بخط شبه عريض، وغير المُختار text-white/80:",
  },
  {
    kind: "overlayerDemo",
    variant: "dropdown",
    label: "مبدّل اللغة — زجاج داكن يتدلى من الزرّ",
    tags: ["زرّ h-9 · أسود 20% · blur", "قائمة top-full · z-50 · أسود 80%", "role=listbox مُبتكَر · الخيارات role=option"],
    tTrigger: "اللغة",
    tOptions: ["العربية", "Français", "English"],
    tSelected: "العربية",
    note: "من LanguageSwitcher.tsx حرفياً: زرّ bg-black/20 hover:bg-black/30 backdrop-blur، سهم rotate-180 خلال 150 ملي ثانية، قائمة absolute top-full z-50 mt-2 بحد أدنى 160 بكسل على bg-black/80 backdrop-blur وظل، خيارات role=option مع bg-white/10 شبه عريض للمُختار. فجوة — الإنتاج لا يضع role=listbox على القائمة ولا aria-expanded على الزرّ؛ كلاهما مُبتكَر هنا بوصفه الاقتران الواجب تبنّيه. تنقّل الأسهم مُبتكَر أيضاً — نمط listbox أصيل.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "القوائم زجاج، لكن الخيارات لا تبهت.",
        text: "السطح الزجاجي الداكن توقيع الإنتاج لكل ما يعوم فوق الصور. لكن الخيار المُختار يبقى صفاً أبيض كاملاً شبه عريض — ملمس الزجاج لا يفرض ضرائب على تباين النص. white/10 أرضية لتعبئة التعليق، لا للنص أبداً.",
      },
      {
        strong: "الزرّ يتحدث باسم القائمة.",
        text: "اقتران مُبتكَر: aria-expanded على الزرّ، وrole=listbox على القائمة، وaria-selected على الخيارات — فيستطيع المتصفح إعلان «اللغة، قائمة، مطوية» قبل أي نقرة. الإنتاج يملك role=option أصلاً؛ ينقصه دورا الأبوين فقط.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "القائمة عند top-full بهامش 8، محاذاة إلى نهاية الزرّ.",
      "الخيار المُختار: bg-white/10 + شبه عريض، لا علامة صح وحدها.",
      "اقتران aria-expanded + role=listbox (مُبتكَر، تبنّوه).",
    ],
    dontItems: [
      "قوائم أعرض من 240 بكسل لثلاثة خيارات.",
      "نص خيار دون تباين كامل فوق الزجاج.",
      "فتح قائمة ثانية بينما قائمة مفتوحة.",
    ],
  },
];

const arC: Section[] = [
  { kind: "heading", id: "pins", number: "03", title: "دبابيس الخريطة والبطاقات المنبثقة" },
  {
    kind: "paragraph",
    text: "خريطة المواقع نظام بطاقات منبثقة على قماش بلون الهوية. الدبابيس دوائر — border-2 بلون brand-300 — تكبر من h-7 إلى h-9 وتتلوّن بـbrand-300 مع نقطة بيضاء عند التفعيل (scale-110). بطاقة معلومات الدبوس النشط تظهر بوهي الإنتاج الوحيد المكتوب: animate-[fadeIn_180ms_ease] — بطاقة بيضاء بحد system-200 وحشو 20 بكسل تحمل عنوان الموقع وزر الاتجاهات. على الجوال تكون الخريطة كلها كاشفاً — زر «عرض الخريطة» h-10 يبدّل القائمة بالخريطة:",
  },
  {
    kind: "overlayerDemo",
    variant: "pins",
    label: "حالات الدبوس + البطاقة التي تجيب",
    tags: ["دبوس غير نشط h-7 · حد 2 · scale-105", "دبوس نشط h-9 · scale-110 · معبأ", "بطاقة fadeIn خلال 180"],
    tCard: "الجزائر — الحرم الرئيسي",
    tBody: "شارع المدارس، حيدرة، الجزائر",
    tDirs: "الاتجاهات",
    note: "من LocationsMap.tsx حرفياً: دبابيس rounded-full border-2 border-brand-300، غير نشط h-7 w-7 أبيض بنقطة brand وتعليق scale-105، نشط h-9 w-9 bg-brand-300 أبيض scale-110 (z-10)؛ بطاقة animate-[fadeIn_180ms_ease] بحد system-200 وحشو 20؛ خريطة الجوال خلف كاشف h-10. بطاقة واحدة كل مرة — الدبوس النشط هو المصدر الوحيد.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الدبوس هو الزرّ؛ البطاقة هي الجواب.",
        text: "دبوس بلا بطاقة زخرفة؛ وبطاقة بلا دبوس سياق ضائع. يُشحنان وحدة واحدة — عند اختيار دبوس تتبدل مادة البطاقة ويعاد تشغيل الوهي خلال 180 ملي ثانية، فيعود العين إلى مرساه. بطاقة واحدة موجودة أبداً.",
      },
      {
        strong: "صغيرة قصداً، أكبر عند الاختيار.",
        text: "h-7 في السكون تحفظ مقروئية القماش مع كثرة الدبابيس؛ h-9 + scale-110 عند التفعيل هي إشارة اختيار النظام — نفس «تَكَبَّرْ، لا تتوهّج» في الأزرار. ولون النقطة ينعكس (brand على أبيض تصير أبيض على brand) ليضاعف الإشارة بعدُ بلا حجم وحده.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "دبوس نشط واحد وبطاقة واحدة كل مرة.",
      "الاختيار = تعبئة brand-300 + scale-110.",
      "مادة البطاقة مرتبطة بالدبوس، بوهدة 180.",
    ],
    dontItems: [
      "بطاقات منبثقة متعددة على قماش واحد.",
      "دبابيس دون 28 بكسل أو فوق 36.",
      "بطاقة تقفز من موضع إلى آخر مع كل اختيار.",
    ],
  },
];

const arD: Section[] = [
  { kind: "heading", id: "motion", number: "04", title: "الحركة والإغلاق" },
  {
    kind: "paragraph",
    text: "كتب الإنتاج حركة علوية واحدة بالضبط: إخفاء شريط التنقل عند التمرير — من translate-y-0 إلى -translate-y-full خلال 300 ملي ثانية على الرأس اللاصق (bg-white/95 مع blur في الفاتح، bg-black/80 في الداكن). الدرج والقائمة المنسدلة يفتحان بلا تحوّلات اليوم — يظهران فوراً. يُبقي هذا الدليل حركة الإنتاج الحقيقية واحدة، ويضبط نطاق 150–300 ملي ثانية للمُبتكَر منها (السهم 150، انزلاق الدرج 300، وهدة البطاقة 180):",
  },
  {
    kind: "overlayerDemo",
    variant: "motion",
    label: "النطاق: انزلاق شريط واحد، وركوبان مُبتكَران",
    tags: ["مرئي · translate-y-0", "مخفي · -translate-y-full · 300", "نطاق 150–300 · مُبتكَر · مقيّد بالحركة المخفّضة"],
    tShow: "شريط التنقل — أعلى الصفحة",
    tHide: "شريط التنقل — مُخفى عند التمرير",
    tBand: "150 للسهم · 180 للبطاقة · 300 للدرج والشريط",
    note: "الشريط من SiteNavBar.tsx حرفياً — transition-transform duration-300 بين translate-y-0 و -translate-y-full، والحالة المخفية مع opacity-0 في النموذج للطباعة. نطاق 150–300: مُبتكَر — يوحّد السهم (150 حرفياً) والبطاقة (180 حرفياً) وانزلاق الدرج (300 مُبتكَر). كلها مقيّدة بقاعدة prefers-reduced-motion العامة: التحولات تكاد تكون فورية.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "الحركة تُعلن، لا تستعرض.",
        text: "الدرج ينزلق ليعرف العين من أين أتى؛ والبطاقة تهبّ لتعرف العين ما الذي تبدّل. لا ترتداد ولا نوابض — نطاق 150–300 يُبقي كل إيماءة طبقات بصوت واحد مع انزلاق الشريط نفسه.",
      },
      {
        strong: "الحركة المخفّضة ليست اختيارية.",
        text: "القاعدة العامة تحوّل duration-300 إلى ما يكاد يكون فورياً لمستخدمي prefers-reduced-motion — والطبقات العلوية أكبر المستفيدين. طبقة لا تُستعمل إلا بحركتها، طبقة صُممت خطأً.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "150–300 ملي ثانية لكل تحول طبقي.",
      "transform/opacity فقط — لا خصائص تخطيط أبداً.",
      "التركيز يعود إلى الزرّ عند الإغلاق (مُبتكَر).",
    ],
    dontItems: [
      "نوابض أو ترتدادات أو تأخير فوق 300.",
      "تحريك width/height/top على طبقة.",
      "حركة تتجاهل prefers-reduced-motion.",
    ],
  },
];

const ar: PageData = {
  slug: "components/core-ui/overlayers",
  accent: "#af52de",
  hero: {
    title: "الطبقات العلوية",
    intro:
      "كل ما يعوم فوق الصفحة — درج، قائمة، بطاقة منبثقة، كروم لاصق — يعيش بعقد واحد: طبقة واحدة تملك الشاشة، والخلفية تعتيم وتُغلق، وكل مخرج إيماءة واحدة. الإنتاج يُشحن أصلاً بالدرج وقائمة اللغة الزجاجية الداكنة وبطاقة الخريطة المنبثقة وانزلاق الشريط؛ وهذه الصفحة تربطها في نظام واحد وتوسم اقترانات لوحة المفاتيح التي يدين بها الإنتاج (Esc، حصر التركيز، أدوار listbox) بوصفها قائمة التبنّي القادم.",
  },
  sections: [...arA, ...arB, ...arC, ...arD],
};

const frA: Section[] = [
  { kind: "heading", id: "drawer", number: "01", title: "Le tiroir" },
  {
    kind: "paragraph",
    text: "Le seul overlay réel du produit est le tiroir mobile — fixed inset-0 z-[100], lg:hidden, avec un arrière-plan bg-black/40 et un panneau blanc w-[300px] qui gère son propre défilement (overflow-y-auto) pendant que la page gèle derrière lui (verrou de défilement du body). Les liens sont des rangées pleine largeur — border-b, py-3.5, hover:text-brand-300 — et le CTA coiffe le panneau en barre h-11 bg-brand-300. Spécimen vivant — cliquez le pill, cliquez l'arrière-plan :",
  },
  {
    kind: "overlayerDemo",
    variant: "drawer",
    label: "Tiroir mobile — cliquez pour ouvrir, l'arrière-plan pour fermer",
    tags: ["fixed inset-0 · z-[100] · lg:hidden", "arrière-plan noir 40% · le clic ferme", "panneau 300px · verrou de défilement"],
    tTitle: "Essayez",
    tToggle: "Menu",
    tLinks: ["Accueil", "Produits", "Projets", "Actualités", "À propos", "Contact"],
    tCta: "Demander un devis",
    note: "SiteNavBar.tsx verbatim : z-[100], arrière-plan bg-black/40, panneau w-[300px] blanc shadow-xl overflow-y-auto, verrou de défilement du body quand ouvert. Rangées border-b py-3.5 hover:text-brand-300 ; CTA h-11 bg-brand-300. La démo ajoute un glissement 300ms que la production n'a pas — elle s'affiche instantanément ; le mouvement est INVENTÉ et borné par prefers-reduced-motion.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Une seule couche possède l'écran.",
        text: "Quand le tiroir s'ouvre, rien ne lui dispute la scène : l'arrière-plan assombrit la page à 40% de noir, le body cesse de défiler, et le panneau est la seule surface. z-[100] est le plafond — au-dessus du z-50 de la navbar — et rien d'autre dans le produit ne peut le revendiquer.",
      },
      {
        strong: "Chaque sortie est un même geste.",
        text: "Le clic sur l'arrière-plan ferme (l'arrière-plan est un label de la bascule — la démo le fait vraiment). Esc ferme. Le CTA et chaque lien naviguent, ce qui démonte le tiroir. Pairage INVENTÉ : Esc + le focus retourne au déclencheur à la fermeture ; la production n'a pas encore de handler Esc — à une ligne useEffect d'être vrai.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Plafond z-[100] pour les overlays, au-dessus du z-50 de la navbar.",
      "Arrière-plan bg-black/40 ; le clic ferme.",
      "Verrou de défilement du body tant que la couche est ouverte.",
    ],
    dontItems: [
      "Une seconde couche empilée au-dessus de la première.",
      "Défiler la page derrière un tiroir ouvert.",
      "Fermer uniquement via le X — l'arrière-plan doit fermer aussi.",
    ],
  },
];

const frB: Section[] = [
  { kind: "heading", id: "dropdown", number: "02", title: "Le menu déroulant" },
  {
    kind: "paragraph",
    text: "Le sélecteur de langue est le seul menu de la production — et il a choisi le verre sombre. Le déclencheur est un pill h-9, bg-black/20 backdrop-blur, qui s'assombrit au survol ; le menu pend à top-full mt-2, z-50, min-w-[160px], en bg-black/80 backdrop-blur avec shadow-lg. Le chevron pivote de 180° à l'ouverture. Les options sont des rangées role=option — la sélection porte bg-white/10 semi-bold, les autres text-white/80 :",
  },
  {
    kind: "overlayerDemo",
    variant: "dropdown",
    label: "Sélecteur de langue — verre sombre, top-full",
    tags: [
      "déclencheur h-9 · noir 20% · backdrop-blur",
      "menu top-full mt-2 · z-50 · noir 80%",
      "role=listbox INVENTÉ · options role=option",
    ],
    tTrigger: "Langue",
    tOptions: ["Français", "English", "العربية"],
    tSelected: "Français",
    note: "LanguageSwitcher.tsx verbatim : déclencheur bg-black/20 hover:bg-black/30 backdrop-blur, chevron rotate-180 duration-150, menu absolute right-0 top-full z-50 mt-2 min-w-[160px] bg-black/80 backdrop-blur shadow-lg, options role=option avec bg-white/10 semi-bold pour la sélection. LACUNE — la production n'embarque ni role=listbox sur le menu ni aria-expanded sur le déclencheur ; les deux sont INVENTÉS ici comme le pairage à adopter. La navigation flèches : inventée aussi — un pattern listbox natif.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Les menus peuvent être verre ; jamais les options.",
        text: "La surface verre sombre est la signature de la production pour tout ce qui flotte sur des images. Mais l'option sélectionnée reste une rangée blanc plein semi-bold — la texture du verre ne taxe jamais le contraste du texte. white/10 est le plancher des fonds de survol, jamais du texte.",
      },
      {
        strong: "Le déclencheur parle au nom du menu.",
        text: "Pairage INVENTÉ : aria-expanded sur le déclencheur, role=listbox sur le menu, aria-selected sur les options — le navigateur peut alors annoncer « Langue, menu, replié » avant tout clic. La production a déjà role=option ; il ne lui manque que les deux rôles parents.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Menu à top-full mt-2, aligné au bord final du déclencheur.",
      "Option sélectionnée : bg-white/10 + semi-bold, jamais une seule coche.",
      "Pairage aria-expanded + role=listbox (inventé, adoptez-le).",
    ],
    dontItems: [
      "Menus de plus de 240px pour trois options.",
      "Texte d'option sous le contraste plein sur verre.",
      "Ouvrir un second menu pendant qu'un autre est ouvert.",
    ],
  },
];

const frC: Section[] = [
  { kind: "heading", id: "pins", number: "03", title: "Épingles de carte & popovers" },
  {
    kind: "paragraph",
    text: "La carte des implantations est un système de popovers sur une toile couleur marque. Les épingles sont des cercles — border-2 border-brand-300 — qui passent de h-7 à h-9 et se remplissent de brand-300 avec un point blanc à l'activation (scale-110). La carte d'infos de l'épingle active apparaît avec le seul keyframe écrit par la production : animate-[fadeIn_180ms_ease] — carte blanche bordée system-200, p-5, portant l'adresse et une action d'itinéraire. Sur mobile toute la carte est un disclosure — le toggle h-10 « Vue carte » échange liste et carte :",
  },
  {
    kind: "overlayerDemo",
    variant: "pins",
    label: "États de l'épingle + la carte d'infos qui répond",
    tags: [
      "épingle inactive h-7 · border-2 · scale-105",
      "épingle active h-9 · scale-110 · pleine",
      "carte fadeIn 180ms · border-system-200",
    ],
    tCard: "Alger — Campus principal",
    tBody: "Rue des Écoles, Hydra, Alger",
    tDirs: "Itinéraire",
    note: "LocationsMap.tsx verbatim : épingles rounded-full border-2 border-brand-300, inactive h-7 w-7 bg-white avec point brand et hover:scale-105, active h-9 w-9 bg-brand-300 blanc scale-110 (z-10) ; carte animate-[fadeIn_180ms_ease] border border-system-200 bg-white p-5 ; carte mobile derrière un disclosure h-10. Une seule carte à la fois — l'épingle active est la source unique.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "L'épingle est le bouton ; la carte est la réponse.",
        text: "Une épingle sans carte est de la décoration ; une carte sans son épingle, du contexte perdu. Ils voyagent en une seule unité — sélectionner une épingle échange le contenu de la carte et rejoue le fade de 180ms, pour que l'œil se ré-ancre. Une seule carte existe jamais.",
      },
      {
        strong: "Petite exprès, plus grande choisie.",
        text: "h-7 au repos garde la toile lisible quand les épingles se multiplient ; h-9 + scale-110 à l'activation est l'affordance de sélection du système — le même « grandis, ne brille pas » que les boutons. La couleur du point s'inverse (brand-sur-blanc devient blanc-sur-brand) pour doubler le signal au-delà de la seule taille.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "Une épingle active et une carte à la fois.",
      "Sélection = remplissage brand-300 + scale-110.",
      "Contenu de carte indexé sur l'épingle, fade 180ms.",
    ],
    dontItems: [
      "Plusieurs popovers ouverts sur une même toile.",
      "Épingles sous 28px ou au-dessus de 36px.",
      "Une carte qui saute de position à chaque sélection.",
    ],
  },
];

const frD: Section[] = [
  { kind: "heading", id: "motion", number: "04", title: "Mouvement & fermeture" },
  {
    kind: "paragraph",
    text: "La production n'a écrit qu'un seul mouvement d'overlay : le masquage de la navbar au défilement — translate-y-0 vers -translate-y-full, duration-300, sur l'en-tête collant (bg-white/95 backdrop-blur en clair, bg-black/80 en sombre). Le tiroir et le dropdown s'ouvrent aujourd'hui sans transitions — ils s'affichent instantanément. La guideline garde le mouvement réel de la production et fixe une bande 150–300ms pour les inventés (chevron 150, glissement tiroir 300, fade carte 180) :",
  },
  {
    kind: "overlayerDemo",
    variant: "motion",
    label: "La bande : un glissement de navbar, deux portés inventés",
    tags: [
      "visible · translate-y-0",
      "masqué · -translate-y-full · duration-300",
      "bande 150–300ms · INVENTÉ · borné par reduced-motion",
    ],
    tShow: "Navbar — en haut de page",
    tHide: "Navbar — masquée au défilement",
    tBand: "150 chevron · 180 carte · 300 tiroir & navbar",
    note: "Navbar : SiteNavBar.tsx verbatim — transition-transform duration-300 entre translate-y-0 et -translate-y-full, l'état masqué avec opacity-0 aussi dans la démo pour l'impression. La bande 150–300ms : INVENTÉE — elle unifie chevron (150, verbatim), carte (180, verbatim) et glissement tiroir (300, inventé). Le tout borné par la règle globale prefers-reduced-motion : les transitions deviennent quasi instantanées.",
  },
  {
    kind: "callout",
    paragraphs: [
      {
        strong: "Le mouvement annonce ; il ne joue pas la comédie.",
        text: "Un tiroir glisse pour que l'œil sache d'où il vient ; une carte fade pour que l'œil sache ce qui a changé. Rien ne rebondit, rien ne fait de spring — la bande 150–300ms garde chaque geste de couche dans la même voix que le glissement propre de la navbar.",
      },
      {
        strong: "Le mouvement réduit n'est pas optionnel.",
        text: "La règle globale convertit déjà duration-300 en quasi-instantané pour les utilisateurs de prefers-reduced-motion — les overlays en sont les plus grands bénéficiaires. Une couche qui doit animer pour être utilisable est une couche mal conçue.",
      },
    ],
  },
  {
    kind: "dodont",
    doItems: [
      "150–300ms pour chaque transition de couche.",
      "transform/opacity seulement — jamais de propriétés de layout.",
      "Le focus retourne au déclencheur à la fermeture (inventé).",
    ],
    dontItems: [
      "Springs, rebonds ou délais au-delà de 300ms.",
      "Animer width/height/top sur une couche.",
      "Un mouvement qui ignore prefers-reduced-motion.",
    ],
  },
];

const fr: PageData = {
  slug: "components/core-ui/overlayers",
  accent: "#af52de",
  hero: {
    title: "Calques",
    intro:
      "Tout ce qui flotte au-dessus de la page — tiroir, menu, popover, chrome collant — vit sous un contrat unique : une seule couche possède l'écran, l'arrière-plan assombrit et ferme, et chaque sortie est le même geste. La production embarque déjà le tiroir, le menu langue en verre sombre, le popover carte et le glissement de navbar ; cette page les lie en un système et tague les pairages clavier que la production doit encore (Esc, piège de focus, rôles listbox) comme la liste à-adopter.",
  },
  sections: [...frA, ...frB, ...frC, ...frD],
};

export const overlayers: Localized<PageData> = { en, ar, fr };












