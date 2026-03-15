// import React from "react";
// import { SectionTitle } from "../common/SectionTitle";
// import { InfoTile, type InfoItem } from "./InfoTile";

// const INFO: InfoItem[] = [
//   { icon: "wb_sunny", title: "Best time to visit", description: "March - June for spring blossoms." },
//   { icon: "payments", title: "Currency", description: "LBP & USD widely accepted." },
//   { icon: "translate", title: "Language", description: "Arabic, French, and English." },
//   { icon: "medical_services", title: "Safety & Health", description: "Travel insurance is recommended." },
// ];

// export function BeforeYouTravel() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-24">
//       <div className="mb-12 text-center">
//         <SectionTitle title="Before You Travel" />
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {INFO.map((item) => (
//           <InfoTile key={item.title} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { InfoTile, type InfoItem } from "./InfoTile";

const INFO: InfoItem[] = [
  {
    icon: "wb_sunny",
    title: "Best time to visit",
    description:
      "March–June for spring weather and green landscapes. September–October is also ideal with fewer crowds and warm evenings.",
  },
  {
    icon: "payments",
    title: "Currency",
    description:
      "LBP & USD are commonly used. Carry small bills and confirm the exchange rate before paying, especially in taxis and small shops.",
  },
  {
    icon: "translate",
    title: "Language",
    description:
      "Arabic is official, but French and English are widely spoken in cities, hotels, and tourist areas—getting around is easy.",
  },
  {
    icon: "medical_services",
    title: "Safety & health",
    description:
      "Travel insurance is recommended. Keep essentials with you, stay aware at night, and check local updates if you’re traveling outside major areas.",
  },

  // ✅ Added tiles (5)
  {
    icon: "wifi",
    title: "SIM & internet",
    description:
      "Get a local SIM/eSIM for reliable data. Coverage is solid in cities; in mountains it can vary—download maps offline just in case.",
  },
  {
    icon: "electrical_services",
    title: "Electricity & plugs",
    description:
      "Lebanon typically uses 220V. Plugs are commonly types C/D/G—bring a universal adapter to avoid surprises in hotels or rentals.",
  },
  {
    icon: "directions_car",
    title: "Getting around",
    description:
      "For comfort, use a private driver or rideshare. If you’re exploring regions, plan routes ahead—travel times can change with traffic.",
  },
  {
    icon: "volunteer_activism",
    title: "Tipping",
    description:
      "Tipping is appreciated: 10% in restaurants when service isn’t included, and small tips for valet, hotel staff, and guides.",
  },
];

export function BeforeYouTravel() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12 text-center">
        <SectionTitle title="Before You Travel" />
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Quick essentials to help you plan smoothly—money, language, connectivity, and practical tips for getting around Lebanon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {INFO.map((item) => (
          <InfoTile key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}