// src/Views/pages/ItineraryLanding.tsx
import React, { useState } from "react";

import { Timeline } from "../itinerary/TimeLine";
import { Sidebar } from "../itinerary/Sidebar";
import { MapPreview } from "../itinerary/MapPreview";
import { FloatingConcierge } from "../itinerary/FloatingConcierge";
import { ItineraryHeader } from "../itinerary/ItineraryHeader";

export function ItineraryLanding() {
  const [tripName, setTripName] = useState("Beirut Summer Escape");

  return (
    <>
      {/* Header under navbar */}
      <ItineraryHeader
        tags={["Luxury", "Coastal", "Nightlife"]}
        dateRange="July 15 - 22"
        travelersCount={4}
        tripName={tripName}
        bookingsConfirmed={3}
        bookingsTotal={8}
        editableTripName
        onTripNameChange={setTripName}
        onShare={() => console.log("Share trip")}
        onDownloadPdf={() => console.log("Download PDF")}
        onCalendar={() => console.log("Add to calendar")}
        onEditPreferences={() => console.log("Edit preferences")}
      />

      <main className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            
            <Timeline />
          </div>

          <aside className="lg:w-[420px] space-y-8">
            <Sidebar />
          </aside>
        </div>
      </main>

      <MapPreview />
      <FloatingConcierge />
    </>
  );
}