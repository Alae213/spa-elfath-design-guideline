import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  metadata: {
    title: "SPA El Fath - Design Guidelines",
    description:
      "SPA El Fath Design Guidelines - Human Interface Guidelines clone for internal product reference. Foundations, patterns, components, technologies.",
  },
  nav: {
    sections: {
      "get-started": "Get Started",
      foundation: "Foundation",
      "core-ui": "Core UI",
      content: "Content Components",
    },
    items: {
      "/guidelines/get-started/design-principles": {
        title: "Design Principles",
        description: "Core principles shaping every interface",
      },
      "/guidelines/foundations/accessibility": {
        title: "Accessibility",
        description: "Inclusive design for everyone",
      },
      "/guidelines/foundations/branding": {
        title: "Branding",
        description: "Identity, logo and brand usage",
      },
      "/guidelines/foundations/colors": {
        title: "Colors",
        description: "Palette, tokens and usage",
      },
      "/guidelines/foundations/icons": {
        title: "Icons",
        description: "Hugeicons system and guidance",
      },
      "/guidelines/foundations/images": {
        title: "Images",
        description: "Imagery, illustration and photos",
      },
      "/guidelines/foundations/layout": {
        title: "Layout",
        description: "Grid, spacing and structure",
      },
      "/guidelines/foundations/rtl": {
        title: "RTL",
        description: "Right-to-left and bidirectional",
      },
      "/guidelines/foundations/typography": {
        title: "Typography",
        description: "Type scale and font system",
      },
      "/guidelines/components/core-ui/buttons": {
        title: "Buttons",
        description: "Primary, secondary and ghost",
      },
      "/guidelines/components/core-ui/inputs": {
        title: "Inputs",
        description: "Text fields and areas",
      },
      "/guidelines/components/core-ui/selection-controls": {
        title: "Selection Controls",
        description: "Checkboxes, radios, switches",
      },
      "/guidelines/components/core-ui/feedback": {
        title: "Feedback",
        description: "Alerts, toasts and progress",
      },
      "/guidelines/components/core-ui/overlayers": {
        title: "Overlayers",
        description: "Modals, sheets and popovers",
      },
      "/guidelines/components/content/cards": {
        title: "Cards",
        description: "Content containers and previews",
      },
      "/guidelines/components/content/data": {
        title: "Data",
        description: "Tables, lists and data views",
      },
      "/guidelines/components/content/media": {
        title: "Media",
        description: "Video, audio and galleries",
      },
    },
  },
  topnav: {
    developer: "Guidelines",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    closeOverlay: "Close navigation overlay",
  },
  search: {
    trigger: "Search guidelines",
    placeholder: "Search",
    close: "Close",
    noResults: "No results",
    typeToSearch: "Type to search",
  },
  sidebar: {
    label: "Guidelines",
  },
  home: {
    heading: "Design Guidelines",
    subheading: "Foundation for SPA El Fath.",
  },
  theme: {
    toggle: "Toggle theme",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    systemLabel: "System",
  },
  lang: {
    label: "Change language",
  },
  common: {
    comingSoon: "Content coming soon.",
  },
  demos: {
    contrast: {
      columns: { pair: "Color pair", ratio: "Ratio", aa: "AA needed", status: "Status" },
      passLabel: "Pass",
      failLabel: "Fail",
      rows: [
        { pair: "Primary text #1d1d1f on #ffffff", ratio: "16.1:1", need: "4.5:1", ok: true },
        { pair: "Secondary text #515154 on #ffffff", ratio: "7.8:1", need: "4.5:1", ok: true },
        { pair: "Muted text #6e6e73 on #ffffff", ratio: "4.9:1", need: "4.5:1", ok: true },
        { pair: "Muted text #86868b on #ffffff", ratio: "3.4:1", need: "4.5:1", ok: false },
        { pair: "Apple blue #0071e3 on #ffffff", ratio: "4.5:1", need: "4.5:1", ok: true },
        { pair: "Blue on #f5f5f7", ratio: "4.2:1", need: "4.5:1", ok: false },
      ],
      footnote:
        "Always validate new colors with the WebAIM Contrast Checker. Pass = 4.5:1 for body text, 3:1 for large text and boundaries.",
    },
    tokens: {
      use: ["Headings and body text", "Secondary description", "Background", "Links and buttons", "Errors", "Success"],
      footnote: "Semantic tokens map intent to color; never use raw hex values in component code.",
    },
    spacing: {
      caption: "8px system — fixed multiples",
      footnote: "Give every block room to breathe. Layout stays readable at 200% zoom, line-height 1.4–1.6.",
    },
    touch: {
      textStart: "Minimum touch target",
      textEnd: "with an 8px gap. Anything smaller causes accidental taps.",
    },
    motion: {
      intro: "Functional motion only, 200–300ms. It explains a relationship, it doesn't decorate.",
      footnote: "Respect prefers-reduced-motion and offer a simple fade instead of large motion.",
    },
    alt: {
      items: [
        "Informative image — a descriptive alt: \"El Fath steel factory facade — Annaba\"",
        "Decorative only — empty alt=\"\", screen readers will skip it",
        "Never leave alt empty for an informative image, or repeat \"image1.jpg\"",
      ],
    },
    pageGoal: {
      label: "ABOVE THE FOLD — 5 SECONDS",
      title: "Clear heading + numeric proof + one CTA",
      body: "Discover our sectors → a single uncompeting action. Don't flood the first screen with everything.",
      cta: "Contact us →",
    },
  },
};