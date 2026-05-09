const days = [
  {
    dayNumber: 1,
    title: "Beirut Mediterranean Spirit",
    imageUrl:
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=800&auto=format&fit=crop",
    estimatedCost: 600,
    activities: [
      { time: "Morning", title: "Iris Beach Club Experience" },
      { time: "Lunch", title: "Seaside Lunch at Sal" },
      { time: "Afternoon", title: "Gemmayze Cultural Walk" },
      { time: "Evening", title: "Dinner at Em Sherif & Rooftop Drinks" },
    ],
  },
  {
    dayNumber: 2,
    title: "Jounieh & Byblos Discovery",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    estimatedCost: 650,
    activities: [
      { time: "Morning", title: "Jeita Grotto & Cable Car" },
      { time: "Lunch", title: "Seafood Lunch in Byblos" },
      { time: "Afternoon", title: "Byblos Old Souk & Castle" },
      { time: "Evening", title: "Sunset at the Byblos Port" },
    ],
  },
  {
    dayNumber: 3,
    title: "Batroun Coastal Charm",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
    estimatedCost: 550,
    activities: [
      { time: "Morning", title: "Explore Batroun Old Town" },
      { time: "Lunch", title: "Lunch at a Local Sea-view Spot" },
      { time: "Afternoon", title: "Relax at a Private Beach" },
      { time: "Evening", title: "Dinner & Drinks in Batroun" },
    ],
  },
  {
    dayNumber: 4,
    title: "Beirut’s Best Moments",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    estimatedCost: 600,
    activities: [
      { time: "Morning", title: "Brunch at a Trendy Café" },
      { time: "Lunch", title: "Free Time / Shopping" },
      { time: "Afternoon", title: "Pigeon Rocks & Corniche Walk" },
      { time: "Evening", title: "Farewell Dinner in Beirut" },
    ],
  },
];

const activityIcons: Record<string, string> = {
  Morning: "wb_sunny",
  Lunch: "restaurant",
  Afternoon: "light_mode",
  Evening: "nightlife",
};

export function PdfDayByDay() {
  return (
    <section>
      <h2 className="pdf-section-heading">Day-by-Day Itinerary</h2>
      <div className="pdf-section-line" />

      <div className="pdf-timeline">
        <div className="pdf-timeline-line" />

        {days.map((day) => (
          <div key={day.dayNumber} className="pdf-day-row">
            <div className="pdf-day-badge">
              <span className="pdf-day-badge-small">Day</span>
              <span className="pdf-day-badge-number">
                {String(day.dayNumber).padStart(2, "0")}
              </span>
            </div>

            <img src={day.imageUrl} alt={day.title} className="pdf-day-image" />

            <div>
              <h3 className="pdf-day-title">{day.title}</h3>

              <div className="pdf-activity-list">
                {day.activities.map((activity) => (
                  <div
                    key={`${day.dayNumber}-${activity.time}`}
                    className="pdf-activity-row"
                  >
                    <div className="pdf-activity-time">
                      <span className="material-symbols-outlined pdf-activity-icon">
                        {activityIcons[activity.time] || "circle"}
                      </span>
                      {activity.time}
                    </div>

                    <div className="pdf-activity-title">{activity.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pdf-day-cost">
              <p className="pdf-day-cost-label">Est. Cost</p>
              <p className="pdf-day-cost-value">${day.estimatedCost}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pdf-note">
        <span className="material-symbols-outlined pdf-note-icon">info</span>
        This itinerary is fully customizable. Activities, times and options can
        be adjusted to fit your preferences.
      </div>
    </section>
  );
}