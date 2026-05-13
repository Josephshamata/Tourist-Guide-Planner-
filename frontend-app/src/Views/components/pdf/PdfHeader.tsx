import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

export function PdfHeader({ itinerary }: Props) {
  const generatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          <p className="pdf-date">Generated on {generatedDate}</p>
          {/* <p className="pdf-date">{itinerary.bookingStatus || "Trip Plan"}</p> */}
        </div>
      </div>

      <div className="pdf-divider" />
    </header>
  );
}