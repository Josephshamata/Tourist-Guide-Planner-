import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfTripHero({ itinerary }: Props) {
  return (
    <section className="pdf-hero">
      <div>
        <h1 className="pdf-main-title">{itinerary.title}</h1>

        <p className="pdf-subtitle">
          {itinerary.durationDays || 1} Days in Lebanon
        </p>

        <p className="pdf-description">
          {itinerary.summary || "A curated Lebanon travel experience."}
        </p>
      </div>

      <div className="pdf-stats">
        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            calendar_month
          </span>

          <p className="pdf-stat-value">
            {itinerary.durationDays || 1} Days
          </p>

          <p className="pdf-stat-label">Duration</p>
        </div>

        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            location_on
          </span>

          <p className="pdf-stat-value">
            {itinerary.mainPlaces?.slice(0, 2).join(" • ") || "Lebanon"}
          </p>

          <p className="pdf-stat-label">Regions</p>
        </div>

        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            account_balance_wallet
          </span>

          <p className="pdf-stat-value">
            ${itinerary.estimatedTotalPrice || itinerary.costBreakdown?.totalCost || 0}
          </p>

          <p className="pdf-stat-label">Estimated Budget</p>
        </div>
      </div>
    </section>
  );
}