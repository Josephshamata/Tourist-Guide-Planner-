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
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleExportPdf = () => {
    if (!pdfRef.current) return;

    const options = {
      margin: 0,
      filename: "961-itinerary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: {
        unit: "px",
        format: [1000, 1250],
        orientation: "portrait",
      },
    };

    (html2pdf as any)().set(options).from(pdfRef.current).save();
  };

  return (
    <div className="pdf-screen">
      <div className="pdf-actions">
        <button onClick={handleExportPdf} className="pdf-btn">
          Export PDF
        </button>
      </div>

      <div ref={pdfRef} className="pdf-page">
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
    </div>
  );
}