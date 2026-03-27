import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../common/Button";

export function Header() {
  const location = useLocation();

  const isItineraryPage = location.pathname.startsWith("/itinerary");
  const isBudgetPage = location.pathname.startsWith("/budget");

  const user = {
    name: "Mohammad Sabra",
    avatar:
      "https://ui-avatars.com/api/?name=Mohammad+Sabra&background=7A0C14&color=ffffff",
    isPremium: true,
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-primary/10">
      <div className="w-full px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
            <img
              src="/images/arze.png"
              alt="961 Logo"
              className="w-7 h-7 object-contain"
            />
          </div>

          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
            961.
          </h1>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Destinations", "Experiences", "Personalities", "Events"].map(
            (item) => (
              <a
                key={item}
                className="text-sm font-semibold hover:text-primary transition-colors"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* PRO Badge */}
          {user?.isPremium && (
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">
                  bolt
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-600">
                PRO MEMBER
              </span>
            </div>
          )}

          {/* Budget Controls */}
          {isBudgetPage && (
            <div className="flex items-center gap-2">

              <button className="flex items-center justify-center rounded-full size-10 bg-[var(--accent-soft)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-xl">
                  ios_share
                </span>
              </button>

              <button className="flex items-center justify-center rounded-full size-10 bg-[var(--accent-soft)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-xl">
                  picture_as_pdf
                </span>
              </button>

              <button className="ml-2 flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-sm">
                  edit
                </span>
                Edit Total Budget
              </button>

            </div>
          )}

          {/* Build Trip (hidden on itinerary + budget) */}
          {!isItineraryPage && !isBudgetPage && (
            <Button>Build My Trip</Button>
          )}

          {/* Profile */}
          {user ? (
            <Link to="/profile">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary cursor-pointer hover:scale-105 transition"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
          )}

        </div>
      </div>
    </header>
  );
}