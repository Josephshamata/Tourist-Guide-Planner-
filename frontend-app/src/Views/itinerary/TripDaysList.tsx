import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Itinerary, ItineraryDay } from "../../models/itinerary.model";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { ItineraryPdfPreview } from "../components/pdf/ItineraryPdfPreview";
type TripDaysListProps = {
  itinerarySlug: string;
    itinerary:Itinerary;
  days: ItineraryDay[];
};

export default function TripDaysList({
  itinerarySlug,
  itinerary,

  days,
}: TripDaysListProps) {
  const navigate = useNavigate();
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
        format: [1050, 1250],
        orientation: "portrait",
      },
    };

    (html2pdf as any)().set(options).from(pdfRef.current).save();
  };
  return (
    <>
      <div style={{ position: "absolute", left: "-99999px", top: 0 }}>
        <div ref={pdfRef}>
          <ItineraryPdfPreview itinerary={itinerary}/>
        </div>
      </div>
      <section className="w-full rounded-[2rem] bg-white p-8 shadow-soft-red">
        <div className="mb-10 flex items-start justify-between gap-6">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--text-dark)]">
              Full Trip Itinerary
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-dark)]/60">
              A quick overview of each day. Open a day to view the full
              schedule, booking details, contacts, and reservation status.
            </p>
          </div>

          {/* RIGHT */}
          <button
            onClick={handleExportPdf}
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined text-[20px]">
              download
            </span>
            Export PDF
          </button>
        </div>

        <div className="space-y-6">
          {days.map((day) => {
            const activitiesCount = day.activities?.length || 0;

            const summary =
              day.activities && day.activities.length > 0
                ? day.activities
                    .slice(0, 2)
                    .map((activity) => activity.title)
                    .join(" + ")
                : "A curated day planned around your Lebanon experience.";

            return (
              <article
                key={day._id || day.dayNumber}
                className="grid gap-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--primary-20)] hover:shadow-soft-red md:grid-cols-[90px_1fr_190px]"
              >
                <div className="flex justify-start md:justify-center">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-soft-red">
                    <span className="text-[10px] font-bold uppercase leading-none">
                      Day
                    </span>
                    <span className="text-2xl font-extrabold leading-none">
                      {day.dayNumber}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[var(--text-dark)]">
                    {day.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-5 text-sm text-[var(--text-dark)]/55">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-[var(--primary)]" />
                      {day.region || "Lebanon"}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <CalendarDays
                        size={15}
                        className="text-[var(--primary)]"
                      />
                      {activitiesCount} activities
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-dark)]/65">
                    {summary}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-between gap-5 md:items-end">
                  <p className="text-sm font-extrabold text-[var(--primary)]">
                    Estimated Cost: ${day.estimatedDayPrice || 0}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/experiences/${itinerarySlug}/day/${day.dayNumber}`,
                      )
                    }
                    className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
                  >
                    Open Day
                    <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
