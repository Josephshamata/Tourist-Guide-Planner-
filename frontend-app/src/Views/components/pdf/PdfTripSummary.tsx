import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfTripSummary({ itinerary }: Props) {
  const summaryItems = [
    {
      icon: "schedule",
      label: "Duration",
      value: `${itinerary.durationDays || 1} Days`,
    },
    {
      icon: "explore",
      label: "Travel Style",
      value: itinerary.categories?.join(" • ") || "Curated Experience",
    },
    {
      icon: "location_on",
      label: "Regions",
      value: itinerary.mainPlaces?.join(" • ") || "Lebanon",
    },
    {
      icon: "attach_money",
      label: "Total Estimated Cost",
      value: `$${itinerary.estimatedTotalPrice || itinerary.costBreakdown?.totalCost || 0}`,
      sub: "Per Person",
    },
  ];

  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Trip Summary</h2>

      <div className="pdf-summary-grid">
        {summaryItems.map((item) => (
          <div key={item.label} className="pdf-summary-item">
            <span className="material-symbols-outlined pdf-summary-icon">
              {item.icon}
            </span>

            <p className="pdf-summary-label">{item.label}</p>
            <p className="pdf-summary-value">{item.value}</p>

            {item.sub && <p className="pdf-summary-sub">{item.sub}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}