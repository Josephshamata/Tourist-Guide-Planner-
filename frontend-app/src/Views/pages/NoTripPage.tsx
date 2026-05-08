import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";

export function NoTripPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background-light px-6 py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-primary/10 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-4xl">
            travel_explore
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900">
          No itinerary created yet
        </h1>

        <p className="mx-auto mt-4 max-w-md text-slate-500">
          Start planning your Lebanon trip by answering a few quick questions.
          We’ll build a personalized itinerary based on your style, budget, and
          interests.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => navigate("/Step1")}>
            Plan My Trip
          </Button>

          <button
            onClick={() => navigate("/experiences")}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            Browse Experiences
          </button>
        </div>
      </div>
    </div>
  );
}