import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type DayBreadcrumbProps = {
  tripName: string;
  dayNumber: number;
  itinerarySlug: string;
  source?: "experience" | "my-trip";
};

export default function DayBreadcrumb({
  tripName,
  dayNumber,
  itinerarySlug,
  source = "experience",
}: DayBreadcrumbProps) {
  const parentLabel = source === "experience"
    ? "Experiences"
    : "My Trip";

  const parentPath = source === "experience"
    ? "/experiences"
    : "/my-trip";

  const tripPath = source === "experience"
    ? `/experiences/${itinerarySlug}`
    : `/my-trip`;

  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--text-dark)]/45">
      <Link to="/" className="transition hover:text-[var(--primary)]">
        Home
      </Link>

      <ChevronRight size={15} />

      <Link
        to={parentPath}
        className="transition hover:text-[var(--primary)]"
      >
        {parentLabel}
      </Link>

      <ChevronRight size={15} />

      <Link
        to={tripPath}
        className="transition hover:text-[var(--primary)]"
      >
        {tripName}
      </Link>

      <ChevronRight size={15} />

      <span className="font-bold text-[var(--primary)]">
        Day {dayNumber}
      </span>
    </nav>
  );
}