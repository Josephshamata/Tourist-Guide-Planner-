import { useRef } from "react";
import html2pdf from "html2pdf.js";

import "./pdf.css";

import { PdfHeader } from "./PdfHeader";
import { PdfTripHero } from "./PdfTripHero";
import { PdfTripSummary } from "./PdfTripSummary";
import { PdfIncludedServices } from "./PdfIncludedServices";
import { PdfDayByDay } from "./PdfDayByDay";
import { PdfAccommodation } from "./PdfAccommodation";
import { PdfCostBreakdown } from "./PdfCostBreakdown";
import { PdfFooter } from "./PdfFooter";

export function ItineraryPdfPreview() {
  return (
    <div className="pdf-screen">
      <div className="pdf-section">
        <PdfHeader />
      </div>

      <div className="pdf-section">
        <PdfTripHero />
      </div>

      <div className="pdf-grid-top">
        <PdfTripSummary />
        <PdfIncludedServices />
      </div>

      <div className="pdf-grid-main">
        <PdfDayByDay />

        <div className="pdf-sidebar">
          <PdfAccommodation />
          <PdfCostBreakdown />
        </div>
      </div>

      <PdfFooter />
    </div>
  );
}
