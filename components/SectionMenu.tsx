"use client";

import type { SectionId } from "@/lib/data";
import { menuItems } from "@/lib/data";
import clsx from "clsx";

type Props = {
  value: SectionId;
  onChange: (section: SectionId) => void;
};

export function SectionMenu({ value, onChange }: Props) {
  return (
    <nav className="menu glass-panel">
      {menuItems.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            className={clsx("menu__tab", { "menu__tab--active": active })}
            onClick={() => onChange(item.id)}
          >
            <span>{item.label}</span>
            <small>{item.subtitle}</small>
          </button>
        );
      })}
    </nav>
  );
}
