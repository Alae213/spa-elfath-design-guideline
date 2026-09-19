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
import type { Dictionary } from "@/i18n";

export type NavItem = {
  key: string;
  href: string;
  // Hugeicons icon object - IconSvgObject from @hugeicons/core-free-icons
  icon: unknown;
};

export type NavSection = {
  key: string;
  items: NavItem[];
  defaultOpen?: boolean;
};

export type LocalizedNavItem = NavItem & { title: string; description?: string };

export type LocalizedNavSection = Omit<NavSection, "items"> & { title: string; items: LocalizedNavItem[] };

export const navigation: NavSection[] = [
  {
    key: "get-started",
    defaultOpen: true,
    items: [
      {
        key: "design-principles",
        href: "/guidelines/get-started/design-principles",
        icon: Idea01Icon,
      },
    ],
  },
  {
    key: "foundation",
    defaultOpen: true,
    items: [
      {
        key: "accessibility",
        href: "/guidelines/foundations/accessibility",
        icon: AccessibilityIcon,
      },
      {
        key: "branding",
        href: "/guidelines/foundations/branding",
        icon: PaintBoardIcon,
      },
      {
        key: "colors",
        href: "/guidelines/foundations/colors",
        icon: ColorsIcon,
      },
      {
        key: "icons",
        href: "/guidelines/foundations/icons",
        icon: Layers01Icon,
      },
      {
        key: "images",
        href: "/guidelines/foundations/images",
        icon: Image01Icon,
      },
      {
        key: "layout",
        href: "/guidelines/foundations/layout",
        icon: Layout01Icon,
      },
      {
        key: "rtl",
        href: "/guidelines/foundations/rtl",
        icon: RightToLeftListTriangleIcon,
      },
      {
        key: "typography",
        href: "/guidelines/foundations/typography",
        icon: TextFontIcon,
      },
    ],
  },
  {
    key: "core-ui",
    defaultOpen: true,
    items: [
      {
        key: "buttons",
        href: "/guidelines/components/core-ui/buttons",
        icon: Touch01Icon,
      },
      {
        key: "inputs",
        href: "/guidelines/components/core-ui/inputs",
        icon: InputTextIcon,
      },
      {
        key: "selection-controls",
        href: "/guidelines/components/core-ui/selection-controls",
        icon: ToggleOnIcon,
      },
      {
        key: "feedback",
        href: "/guidelines/components/core-ui/feedback",
        icon: ChatFeedbackIcon,
      },
      {
        key: "overlayers",
        href: "/guidelines/components/core-ui/overlayers",
        icon: GroupLayersIcon,
      },
    ],
  },
  {
    key: "content",
    defaultOpen: true,
    items: [
      {
        key: "cards",
        href: "/guidelines/components/content/cards",
        icon: Cards01Icon,
      },
      {
        key: "data",
        href: "/guidelines/components/content/data",
        icon: Database01Icon,
      },
      {
        key: "media",
        href: "/guidelines/components/content/media",
        icon: PlayCircleIcon,
      },
    ],
  },
];

function localizeItem(item: NavItem, dict: Dictionary): LocalizedNavItem {
  const entry = dict.nav.items[item.href];
  return {
    ...item,
    title: entry?.title ?? item.key,
    description: entry?.description,
  };
}

export function getNavigation(dict: Dictionary): LocalizedNavSection[] {
  return navigation.map((section) => ({
    key: section.key,
    defaultOpen: section.defaultOpen,
    title: dict.nav.sections[section.key] ?? section.key,
    items: section.items.map((item) => localizeItem(item, dict)),
  }));
}

export function findNavItemBySlug(slug: string[], dict: Dictionary): LocalizedNavItem | undefined {
  const href = `/guidelines/${slug.join("/")}`;
  for (const sec of navigation) {
    const f = sec.items.find((i) => i.href === href);
    if (f) return localizeItem(f, dict);
  }
  return undefined;
}

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