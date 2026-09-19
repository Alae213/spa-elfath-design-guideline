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
