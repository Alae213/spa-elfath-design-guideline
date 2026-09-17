"use client";

import { useState } from "react";
import { IPhoneIcon, MacIcon, VisionIcon, WatchIcon, TvIcon } from "@/components/icons";

export const platforms = [
  { id: "all", label: "All", icon: null },
  { id: "ios", label: "iOS", icon: IPhoneIcon },
  { id: "macos", label: "macOS", icon: MacIcon },
  { id: "visionos", label: "visionOS", icon: VisionIcon },
  { id: "watchos", label: "watchOS", icon: WatchIcon },
  { id: "tvos", label: "tvOS", icon: TvIcon },
] as const;

export type PlatformId = (typeof platforms)[number]["id"];

export function PlatformPicker({ value, onChange }: { value: PlatformId; onChange: (v: PlatformId) => void }) {
  return (
    <div className="inline-flex rounded-full bg-system-100 p-1 border border-system-200">
      {platforms.map((p) => {
        const Icon = p.icon;
        const active = value === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              active ? "bg-hig-surface shadow-sm text-brand-400 border border-hig-border" : "text-system-400 hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {Icon ? <Icon size={14} /> : null}
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

// Uncontrolled variant for page-level filtering
export function PlatformPickerControlled() {
  const [value, setValue] = useState<PlatformId>("all");
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold tracking-widest uppercase text-system-400">Platform</span>
      <PlatformPicker value={value} onChange={setValue} />
    </div>
  );
}
