import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
  metadata: {
    title: "SPA El Fath - Principes de conception",
    description:
      "Principes de conception SPA El Fath - un clone des Human Interface Guidelines comme référence interne des produits. Fondations, motifs, composants, technologies.",
  },
  nav: {
    sections: {
      "get-started": "Démarrage",
      foundation: "Fondations",
      "core-ui": "Interface de base",
      content: "Composants de contenu",
    },
    items: {
      "/guidelines/get-started/design-principles": {
        title: "Principes de conception",
        description: "Les principes qui façonnent chaque interface",
      },
      "/guidelines/foundations/accessibility": {
        title: "Accessibilité",
        description: "Un design inclusif pour tous",
      },
      "/guidelines/foundations/branding": {
        title: "Identité visuelle",
        description: "Identité, logo et usage de la marque",
      },
      "/guidelines/foundations/colors": {
        title: "Couleurs",
        description: "Palette, tokens et usage",
      },
      "/guidelines/foundations/icons": {
        title: "Icônes",
        description: "Système Hugeicons et recommandations",
      },
      "/guidelines/foundations/images": {
        title: "Images",
        description: "Photographies, illustrations et imagerie",
      },
      "/guidelines/foundations/layout": {
        title: "Disposition",
        description: "Grille, espacements et structure",
      },
      "/guidelines/foundations/rtl": {
        title: "RTL",
        description: "De droite à gauche et bidi",
      },
      "/guidelines/foundations/typography": {
        title: "Typographie",
        description: "Échelle typographique et système de caractères",
      },
      "/guidelines/components/core-ui/buttons": {
        title: "Boutons",
        description: "Primaires, secondaires et fantômes",
      },
      "/guidelines/components/core-ui/inputs": {
        title: "Champs de saisie",
        description: "Champs et zones de texte",
      },
      "/guidelines/components/core-ui/selection-controls": {
        title: "Contrôles de sélection",
        description: "Cases, boutons radio, interrupteurs",
      },
      "/guidelines/components/core-ui/feedback": {
        title: "Retour utilisateur",
        description: "Alertes, notifications et progression",
      },
      "/guidelines/components/core-ui/overlayers": {
        title: "Superpositions",
        description: "Modales, feuilles et popovers",
      },
      "/guidelines/components/content/cards": {
        title: "Cartes",
        description: "Conteneurs de contenu et aperçus",
      },
      "/guidelines/components/content/data": {
        title: "Données",
        description: "Tableaux, listes et vues de données",
      },
      "/guidelines/components/content/media": {
        title: "Médias",
        description: "Vidéo, audio et galeries",
      },
    },
  },
  topnav: {
    developer: "Développeur",
    openNav: "Ouvrir la navigation",
    closeNav: "Fermer la navigation",
    closeOverlay: "Fermer la couche de navigation",
  },
  search: {
    trigger: "Rechercher dans le guide",
    placeholder: "Rechercher",
    close: "Fermer",
    noResults: "Aucun résultat",
    typeToSearch: "Tapez pour rechercher",
  },
  sidebar: {
    label: "Guide",
  },
  home: {
    heading: "Principes de conception",
    subheading: "Les fondations des produits SPA El Fath.",
  },
  theme: {
    toggle: "Changer de thème",
    toLight: "Passer au mode clair",
    toDark: "Passer au mode sombre",
    systemLabel: "Système",
  },
  lang: {
    label: "Changer de langue",
  },
  common: {
    comingSoon: "Contenu à venir.",
  },
  demos: {
    contrast: {
      columns: { pair: "Paire de couleurs", ratio: "Ratio", aa: "AA requis", status: "Statut" },
      passLabel: "Réussi",
      failLabel: "Échec",
      rows: [
        { pair: "Texte principal #1d1d1f sur #ffffff", ratio: "16.1:1", need: "4.5:1", ok: true },
        { pair: "Texte secondaire #515154 sur #ffffff", ratio: "7.8:1", need: "4.5:1", ok: true },
        { pair: "Texte atténué #6e6e73 sur #ffffff", ratio: "4.9:1", need: "4.5:1", ok: true },
        { pair: "Texte atténué #86868b sur #ffffff", ratio: "3.4:1", need: "4.5:1", ok: false },
        { pair: "Bleu Apple #0071e3 sur #ffffff", ratio: "4.5:1", need: "4.5:1", ok: true },
        { pair: "Bleu sur #f5f5f7", ratio: "4.2:1", need: "4.5:1", ok: false },
      ],
      footnote:
        "Validez toute nouvelle couleur avec WebAIM Contrast Checker. Réussite = 4.5:1 pour le texte, 3:1 pour le texte large et les contours.",
    },
    tokens: {
      use: ["Titres et texte principal", "Description secondaire", "Arrière-plan", "Liens et boutons", "Erreurs", "Succès"],
      footnote: "Les tokens sémantiques relient l'intention à la couleur ; n'employez jamais de HEX brut dans le code.",
    },
    spacing: {
      caption: "Système 8px — multiples fixes",
      footnote: "Laissez respirer chaque bloc. La mise en page reste lisible à 200 % de zoom, interligne 1.4–1.6.",
    },
    touch: {
      textStart: "Cible tactile minimale",
      textEnd: "avec un écart de 8px. Plus petit provoque des appuis accidentels.",
    },
    motion: {
      intro: "Mouvement fonctionnel uniquement, 200–300ms. Il explique une relation, il n'orne pas.",
      footnote: "Respectez prefers-reduced-motion et proposez un simple fondu au lieu d'un grand mouvement.",
    },
    alt: {
      items: [
        "Image informative — un alt descriptif : « Façade de l'usine El Fath acier — Annaba »",
        "Décorative uniquement — alt=\"\" vide, ignorée par les lecteurs d'écran",
        "Ne jamais laisser alt vide pour une image informative, ni répéter « image1.jpg »",
      ],
    },
    pageGoal: {
      label: "AU-DESSUS DE LA LIGNE — 5 SECONDES",
      title: "Titre clair + preuve chiffrée + un seul CTA",
      body: "Découvrez nos secteurs → une seule action, sans concurrence. N'inondez pas le premier écran.",
      cta: "Contactez-nous →",
    },
  },
};