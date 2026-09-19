import { CubeIcon, ViewIcon, Link01Icon, Award01Icon } from "@hugeicons/core-free-icons";
import type { Localized } from "@/lib/pages/types";

export type PrinciplesData = {
  slug: string;
  title: string;
  intro: string;
  items: { title: string; icon: unknown; color: string; text: string }[];
};

export const designPrinciples: Localized<PrinciplesData> = {
  ar: {
    slug: "get-started/design-principles",
    title: "مبادئ التصميم",
    intro:
      "في كل تفصيلة بصرية لمجموعة الفتح، من الشعار إلى الموقع الإلكتروني، ومن تغليف المنتج إلى لافتة الموقع الصناعي، نستند إلى أربعة مبادئ ثابتة. هذه المبادئ لا تصف \"شكل\" الهوية فحسب، بل تعكس طبيعة المجموعة ذاتها: قاعدة صناعية متينة، وحضور وطني ممتد منذ 1984.",
    items: [
      {
        title: "الصلابة",
        icon: CubeIcon,
        color: "#0071e3",
        text: "التصميم يبني الثقة لا يوحي بها. بدقة صناعية، زوايا حادة، شبكة صارمة، ومساحات متماسكة بألوان راسخة، نترجم ما نصنعه فعليًا: هياكل ومواد ومصانع على الأرض. كل عنصر يحمل وزنًا باحترافية تنفيذ، لا زخرفة عابرة.",
      },
      {
        title: "الوضوح",
        icon: ViewIcon,
        color: "#34c759",
        text: "المحتوى أهم من إطاره. بتباين عالٍ، ظلال عميقة وإضاءة مركزة بتجربة سينمائية نظيفة، نوجّه العين فورًا إلى المهم. الأرقام والقطاعات تُعرض بمباشرة فاخرة دون حجب، فيفهم الزائر \"من نحن وماذا نفعل\" خلال ثوانٍ.",
      },
      {
        title: "الانسجام",
        icon: Link01Icon,
        color: "#af52de",
        text: "قطاعان مختلفان بهدف واحد. يمتد نظام موحّد، ألوان وشبكة وطباعة، عبر كل منتج وموقع. ندمج الخط العربي الأصيل بجماليات عالمية حديثة، فيشعر المستخدم أمام كيان واحد متماسك، لا مشاريع متفرقة.",
      },
      {
        title: "الأصالة",
        icon: Award01Icon,
        color: "#ff9500",
        text: "أربعة عقود ميدانية لا تُختزل في موضة لحظية. نفضّل هوية تصمد، كشبكة Masonry بأربعة أعمدة، كثافة عالية وبدون فواصل، حيث يُختبر كل قرار، من اللون إلى الجملة: هل يعكس مؤسسة تأسست 1984 وما تزال تبني بثبات؟",
      },
    ],
  },
  en: {
    slug: "get-started/design-principles",
    title: "Design Principles",
    intro:
      "In every visual detail of the El Fath group — from the logo to the website, from packaging to the factory sign — we rely on four principles that mirror what our base actually is: an industrial plant at work since 1984. Solidity that is built. Clarity that is seen. Harmony that is felt. Authenticity that endures.",
    items: [
      {
        title: "Solidity",
        icon: CubeIcon,
        color: "#0071e3",
        text: "Design builds trust, it doesn't suggest it. With industrial precision, sharp corners, a strict grid, and spaces held together by firmly established colors, we translate what we actually make: structures, materials, and factories on the ground. Every element carries real weight, delivered with professional execution — not fleeting ornament.",
      },
      {
        title: "Clarity",
        icon: ViewIcon,
        color: "#34c759",
        text: "Content matters more than its frame. With high contrast, deep shadows, and focused lighting in a clean cinematic experience, we guide the eye straight to what matters. Numbers and sectors are presented with directness, unshielded, so a visitor understands \"who we are and what we do\" within seconds.",
      },
      {
        title: "Harmony",
        icon: Link01Icon,
        color: "#af52de",
        text: "Two different sectors with one purpose. A unified system — colors, grid, and typography — extends across every product and site. We blend authentic Arabic type with modern global aesthetics, so the user faces a single coherent entity, not scattered projects.",
      },
      {
        title: "Authenticity",
        icon: Award01Icon,
        color: "#ff9500",
        text: "Four decades in the field cannot be reduced to a passing trend. We favor an identity that endures, like a four-column Masonry grid, high density and no gaps, where every decision — from color to sentence — is tested: does it reflect an institution founded in 1984 that is still building with conviction?",
      },
    ],
  },
  fr: {
    slug: "get-started/design-principles",
    title: "Principes de conception",
    intro:
      "Dans chaque détail visuel du groupe El Fath — du logo au site web, de l'emballage à l'enseigne de l'usine — nous nous appuyons sur quatre principes qui reflètent ce qu'est réellement notre base : une unité industrielle en activité depuis 1984. Une solidité qui se construit. Une clarté qui se voit. Une harmonie qui se ressent. Une authenticité qui dure.",
    items: [
      {
        title: "Solidité",
        icon: CubeIcon,
        color: "#0071e3",
        text: "Le design construit la confiance, il ne la suggère pas. Avec une précision industrielle, des angles nets, une grille stricte, et des espaces tenus par des couleurs solidement établies, nous traduisons ce que nous fabriquons réellement : des structures, des matériaux et des usines sur le terrain. Chaque élément porte un poids réel, livré avec une exécution professionnelle — jamais un ornement éphémère.",
      },
      {
        title: "Clarté",
        icon: ViewIcon,
        color: "#34c759",
        text: "Le contenu compte plus que son cadre. Avec un contraste élevé, des ombres profondes et un éclairage ciblé dans une expérience cinématographique épurée, nous guidons immédiatement le regard vers l'essentiel. Les chiffres et les secteurs sont présentés avec une franchise directe, sans artifice, pour qu'un visiteur comprenne « qui nous sommes et ce que nous faisons » en quelques secondes.",
      },
      {
        title: "Harmonie",
        icon: Link01Icon,
        color: "#af52de",
        text: "Deux secteurs différents avec un seul objectif. Un système unifié — couleurs, grille et typographie — s'étend à chaque produit et à chaque site. Nous mêlons l'écriture arabe authentique aux esthétiques mondiales modernes, pour que l'utilisateur fasse face à une entité cohérente, et non à des projets éparpillés.",
      },
      {
        title: "Authenticité",
        icon: Award01Icon,
        color: "#ff9500",
        text: "Quatre décennies de terrain ne se réduisent pas à une tendance passagère. Nous privilégions une identité qui dure, comme une grille Masonry à quatre colonnes, haute densité et sans espacement, où chaque décision — de la couleur à la phrase — est testée : reflète-t-elle une institution fondée en 1984 qui construit encore avec conviction ?",
      },
    ],
  },
};
