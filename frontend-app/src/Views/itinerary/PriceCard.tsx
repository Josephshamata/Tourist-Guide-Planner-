import { CalendarCheck } from "lucide-react";

type PriceCardProps = {
  price: number;
  onBook?: () => void;
  alreadyBooked?: boolean;
};

export default function PriceCard({ price, onBook, alreadyBooked }: PriceCardProps) {
  return (
    <div className="glass-card self-center rounded-[2rem] p-8 shadow-soft-red">
      <p className="text-sm font-bold uppercase tracking-wide text-[var(--primary)]">
        Total Price
      </p>

      <h2 className="mt-3 text-5xl font-extrabold text-[var(--primary)]">
        ${price}
      </h2>

      <p className="mt-2 text-sm text-[var(--text-dark)]/60">Per Person</p>

      <button
  type="button"
  disabled={alreadyBooked}
  onClick={onBook}
  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white shadow-lg transition
  ${
    alreadyBooked
      ? "cursor-not-allowed bg-slate-400"
      : "bg-[var(--primary)] hover:opacity-90"
  }`}
>
  <CalendarCheck size={18} />

  {alreadyBooked
    ? "Already Booked"
    : "Book This Experience"}
</button>
    </div>
  );
}