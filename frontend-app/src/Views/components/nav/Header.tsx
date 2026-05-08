import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { logoutUser } from "../../../services/auth.service";


export function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  // Later replace with real authenticated user
  const user = {
    name: "Mohammad Sabra",
    avatar:
      "https://ui-avatars.com/api/?name=Mohammad+Sabra&background=7A0C14&color=ffffff",
  };

  // Later replace with backend/db logic
  const hasActiveTrip = false;
  const activeTripId = "current";

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Experiences", path: "/experiences" },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background-light/95 backdrop-blur-md">
      <div className="flex h-20 w-full items-center justify-between px-10">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src="/images/arze.png"
              alt="961 Logo"
              className="h-7 w-7 object-contain"
            />
          </div>

          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
            961.
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-slate-700 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* My Trip */}
          <NavLink
            to={
              hasActiveTrip
                ? `/itinerary/${activeTripId}`
                : "/my-trip"
            }
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary"
              }`
            }
          >
            My Trip
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Plan Trip CTA */}
          <Button onClick={() => navigate("/Step1")}>
            Plan My Trip
          </Button>

          {/* Profile */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setOpenMenu((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-primary/20 bg-white px-2 py-1 shadow-sm transition hover:shadow-md"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <span className="material-symbols-outlined text-slate-600">
                  expand_more
                </span>
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  {/* User Info */}
                  <div className="border-b border-slate-100 px-3 py-3">
                    <p className="text-sm font-bold text-slate-900">
                      {user.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      Traveler account
                    </p>
                  </div>

                  {/* My Trip Mobile Shortcut */}
                  <button
                    onClick={() =>
                      navigate(
                        hasActiveTrip
                          ? `/itinerary/${activeTripId}`
                          : "/my-trip"
                      )
                    }
                    className="mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-primary/10 hover:text-primary md:hidden"
                  >
                    <span className="material-symbols-outlined text-lg">
                      luggage
                    </span>
                    My Trip
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>

                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}