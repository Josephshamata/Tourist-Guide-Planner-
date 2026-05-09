export function PdfTripSummary() {
  const summaryItems = [
    { icon: "schedule", label: "Duration", value: "4 Days / 3 Nights" },
    { icon: "explore", label: "Travel Style", value: "Luxury • Coastal Nightlife" },
    { icon: "location_on", label: "Regions", value: "Beirut • Batroun • Jounieh" },
    {
      icon: "attach_money",
      label: "Total Estimated Cost",
      value: "$2,400 – $2,800",
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