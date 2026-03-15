import React from "react";
import { MorningCard } from "./MorningCard";
import { CompactActivityCard } from "./CompactActivityCard";
import { EveningGrid } from "./EveningGrid";
import { EmptyNightCard } from "./EmptyNightCard";

type Props = {
  dayNumber: string; // "01"
  title: string;
  subtitle: string;
  weather?: { label: string; icon: "wb_sunny" | "cloud" | "rainy" | "ac_unit" };
  confirmedCount: number;
  totalCount: number;

  onRegenerateDay?: () => void;
  onAddSurprise?: () => void;
};

export function TimelineDay({
  dayNumber,
  title,
  subtitle,
  weather = { label: "31°C Sunny", icon: "wb_sunny" },
  confirmedCount,
  totalCount,
  onRegenerateDay,
  onAddSurprise,
}: Props) {
  return (
    <section>
      {/* Top Row */}
      <div className="flex items-end justify-between mb-10">
        <div className="flex items-center gap-6">
          {/* Day Bubble */}
          <div className="w-20 h-20 bg-primary rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-xl ring-1 ring-primary/10">
            <span className="text-[10px] font-bold tracking-widest leading-none mb-1">
              DAY
            </span>
            <span className="text-3xl font-extrabold leading-none">
              {dayNumber}
            </span>
          </div>

          {/* Title + Weather */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-extrabold text-slate-900">{title}</h2>

              <div className="flex items-center gap-2 bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100">
                <span className="material-symbols-outlined text-blue-500 text-lg">
                  {weather.icon}
                </span>
                <span className="text-xs font-bold text-blue-600">
                  {weather.label}
                </span>
              </div>
            </div>

            <p className="text-slate-500 font-semibold tracking-wide">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-col items-end gap-3">
          <div className="bg-white border border-slate-200 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tighter">
              Activities Confirmed: {confirmedCount}/{totalCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onRegenerateDay}
              className="flex items-center gap-1.5 px-3 py-1.5 text-slate-400 hover:text-primary transition-colors text-xs font-bold bg-white border border-slate-100 rounded-lg hover:shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Regenerate Day
            </button>

            <button
              type="button"
              onClick={onAddSurprise}
              className="flex items-center gap-1.5 px-3 py-1.5 text-slate-400 hover:text-primary transition-colors text-xs font-bold bg-white border border-slate-100 rounded-lg hover:shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">magic_button</span>
              Add Surprise Experience
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {/* Morning */}
        <TimelineSection
          dotVariant="solid"
          title="Morning"
        >
          <MorningCard />
        </TimelineSection>

        {/* Afternoon */}
        <TimelineSection
          dotVariant="soft"
          title="Afternoon"
        >
          <CompactActivityCard />
        </TimelineSection>

        {/* Evening */}
        <TimelineSection
          dotVariant="faint"
          title="Evening"
        >
          <EveningGrid />
        </TimelineSection>

        {/* Night - Empty */}
        <TimelineSection
          dotVariant="empty"
          title="Night"
          shortLine
        >
          <EmptyNightCard />
        </TimelineSection>
      </div>
    </section>
  );
}

/* --------------------------------- */
/* Reusable Section Wrapper           */
/* --------------------------------- */
function TimelineSection({
  title,
  children,
  dotVariant,
  shortLine = false,
}: {
  title: string;
  children: React.ReactNode;
  dotVariant: "solid" | "soft" | "faint" | "empty";
  shortLine?: boolean;
}) {
  const dotClass =
    dotVariant === "solid"
      ? "bg-primary"
      : dotVariant === "soft"
      ? "bg-primary/40"
      : dotVariant === "faint"
      ? "bg-primary/20"
      : "bg-slate-200";

  return (
    <div className="relative pl-10">
      <div
        className={[
          "absolute left-0 top-0 w-0.5",
          shortLine ? "h-20 opacity-30" : "bottom-0",
          "timeline-line-gradient",
        ].join(" ")}
      />

      <div
        className={[
          "absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full ring-4 ring-white shadow-sm",
          dotClass,
        ].join(" ")}
      />

      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8">
        <span
          className={
            dotVariant === "empty" ? "text-slate-300" : "text-primary/40"
          }
        >
          {title}
        </span>
      </h4>

      <div className="space-y-8">{children}</div>
    </div>
  );
}