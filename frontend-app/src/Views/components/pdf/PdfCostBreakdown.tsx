import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfCostBreakdown({ itinerary }: Props) {
  const costs = [
    {
      icon: "bed",
      label: "Accommodation",
      value: itinerary.costBreakdown?.hotelCost || 0,
    },
    {
      icon: "restaurant",
      label: "Food & Dining",
      value: itinerary.costBreakdown?.foodCost || 0,
    },
    {
      icon: "directions_car",
      label: "Transportation",
      value: itinerary.costBreakdown?.transportCost || 0,
    },
    {
      icon: "confirmation_number",
      label: "Activities",
      value: itinerary.costBreakdown?.activitiesCost || 0,
    },
  ];

  const total =
    itinerary.costBreakdown?.totalCost ||
    itinerary.estimatedTotalPrice ||
    0;

  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Cost Breakdown</h2>

      <div className="pdf-cost-list">
        {costs.map((cost) => (
          <div key={cost.label} className="pdf-cost-row">
            <div className="pdf-cost-left">
              <span className="material-symbols-outlined pdf-cost-icon">
                {cost.icon}
              </span>

              <span className="pdf-cost-label">{cost.label}</span>
            </div>

            <span className="pdf-cost-value">${cost.value}</span>
          </div>
        ))}
      </div>

      <div className="pdf-cost-divider" />

      <div className="pdf-cost-total">
        <span className="pdf-cost-total-label">Total</span>
        <span className="pdf-cost-total-value">${total}</span>
      </div>
    </section>
  );
}