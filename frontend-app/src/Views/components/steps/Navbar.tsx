import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const hasActiveTrip = false;
  const activeTripId = "current";

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Experiences", path: "/experiences" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-5 lg:px- 2xl:px-20 flex items-center justify-between border-b border-stone-200/60 bg-background-light/80 backdrop-blur-md">
      
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary shadow-md">
          <img
            src="/images/arze.png"
            alt="961 Logo"
            className="w-7 h-7 object-contain"
          />
        </div>
        <span className="text-2xl font-bold tracking-tight">
          961.
        </span>
      </Link>

      {/* Close Button */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </header>
  );
}