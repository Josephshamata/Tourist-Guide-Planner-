import { useState } from "react";
import Navbar from "../components/steps/Navbar";
import StepHeader from "../components/steps/StepHeader";

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
          ? "border-2 border-primary bg-primary text-white shadow-xl scale-105"
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
  const [services, setServices] = useState<Service[]>(["guide"]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const toggleService = (service: Service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = () => {
    console.log({
      services,
      form,
      comfort: localStorage.getItem("comfort"),
      stay: localStorage.getItem("stay"),
    });
  };

  return (
    <div className="min-h-screen bg-background-light font-sans text-[#1b100d]">
      <Navbar
        onSave={() => console.log("Save progress")}
        onClose={() => console.log("Close")}
      />

      <div className="mx-auto w-full max-w-5xl">
        <StepHeader
          stepLabel="Step 6 of 6"
          title="Would you like us to organize everything for you?"
          progressPercent={100}
        />

        <div className="px-6 py-8 sm:px-8">
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#1b100d]/70">
                Select the services you need for a seamless journey through
                Lebanon. We&apos;ll handle the logistics while you make the
                memories.
              </p>
            </div>

            <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              <ServiceCard
                active={services.includes("driver")}
                onClick={() => toggleService("driver")}
                icon="directions_car"
                label="Private Driver"
              />

              <ServiceCard
                active={services.includes("hotel")}
                onClick={() => toggleService("hotel")}
                icon="bed"
                label="Hotel Booking"
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
            </section>

            <section className="rounded-[2rem] border border-primary/5 bg-white px-10 py-12 shadow-xl shadow-primary/5 md:px-14">
              <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-[#1b100d]">
                Where should we send your itinerary?
              </h2>

              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="ml-6 text-sm font-bold text-primary/70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-full border border-primary/10 bg-background-light px-10 py-6 text-xl text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="ml-6 text-sm font-bold text-primary/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-full border border-primary/10 bg-background-light px-10 py-6 text-xl text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="ml-6 text-sm font-bold text-primary/70">
                    WhatsApp Number
                  </label>

                  <div className="flex gap-3">
                    <div className="flex w-36 items-center justify-center rounded-full border border-primary/10 bg-background-light px-6 py-6 text-xl font-bold text-black">
                      +961
                    </div>

                    <input
                      type="tel"
                      placeholder="70 123 456"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="flex-1 rounded-full border border-primary/10 bg-background-light px-10 py-6 text-xl text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-6 text-2xl font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Generate My Lebanon Experience</span>
                    <span className="material-symbols-outlined">
                      auto_awesome
                    </span>
                  </button>
                </div>
              </div>

              <p className="mx-auto mt-10 max-w-4xl px-4 text-center text-sm leading-8 text-primary/40 cursor-p">
                By clicking &quot;Generate My Lebanon Experience&quot;, you
                agree to receive a personalized itinerary and quote via
                email/WhatsApp. Your data is protected and never shared with
                third parties.
              </p>
            </section>

            <section className="overflow-hidden rounded-[2rem]">
              <div
                className="flex min-h-[300px] items-end rounded-[2rem] bg-cover bg-center p-8 md:p-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(103, 23, 9, 0.78), rgba(103, 23, 9, 0.12)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3GywBnpkiXoINq_AIVl90Lp_A-QwX8unz_z-Bf27xl11W-fqtA-xIBPwICc11yUoPqEisVjMjzYhZAcyuxEW7i7Gr2INCvSTt0zJHmctYbQ3ZcMZo1q2pP04K7CQgkKeVQYv-qPOyLZ5S8ni7FuJyEuiueqqeA0_-tf-gcxA3UqszNeO4xg5iACmQCgyzu_eZwSfYMjWWbTeLJyXtxaOPgF5QmDDZqhqL6YQWFRUGzOsrfcRy6HhphGFqKA4syA-DwwXdjeWsFp6q')",
                }}
              >
                <div className="space-y-2 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                    Your destination awaits
                  </p>
                  <h4 className="text-3xl font-extrabold leading-tight md:text-4xl">
                    Discover the Heart of the Mediterranean
                  </h4>
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
