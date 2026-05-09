export function PdfHeader() {
  return (
    <header>
      <div className="pdf-header-row">
        <div className="pdf-logo-area">
          <div className="pdf-logo-circle">
            <img src="/images/arze.png" alt="961 Logo" />
          </div>

          <div>
            <h1 className="pdf-brand">961.</h1>
            <p className="pdf-brand-sub">EXPLORE LEBANON</p>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <h2 className="pdf-doc-title">ITINERARY</h2>
          <p className="pdf-date">Generated on May 15, 2024</p>
        </div>
      </div>

      <div className="pdf-divider" />
    </header>
  );
}