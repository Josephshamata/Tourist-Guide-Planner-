import MyTripHeader from "../mytrip/MyTripHeader";
import TripStats from "../mytrip/TripStats";
import UpcomingTripsSection from "../mytrip/UpcomingTripsSection";
import TripHistorySection from "../mytrip/TripHistorySection";
import SupportCard from "../mytrip/SupportCard";
    

export default function MyTripPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <main className="mx-auto max-w-[1500px] px-6 py-10 xl:px-10">
        {/* Top */}
        <section className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
  <MyTripHeader />

  <TripStats upcomingTrips={2} completedTrips={4} />
</section>

        {/* Upcoming */}
        <div className="mt-8">
          <UpcomingTripsSection />
        </div>

        {/* History */}
        <div className="mt-8">
          <TripHistorySection />
        </div>

        {/* Support */}
        <div className="mt-8">
          <SupportCard />
        </div>
      </main>
    </div>
  );
}