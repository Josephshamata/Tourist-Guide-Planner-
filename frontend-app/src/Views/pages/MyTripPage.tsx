import { useEffect, useState } from "react";

import MyTripHeader from "../mytrip/MyTripHeader";
import TripStats from "../mytrip/TripStats";
import UpcomingTripsSection from "../mytrip/UpcomingTripsSection";
import TripHistorySection from "../mytrip/TripHistorySection";
import SupportCard from "../mytrip/SupportCard";

import { getMyBookings } from "../../services/booking.service";
import type { Booking } from "../../models/booking.model";

export default function MyTripPage() {
  const [upcomingTrips, setUpcomingTrips] = useState<Booking[]>([]);
  const [completedTrips, setCompletedTrips] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getMyBookings();

        setUpcomingTrips(data.upcomingTrips || []);
        setCompletedTrips(data.completedTrips || []);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-light)]">
        <p className="font-semibold text-[var(--text-dark)]">
          Loading your trips...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-light)]">
      <main className="mx-auto max-w-[1500px] px-6 py-10 xl:px-10">
        <section className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <MyTripHeader />

          <TripStats
            upcomingTrips={upcomingTrips.length}
            completedTrips={completedTrips.length}
          />
        </section>

        <div className="mt-8">
          <UpcomingTripsSection bookings={upcomingTrips} />
        </div>

        <div className="mt-8">
          <TripHistorySection bookings={completedTrips} />
        </div>

        <div className="mt-8">
          <SupportCard />
        </div>
      </main>
    </div>
  );
}