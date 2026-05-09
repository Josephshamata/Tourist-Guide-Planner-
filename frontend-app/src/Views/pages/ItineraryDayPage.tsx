import DayHeaderCard from "../itinerary/days/DayHeaderCard";
import DaySummaryCard from "../itinerary/days/DaySummaryCard";
import DayActivityTimeline from "../itinerary/days/DayActivityTimeline";
import DayBreadcrumb from "../itinerary/days/DayBreadCrumb";



export default function ItineraryDayPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <main className="mx-auto max-w-[1500px] px-6 py-10 xl:px-10">
          <DayBreadcrumb
            tripName="The Socialite"
            itinerarySlug="the-socialite"
            dayNumber={1}
            source="experience"
          />
        <DayHeaderCard
          imageUrl="/images/sunset.png"
          tripName="The Socialite"
          dayNumber={1}
          title="Arrival & Rooftop Sunset"
          region="Beirut"
          durationLabel="3 Days Itinerary"
          estimatedCost={180}
        />

        <DaySummaryCard
          description="Start your trip with a smooth arrival and settle into the city vibes. Enjoy a romantic sunset rooftop experience to kick off your Socialite adventure."
          totalActivities={2}
          totalDuration={4}
        />

        <DayActivityTimeline
  activities={[
    {
      time: "2:00 PM",
      title: "VIP Airport Pickup",
      description:
        "Private luxury transfer from Beirut International Airport to your downtown hotel with a professional chauffeur and comfortable premium vehicle.",
      imageUrl: "/images/driver.png",
      location: "Beirut Airport",
      region: "Beirut",
      durationHours: 1,
      activityType: "Transport",
      estimatedPrice: 40,
      reservationReference: "DRV-1100",
      reservationStatus: "confirmed",
      reservedFor: 2,
      placeName: "961 Chauffeurs",
      phone: "+961 70 111 222",
      whatsapp: "+961 70 111 222",
      instagram: "@961chauffeurs",
      website: "961chauffeurs.com",
      meetingPoint: "Arrival Hall, Beirut-Rafic Hariri International Airport",
      note: "Please be ready at the arrivals gate. Your driver will hold a sign with your name.",
    },
    {
      time: "7:30 PM",
      title: "Sunset Rooftop Lounge",
      description:
        "Cocktails, sunset views, and live DJ sets overlooking Beirut Marina in one of the city’s premium rooftop lounges.",
      imageUrl: "/images/sunset.png",
      location: "Zaitunay Bay",
      region: "Beirut",
      durationHours: 3,
      activityType: "Nightlife",
      estimatedPrice: 60,
      reservationReference: "NFT-2200",
      reservationStatus: "pending",
      reservedFor: 2,
      placeName: "Skyline Beirut",
      phone: "+961 78 888 777",
      whatsapp: "+961 78 888 777",
      instagram: "@skylinebeirut",
      website: "skylinebeirut.com",
      meetingPoint: "Skyline Beirut reception desk",
      note: "Smart casual dress code is recommended. Reservation is held for 15 minutes.",
    },
  ]}
/>
      </main>
    </div>
  );
}