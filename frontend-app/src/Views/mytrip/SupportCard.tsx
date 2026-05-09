import { ChevronRight, Headphones, Info } from "lucide-react";

export default function SupportCard() {
  return (
    <section className="rounded-[2rem] border border-[var(--primary-10)] bg-[var(--primary-10)] p-7 shadow-soft-red">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm">
            <Info size={25} />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-[var(--text-dark)]">
              Need help with your trip?
            </h3>

            <p className="mt-1 text-sm text-[var(--text-dark)]/60">
              Our support team is here to assist you with any changes or
              questions.
            </p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-full border border-[var(--primary)] bg-white px-6 py-3 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">
          <Headphones size={18} />
          Contact Support
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}