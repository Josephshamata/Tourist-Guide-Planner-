const costs = [
  { icon: "bed", label: "Accommodation", value: "$1,200" },
  { icon: "restaurant", label: "Food & Dining", value: "$600" },
  { icon: "directions_car", label: "Transportation", value: "$400" },
  { icon: "confirmation_number", label: "Activities & Tickets", value: "$300" },
  { icon: "paid", label: "Miscellaneous", value: "$100" },
];

export function PdfCostBreakdown() {
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

            <span className="pdf-cost-value">{cost.value}</span>
          </div>
        ))}
      </div>

      <div className="pdf-cost-divider" />

      <div className="pdf-cost-total">
        <span className="pdf-cost-total-label">Total (Per Person)</span>
        <span className="pdf-cost-total-value">$2,600</span>
      </div>
    </section>
  );
}