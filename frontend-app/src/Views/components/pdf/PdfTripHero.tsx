export function PdfTripHero() {
  return (
    <section className="pdf-hero">
      <div>
        <h1 className="pdf-main-title">Beirut Summer Escape</h1>

        <p className="pdf-subtitle">4 Days / 3 Nights in Lebanon</p>

        <p className="pdf-description">
          A curated summer experience filled with beach clubs, vibrant nights,
          cultural discoveries and unforgettable moments.
        </p>
      </div>

      <div className="pdf-stats">
        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            calendar_month
          </span>
          <p className="pdf-stat-value">July 15 – July 18, 2024</p>
          <p className="pdf-stat-label">Travel Dates</p>
        </div>

        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            groups
          </span>
          <p className="pdf-stat-value">4 Travelers</p>
          <p className="pdf-stat-label">Group Size</p>
        </div>

        <div className="pdf-stat">
          <span className="material-symbols-outlined pdf-stat-icon">
            account_balance_wallet
          </span>
          <p className="pdf-stat-value">$2,400 – $2,800</p>
          <p className="pdf-stat-label">Estimated Budget</p>
        </div>
      </div>
    </section>
  );
}