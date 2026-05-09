export function PdfIncludedServices() {
  const services = [
    { icon: "bed", title: "Accommodation", text: "3 Nights in Premium Hotels" },
    { icon: "directions_car", title: "Transportation", text: "Private Driver" },
    { icon: "person", title: "Local Guide", text: "Professional Guide (Optional)" },
  ];

  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Included Services</h2>

      <div className="pdf-service-list">
        {services.map((service) => (
          <div key={service.title} className="pdf-service">
            <span className="material-symbols-outlined pdf-service-icon">
              {service.icon}
            </span>

            <div>
              <p className="pdf-service-title">{service.title}</p>
              <p className="pdf-service-text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}