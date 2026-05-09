import { CalendarCheck } from "lucide-react";

type PriceCardProps = {
  price: number;
};

export default function PriceCard({
  price,
}: PriceCardProps) {
  return (
    <div className="glass-card self-center rounded-[2rem] p-8 shadow-soft-red">
      <p className="text-sm font-bold uppercase tracking-wide text-[var(--primary)]">
        Total Price
      </p>

      <h2 className="mt-3 text-5xl font-extrabold text-[var(--primary)]">
        ${price}
      </h2>

      <p className="mt-2 text-sm text-[var(--text-dark)]/60">
        Per Person
      </p>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[var(--shadow-soft)] transition-all hover:scale-[1.01] active:scale-[0.99]">
        <CalendarCheck size={18} />
        Book This Experience
      </button>
    </div>
  );
}