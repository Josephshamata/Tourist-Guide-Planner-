import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/steps/Navbar";
import StepHeader from "../components/steps/StepHeader";
import StepNavigation from "../components/steps/StepNavigation";
import FunFact from "../components/steps/FunFact";

type Comfort = "budget" | "balanced" | "premium" | "vip";
type Stay = "boutique" | "beach" | "mountain" | "guesthouse";

/* ---------------- COMFORT CARD ---------------- */
function ComfortCard({
  title,
  imageUrl,
  selected,
  onClick,
}: {
  title: string;
  imageUrl: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "cursor-pointer w-full overflow-hidden rounded-xl aspect-[4/5] transition",
        selected
          ? "border-4 border-primary bg-primary/5 shadow-md"
          : "border-4 border-transparent hover:border-primary/30 shadow-md",
      ].join(" ")}
    >
      <div
        className="h-full w-full bg-cover bg-center flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* 🔥 TOP RIGHT CHECK */}
        <div className="flex justify-end">
          {selected ? (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg">
              <span className="material-symbols-outlined text-base">check</span>
            </div>
          ) : (
            <div className="h-9 w-9" />
          )}
        </div>

        {/* TITLE */}
        <div className="bg-gradient-to-b from-transparent to-black/80 p-3 rounded-lg">
          <p className="text-white text-lg font-bold">{title}</p>
        </div>
      </div>
    </button>
  );
}

/* ---------------- STAY CARD ---------------- */
function StayCard({
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
        "cursor-pointer flex flex-col justify-between p-6 rounded-xl transition-colors",
        active
          ? "border-2 border-primary bg-primary/5"
          : "border border-primary/20 bg-white hover:bg-primary/5",
      ].join(" ")}
    >
      {/* 🔥 TOP RIGHT CHECK */}
      <div className="flex justify-end">
        {active ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
            <span className="material-symbols-outlined text-sm">check</span>
          </div>
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>

      {/* ICON + TEXT */}
      <div className="flex flex-col items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-primary">
          {icon}
        </span>
        <span className="font-bold text-sm text-black">{label}</span>
      </div>
    </button>
  );
}

/* ---------------- PAGE ---------------- */
export default function Step5() {
  const navigate = useNavigate();

  const [comfort, setComfort] = useState<Comfort>("balanced");
  const [stay, setStay] = useState<Stay>("beach");

  const handleNext = () => {
    console.log({ comfort, stay });
    navigate("/step6");
  };

  return (
    <div className="min-h-screen bg-background-light font-sans text-black">
      <Navbar
        onSave={() => console.log("Save progress")}
        onClose={() => console.log("Close")}
      />

      <div className="mx-auto w-full max-w-5xl">
        <StepHeader
          stepLabel="Step 5 of 6"
          title="Choose your comfort & stay style!"
          progressPercent={80}
        />

        <div className="px-6 py-8 sm:px-8">
          <form className="space-y-14" onSubmit={(e) => e.preventDefault()}>
            {/* SECTION 1 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Comfort Level</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ComfortCard
                  title="Smart & Budget-Friendly"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDA4UO90wMCFCiVlIQ7QA4K6BvHyoot4Xbxu0Lm7qCOWB-RegtjTwutQTJgshP9tkvtbOmSdbYZf5SYNf2KxLRP1r9oZybsBiHegl3lzT_fEy1JMxr3ES5McjLxaIKsSEZClwY_Y2H57_vvsyQgQhtmuIW-jogmK6LM-05FYlk9BuCaITZbrvjvB20aq30_h2Kvw16gZ-LPEccQd7ZbEDAZ0oHrrN0T6dDHAQhKFcSvpPemb9PNuPgNh968ce1qKDFiRB6U3gZuW2Hz"
                  selected={comfort === "budget"}
                  onClick={() => setComfort("budget")}
                />

                <ComfortCard
                  title="Comfortable & Balanced"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuArfjQEAR0MUpnN-O67_sRx7hPB68YuPQqQSS8CQpaA7cNMJlb11vkddrLDhVTsYqfZvU7j6loc4d7ZNNu-vbovzGwot1p7qIT_c4D36qgcmWIagLSzr_C_iidc0RWjUJ468LhWM_rJrV0-k55Ffnbh9v4dKlHwo1_5BYo2mSbTq_jS1NTFJl78-rnFcJvTkrdadXwlhizzGBeRDjZy2-XUljW_P0GMZYjo16N9geDgSnfe752iBpPz16F4BGy6cXJIf-ajCwMJQtl7"
                  selected={comfort === "balanced"}
                  onClick={() => setComfort("balanced")}
                />

                <ComfortCard
                  title="Premium Experience"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCw4vMGWY5IQfDoiCpM9pHW0sfsbOvCogOGYHZSUHZGxPeWK5SKb0Sa5aqZRXLNLXGKz_zScQZ8CJ3sEScrUyq_oF_a81o1wHwKQrN0y_nhN9_8poQ9B9lYCXd8xOa3N5fyWAhKRVmKbV8F8zUyGFkPpHqrnBqgdUn55kG4veirRPolos_oXXHyr9DHw9u2UHGsGTT2j-5LWVQfm1hAUk4jOwYKveKSw0aHgTdXNINgc0eusFjQ1rw0TegNWych719Y0MQZfc032UH_"
                  selected={comfort === "premium"}
                  onClick={() => setComfort("premium")}
                />

                <ComfortCard
                  title="Luxury & VIP"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAfbP5qQVlUaMX1Bi9r_MSIPvHgHuG7f5mCGornw27xbGeEDFb-c7GMqnt-IMf2n7ufT-p_XVTMUmoTVyy3RNslPQ7H-kGosC57OVxH3drctJOjvXrGpKVMEKJK01jc5DVEYx0-Q82FCtadgXKghVlFU9bW3aL66-Pkh4GcJHGOZ3BkStktQMApiBSzBkfxPxJ1x-68d-62NuwhmqI_pASGL8RJyRV2ktWVnloDPO9fMpmOxPe-yjux66JnB0W0dRj6rd2Ps7XhvXgD"
                  selected={comfort === "vip"}
                  onClick={() => setComfort("vip")}
                />
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">
                Where would you like to stay?
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StayCard
                  active={stay === "boutique"}
                  onClick={() => setStay("boutique")}
                  icon="apartment"
                  label="Boutique Hotel"
                />
                <StayCard
                  active={stay === "beach"}
                  onClick={() => setStay("beach")}
                  icon="beach_access"
                  label="Beach Resort"
                />
                <StayCard
                  active={stay === "mountain"}
                  onClick={() => setStay("mountain")}
                  icon="landscape"
                  label="Mountain Lodge"
                />
                <StayCard
                  active={stay === "guesthouse"}
                  onClick={() => setStay("guesthouse")}
                  icon="home"
                  label="Guesthouse"
                />
              </div>
            </section>

            {/* 🔥 FUN FACT */}
            <FunFact
              description="Lebanon offers one of the most diverse stays per square kilometer — from luxury seaside resorts to cozy mountain lodges within just a 1-hour drive."
              linkText="Explore Lebanon’s unique stays"
            />
          </form>
        </div>

        <StepNavigation
          backTo="/step4"
          nextTo="/step6"
          nextLabel="Final Step"
          skipTo="/step6"
        />

        <div className="h-10" />
      </div>
    </div>
  );
}
