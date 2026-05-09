import React from "react";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  onToggleFilters: () => void;
};

export function ExperienceHero({
  search,
  onSearchChange,
  onToggleFilters,
}: Props) {
  return (
    <section className="w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center overflow-hidden px-8 py-6">
        <div className="flex w-full flex-col justify-center pr-8 lg:w-1/2">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#1B1B1B]">
            Experiences in Lebanon
          </h1>

          <p className="mt-4 max-w-lg text-base leading-7 text-[#6B7280]">
            Discover handcrafted journeys showcasing Lebanon’s culture,
            nightlife, nature, beaches, food, and hidden gems.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex h-14 flex-1 items-center rounded-2xl border border-[#E5E7EB] bg-white px-5 shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-[#9CA3AF]">
                search
              </span>

              <input
                type="text"
                placeholder="Search experiences..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="ml-3 w-full bg-transparent text-[14px] outline-none placeholder:text-[#9CA3AF]"
              />
            </div>
            <button
              type="button"
              onClick={onToggleFilters}
              className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-6 text-sm font-semibold text-[#1B1B1B] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <span className="material-symbols-outlined text-[19px] text-[var(--primary)]">
                tune
              </span>
              Filters
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block lg:w-1/2">
          <div className="absolute inset-0 z-10 rounded-[28px] bg-gradient-to-r from-white via-white/20 to-transparent" />

          <img
            src="https://i.dailymail.co.uk/i/pix/2017/06/07/15/413337C200000578-4152868-image-a-34_1496846632434.jpg"
            alt="Lebanon"
            className="h-[260px] w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
