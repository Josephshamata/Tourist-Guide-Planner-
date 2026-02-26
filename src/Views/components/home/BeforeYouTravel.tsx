import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { InfoTile, type InfoItem } from "./InfoTile";

const INFO: InfoItem[] = [
  { icon: "wb_sunny", title: "Best time to visit", description: "March - June for spring blossoms." },
  { icon: "payments", title: "Currency", description: "LBP & USD widely accepted." },
  { icon: "translate", title: "Language", description: "Arabic, French, and English." },
  { icon: "medical_services", title: "Safety & Health", description: "Travel insurance is recommended." },
];

export function BeforeYouTravel() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12 text-center">
        <SectionTitle title="Before You Travel" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {INFO.map((item) => (
          <InfoTile key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}