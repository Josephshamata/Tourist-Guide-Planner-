import {
  AlarmClock,
  BedDouble,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

type TripOverviewCardProps = {
  durationDays: number;
  nights?: number;
  mainPlaces?: string[];
  hotelName?: string;
  hotelStars?: number;
  groupSize?: number;
  categories?: string[];
  hotelCost?: number;
  foodCost?: number;
  transportCost?: number;
  activitiesCost?: number;
  totalCost?: number;
};

export default function TripOverviewCard({
  durationDays,
  nights = 2,
  mainPlaces = ["Beirut", "Rooftops", "Nightlife Districts"],
  hotelName = "City Hotel Downtown",
  hotelStars = 5,
  groupSize = 2,
  categories = ["nightlife", "city", "luxury"],
  hotelCost = 250,
  foodCost = 120,
  transportCost = 70,
  activitiesCost = 150,
  totalCost = 590,
}: TripOverviewCardProps) {
  return (
    <aside className="space-y-6">
      <section className="rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-soft-red">
        <h3 className="text-lg font-extrabold text-[var(--text-dark)]">
          Overview
        </h3>

        <div className="mt-6 space-y-5">
          <OverviewRow
            icon={AlarmClock}
            label="Duration"
            value={`${durationDays} Days / ${nights} Nights`}
          />

          <OverviewRow
            icon={MapPin}
            label="Main Places"
            value={mainPlaces.join(", ")}
          />

          <OverviewRow
            icon={BedDouble}
            label="Hotel"
            value={`${hotelName}\n${hotelStars} Stars`}
          />

          <OverviewRow
            icon={Users}
            label="Group Size"
            value={`${groupSize} People`}
          />

          <div className="flex gap-4">
            <ShieldCheck
              size={19}
              className="mt-1 shrink-0 text-[var(--primary)]"
            />

            <div>
              <p className="text-sm font-extrabold text-[var(--text-dark)]">
                Category
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--primary)]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[var(--border)] bg-white p-6 shadow-soft-red">
        <h3 className="text-lg font-extrabold text-[var(--text-dark)]">
          Cost Breakdown
        </h3>

        <div className="mt-6 space-y-4">
          <CostRow label="Hotel" value={hotelCost} />
          <CostRow label="Food & Dining" value={foodCost} />
          <CostRow label="Transport" value={transportCost} />
          <CostRow label="Activities" value={activitiesCost} />

          <div className="h-px bg-[var(--border)]" />

          <div className="flex items-center justify-between">
            <span className="font-extrabold text-[var(--text-dark)]">
              Total
            </span>

            <span className="text-xl font-extrabold text-[var(--primary)]">
              ${totalCost}
            </span>
          </div>
        </div>
      </section>
    </aside>
  );
}

function OverviewRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon
        size={19}
        className="mt-1 shrink-0 text-[var(--primary)]"
      />

      <div>
        <p className="text-sm font-extrabold text-[var(--text-dark)]">
          {label}
        </p>

        <p className="mt-0.5 whitespace-pre-line text-sm font-medium leading-5 text-[var(--text-dark)]">
          {value}
        </p>
      </div>
    </div>
  );
}

function CostRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-[var(--text-dark)]">
        {label}
      </span>

      <span className="font-extrabold text-[var(--text-dark)]">
        ${value}
      </span>
    </div>
  );
}