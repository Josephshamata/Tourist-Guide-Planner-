import { Sunrise } from "lucide-react";

type DaySummaryCardProps = {
  description: string;
  totalActivities: number;
  totalDuration: number;
};

export default function DaySummaryCard({
  description,
  totalActivities,
  totalDuration,
}: DaySummaryCardProps) {
  return (
    <section className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-soft-red">
      <div className="grid items-center gap-6 md:grid-cols-[90px_1fr_180px_180px]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--primary)]">
          <Sunrise size={38} />
        </div>

        <p className="max-w-2xl text-sm leading-7 text-[var(--text-dark)]">
          {description}
        </p>

        <div className="border-t border-[var(--border)] pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <p className="text-xs font-medium text-[var(--text-dark)]/55">
            Total Activities
          </p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--primary)]">
            {totalActivities}
          </p>
        </div>

        <div className="border-t border-[var(--border)] pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <p className="text-xs font-medium text-[var(--text-dark)]/55">
            Total Duration
          </p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--primary)]">
            {totalDuration}h
          </p>
        </div>
      </div>
    </section>
  );
}