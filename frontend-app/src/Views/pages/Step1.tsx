import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StepHeader from "../components/StepHeader";
import TravelPartyCard from "../components/TravelPartyCard";

type TravelParty = "solo" | "friends" | "family" | "romantic";
type AgeRange = "18-25" | "26-35" | "36-45" | "46-55" | "55+";

export default function Step1() {
  const navigate = useNavigate();
  const [travelParty, setTravelParty] = useState<TravelParty>("solo");
  const [ageRange, setAgeRange] = useState<AgeRange>("26-35");
  const [month, setMonth] = useState<string>("July 2024");
  const [days, setDays] = useState<number>(14);

  const travelCards = useMemo(
    () => [
      {
        value: "solo",
        title: "Solo",
        subtitle: "Me, myself & Lebanon",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDUz485a8rBse3QWOtaiHEb99oJ37_lK_yiqf1gFT8K0YTPWsKjM9Y1ECUTNkZvXURsTOqx9pBKAKTjzvecXkqFs_QPtdvaeALuH_8Cw9SgGYj-7jhbkqbKJGh0Wyp-aZvun1c3Z0qO9RJt_QGSlOxdSKwV6s7MLQXefSOD4wM_JSPBZ_HRNscnAiKedRQ2rKyamDfhMtLtDm0XdSJuHFMG0RWQvxiIixlRuHTbF9uI09Qgsu723C9HdInd-6SZrGjwAxYvxwmjhO4S",
      },
      {
        value: "friends",
        title: "The Squad",
        subtitle: "The whole crew",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAt5TVtlMTsI4yIvA4rwXnDDEkbukcmKXwr1JvATdX3Img8owos2eaqaAYYBdEyG2fHmSzzGGgOA0zuQ3illCa1VU9obCuCMz-xHqlF6xZKrRCU4vSs1gIPHcqQ0O5O1cC_kz-8Ia0iKd-iUe0m1vg3FLigizJjeLoS62GIDF17PG66HfwqGogEQAWTV2ugkrohatV8dlxnS5ZaLpoDRB0Myu-aFDCcaBzl6jQEbAXxNWkWJVSJs6V4yhhOZ0EtDRMAV2TXQwSySDai",
      },
      {
        value: "family",
        title: "Family",
        subtitle: "Quality time together",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBWZcB0x1uB8H1Yoo6Y8HIU_yjEdWoe01P36HDbLZ1zp0Z2eP_GJAEUcTnuE7Sfz9rO702Zi8PsO-6DjRvlJH6JdPUnn3dAnkJCIkOvKHvOIh182Ebey9iYpuXjQDV9nQlIYKIvnNtvIBc7saOiQqzJ_7cXPvXEXTStOwtNmzQ_rQ87MEhleg-Z1WSG55FhXRCNtVwFkpbNelxawKF4COmZvCJ6nzh88O4qKmIF7qjQSwCmaQRCx7pE6U-NQeLTytFpgYv7BQZoHNyQ",
      },
      {
        value: "romantic",
        title: "Romantic",
        subtitle: "A getaway for two",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBllaLz90cwsxbr3qbSGbB3du85Mu4lnjUIFFqVuWbhx_kh5Zw347roMb4butEBWrhC-WNHhJcx2J-YeYooBb8gwRuZX5ikGad1tlpIxMRMNYZCPj5LxHX0UG7vUqP_dCw7SVr34pKEWhcaAKUulqdJ3qmBMuz_s0GcjeayxCNpkvQxEK5NwG6zIVP3PLnevmhA3yV0p_OgKsCBfdSelcGTOMpYn_kVPPawgv6297wusvu9w-2XuMdZwCotg5d2xlBZT5TEYEmyzfa-",
      },
    ],
    [],
  );

  const ageButtons: AgeRange[] = ["18-25", "26-35", "36-45", "46-55", "55+"];

  const handleNext = () => {
    console.log({ travelParty, ageRange, month, days });
    navigate("/step2");
  };

  return (
    <div className="min-h-screen bg-background-light font-sans text-black">
      <Navbar
        onSave={() => console.log("Save progress")}
        onClose={() => console.log("Close")}
      />

      <div className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden">
          <StepHeader
            stepLabel="Step 1 of 6"
            title="Let’s plan your summer!"
            progressPercent={10}
          />

          <div className="px-6 py-8 sm:px-8">
            <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
              {/* SECTION 1 */}
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </span>
                  <h2 className="text-xl font-bold text-black">
                    Who are you traveling with?
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {travelCards.map((c) => (
                    <TravelPartyCard
                      key={c.value}
                      value={c.value}
                      title={c.title}
                      subtitle={c.subtitle}
                      imageUrl={c.imageUrl}
                      selected={travelParty === (c.value as TravelParty)}
                      onSelect={(v) => setTravelParty(v as TravelParty)}
                      showCheck
                    />
                  ))}
                </div>
              </section>

              {/* SECTION 2 */}
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </span>
                  <h2 className="text-xl font-bold text-black">
                    What’s your age range?
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {ageButtons.map((a) => {
                    const active = ageRange === a;
                    return (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAgeRange(a)}
                        className={
                          active
                            ? "cursor-pointer rounded-full bg-primary px-8 py-3 font-medium text-white shadow-lg shadow-primary/20"
                            : "cursor-pointer rounded-full border border-border bg-surface px-8 py-3 font-medium text-ink transition hover:border-primary"
                        }
                      >
                        {a.replace("-", " - ")}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* SECTION 3 */}
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </span>
                  <h2 className="text-xl font-bold text-black">
                    When are you planning to visit?
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  {/* Month */}
                  <div>
                    <label className="mb-4 flex items-center gap-2 font-medium text-muted">
                      <span className="material-symbols-outlined text-sm">
                        calendar_month
                      </span>
                      When are you coming?
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border-2 border-primary bg-white px-5 py-4">
                      <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full cursor-pointer appearance-none bg-transparent text-black outline-none"
                      >
                        <option value="July 2024">July 2024</option>
                        <option value="August 2024">August 2024</option>
                        <option value="September 2024">September 2024</option>
                      </select>
                      <span className="material-symbols-outlined text-primary cursor-pointer">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Days */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <label className="flex items-center gap-2 font-medium text-muted">
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        How long is the stay?
                      </label>

                      <span className="text-xl font-bold text-primary">
                        {days} {days === 1 ? "Day" : "Days"}
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white px-5 py-6">
                      <input
                        className="custom-slider w-full cursor-pointer"
                        type="range"
                        min={1}
                        max={60}
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                      />

                      <div className="mt-4 flex justify-between text-[11px] font-bold uppercase tracking-wide text-muted">
                        <span>1 DAY</span>
                        <span>30 DAYS</span>
                        <span>60+ DAYS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* TIP */}
              <section className="relative flex items-start gap-6 rounded-3xl bg-surface-soft p-8">
                {/* Left Brown Accent */}
                <div className="absolute left-0 top-0 h-full w-5 bg-primary rounded-l-2xl" />

                {/* Icon */}
                <div className="relative z-10 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    lightbulb
                  </span>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h4 className="mb-2 text-lg font-bold text-black">
                    Did you know?
                  </h4>
                  <p className="max-w-2xl leading-relaxed text-muted">
                    Lebanon is one of the few places in the world where you can
                    ski in the mountains and swim in the Mediterranean sea on
                    the same day during the spring months of March and April.
                  </p>
                </div>
              </section>
            </form>
          </div>

          {/* FOOTER */}
          <div className="px-6 py-6 sm:px-8">
            <div className="flex items-center justify-end gap-10">
              <Link
                to="/step2"
                className="cursor-pointer font-semibold text-muted transition-colors hover:text-primary"
              >
                Skip this step
              </Link>

              <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
              >
                Choose Experiences
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </div>
  );
}
