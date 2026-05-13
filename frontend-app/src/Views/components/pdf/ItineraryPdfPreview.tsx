import type { Itinerary } from "../../../models/itinerary.model";
import { PdfAccommodation } from "./PdfAccommodation";
import { PdfCostBreakdown } from "./PdfCostBreakdown";
import { PdfDayByDay } from "./PdfDayByDay";
import { PdfFooter } from "./PdfFooter";
import { PdfHeader } from "./PdfHeader";
import { PdfIncludedServices } from "./PdfIncludedServices";
import { PdfTripHero } from "./PdfTripHero";
import { PdfTripSummary } from "./PdfTripSummary";
import "./pdf.css";

type Props = {
  itinerary: Itinerary;
};

export function ItineraryPdfPreview({ itinerary }: Props) {
  return (
    <div className="pdf-screen">
      <div className="pdf-page">
        <PdfHeader itinerary={itinerary} />
        <PdfTripHero itinerary={itinerary} />

        <div className="pdf-grid-top">
          <PdfTripSummary itinerary={itinerary} />
          <PdfIncludedServices itinerary={itinerary} />
        </div>

        <div className="pdf-grid-main">
          <PdfDayByDay itinerary={itinerary} />

          <div className="pdf-sidebar">
            <PdfAccommodation itinerary={itinerary} />
            <PdfCostBreakdown itinerary={itinerary} />
          </div>
        </div>

        <PdfFooter />
      </div>
    </div>
  );
}