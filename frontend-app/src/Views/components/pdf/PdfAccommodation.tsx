const hotels = [
  {
    name: "The Smallville Hotel",
    location: "Boutique Hotel • Beirut",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Le Grey Hotel",
    location: "Boutique Hotel • Jounieh",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Batroun Sur Mer",
    location: "Boutique Hotel • Batroun",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400&auto=format&fit=crop",
  },
];

export function PdfAccommodation() {
  return (
    <section className="pdf-card">
      <h2 className="pdf-title-small">Accommodation</h2>

      <div className="pdf-hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.name} className="pdf-hotel-item">
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="pdf-hotel-image"
            />

            <div>
              <h3 className="pdf-hotel-name">{hotel.name}</h3>
              <p className="pdf-hotel-location">{hotel.location}</p>
              <p className="pdf-stars">★★★★★</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}