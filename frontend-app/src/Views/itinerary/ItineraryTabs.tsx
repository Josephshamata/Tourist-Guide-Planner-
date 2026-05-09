import {
  Building2,
  CheckCircle2,
  Info,
  Map,
} from "lucide-react";

type ActiveTab =
  | "itinerary"
  | "inclusions"
  | "hotel"
  | "info";

type ItineraryTabsProps = {
  activeTab: ActiveTab;
  onChange: (tab: ActiveTab) => void;
};

const tabs = [
  {
    id: "itinerary" as const,
    label: "Itinerary",
    icon: Map,
  },
  {
    id: "inclusions" as const,
    label: "Inclusions",
    icon: CheckCircle2,
  },
  {
    id: "hotel" as const,
    label: "Hotel",
    icon: Building2,
  },
  {
    id: "info" as const,
    label: "Important Info",
    icon: Info,
  },
];

export default function ItineraryTabs({
  activeTab,
  onChange,
}: ItineraryTabsProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-8 custom-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={[
                "flex items-center gap-2 border-b-2 px-3 py-5 text-sm font-semibold whitespace-nowrap transition-all",
                active
                  ? "border-[var(--primary)] text-[var(--primary)]"
                  : "border-transparent text-[var(--text-dark)]/50 hover:text-[var(--primary)]",
              ].join(" ")}
            >
              <Icon size={18} />

              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}