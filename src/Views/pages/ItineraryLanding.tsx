import React from "react";

export default function ItineraryLanding() {
  return (
    <div className="min-h-screen bg-[var(--background-light)] text-slate-800 dark:bg-[var(--background-dark)] dark:text-slate-100 font-[var(--font-display)] transition-colors duration-300">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background-light)]/80 backdrop-blur-md dark:border-white/10 dark:bg-[var(--background-dark)]/80">
        <div className="mx-auto w-full max-w-[1440px] px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]">
                <span className="material-icons text-white">sailing</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[var(--primary)]">
                LEVANTINE
              </span>
            </div>

            {/* Nav */}
            <nav className="hidden items-center gap-10 md:flex">
              <a className="font-semibold text-[var(--primary)]" href="#">My Itinerary</a>
              <a className="font-medium text-slate-600 hover:text-[var(--primary)] dark:text-slate-300">Destinations</a>
              <a className="font-medium text-slate-600 hover:text-[var(--primary)] dark:text-slate-300">Concierge</a>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
                <span className="material-icons text-sm">notifications</span>
              </button>

              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[var(--primary)]">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO44-UkTyThZ0ZOeK27VCQjyPyf1Vbli09PQkOsSxjE5uBDWFLICyJo4ckNAtU4G4aFZajivD4rOBNKNdd5sVBAuReHut316u_wFpMZVW99ajbL1VNy6A1_vaH-fpkNWLUemEIC27w3haMv1ICQPAv_VK8z2TIT2y3Fv9LCNwV32qd7AXDOpQ5Otn4E2XlHYUJA7vSF61f9XwJ48he-scUFq0zkcxSSnhnLfu4w_0Y7pHgPnbdRNZ-38irGHzcGrh_TmRIo_q3BKBz"
                  alt=""
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto w-full max-w-[1440px] px-8 py-16">
        <div className="flex flex-col gap-16 lg:flex-row">

          {/* LEFT CONTENT */}
          <div className="flex-grow lg:w-2/3">

            {/* HERO */}
            <div className="mb-16">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--primary)]">
                Personalized for Elias
              </span>

              <h1 className="mt-3 mb-6 text-5xl font-extrabold leading-tight">
                Your 7-Day <br />
                <span className="text-[var(--primary)]">Beirut Summer</span>
              </h1>

              <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400">
                A curated blend of hidden coastal escapes, high-octane nightlife,
                and the authentic flavors of the Levant.
              </p>
            </div>

            {/* TIMELINE */}
            <div className="space-y-12">

              {/* DAY CARD */}
              <div className="rounded-2xl bg-white p-8 shadow-xl shadow-black/5 dark:bg-slate-800">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  10:00 AM — MORNING
                </span>
                <h3 className="mt-2 text-2xl font-bold">Iris Beach Club</h3>
                <p className="mt-3 text-slate-500 dark:text-slate-400">
                  Escape the city heat at Damour's most exclusive retreat.
                  Reserved pool-side cabana with sunset views.
                </p>
                <button className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 font-bold text-white transition hover:opacity-90">
                  View Reservation
                </button>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-xl shadow-black/5 dark:bg-slate-800">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  08:00 PM — DINING
                </span>
                <h3 className="mt-2 text-2xl font-bold">
                  Em Sherif, Ashrafieh
                </h3>
                <p className="mt-3 text-slate-500 dark:text-slate-400">
                  The ultimate fine-dining Levantine experience.
                  Multi-course tasting menu curated for your party.
                </p>
              </div>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3">
            <div className="rounded-2xl bg-white p-8 shadow-xl shadow-black/5 dark:bg-slate-800">
              <h3 className="mb-6 text-xl font-extrabold">July 2024</h3>

              <div className="grid grid-cols-7 gap-3 text-center text-sm">
                {["S","M","T","W","T","F","S"].map(d => (
                  <div key={d} className="font-bold text-slate-400">{d}</div>
                ))}

                <div className="text-slate-300">14</div>
                <div className="rounded-full bg-[var(--primary)] py-2 text-white font-bold">15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
              </div>

              <div className="mt-10">
                <div className="rounded-2xl bg-[var(--primary)] p-6 text-white">
                  <p className="text-xs uppercase opacity-80">Your Trip Budget</p>
                  <h4 className="mt-2 text-2xl font-extrabold">$4,250.00</h4>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-white/20">
                    <div className="h-full w-2/3 rounded-full bg-white"></div>
                  </div>
                  <p className="mt-2 text-xs opacity-80">64% spent</p>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* MAP SECTION */}
      <div className="mx-auto w-full max-w-[1440px] px-8 pb-20">
        <div className="relative h-64 overflow-hidden rounded-2xl shadow-inner">
          <img
            className="h-full w-full object-cover grayscale opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB2TWtyeyJa5CBIEcCkBcIBq6-T7mLrH3Eqr5qxArRB3Qt-D8pfjwHsIpDjZZat-s6oZ4zn2cm5FvNOLxtknG_ui6gaakIGOjaHT0WPI2OSqK1bptqXrDy6BzznkppXQXxYQhKN7mS5_cePLjwJsY2GozdLNeAKmF4ZdC_SNZYk0pNcb3kBxx1-TFdi9jJvNl2jd8KXX3e9gIl9s7iiUIVH8Ma1OmtToeBgwmtEOVY4snkgEJ1aS4O2U5bI5YVQ6k6RDZSy5Nz_8zA"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-light)] dark:from-[var(--background-dark)] to-transparent" />
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-8 right-8">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-2xl hover:scale-110 transition">
          <span className="material-icons">support_agent</span>
        </button>
      </div>

    </div>
  );
}