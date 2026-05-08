import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(122,12,20,0.12),transparent_35%),linear-gradient(180deg,#fff8f6_0%,#f7efe9_100%)] px-6">
      <div className="max-w-xl w-full rounded-4xl bg-white/90 backdrop-blur border border-slate-200 shadow-2xl p-8 md:p-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl font-black text-(--primary)">
          !
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--primary)">
          Access blocked
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-(--text-dark)">
          You cannot open that page
        </h1>

        <p className="mt-4 text-(--slate-500) leading-7">
          {location.state?.from
            ? `The route "${location.state.from}" requires authentication.`
            : "The page you requested does not exist or you do not have access to it."}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-6 py-3 font-bold text-white transition hover:opacity-95"
          >
            Go to Login
          </Link>

          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-(--text-dark) transition hover:border-(--primary)"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}