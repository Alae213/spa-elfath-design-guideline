export type NavItemDict = { title: string; description: string };

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    sections: Record<string, string>;
    items: Record<string, NavItemDict>;
  };
  topnav: {
    developer: string;
    openNav: string;
    closeNav: string;
    closeOverlay: string;
  };
  search: {
    trigger: string;
    placeholder: string;
    close: string;
    noResults: string;
    typeToSearch: string;
  };
  sidebar: {
    label: string;
  };
  home: {
    heading: string;
    subheading: string;
  };
  theme: {
    toggle: string;
    toLight: string;
    toDark: string;
    systemLabel: string;
  };
  lang: {
    label: string;
  };
  common: {
    comingSoon: string;
  };
  demos: {
    contrast: {
      columns: { pair: string; ratio: string; aa: string; status: string };
      passLabel: string;
      failLabel: string;
      rows: { pair: string; ratio: string; need: string; ok: boolean }[];
      footnote: string;
    };
    tokens: {
      use: string[];
      footnote: string;
    };
    spacing: {
      caption: string;
      footnote: string;
    };
    touch: {
      textStart: string;
      textEnd: string;
    };
    motion: {
      intro: string;
      footnote: string;
    };
    alt: {
      items: string[];
    };
    pageGoal: {
      label: string;
      title: string;
      body: string;
      cta: string;
    };
  };
};