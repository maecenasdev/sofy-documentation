"use client";

import { useState } from "react";
import { SectionMenu } from "@/components/SectionMenu";
import { AccordionList } from "@/components/AccordionList";
import type { SectionId } from "@/lib/data";
import { sectionContent } from "@/lib/data";

export default function HomePage() {
  const [section, setSection] = useState<SectionId>("progettazione");
  const content = sectionContent[section];

  return (
    <main>
      <header className="hero glass-panel">
        <p className="hero__eyebrow">Sofy Gallery · kiosk AI</p>
        <h1>{content.hero}</h1>
        <p className="hero__summary">{content.summary}</p>
        <div className="hero__chips">
          <span>Gemini AI</span>
          <span>Google TTS</span>
          <span>React Three Fiber</span>
        </div>
      </header>

      <SectionMenu value={section} onChange={setSection} />

      <AccordionList items={content.accordions} />
    </main>
  );
}
