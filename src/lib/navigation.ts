import {
  Idea01Icon,
  AccessibilityIcon,
  PaintBoardIcon,
  ColorsIcon,
  Layers01Icon,
  Image01Icon,
  Layout01Icon,
  RightToLeftListTriangleIcon,
  TextFontIcon,
  Touch01Icon,
  InputTextIcon,
  ToggleOnIcon,
  ChatFeedbackIcon,
  GroupLayersIcon,
  Cards01Icon,
  Database01Icon,
  PlayCircleIcon,
} from "@hugeicons/core-free-icons";
export type NavItem = {
  title: string;
  href: string;
  description?: string;
  // Hugeicons icon object - IconSvgObject from @hugeicons/core-free-icons
  icon: unknown;
};

export type NavSection = {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
};

export const navigation: NavSection[] = [
  {
    title: "Get Started",
    defaultOpen: true,
    items: [
      {
        title: "Design Principles",
        href: "/guidelines/get-started/design-principles",
        description: "Core principles shaping every interface",
        icon: Idea01Icon,
      },
    ],
  },
  {
    title: "Foundation",
    defaultOpen: true,
    items: [
      {
        title: "Accessibility",
        href: "/guidelines/foundations/accessibility",
        description: "Inclusive design for everyone",
        icon: AccessibilityIcon,
      },
      {
        title: "Branding",
        href: "/guidelines/foundations/branding",
        description: "Identity, logo and brand usage",
        icon: PaintBoardIcon,
      },
      {
        title: "Colors",
        href: "/guidelines/foundations/colors",
        description: "Palette, tokens and usage",
        icon: ColorsIcon,
      },
      {
        title: "Icons",
        href: "/guidelines/foundations/icons",
        description: "Hugeicons system and guidance",
        icon: Layers01Icon,
      },
      {
        title: "Images",
        href: "/guidelines/foundations/images",
        description: "Imagery, illustration and photos",
        icon: Image01Icon,
      },
      {
        title: "Layout",
        href: "/guidelines/foundations/layout",
        description: "Grid, spacing and structure",
        icon: Layout01Icon,
      },
      {
        title: "RTL",
        href: "/guidelines/foundations/rtl",
        description: "Right-to-left and bidirectional",
        icon: RightToLeftListTriangleIcon,
      },
      {
        title: "Typography",
        href: "/guidelines/foundations/typography",
        description: "Type scale and font system",
        icon: TextFontIcon,
      },
    ],
  },
  {
    title: "Core UI",
    defaultOpen: true,
    items: [
      {
        title: "Buttons",
        href: "/guidelines/components/core-ui/buttons",
        description: "Primary, secondary and ghost",
        icon: Touch01Icon,
      },
      {
        title: "Inputs",
        href: "/guidelines/components/core-ui/inputs",
        description: "Text fields and areas",
        icon: InputTextIcon,
      },
      {
        title: "Selection Controls",
        href: "/guidelines/components/core-ui/selection-controls",
        description: "Checkboxes, radios, switches",
        icon: ToggleOnIcon,
      },
      {
        title: "Feedback",
        href: "/guidelines/components/core-ui/feedback",
        description: "Alerts, toasts and progress",
        icon: ChatFeedbackIcon,
      },
      {
        title: "Overlayers",
        href: "/guidelines/components/core-ui/overlayers",
        description: "Modals, sheets and popovers",
        icon: GroupLayersIcon,
      },
    ],
  },
  {
    title: "Content Components",
    defaultOpen: true,
    items: [
      {
        title: "Cards",
        href: "/guidelines/components/content/cards",
        description: "Content containers and previews",
        icon: Cards01Icon,
      },
      {
        title: "Data",
        href: "/guidelines/components/content/data",
        description: "Tables, lists and data views",
        icon: Database01Icon,
      },
      {
        title: "Media",
        href: "/guidelines/components/content/media",
        description: "Video, audio and galleries",
        icon: PlayCircleIcon,
      },
    ],
  },
];

export function getBreadcrumbs(pathname: string): { title: string; href: string }[] {
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);
  const crumbs: { title: string; href: string }[] = [];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const title = seg
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
    crumbs.push({ title, href: acc });
  }
  return crumbs;
}

export function findNavItem(href: string): NavItem | undefined {
  for (const sec of navigation) {
    const f = sec.items.find((i) => i.href === href);
    if (f) return f;
  }
  return undefined;
}

export function findNavItemBySlug(slug: string[]): NavItem | undefined {
  const href = `/guidelines/${slug.join("/")}`;
  return findNavItem(href);
}
