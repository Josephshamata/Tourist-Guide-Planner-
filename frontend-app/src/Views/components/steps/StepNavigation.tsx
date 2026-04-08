import { Link, useNavigate } from "react-router-dom";

type StepNavigationProps = {
  backTo?: string;
  nextTo: string;
  nextLabel: string;
  skipTo?: string;
};

export default function StepNavigation({
  backTo,
  nextTo,
  nextLabel,
  skipTo,
}: StepNavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between px-6 py-8 sm:px-8">

      {/* LEFT → BACK */}
      <div>
        {backTo && (
          <button
            onClick={() => navigate(backTo)}
            className="flex items-center gap-2 text-primary font-semibold hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <span className="material-symbols-outlined">
              arrow_back
            </span>
            Back
          </button>
        )}
      </div>

      {/* RIGHT → SKIP + NEXT */}
      <div className="flex items-center gap-6">

        {skipTo && (
          <Link
            to={skipTo}
            className="text-muted font-medium hover:text-primary transition-colors"
          >
            Skip this step
          </Link>
        )}

        <Link
          to={nextTo}
          className="flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition"
        >
          {nextLabel}
          <span className="material-symbols-outlined">
            arrow_forward
          </span>
        </Link>

      </div>
    </div>
  );
}