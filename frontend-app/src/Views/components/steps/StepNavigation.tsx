import { Link, useNavigate } from "react-router-dom";

type StepNavigationProps = {
  backTo?: string;
  nextTo?: string;
  nextLabel: string;
  skipTo?: string;
  onNext?: () => void;
};

export default function StepNavigation({
  backTo,
  nextTo,
  nextLabel,
  skipTo,
  onNext,
}: StepNavigationProps) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (onNext) {
      onNext();
      return;
    }

    if (nextTo) {
      navigate(nextTo);
    }
  };

  return (
    <div className="flex w-full items-center justify-between px-6 py-8 sm:px-8">
      
      {/* LEFT → BACK */}
      <div>
        {backTo && (
          <button
            onClick={() => navigate(backTo)}
            className="text-primary flex cursor-pointer items-center gap-2 font-semibold transition hover:scale-105 active:scale-95"
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
            className="text-muted font-medium transition-colors hover:text-primary"
          >
            Skip this step
          </Link>
        )}

        <button
          type="button"
          onClick={handleNext}
          className="bg-primary flex items-center gap-2 rounded-full px-10 py-4 font-bold text-white shadow-lg shadow-primary/20 transition hover:scale-105 active:scale-95"
        >
          {nextLabel}

          <span className="material-symbols-outlined">
            arrow_forward
          </span>
        </button>

      </div>
    </div>
  );
}