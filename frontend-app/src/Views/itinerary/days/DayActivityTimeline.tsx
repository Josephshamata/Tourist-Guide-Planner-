import {
  Check,
  Clock,
  Globe,
  AtSign,
  MapPin,
  Phone,
  WalletCards,
  Users,
  MessageCircle,
} from "lucide-react";

type DayActivity = {
  time: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  region?: string;
  durationHours: number;
  activityType: string;
  estimatedPrice?: number;

  reservationReference: string;
  reservationStatus: "confirmed" | "pending" | "cancelled";
  reservedFor?: number;

  placeName: string;
  phone: string;
  whatsapp?: string;
  instagram?: string;
  website?: string;

  meetingPoint?: string;
  note?: string;
};

type DayActivityTimelineProps = {
  activities: DayActivity[];
};

export default function DayActivityTimeline({
  activities,
}: DayActivityTimelineProps) {
  const handleConfirm = (reservationId: string) => {
    console.log("CONFIRM:", reservationId);

    // later:
    // PATCH reservation status → confirmed
  };

  const handleDecline = (reservationId: string) => {
    console.log("DECLINE:", reservationId);

    // later:
    // DELETE activity from itinerary
  };

  return (
    <section className="mt-8">
      <div className="relative space-y-8">
        {/* Timeline vertical line */}
        <div className="absolute left-[120px] top-0 hidden h-full w-px bg-[var(--primary-20)] md:block" />

        {activities.map((activity) => (
          <article
            key={activity.reservationReference}
            className="relative grid gap-5 md:grid-cols-[170px_1fr]"
          >
            {/* Time */}
            <div className="relative flex justify-start">
              <span className="h-fit rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm font-extrabold text-[var(--primary)] shadow-sm">
                {activity.time}
              </span>

              <span className="absolute left-[114px] top-4 hidden h-4 w-4 rounded-full border-[5px] border-white bg-[var(--primary)] shadow md:block" />
            </div>

            {/* Card */}
            <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white shadow-soft-red">
              <div className="grid gap-6 p-5 lg:grid-cols-[260px_1fr_250px]">
                {/* Image */}
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="h-48 w-full rounded-2xl object-cover"
                />

                {/* Main Content */}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-2xl font-extrabold text-[var(--text-dark)]">
                      {activity.title}
                    </h3>

                    <StatusBadge status={activity.reservationStatus} />
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-dark)]/65">
                    {activity.description}
                  </p>

                  {/* Info Grid */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <InfoPill
                      icon={MapPin}
                      label="Location"
                      value={activity.location}
                    />

                    <InfoPill
                      icon={Clock}
                      label="Duration"
                      value={`${activity.durationHours}h`}
                    />

                    <InfoPill
                      icon={WalletCards}
                      label="Price"
                      value={`$${activity.estimatedPrice || 0}`}
                    />

                    <InfoPill
                      icon={Users}
                      label="Guests"
                      value={`${activity.reservedFor || 2} people`}
                    />
                  </div>

                  {/* Meeting Point */}
                  {activity.meetingPoint && (
                    <div className="mt-5 rounded-2xl bg-[var(--bg-light)] p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                        Meeting Point
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[var(--text-dark)]">
                        {activity.meetingPoint}
                      </p>
                    </div>
                  )}

                  {/* Important Note */}
                  {activity.note && (
                    <div className="mt-4 rounded-2xl bg-[var(--accent-soft)] p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                        Important Note
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[var(--text-dark)]/70">
                        {activity.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <div className="border-t border-[var(--border)] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--text-dark)]/40">
                    Booking Contact
                  </p>

                  <h4 className="mt-2 text-lg font-extrabold text-[var(--text-dark)]">
                    {activity.placeName}
                  </h4>

                  <p className="mt-1 text-sm text-[var(--text-dark)]/60">
                    {activity.phone}
                  </p>

                  <div className="mt-5 space-y-3">
                    <ContactRow
                      icon={Phone}
                      label="Call"
                      value={activity.phone}
                    />

                    {activity.whatsapp && (
                      <ContactRow
                        icon={MessageCircle}
                        label="WhatsApp"
                        value={activity.whatsapp}
                      />
                    )}

                    {activity.instagram && (
                      <ContactRow
                        icon={AtSign}
                        label="Instagram"
                        value={activity.instagram}
                      />
                    )}

                    {activity.website && (
                      <ContactRow
                        icon={Globe}
                        label="Website"
                        value={activity.website}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Reservation Bar */}
              <div className="mx-5 mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[var(--bg-light)] px-5 py-3">
                <div className="flex items-center gap-2 text-sm text-[var(--text-dark)]/70">
                  <WalletCards
                    size={17}
                    className="text-[var(--primary)]"
                  />

                  Reservation:
                  <span className="font-bold text-[var(--text-dark)]">
                    {activity.reservationReference}
                  </span>
                </div>

                {/* Actions */}
                {activity.reservationStatus === "pending" ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        handleConfirm(activity.reservationReference)
                      }
                      className="rounded-full bg-green-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      Confirm
                    </button>

                    <button
                      onClick={() =>
                        handleDecline(activity.reservationReference)
                      }
                      className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-bold text-red-700 transition hover:bg-red-100"
                    >
                      Decline
                    </button>
                  </div>
                ) : (
                  <StatusBadge status={activity.reservationStatus} />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================
   STATUS BADGE
========================================= */

function StatusBadge({
  status,
}: {
  status: "confirmed" | "pending" | "cancelled";
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold capitalize",
        status === "confirmed"
          ? "bg-green-50 text-green-700"
          : status === "pending"
            ? "bg-orange-50 text-orange-700"
            : "bg-red-50 text-red-700",
      ].join(" ")}
    >
      {status === "confirmed" && <Check size={14} />}
      {status}
    </span>
  );
}

/* =========================================
   INFO PILL
========================================= */

function InfoPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[var(--text-dark)]/40">
        <Icon size={14} className="text-[var(--primary)]" />
        {label}
      </div>

      <p className="mt-1 text-sm font-bold text-[var(--text-dark)]">
        {value}
      </p>
    </div>
  );
}

/* =========================================
   CONTACT ROW
========================================= */

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[var(--bg-light)] p-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[var(--text-dark)]/40">
        <Icon size={14} className="text-[var(--primary)]" />
        {label}
      </div>

      <p className="mt-1 break-all text-sm font-semibold text-[var(--text-dark)]">
        {value}
      </p>
    </div>
  );
}