import type { Itinerary } from "../../../models/itinerary.model";
import "./pdf.css";
type Props = {
  itinerary: Itinerary;
};

const activityIcons: Record<string, string> = {
  food: "restaurant",
  hotel: "bed",
  beach: "beach_access",
  nightlife: "nightlife",
  nature: "forest",
  adventure: "hiking",
  culture: "museum",
  shopping: "shopping_bag",
  transport: "directions_car",
  relaxation: "spa",
};

export function PdfDayByDay({ itinerary }: Props) {
  return (
    <section>
      <h2 className="pdf-section-heading">Day-by-Day Itinerary</h2>
      <div className="pdf-section-line" />

      <div className="pdf-timeline">
        <div className="pdf-timeline-line" />

        {itinerary.days.map((day) => (
          <div key={day._id || day.dayNumber} className="pdf-day-row">
            <div className="pdf-day-badge">
              <span className="pdf-day-badge-small">Day</span>
              <span className="pdf-day-badge-number">
                {String(day.dayNumber).padStart(2, "0")}
              </span>
            </div>

            <img
              src={
                day.activities?.[0]?.imageUrl ||
                itinerary.coverImage ||
                "/images/sunset.png"
              }
              alt={day.title}
              className="pdf-day-image"
            />

            <div>
              <h3 className="pdf-day-title">{day.title}</h3>

              <div className="pdf-activity-list">
                {day.activities.slice(0, 4).map((activity) => (
                  <div
                    key={activity._id || `${day.dayNumber}-${activity.title}`}
                    className="pdf-activity-row"
                  >
                    <div className="pdf-activity-time">
                      <span className="material-symbols-outlined pdf-activity-icon">
                        {activityIcons[activity.activityType || ""] || "schedule"}
                      </span>

                      {activity.time || "Time"}
                    </div>

                    <div className="pdf-activity-title">
                      {activity.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pdf-day-cost">
              <p className="pdf-day-cost-label">Est. Cost</p>
              <p className="pdf-day-cost-value">
                ${day.estimatedDayPrice || 0}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pdf-note">
        <span className="material-symbols-outlined pdf-note-icon">info</span>
        This itinerary is customizable. Activities, times and options can be
        adjusted based on availability and traveler preferences.
      </div>
    </section>
  );
}