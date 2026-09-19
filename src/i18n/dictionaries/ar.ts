import type { Dictionary } from "../dictionary";

export const ar: Dictionary = {
  metadata: {
    title: "مجموعة الفتح - إرشادات التصميم",
    description:
      "إرشادات تصميم مجموعة الفتح — مرجع داخلي لفِرق المنتج والهندسة. الأسس والأنماط والمكوّنات والتقنيات.",
  },
  nav: {
    sections: {
      "get-started": "البدء",
      foundation: "الأساس",
      "core-ui": "الواجهة الأساسية",
      content: "مكوّنات المحتوى",
    },
    items: {
      "/guidelines/get-started/design-principles": {
        title: "مبادئ التصميم",
        description: "أربعة مبادئ ثابتة تعكس طبيعة المجموعة منذ 1984",
      },
      "/guidelines/foundations/accessibility": {
        title: "إرشادات الوصولية",
        description: "تصميم شامل يمكن الجميع من الوصول والفهم",
      },
      "/guidelines/foundations/branding": {
        title: "الهوية البصرية",
        description: "الشعار والأصناف والاستعمالات",
      },
      "/guidelines/foundations/colors": {
        title: "الألوان",
        description: "اللوحة والرموز والاستعمال",
      },
      "/guidelines/foundations/icons": {
        title: "الأيقونات",
        description: "نظام Hugeicons والإرشادات",
      },
      "/guidelines/foundations/images": {
        title: "الصور",
        description: "الصور والرسوم والتوضيح",
      },
      "/guidelines/foundations/layout": {
        title: "التخطيط",
        description: "الشبكة والمسافات والبنية",
      },
      "/guidelines/foundations/rtl": {
        title: "RTL",
        description: "النصوص من اليمين لليسار وثنائية الاتجاه",
      },
      "/guidelines/foundations/typography": {
        title: "الخطوط والطباعة",
        description: "مقياس الخط ونظام الخطوط",
      },
      "/guidelines/components/core-ui/buttons": {
        title: "الأزرار",
        description: "أساسي وثانوي وشفاف",
      },
      "/guidelines/components/core-ui/inputs": {
        title: "حقول الإدخال",
        description: "حقول النص والمناطق",
      },
      "/guidelines/components/core-ui/selection-controls": {
        title: "أدوات الاختيار",
        description: "مربعات وأزرار ومفاتيح",
      },
      "/guidelines/components/core-ui/feedback": {
        title: "التغذية الراجعة",
        description: "تنبيهات وإشعارات وتقدم",
      },
      "/guidelines/components/core-ui/overlayers": {
        title: "النوافذ العلوية",
        description: "نوافذ منبثقة وأوراق وقوائم",
      },
      "/guidelines/components/content/cards": {
        title: "البطاقات",
        description: "حاويات المحتوى والمعاينات",
      },
      "/guidelines/components/content/data": {
        title: "البيانات",
        description: "جداول وقوائم وعروض بيانات",
      },
      "/guidelines/components/content/media": {
        title: "الوسائط",
        description: "فيديو وصوت ومعارض",
      },
    },
  },
  topnav: {
    developer: "المطوّر",
    openNav: "فتح التنقل",
    closeNav: "إغلاق التنقل",
    closeOverlay: "إغلاق طبقة التنقل",
  },
  search: {
    trigger: "ابحث في الدليل",
    placeholder: "بحث",
    close: "إغلاق",
    noResults: "لا نتائج",
    typeToSearch: "اكتب للبحث",
  },
  sidebar: {
    label: "الدليل",
  },
  home: {
    heading: "إرشادات التصميم",
    subheading: "أساس منتجات مجموعة الفتح.",
  },
  theme: {
    toggle: "تبديل المظهر",
    toLight: "التبديل إلى الوضع الفاتح",
    toDark: "التبديل إلى الوضع الداكن",
    systemLabel: "النظام",
  },
  lang: {
    label: "تغيير اللغة",
  },
  common: {
    comingSoon: "المحتوى قادم قريبًا.",
  },
  demos: {
    contrast: {
      columns: { pair: "الزوج اللوني", ratio: "النسبة", aa: "المطلوب AA", status: "الحالة" },
      passLabel: "ناجح",
      failLabel: "راسب",
      rows: [
        { pair: "نص أساسي #1d1d1f على #ffffff", ratio: "16.1:1", need: "4.5:1", ok: true },
        { pair: "نص ثانوي #515154 على #ffffff", ratio: "7.8:1", need: "4.5:1", ok: true },
        { pair: "نص muted #6e6e73 على #ffffff", ratio: "4.9:1", need: "4.5:1", ok: true },
        { pair: "نص muted #86868b على #ffffff", ratio: "3.4:1", need: "4.5:1", ok: false },
        { pair: "أزرق Apple #0071e3 على #ffffff", ratio: "4.5:1", need: "4.5:1", ok: true },
        { pair: "أزرق على #f5f5f7", ratio: "4.2:1", need: "4.5:1", ok: false },
      ],
      footnote:
        "اختبر أي لون جديد بـ WebAIM Contrast Checker. النجاح = 4.5:1 للنص العادي، 3:1 للنص الكبير والحدود.",
    },
    tokens: {
      use: ["عناوين ونص أساسي", "وصف ثانوي", "خلفية", "روابط وأزرار", "أخطاء", "نجاح"],
      footnote: "الرموز الدلالية تربط القصد باللون؛ لا تستعمل HEX الخام في كود المكوّن.",
    },
    spacing: {
      caption: "نظام 8px — مضاعفات ثابتة",
      footnote: "اترك تنفّسًا حول كل كتلة. التخطيط يبقى مقروءًا عند 200% تكبير، تباعد أسطر 1.4–1.6.",
    },
    touch: {
      textStart: "الحد الأدنى للمس",
      textEnd: "مع فاصل 8px. الأصغر يسبب نقرًا خاطئًا.",
    },
    motion: {
      intro: "حركة وظيفية 200–300ms فقط. توضح علاقة، لا تزين.",
      footnote: "احترم «تقليل الحركة» ووفّر تلاشيًا بسيطًا بدل حركة كبيرة.",
    },
    alt: {
      items: [
        "صورة معلومة — alt وصفي: \"واجهة مصنع الفتح للحديد — عنابة\"",
        "زخرفية فقط — alt=\"\" فارغ، لا يقرأها قارئ الشاشة",
        "لا تترك alt فارغًا لصورة معلومة، ولا تكرر \"صورة1.jpg\"",
      ],
    },
    pageGoal: {
      label: "ABOVE THE FOLD — 5 ثوانٍ",
      title: "عنوان واضح + دعم رقمي + CTA واحد",
      body: "تعرّف على قطاعاتنا → دعوة فعل واحدة غير متنافسة. لا تُغرق الشاشة الأولى بكل شيء.",
      cta: "تواصل معنا ←",
    },
  },
};