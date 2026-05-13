import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfIncludedServices({ itinerary }: Props) {
  const services = [
    {
      icon: "bed",
      title: "Accommodation",
      text: itinerary.hotel?.name || "Hotel included",
      show: Boolean(itinerary.hotel?.name),
    },
    {
      icon: "directions_car",
      title: "Transportation",
      text: "Private Driver",
      show: Boolean(itinerary.services?.driverIncluded),
    },
    {
      icon: "flight_land",
      title: "Airport Pickup",
      text: "Airport pickup included",
      show: Boolean(itinerary.services?.airportPickup),
    },
    {
      icon: "person",
      title: "Local Guide",
      text: "Tour guide included",
      show: Boolean(itinerary.services?.tourGuideIncluded),
    },
    {
      icon: "workspace_premium",
      title: "VIP Access",
      text: "VIP access included",
      show: Boolean(itinerary.services?.vipAccess),
    },
  ].filter((service) => service.show);

  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Included Services</h2>

      <div className="pdf-service-list">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.title} className="pdf-service">
              <span className="material-symbols-outlined pdf-service-icon">
                {service.icon}
              </span>

              <div>
                <p className="pdf-service-title">{service.title}</p>
                <p className="pdf-service-text">{service.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="pdf-service-text">No included services listed.</p>
        )}
      </div>
    </section>
  );
}