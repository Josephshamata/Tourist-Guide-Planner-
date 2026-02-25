import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StepHeader from "../components/StepHeader";


type FoodCard = {
  id: string;
  tag: string;
  title: string;
  imageUrl: string;
};

type Atmosphere = "casual" | "romantic" | "family" | "quiet";
type Exploration = "safe" | "balanced" | "adventurous";

function FoodExperienceCard({
  data,
  selected,
  onToggle,
}: {
  data: FoodCard;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(data.id)}
      className={[
        "cursor-pointer w-full overflow-hidden rounded-xl aspect-[4/3] transition",
        selected
          ? "border-4 border-primary bg-primary/5 shadow-md"
          : "border-4 border-transparent hover:border-primary/30 shadow-md",
      ].join(" ")}
    >
      {/* no absolute: image + overlay + content in flow */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-b from-black/0 to-black/80 p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-md">
              {data.tag}
            </span>

            {selected ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <span className="material-symbols-outlined text-base font-bold">
                  check
                </span>
              </div>
            ) : (
              <div className="h-9 w-9" />
            )}
          </div>

          <p className="text-white text-xl font-bold leading-tight">
            {data.title}
          </p>
        </div>
      </div>
    </button>
  );
}

function IconChoiceCard({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer flex flex-col items-center gap-3 p-6 rounded-xl transition-colors",
        active
          ? "border-2 border-primary bg-primary/5"
          : "border border-primary/20 bg-white hover:bg-primary/5",
      ].join(" ")}
    >
      <span className="material-symbols-outlined text-3xl text-primary">
        {icon}
      </span>
      <span className="font-bold text-sm text-black">{label}</span>
    </button>
  );
}

export default function Step4() {
  const navigate = useNavigate();

  const foodCards = useMemo<FoodCard[]>(
    () => [
      {
        id: "mezze",
        tag: "Authentic",
        title: "Traditional Lebanese Mezzes",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC8AK19q-QDVUWQ0GZPrQvfHCj8l7Qiu-aAH3c8askrh7T1rgTIs6pPfYLZkSbdT_AHzDUe6y4Whf84n71rQovXz_F-RILnrhQqxUiP-bM32I0pVW9sKTOqxwN_XXrmgj5gd1InKTOhIXWf-D5O8y0n4hnRQnoLJZmW0oKkQL5jCF-Lqh6GeNB7uSF_o_1xRXufLx1h3BKPNUTZ9ZglLbMI8ThyVOhyVi867BbI3DEpG84zis043M75DybLndN_raGMb1hFJX0vw_qp",
      },
      {
        id: "seafood",
        tag: "Coastal",
        title: "Fresh Seafood",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAgJ0t4KnyE93XpnH7Gy2AzPE1wvhEQRUu1oprZuVGajvFL6Qyvp2xLr19V5QdrYmcqypGsUkVrTl8KRSMuyZVm28Z51yy8WJmBnEmgEZIFkFwDciovXxQTaxjDr1jKCSZoPcxdg-OX44DS76muudy7It5bxqraNO69KQK3sVZvDYSANmVGm5RzKDp1fXYa1WEpjisAxdtumKU0Oucq2aOJv3LMocQbe8vEFNl0NlbvPkeSSnRl-WzhRdCLFpw-OvDNSzpo59iq-v",
      },
      {
        id: "wine",
        tag: "Refined",
        title: "Wine & Vineyard",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC7qoRUS3FvTqR1JZc4gzH6qRZTsacFOIPtmFwXMPrt38mqkHa7ixrenBjeMVwh30hK6ru04HewuvUbxFBXd2k4q0O33ov9w_wNef01VhQ0i23bNCRT9o6_fmleA9TxZeEYQB_WoVLoe7S1UfPa_4tnpvP5-HDBEh52Hc9RsK4yogoTSN4-M4i7M-zl4l4RNmkB3Nk9kweLTusB2oFH9SD2OTNz2jLdfBoWimxZU4h_ZBNwqMIwolVFZxdOwzaGSwE52K-7v69F78sY",
      },
      {
        id: "fine",
        tag: "Luxury",
        title: "Fine Dining",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrcSxnvK7c8W_qXLEW42_PtplIGo_fz0NnXwjcz4Jv7dWpTI3lB9L0RQuQwwQ4TG8kFObBp0H25Rpfu-ACZRzwoOkkn7t1fm2EcN2F2DkX876AoPMrCrW_DvORzdchRPd9r_6HecivVV7xDMoUbL5wc3uIkzqvnVOppH5k3qkgvMTWSVFF0UUt3L5tbcinOlnTIY2jcK3yiH3_guGdSJ-sZplMeFKsA2tJZtCpW5XgjO-4Bgh5N5HcUurta_M8jPnB_90_TOHSIqp",
      },
      {
        id: "street",
        tag: "Local Life",
        title: "Street Food",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhALT21QWVTVE9eECT3Arlm4hJ0WzPWNcjGc1P6-oDURaJnY_psg0LK8iiJ4W3UH0hQNIfJuIJo1vUTgWrrqUuSTaM5kXXnGaKDTMTpzWNEINxXblUxBFa0C8XlsUPQBeH2dNqr89zX3kHMbuwVZWOZk7SK3R9dupE1VZ0JqysHB7C-EgDxwrtT1UGnfQZtBjIZEirBfhykm9L-iMLkqLyJ9s9l39RrsP0O_RlUkG5slfREYbuUQ9gfy4bO2n2Vr5DxrvEYmsoXFQn",
      },
      {
        id: "dessert",
        tag: "Sweet",
        title: "Cafés & Desserts",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDPURHOvZtM9ivBcqpFD8vLydAiDVXFO10ohVWSaLjlhi8thCDCv4ZMwWpNwWw5o0UL9FYGa4KUNfvUpLMxmQFoW6sqamdTBlV9CjS5ZjYCb5yFV9X0iErL-3XNeWrYZtrav4UJTDwy6Xd_nR9MJlPSjJPGSYxxjDYGO9sFz-6o_h2fysFlNLON56Wywhl_4z9PP5pefk-e0i928Z7RDEgqYebe51BVjoYe29uMnaXpcZ2MU5otht8YzbOM2g1DMKJbM2C5UlKIA-Ok",
      },
    ],
    []
  );

  // HTML shows Seafood selected by default
  const [selectedFood, setSelectedFood] = useState<string[]>(["seafood"]);

  // HTML shows Scenic & Romantic selected
  const [atmosphere, setAtmosphere] = useState<Atmosphere>("romantic");

  // HTML shows Balanced Mix selected
  const [exploration, setExploration] = useState<Exploration>("balanced");

  const toggleFood = (id: string) => {
    setSelectedFood((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    console.log({ selectedFood, atmosphere, exploration });
    navigate("/step5"); // when step5 exists
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
            stepLabel="Step 4 of 6"
            title="What flavors define your journey?"
            progressPercent={40}
          />

          <div className="px-6 py-8 sm:px-8">
            <form className="space-y-14" onSubmit={(e) => e.preventDefault()}>
              {/* Section 1 */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    restaurant
                  </span>
                  <h2 className="text-2xl font-bold text-black">
                    Your Ideal Food Experience
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodCards.map((c) => (
                    <FoodExperienceCard
                      key={c.id}
                      data={c}
                      selected={selectedFood.includes(c.id)}
                      onToggle={toggleFood}
                    />
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    mood
                  </span>
                  <h2 className="text-2xl font-bold text-black">
                    Dining Atmosphere Preference
                  </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <IconChoiceCard
                    active={atmosphere === "casual"}
                    onClick={() => setAtmosphere("casual")}
                    icon="groups"
                    label="Casual & Lively"
                  />
                  <IconChoiceCard
                    active={atmosphere === "romantic"}
                    onClick={() => setAtmosphere("romantic")}
                    icon="favorite"
                    label="Scenic & Romantic"
                  />
                  <IconChoiceCard
                    active={atmosphere === "family"}
                    onClick={() => setAtmosphere("family")}
                    icon="child_care"
                    label="Family-Friendly"
                  />
                  <IconChoiceCard
                    active={atmosphere === "quiet"}
                    onClick={() => setAtmosphere("quiet")}
                    icon="self_improvement"
                    label="Quiet & Intimate"
                  />
                </div>
              </section>

              {/* Section 3 */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    explore
                  </span>
                  <h2 className="text-2xl font-bold text-black">
                    Food Exploration Level
                  </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setExploration("safe")}
                    className={[
                      "cursor-pointer px-8 py-4 rounded-full transition-all text-sm font-bold",
                      exploration === "safe"
                        ? "border-2 border-primary bg-primary text-white shadow-lg shadow-primary/20"
                        : "border border-primary/20 bg-white hover:bg-primary/5",
                    ].join(" ")}
                  >
                    Safe &amp; Familiar
                  </button>

                  <button
                    type="button"
                    onClick={() => setExploration("balanced")}
                    className={[
                      "cursor-pointer px-8 py-4 rounded-full transition-all text-sm font-bold",
                      exploration === "balanced"
                        ? "border-2 border-primary bg-primary text-white shadow-lg shadow-primary/20"
                        : "border border-primary/20 bg-white hover:bg-primary/5",
                    ].join(" ")}
                  >
                    Balanced Mix
                  </button>

                  <button
                    type="button"
                    onClick={() => setExploration("adventurous")}
                    className={[
                      "cursor-pointer px-8 py-4 rounded-full transition-all text-sm font-bold",
                      exploration === "adventurous"
                        ? "border-2 border-primary bg-primary text-white shadow-lg shadow-primary/20"
                        : "border border-primary/20 bg-white hover:bg-primary/5",
                    ].join(" ")}
                  >
                    Adventurous Eater
                  </button>
                </div>
              </section>

              {/* Pro Tip */}
              <section className="bg-primary/5 border border-primary/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="size-16 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">
                    lightbulb
                  </span>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-lg mb-1 uppercase tracking-wide">
                    Pro Tip: Healthy Heritage
                  </h4>
                  <p className="text-muted leading-relaxed text-sm">
                    The Lebanese Mediterranean diet is considered one of the
                    healthiest in the world. It&apos;s naturally rich in
                    extra-virgin olive oil, fresh mountain-grown vegetables, and
                    lean proteins. You can indulge your palate while nourishing
                    your body!
                  </p>
                </div>
              </section>
            </form>
          </div>

          {/* Bottom buttons */}
          <div className="px-6 py-6 sm:px-8">
            <div className="flex items-center justify-end gap-10">
              <Link
                to="/step5"
                className="cursor-pointer font-semibold text-muted transition-colors hover:text-primary"
              >
                Skip this step
              </Link>

              <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
              >
                Proceed
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