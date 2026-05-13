import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/steps/Navbar";
import StepHeader from "../components/steps/StepHeader";
import { getTripPreferences, saveTripPreferences } from "../../tripPreferences";
import { generateAIItinerary } from "../../services/ai.service";

type Service = "driver" | "hotel" | "guide" | "airport" | "vip";

function ServiceCard({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer flex flex-col items-center gap-4 rounded-3xl p-6 transition-all shadow-sm",
        active
          ? "scale-105 border-2 border-primary bg-primary text-white shadow-xl"
          : "border-2 border-primary/10 bg-white hover:border-primary/40",
      ].join(" ")}
    >
      <div
        className={[
          "flex size-14 items-center justify-center rounded-full transition-transform",
          active ? "bg-white/20 text-white" : "bg-primary/5 text-primary",
        ].join(" ")}
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>

      <span className="text-center text-sm font-bold">{label}</span>
    </button>
  );
}

export default function Step6() {
  const navigate = useNavigate();

  const [services, setServices] = useState<Service[]>(["guide"]);

  const toggleService = (service: Service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);

      saveTripPreferences({
        requestedServices: services,
      });

      const finalPreferences = getTripPreferences();

      const itinerary = await generateAIItinerary(finalPreferences);

      navigate(`/Generated-Trip/${itinerary.slug}`);
    } catch (error) {
      console.error("Failed to generate AI itinerary:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background-light font-sans text-[#1b100d]">
      <Navbar />

      <div className="mx-auto w-full max-w-5xl">
        <StepHeader
          stepLabel="Step 6 of 6"
          title="Would you like us to organize everything for you?"
          progressPercent={100}
        />

        <div className="px-6 py-8 sm:px-8">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#1b100d]/70">
                Select the services you need for a seamless journey through
                Lebanon. We&apos;ll handle the logistics while you make the
                memories.
              </p>
            </div>

            <section className="flex justify-center">
              <div className="grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                <ServiceCard
                  active={services.includes("driver")}
                  onClick={() => toggleService("driver")}
                  icon="directions_car"
                  label="Private Driver"
                />

                <ServiceCard
                  active={services.includes("guide")}
                  onClick={() => toggleService("guide")}
                  icon="explore"
                  label="Tour Guide"
                />

                <ServiceCard
                  active={services.includes("airport")}
                  onClick={() => toggleService("airport")}
                  icon="flight_land"
                  label="Airport Pickup"
                />

                <ServiceCard
                  active={services.includes("vip")}
                  onClick={() => toggleService("vip")}
                  icon="verified"
                  label="VIP Access"
                />
              </div>
            </section>

            <section className="overflow-hidden rounded-[2rem]">
              <div
                className="flex min-h-[500px] items-end rounded-[2rem] bg-cover bg-center p-8 md:p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(103, 23, 9, 0.78), rgba(103, 23, 9, 0.12)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3GywBnpkiXoINq_AIVl90Lp_A-QwX8unz_z-Bf27xl11W-fqtA-xIBPwICc11yUoPqEisVjMjzYhZAcyuxEW7i7Gr2INCvSTt0zJHmctYbQ3ZcMZo1q2pP04K7CQgkKeVQYv-qPOyLZ5S8ni7FuJyEuiueqqeA0_-tf-gcxA3UqszNeO4xg5iACmQCgyzu_eZwSfYMjWWbTeLJyXtxaOPgF5QmDDZqhqL6YQWFRUGzOsrfcRy6HhphGFqKA4syA-DwwXdjeWsFp6q')",
                }}
              >
                <div className="space-y-2 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                    Your destination awaits
                  </p>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-4 flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:scale-[1.05] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span>
                      {loading
                        ? "Generating your trip..."
                        : "Generate My Lebanon Experience"}
                    </span>
                    <span className="material-symbols-outlined">
                      {loading ? "hourglass_top" : "auto_awesome"}
                    </span>
                  </button>
                </div>
              </div>
            </section>

            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
