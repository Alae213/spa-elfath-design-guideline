import * as React from "react";
import type { Localized, PageData } from "@/lib/pages/types";
import {
  AccessibilityIcon,
  ColorsIcon,
  Layers01Icon,
  PaintBoardIcon,
} from "@hugeicons/core-free-icons";

const en: PageData = {
  slug: "foundations/branding",
  accent: "#326AAA",
  hero: {
    title: "Branding",
    intro:
      "The logo is the face of the group: a designed wordmark that merges the Arabic name \u00AB\u0627\u0644\u0641\u062A\u062D\u00BB and the Latin \u00ABSPA elFath\u00BB in a single lockup in two fixed blues. The rules in this reference are binding on every medium, and the logo is always shown in its official colors on a white ground \u2014 the theme (dark/light) never changes it on any page of this guide.",
  },
  sections: [
    { kind: "heading", id: "present", number: "01", title: "The Logo", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "The horizontal lockup is the default for web, apps, and correspondence. It is pulled only from the official master file, never redrawn in typeset:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4" },
        React.createElement(
          "div",
          { className: "flex items-center justify-center border border-[var(--hig-border)] bg-[#ffffff] px-4 py-10" },
          React.createElement("img", {
            src: "/elfath-logo.svg",
            alt: "Horizontal lockup \u2014 El Fath SPA elFath",
            className: "h-12 w-auto",
          }),
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
          "Approved file: ",
          React.createElement("span", { className: "font-mono" }, "public/elfath-logo.svg"),
          " \u2014 exact logo colors ",
          React.createElement("span", { className: "font-mono" }, "#326AAA"),
          " and ",
          React.createElement("span", { className: "font-mono" }, "#A3C0DF"),
          ".",
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Logo colors are locked.",
          text: "Buttons, links, and interfaces use the digital identity colors from --apple-blue and --brand-400, but the logo itself is artwork and is never recolored via CSS.",
        },
        {
          strong: "The theme never touches the logo.",
          text: "Don't apply lighten/darken filters when switching appearance \u2014 the logo stays colored on a white ground at all times (see \u00A7 Black & White for the neutral alternative).",
        },
      ],
    },
    { kind: "heading", id: "variants", number: "02", title: "Logo Variants", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Only two approved variants, each for a specific purpose. No intermediate variants or new composites:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Horizontal"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Primary"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Horizontal lockup",
              className: "h-10 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Default definition: page headers, email signatures, wide spaces, signage.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Vertical"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Narrow"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo-vertical.svg",
              alt: "Vertical lockup",
              className: "h-24 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "For narrow, vertical spaces: footers, stamps, badges, app buttons.",
          ),
        ),
      ),
    },
    { kind: "heading", id: "mono", number: "03", title: "Black & White", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "The two neutral versions are for media that don't support color or require it (fax, stamp, engraving, one-color print). Not a visual shortcut inside the colored interfaces:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Black"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "One-color print"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Logo in black on white",
              className: "h-10 w-auto brightness-0",
            }),
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "White"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Dark backgrounds"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#000000] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Logo in white on black",
              className: "h-10 w-auto brightness-0 invert",
            }),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "One-color print or colorless medium: use black or white as shown above.",
        "Choosing white on the navy and dark areas of paper documents.",
      ],
      dontItems: [
        "Turning the logo white inside a dark interface to match the theme \u2014 that's a color change, not implementation.",
        "Grayscale gradients or intermediate forms between color and black.",
      ],
    },
    { kind: "heading", id: "misuse", number: "04", title: "Incorrect Usage", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "The errors below are rejected in review no matter how urgent the context. The designed logo is a complete wordmark with fixed proportions; any distortion turns it into another logo:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Stretch & squash"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "scaleX(1.55)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Changing the original width/height ratio \u2014 wrong even when filling a space requires it.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Recoloring"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "brightness(0) sepia(1) hue-rotate(90deg) saturate(3)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Any color outside #326AAA and #A3C0DF \u2014 however well it seems to match a campaign.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Tilt & rotation"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "rotate(-12deg)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Dynamic tilt or rotation angles \u2014 the logo is always level.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Shadow & busy background"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center overflow-hidden px-6 py-8",
              style: { background: "linear-gradient(135deg,#0082c8,#667db6)" },
            },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.45))" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Shadows or busy, gradient backgrounds blur clarity \u2014 clean white is the rule.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "The master file as-is, with its proportions and colors, on a white ground.",
        "Choosing horizontal or vertical according to the shape of the available space.",
      ],
      dontItems: [
        "Stretching, coloring, tilting, shadows, or any effect outside the correct presentation.",
        "Redrawing the logo with type or building a version from hand-drawn parts.",
      ],
    },
  ],
};

const ar: PageData = {
  slug: "foundations/branding",
  accent: "#326AAA",
  hero: {
    title: "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629",
    intro:
      "\u0627\u0644\u0634\u0639\u0627\u0631 \u0648\u062C\u0647 \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629: \u0643\u0644\u0645\u0629 \u0645\u0635\u0645\u0645\u0629 (Wordmark) \u062A\u062F\u0645\u062C \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064A \u00AB\u0627\u0644\u0641\u062A\u062D\u00BB \u0648\u0627\u0644\u0644\u0627\u062A\u064A\u0646\u064A \u00ABSPA elFath\u00BB \u0641\u064A \u062A\u0643\u0648\u064A\u0646 \u0648\u0627\u062D\u062F \u0628\u0644\u0648\u0646\u064A\u0646 \u0623\u0632\u0631\u0642\u064A\u0646 \u062B\u0627\u0628\u062A\u064A\u0646. \u0642\u0648\u0627\u0639\u062F \u0647\u0630\u0627 \u0627\u0644\u0645\u0631\u062C\u0639 \u0625\u0644\u0632\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0643\u0644 \u0648\u0633\u064A\u0637\u060C \u0648\u064A\u064F\u0639\u0631\u0636 \u0627\u0644\u0634\u0639\u0627\u0631 \u062F\u0627\u0626\u0645\u064B\u0627 \u0628\u0644\u0648\u0646\u064A\u0647 \u0627\u0644\u0631\u0633\u0645\u064A\u064A\u0646 \u0639\u0644\u0649 \u0623\u0631\u0636\u064A\u0629 \u0628\u064A\u0636\u0627\u0621 \u2014 \u0648\u0636\u0639 \u0627\u0644\u0633\u0645\u0629 (\u0627\u0644\u062F\u0627\u0643\u0646/\u0627\u0644\u0641\u0627\u062A\u062D) \u0644\u0627 \u064A\u063A\u064A\u0651\u0631\u0647 \u0641\u064A \u0623\u064A \u0635\u0641\u062D\u0629 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644.",
  },
  sections: [
    { kind: "heading", id: "present", number: "01", title: "\u0639\u0631\u0636 \u0627\u0644\u0634\u0639\u0627\u0631 \u2014 The Logo", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0623\u0641\u0642\u064A \u0647\u0648 \u0627\u0644\u0645\u0639\u062A\u0645\u062F \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0644\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0645\u0631\u0627\u0633\u0644\u0627\u062A. \u064A\u064F\u0633\u062D\u064E\u0628 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u0631\u0633\u0645\u064A \u0641\u0642\u0637\u060C \u0648\u0644\u0627 \u064A\u064F\u0639\u0627\u062F \u0631\u0633\u0645\u0647 \u0628\u0627\u0644\u062E\u0637\u0648\u0637 \u0623\u0628\u062F\u064B\u0627:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4" },
        React.createElement(
          "div",
          { className: "flex items-center justify-center border border-[var(--hig-border)] bg-[#ffffff] px-4 py-10" },
          React.createElement("img", {
            src: "/elfath-logo.svg",
            alt: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0623\u0641\u0642\u064A \u2014 \u0627\u0644\u0641\u062A\u062D SPA elFath",
            className: "h-12 w-auto",
          }),
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
          "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0639\u062A\u0645\u062F: ",
          React.createElement("span", { className: "font-mono" }, "public/elfath-logo.svg"),
          " \u2014 \u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u062D\u0631\u0641\u064A\u0629 ",
          React.createElement("span", { className: "font-mono" }, "#326AAA"),
          " \u0648",
          React.createElement("span", { className: "font-mono" }, "#A3C0DF"),
          ".",
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "\u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0634\u0639\u0627\u0631 \u0645\u0642\u0641\u0644\u0629.",
          text: "\u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0648\u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0648\u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u062A\u0633\u062A\u0639\u0645\u0644 \u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0645\u0646 --apple-blue \u0648--brand-400\u060C \u0644\u0643\u0646 \u0627\u0644\u0634\u0639\u0627\u0631 \u0646\u0641\u0633\u0647 \u0639\u0645\u0644 \u0641\u0646\u064A \u0644\u0627 \u064A\u064F\u0639\u0627\u062F \u062A\u0644\u0648\u064A\u0646\u0647 \u0639\u0628\u0631 CSS.",
        },
        {
          strong: "\u0627\u0644\u0633\u0645\u0629 \u0644\u0627 \u062A\u0645\u0633 \u0627\u0644\u0634\u0639\u0627\u0631.",
          text: "\u0644\u0627 \u062A\u0637\u0628\u0651\u0642 \u0639\u0644\u064A\u0647 \u0641\u0644\u0627\u062A\u0631 \u062A\u0641\u062A\u064A\u062D \u0623\u0648 \u062A\u0639\u062A\u064A\u0645 \u0623\u062B\u0646\u0627\u0621 \u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u2014 \u064A\u0628\u0642\u0649 \u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0644\u0648\u0646 \u0639\u0644\u0649 \u0628\u064A\u0627\u0636 \u062F\u0627\u0626\u0645\u064B\u0627 (\u0627\u0646\u0638\u0631 \u00A7 \u0623\u0633\u0648\u062F \u0648\u0623\u0628\u064A\u0636 \u0644\u0628\u062F\u064A\u0644 \u0627\u0644\u062D\u064A\u0627\u062F \u0627\u0644\u0644\u0648\u0646\u064A).",
        },
      ],
    },
    { kind: "heading", id: "variants", number: "02", title: "\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0634\u0639\u0627\u0631 \u2014 Logo Variants", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "\u0635\u0646\u0641\u0627\u0646 \u0645\u0639\u062A\u0645\u062F\u0627\u0646 \u0641\u0642\u0637\u060C \u0648\u0643\u0644 \u0635\u0646\u0641 \u0644\u063A\u0631\u0636 \u0645\u062D\u062F\u062F. \u0644\u0627 \u062A\u064F\u0646\u0634\u0623 \u0623\u0635\u0646\u0627\u0641 \u0648\u0633\u064A\u0637\u0629 \u0623\u0648 \u062A\u062C\u0645\u064A\u0639\u0627\u062A \u062C\u062F\u064A\u062F\u0629:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0623\u0641\u0642\u064A \u2014 Horizontal"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "\u0627\u0644\u0623\u0633\u0627\u0633\u064A"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0623\u0641\u0642\u064A",
              className: "h-10 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u0627\u0644\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A: \u0631\u0624\u0648\u0633 \u0627\u0644\u0635\u0641\u062D\u0627\u062A\u060C \u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0639\u0631\u064A\u0636\u0629\u060C \u0627\u0644\u0644\u0627\u0641\u062A\u0627\u062A.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0639\u0645\u0648\u062F\u064A \u2014 Vertical"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "\u0636\u064A\u0642"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo-vertical.svg",
              alt: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0639\u0645\u0648\u062F\u064A",
              className: "h-24 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u0644\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0636\u064A\u0642\u0629 \u0648\u0627\u0644\u0639\u0645\u0648\u062F\u064A\u0629: \u062A\u0630\u064A\u064A\u0644\u0627\u062A\u060C \u0623\u062E\u062A\u0627\u0645\u060C \u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0636\u060C \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642.",
          ),
        ),
      ),
    },
    { kind: "heading", id: "mono", number: "03", title: "\u0627\u0644\u0623\u0633\u0648\u062F \u0648\u0627\u0644\u0623\u0628\u064A\u0636 \u2014 Black & White", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "\u0646\u0633\u062E\u062A\u0627 \u0627\u0644\u062D\u064A\u0627\u062F \u0627\u0644\u0644\u0648\u0646\u064A \u0644\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u062F\u0639\u0645 \u0627\u0644\u0644\u0648\u0646 \u0623\u0648 \u062A\u062A\u0637\u0644\u0628\u0647 (\u0641\u0627\u0643\u0633\u060C \u062E\u062A\u0645\u060C \u0646\u0642\u0634\u060C \u0637\u0628\u0627\u0639\u0629 \u0623\u062D\u0627\u062F\u064A\u0629). \u0644\u0627 \u062A\u064F\u0633\u062A\u0639\u0645\u0644 \u0643\u0627\u062E\u062A\u0635\u0627\u0631 \u0628\u0635\u0631\u064A \u062F\u0627\u062E\u0644 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u0627\u0644\u0645\u0644\u0648\u0646\u0629:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0623\u0633\u0648\u062F \u2014 Black"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "\u0637\u0628\u0627\u0639\u0629 \u0623\u062D\u0627\u062F\u064A\u0629"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0628\u0627\u0644\u0623\u0633\u0648\u062F \u0639\u0644\u0649 \u0623\u0628\u064A\u0636",
              className: "h-10 w-auto brightness-0",
            }),
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0623\u0628\u064A\u0636 \u2014 White"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "\u062E\u0637\u0648\u0637 \u062F\u0627\u0643\u0646\u0629"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#000000] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0628\u0627\u0644\u0623\u0628\u064A\u0636 \u0639\u0644\u0649 \u0623\u0633\u0648\u062F",
              className: "h-10 w-auto brightness-0 invert",
            }),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "\u0637\u0628\u0627\u0639\u0629 \u0623\u062D\u0627\u062F\u064A\u0629 \u0623\u0648 \u0648\u0633\u0637 \u0628\u0644\u0627 \u0644\u0648\u0646: \u0627\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u0623\u0633\u0648\u062F \u0623\u0648 \u0627\u0644\u0623\u0628\u064A\u0636 \u0643\u0645\u0627 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 \u0623\u0639\u0644\u0627\u0647.",
        "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0623\u0628\u064A\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0643\u062D\u0644\u064A\u0629 \u0648\u0627\u0644\u062F\u0627\u0643\u0646\u0629 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0648\u0631\u0642\u064A\u0629.",
      ],
      dontItems: [
        "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0634\u0639\u0627\u0631 \u0625\u0644\u0649 \u0623\u0628\u064A\u0636 \u062F\u0627\u062E\u0644 \u0648\u0627\u062C\u0647\u0629 \u062F\u0627\u0643\u0646\u0629 \u0644\u062A\u0623\u0642\u0644\u0645 \u0645\u0639 \u0627\u0644\u0633\u0645\u0629 \u2014 \u0647\u0630\u0627 \u062A\u063A\u064A\u064A\u0631 \u0644\u0648\u0646\u060C \u0644\u0627 \u062A\u0646\u0641\u064A\u0630.",
        "\u062A\u062F\u0631\u0651\u062C\u0627\u062A \u0631\u0645\u0627\u062F\u064A\u0629 \u0623\u0648 \u0623\u0634\u0643\u0627\u0644 \u0648\u0633\u064A\u0637\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u0644\u0648\u0646 \u0648\u0627\u0644\u0623\u0633\u0648\u062F.",
      ],
    },
    { kind: "heading", id: "misuse", number: "04", title: "\u0627\u0633\u062A\u0639\u0645\u0627\u0644\u0627\u062A \u062E\u0627\u0637\u0626\u0629 \u2014 Incorrect Usage", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "\u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0623\u062F\u0646\u0627\u0647 \u062A\u064F\u0631\u0641\u0636 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0647\u0645\u0627 \u0643\u0627\u0646 \u0627\u0644\u0633\u064A\u0627\u0642 \u0637\u0627\u0631\u0626\u064B\u0627. \u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0635\u0645\u0645 \u0647\u0648 \u0643\u0644\u0645\u0629 \u0643\u0627\u0645\u0644\u0629 \u0628\u0646\u0633\u0628 \u062B\u0627\u0628\u062A\u0629\u061B \u0623\u064A \u062A\u0634\u0648\u064A\u0647 \u064A\u062D\u0648\u0651\u0644\u0647\u0627 \u0625\u0644\u0649 \u0634\u0639\u0627\u0631 \u0622\u062E\u0631:",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0627\u0644\u0633\u062D\u0642 \u0648\u0627\u0644\u062A\u0645\u062F\u064A\u062F"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "scaleX(1.55)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u062A\u063A\u064A\u064A\u0631 \u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u0631\u0636/\u0627\u0644\u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u2014 \u062E\u0637\u0623 \u062D\u062A\u0649 \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629 \u0644\u0645\u0644\u0621 \u0645\u0633\u0627\u062D\u0629.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0644\u0648\u064A\u0646"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "brightness(0) sepia(1) hue-rotate(90deg) saturate(3)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u0623\u064A \u0644\u0648\u0646 \u062E\u0627\u0631\u062C #326AAA \u0648 #A3C0DF \u2014 \u0645\u0647\u0645\u0627 \u0628\u062F\u0627 \u0645\u062A\u0646\u0627\u0633\u0642\u064B\u0627 \u0645\u0639 \u062D\u0645\u0644\u0629.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0627\u0644\u0645\u064A\u0644 \u0648\u0627\u0644\u062A\u062F\u0648\u064A\u0631"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "rotate(-12deg)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u0632\u0648\u0627\u064A\u0627 \u0645\u064A\u0644 \u0623\u0648 \u062F\u0648\u0631\u0627\u0646 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629 \u2014 \u0627\u0644\u0634\u0639\u0627\u0631 \u064A\u0648\u0636\u0639 \u0645\u0633\u062A\u0648\u0649 \u062F\u0627\u0626\u0645\u064B\u0627.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u0638\u0644 \u0648\u062E\u0644\u0641\u064A\u0629 \u0645\u0634\u063A\u0648\u0644\u0629"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center overflow-hidden px-6 py-8",
              style: { background: "linear-gradient(135deg,#0082c8,#667db6)" },
            },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.45))" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "\u0638\u0644\u0627\u0644 \u0623\u0648 \u062E\u0644\u0641\u064A\u0627\u062A \u0645\u062A\u062F\u0631\u062C\u0629/\u0645\u0634\u063A\u0648\u0644\u0629 \u062A\u0637\u0645\u0633 \u0627\u0644\u0648\u0636\u0648\u062D \u2014 \u0627\u0644\u0628\u064A\u0627\u0636 \u0627\u0644\u0646\u0638\u064A\u0641 \u0647\u0648 \u0627\u0644\u0642\u0627\u0639\u062F\u0629.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0635\u0644\u064A \u0643\u0645\u0627 \u0647\u0648\u060C \u0628\u0646\u0633\u0628\u0647 \u0648\u0623\u0644\u0648\u0627\u0646\u0647\u060C \u0639\u0644\u0649 \u0623\u0631\u0636\u064A\u0629 \u0628\u064A\u0636\u0627\u0621.",
        "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0623\u0641\u0642\u064A \u0623\u0648 \u0627\u0644\u0639\u0645\u0648\u062F\u064A \u062D\u0633\u0628 \u0634\u0643\u0644 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629.",
      ],
      dontItems: [
        "\u0627\u0644\u0633\u062D\u0642\u060C \u0627\u0644\u062A\u0644\u0648\u064A\u0646\u060C \u0627\u0644\u0645\u064A\u0644\u060C \u0627\u0644\u0638\u0644\u0627\u0644\u060C \u0623\u0648 \u0623\u064A \u0645\u0624\u062B\u0631 \u062E\u0627\u0631\u062C \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0635\u062D\u064A\u062D.",
        "\u0625\u0639\u0627\u062F\u0629 \u0631\u0633\u0645 \u0627\u0644\u0634\u0639\u0627\u0631 \u0628\u0627\u0644\u062E\u0637\u0648\u0637 \u0623\u0648 \u0628\u0646\u0627\u0621 \u0646\u0633\u062E\u0629 \u0645\u0646 \u0623\u062C\u0632\u0627\u0621 \u0645\u0631\u0633\u0648\u0645\u0629 \u064A\u062F\u0648\u064A\u064B\u0627.",
      ],
    },
  ],
};

const fr: PageData = {
  slug: "foundations/branding",
  accent: "#326AAA",
  hero: {
    title: "Identit\u00E9 visuelle",
    intro:
      "Le logo est le visage du groupe : un wordmark dessin\u00E9 qui fusionne le nom arabe \u00AB\u0627\u0644\u0641\u062A\u062D\u00BB et le latin \u00ABSPA elFath\u00BB dans un seul assemblage en deux bleus fixes. Les r\u00E8gles de cette r\u00E9f\u00E9rence sont contraignantes sur tous les supports, et le logo est toujours montr\u00E9 dans ses couleurs officielles sur fond blanc \u2014 le th\u00E8me (sombre/clair) ne le modifie jamais sur aucune page de ce guide.",
  },
  sections: [
    { kind: "heading", id: "present", number: "01", title: "Le logo", icon: PaintBoardIcon },
    {
      kind: "paragraph",
      text: "L'assemblage horizontal est le d\u00E9faut pour le web, les applications et la correspondance. Il est tir\u00E9 uniquement du fichier ma\u00EEtre officiel, jamais redessin\u00E9 en typographie :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4" },
        React.createElement(
          "div",
          { className: "flex items-center justify-center border border-[var(--hig-border)] bg-[#ffffff] px-4 py-10" },
          React.createElement("img", {
            src: "/elfath-logo.svg",
            alt: "Assemblage horizontal \u2014 El Fath SPA elFath",
            className: "h-12 w-auto",
          }),
        ),
        React.createElement(
          "p",
          { className: "mt-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
          "Fichier approuv\u00E9 : ",
          React.createElement("span", { className: "font-mono" }, "public/elfath-logo.svg"),
          " \u2014 couleurs exactes ",
          React.createElement("span", { className: "font-mono" }, "#326AAA"),
          " et ",
          React.createElement("span", { className: "font-mono" }, "#A3C0DF"),
          ".",
        ),
      ),
    },
    {
      kind: "callout",
      paragraphs: [
        {
          strong: "Couleurs du logo verrouill\u00E9es.",
          text: "Les boutons, liens et interfaces utilisent les couleurs d'identit\u00E9 num\u00E9rique de --apple-blue et --brand-400, mais le logo est une \u0153uvre qui ne se recolor jamais en CSS.",
        },
        {
          strong: "Le th\u00E8me ne touche pas au logo.",
          text: "N'appliquez aucun filtre d'\u00E9claircissement ou d'assombrissement lors du basculement d'apparence \u2014 le logo reste en couleur sur fond blanc en permanence (voir \u00A7 Noir et blanc pour l'alternative neutre).",
        },
      ],
    },
    { kind: "heading", id: "variants", number: "02", title: "Variantes du logo", icon: Layers01Icon },
    {
      kind: "paragraph",
      text: "Seulement deux variantes approuv\u00E9es, chacune pour un usage pr\u00E9cis. Aucune variante interm\u00E9diaire ni nouveau composite :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Horizontal"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Principal"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Assemblage horizontal",
              className: "h-10 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "D\u00E9finition par d\u00E9faut : en-t\u00EAtes de pages, signatures e-mail, grands espaces, enseignes.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Vertical"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "\u00C9troit"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo-vertical.svg",
              alt: "Assemblage vertical",
              className: "h-24 w-auto",
            }),
          ),
          React.createElement(
            "p",
            { className: "px-4 py-3 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Pour les espaces \u00E9troits et verticaux : pieds de page, tampons, badges, boutons d'application.",
          ),
        ),
      ),
    },
    { kind: "heading", id: "mono", number: "03", title: "Noir et blanc", icon: ColorsIcon },
    {
      kind: "paragraph",
      text: "Les deux versions neutres sont destin\u00E9es aux supports sans couleur ou qui l'exigent (fax, tampon, gravure, impression monochrome). Pas un raccourci visuel dans les interfaces color\u00E9es :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Noir"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Impression monochrome"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#ffffff] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Logo en noir sur blanc",
              className: "h-10 w-auto brightness-0",
            }),
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between border-b border-[var(--hig-border)] px-4 py-2.5" },
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Blanc"),
            React.createElement("span", { className: "font-mono text-[11px] text-[var(--apple-muted)]" }, "Fonds sombres"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center bg-[#000000] px-4 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "Logo en blanc sur noir",
              className: "h-10 w-auto brightness-0 invert",
            }),
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Impression monochrome ou support sans couleur : utiliser noir ou blanc comme ci-dessus.",
        "Choisir le blanc sur les zones marine et sombres des documents papier.",
      ],
      dontItems: [
        "Passer le logo en blanc dans une interface sombre pour coller au th\u00E8me \u2014 c'est un changement de couleur, pas une mise en \u0153uvre.",
        "D\u00E9grad\u00E9s de gris ou formes interm\u00E9diaires entre couleur et noir.",
      ],
    },
    { kind: "heading", id: "misuse", number: "04", title: "Usages incorrects", icon: AccessibilityIcon },
    {
      kind: "paragraph",
      text: "Les erreurs ci-dessous sont rejet\u00E9es \u00E0 la revue quel que soit le contexte. Le logo dessin\u00E9 est un wordmark complet aux proportions fixes ; toute distorsion le transforme en un autre logo :",
    },
    {
      kind: "custom",
      node: React.createElement(
        "div",
        { className: "not-prose mt-4 grid gap-4 md:grid-cols-2" },
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "\u00C9crasement et \u00E9tirement"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "scaleX(1.55)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Changer le ratio largeur/hauteur d'origine \u2014 faux m\u00EAme pour remplir un espace.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Recoloration"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "brightness(0) sepia(1) hue-rotate(90deg) saturate(3)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Toute couleur hors #326AAA et #A3C0DF \u2014 m\u00EAme si elle semble s'accorder \u00E0 une campagne.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Inclinaison et rotation"),
          ),
          React.createElement(
            "div",
            { className: "flex items-center justify-center overflow-hidden bg-[#ffffff] px-6 py-8" },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { transform: "rotate(-12deg)" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Angles d'inclinaison ou de rotation dynamiques \u2014 le logo est toujours \u00E0 niveau.",
          ),
        ),
        React.createElement(
          "div",
          { className: "border border-[var(--hig-border)]" },
          React.createElement(
            "div",
            { className: "flex items-center gap-2 border-b border-[var(--hig-border)] px-3 py-2.5" },
            React.createElement(
              "span",
              { className: "flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white" },
              "\u2715",
            ),
            React.createElement("span", { className: "text-[13px] font-semibold text-[var(--apple-text)]" }, "Ombre et fond charg\u00E9"),
          ),
          React.createElement(
            "div",
            {
              className: "flex items-center justify-center overflow-hidden px-6 py-8",
              style: { background: "linear-gradient(135deg,#0082c8,#667db6)" },
            },
            React.createElement("img", {
              src: "/elfath-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "h-10 w-auto",
              style: { filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.45))" },
            }),
          ),
          React.createElement(
            "p",
            { className: "px-3 py-2 text-[12px] leading-5 text-[var(--apple-muted)]" },
            "Ombres ou fonds charg\u00E9s en d\u00E9grad\u00E9 qui brouillent la lisibilit\u00E9 \u2014 le blanc net est la r\u00E8gle.",
          ),
        ),
      ),
    },
    {
      kind: "dodont",
      doItems: [
        "Le fichier ma\u00EEtre tel quel, avec ses proportions et ses couleurs, sur fond blanc.",
        "Choisir horizontal ou vertical selon la forme de l'espace disponible.",
      ],
      dontItems: [
        "\u00C9crasement, coloration, inclinaison, ombres ou tout effet hors pr\u00E9sentation correcte.",
        "Redessiner le logo en typographie ou construire une version \u00E0 partir de pi\u00E8ces dessin\u00E9es \u00E0 la main.",
      ],
    },
  ],
};

export const branding: Localized<PageData> = { ar, en, fr };
