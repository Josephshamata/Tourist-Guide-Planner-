// src/Views/itinerary/components/ItineraryHeader.tsx
import React from "react";
import { Icon } from "../components/common/Icon";

type Tab = "Overview" | "Beach" | "Dining" | "Nightlife" | "Culture";

type Props = {
  tags?: string[];
  dateRange?: string;
  travelersCount?: number;

  tripName?: string;
  bookingsConfirmed?: number;
  bookingsTotal?: number;

  activeTab?: Tab;
  onTabChange?: (tab: Tab) => void;

  onShare?: () => void;
  onDownloadPdf?: () => void;
  onCalendar?: () => void;
  onEditPreferences?: () => void;

  editableTripName?: boolean;
  onTripNameChange?: (name: string) => void;
};

export function ItineraryHeader({
  tags = ["Luxury", "Coastal", "Nightlife"],
  dateRange = "July 15 - 22",
  travelersCount = 4,
  tripName = "Beirut Summer Escape",
  bookingsConfirmed = 3,
  bookingsTotal = 8,
  activeTab = "Overview",
  onTabChange,
  onShare,
  onDownloadPdf,
  onCalendar,
  onEditPreferences,
  editableTripName = true,
  onTripNameChange,
}: Props) {
  const pct =
    bookingsTotal > 0
      ? Math.round((bookingsConfirmed / bookingsTotal) * 100)
      : 0;

  return (
    <header className="bg-white pt-10 pb-8">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full"
                >
                  {t}
                </span>
              ))}

              <div className="h-4 w-px bg-slate-200 mx-2" />

              <span className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                <Icon name="calendar_month" className="text-lg" />
                {dateRange}
              </span>

              <span className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                <Icon name="group" className="text-lg" />
                {travelersCount} Travelers
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              {editableTripName ? (
                <h1
                  className="text-5xl font-extrabold text-slate-900 focus:outline-none"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    onTripNameChange?.(e.currentTarget.textContent || "")
                  }
                >
                  {tripName}
                </h1>
              ) : (
                <h1 className="text-5xl font-extrabold text-slate-900">
                  {tripName}
                </h1>
              )}

              <Icon name="edit_square" className="text-slate-300" />
            </div>

            <div className="max-w-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary">
                  {bookingsConfirmed}/{bookingsTotal} Bookings Confirmed
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {pct}% complete
                </span>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(121,12,19,0.3)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onShare}
                className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Icon name="ios_share" className="text-lg" /> Share
              </button>

              <button
                type="button"
                onClick={onDownloadPdf}
                className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Icon name="file_download" className="text-lg" /> PDF
              </button>

              <button
                type="button"
                onClick={onCalendar}
                className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_10px_30px_rgba(121,12,19,0.18)]"
              >
                <Icon name="event_available" className="text-lg" /> Calendar
              </button>
            </div>

            <button
              type="button"
              onClick={onEditPreferences}
              className="text-xs font-bold text-slate-400 hover:text-primary transition-colors underline underline-offset-4 decoration-slate-200"
            >
              Edit Preferences
            </button>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 p-1.5 bg-slate-50 w-fit rounded-2xl border border-slate-100">
          {(["Overview", "Beach", "Dining", "Nightlife", "Culture"] as const).map(
            (tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange?.(tab)}
                  className={
                    isActive
                      ? "px-6 py-2.5 rounded-xl text-sm font-bold bg-white shadow-sm text-primary"
                      : "px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-primary hover:bg-white/50 transition-all"
                  }
                >
                  {tab}
                </button>
              );
            }
          )}
        </div>
      </div>
    </header>
  );
}