"use client";

import { useState } from "react";
import type { AccordionItem } from "@/lib/data";

interface Props {
  items: AccordionItem[];
}

export function AccordionList({ items }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const expanded = index === openIndex;
        return (
          <article key={item.title} className="accordion__item glass-panel">
            <button
              className="accordion__trigger"
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpenIndex(expanded ? -1 : index)}
            >
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span aria-hidden> {expanded ? "−" : "+"} </span>
            </button>
            {expanded && item.highlights && (
              <ul className="accordion__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}
