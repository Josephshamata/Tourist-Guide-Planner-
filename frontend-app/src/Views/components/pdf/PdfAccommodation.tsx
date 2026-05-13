import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfAccommodation({ itinerary }: Props) {
  const hotel = itinerary.hotel;

  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Accommodation</h2>

      {hotel?.name ? (
        <div className="pdf-hotel-list">
          <div className="pdf-hotel-item">
            <img
              src={hotel.imageUrl || "/images/hotel-placeholder.jpg"}
              alt={hotel.name}
              className="pdf-hotel-image"
            />

            <div>
              <h3 className="pdf-hotel-name">{hotel.name}</h3>

              <p className="pdf-hotel-location">
                {hotel.location || "Lebanon"}
              </p>

              <p className="pdf-stars">
                {"★".repeat(hotel.stars || 0)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="pdf-hotel-location">No hotel selected.</p>
      )}
    </section>
  );
}