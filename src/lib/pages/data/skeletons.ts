import type { Localized, PageData } from "@/lib/pages/types";

function sk(slug: string, accent: string, titles: Localized<string>, intros: Localized<string>): Localized<PageData> {
  const mk = (title: string, intro: string): PageData => ({
    slug,
    accent,
    hero: { title, intro },
    skeleton: true,
    sections: [
      {
        kind: "paragraph",
        text: intro,
      },
      {
        kind: "callout",
        paragraphs: [
          {
            strong: title + " —",
            text: "Full reference coming soon. The structure, tokens and rules will land here in the Design Principles style.",
          },
        ],
      },
    ],
  });
  // caller passes localized intros, but for localized skeleton we build per locale with localized title/intro
  // titles/intros are already per locale, so just map
  return {
    ar: mk(titles.ar, intros.ar),
    en: mk(titles.en, intros.en),
    fr: mk(titles.fr, intros.fr),
  };
}

export const skeletons: Record<string, Localized<PageData>> = {
  "components/core-ui/inputs": sk(
    "components/core-ui/inputs",
    "#5ac8fa",
    { ar: "الحقول", en: "Inputs", fr: "Champs" },
    {
      ar: "الحقول تحمل الملصق والموضع النائب والرسالة — كل حقل مرتبط بملصق ظاهر وحالة خطأ مقرونة بأيقونة ونص.",
      en: "Fields carry label, placeholder and message — every field is tied to a visible label with an error state paired to icon and text.",
      fr: "Les champs portent étiquette, placeholder et message — chaque champ est lié à une étiquette visible avec un état d'erreur associé à icône et texte.",
    },
  ),
  "components/core-ui/selection-controls": sk(
    "components/core-ui/selection-controls",
    "#34c759",
    { ar: "عناصر الاختيار", en: "Selection Controls", fr: "Contrôles de sélection" },
    {
      ar: "مفاتيح التبديل وخانات الاختيار وأزرار الاختيار — حالة واحدة واضحة في كل مرة، وهدف لمس 44×44.",
      en: "Toggles, checkboxes and radios — one clear state at a time and a 44×44 touch target.",
      fr: "Interrupteurs, cases à cocher et boutons radio — un seul état clair à la fois et une cible tactile de 44×44.",
    },
  ),
  "components/core-ui/feedback": sk(
    "components/core-ui/feedback",
    "#ff9500",
    { ar: "التغذية الراجعة", en: "Feedback", fr: "Retours" },
    {
      ar: "التنبيهات والشرائح والإشعارات — اللون مع الأيقونة والنص معًا، لا لون وحده.",
      en: "Alerts, toasts and banners — color with icon and text together, never color alone.",
      fr: "Alertes, toasts et bannières — couleur avec icône et texte ensemble, jamais la couleur seule.",
    },
  ),
  "components/core-ui/overlayers": sk(
    "components/core-ui/overlayers",
    "#af52de",
    { ar: "الطبقات العلوية", en: "Overlayers", fr: "Calques" },
    {
      ar: "النوافذ المنبثقة والأدراج والقوائم — طبقة واحدة مركّزة مع خلفية معتمة وإغلاق واضح.",
      en: "Modals, drawers and menus — one focused layer with a dimmed backdrop and clear dismiss.",
      fr: "Modales, tiroirs et menus — une seule couche focalisée avec arrière-plan atténué et fermeture claire.",
    },
  ),
  "components/content/cards": sk(
    "components/content/cards",
    "#ff2d55",
    { ar: "البطاقات", en: "Cards", fr: "Cartes" },
    {
      ar: "البطاقات تجمع الصورة والعنوان والوصف في حاوية واحدة — زوايا حادة وحدود رفيعة بلا ظلال.",
      en: "Cards group image, title and description in one container — sharp corners and thin borders, no shadows.",
      fr: "Les cartes regroupent image, titre et description dans un conteneur — angles vifs et bordures fines, sans ombres.",
    },
  ),
  "components/content/data": sk(
    "components/content/data",
    "#0a84ff",
    { ar: "البيانات", en: "Data Display", fr: "Données" },
    {
      ar: "الجداول والقوائم والإحصاءات — كثافة عالية بلا فوضى، والأرقام تُقرأ فورًا.",
      en: "Tables, lists and stats — high density without clutter, numbers read instantly.",
      fr: "Tableaux, listes et statistiques — haute densité sans encombrement, les chiffres se lisent instantanément.",
    },
  ),
  "components/content/media": sk(
    "components/content/media",
    "#ff9f0a",
    { ar: "الوسائط", en: "Media", fr: "Média" },
    {
      ar: "الصور والفيديو مع التدرج الموحّد — تشغيل فعلي مع تدرج سينمائي واحد.",
      en: "Images and video with the universal grade — real playback with one cinematic grade.",
      fr: "Images et vidéo avec le grade universel — lecture réelle avec un seul grade cinématographique.",
    },
  ),
};
