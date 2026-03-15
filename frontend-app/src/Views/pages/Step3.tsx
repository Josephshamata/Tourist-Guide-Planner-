import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StepHeader from "../components/StepHeader";

type MusicOption = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

function MusicCard({
  data,
  selected,
  onToggle,
}: {
  data: MusicOption;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(data.id)}
      className={[
        "cursor-pointer aspect-square w-full overflow-hidden rounded-xl transition",
        selected
          ? "border-4 border-primary shadow-xl scale-[1.02]"
          : "border-4 border-transparent hover:border-primary/40 shadow-md",
      ].join(" ")}
    >
      {/* No absolute positioning: background + overlay + content in normal flow */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-between">
          <div className="flex items-start justify-end">
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

          <div className="text-white">
            <p className="text-xl font-bold">{data.title}</p>
            <p className="text-sm text-white/70">{data.subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Step3() {
  const navigate = useNavigate();

  const musicOptions = useMemo<MusicOption[]>(
    () => [
      {
        id: "techno",
        title: "Techno / Electronic",
        subtitle: "Underground vibes",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAu42PETBde4nVhS15GhwAX9gJrsCt3JlyrYFXNgmoLYNnKL2Be6sASVGGO36duKlbeXnYqCY6US_rVJ9jBJCIXfB7xDhks2_oaGlXIDdEDyh6tgS0wZ6FuBTM836biEw69sQxSll-zGhQu80R7beVG5TkqUkq0SOk8g6-MK_UST8RuXOSY1xv911E2YK4LdspYv6dsovKWA7ShWOX7Wt_a4DHDmVvvZoMIW29SgHmnzEnYzlZSBNc2ybi0b-suYx7KjzQFBUb2ACn-",
      },
      {
        id: "tarab",
        title: "Arabic Tarab",
        subtitle: "Classical & Soulful",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1XltUQp0bBjN7HRzGBrL3CJOoh2yQKKpOtevPMTCg-PQwe8TkZN4BuqljW8Ou2oGp6AnrMlOpnj5rKovkoCNUSvpeAeY55eqRQD2s8dc35nz7vQRh9lAMwEBxWjyGyhgine-e6ijnxdMYEvqUaoOJ5uMspWRlusPReI-pvlodKS60Aa0fGIrrutPMBU5YB10ukD9lfKE8FURMtNWiYfVKJCZxQhYDFT1YHE5FqvtjV_cwDzBg8NZIgQy9YZJRgrVRgqfUoZ8uEgQ",
      },
      {
        id: "pop",
        title: "Pop & Commercial",
        subtitle: "Vibrant & High Energy",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDef7wkAgPJ4gelm0Nh-v0sGqeT79l2eJd5kUgjvm-uDr_2nFYIPj75-4mdGDvmT9txQDL3UId8KXBmhb-tJNr0G2J7S4egTTru3zzCz7ufKLEeB1gnCk9c9YOE883D3shvRFVqIQmiVOsQquisIeKRM8zJiMrhZv5DLNc_WO89uQYyk2gl373JAQAy4BJnL49ZDtKZYACE79QcduqxXIOm6TD-Z_ZHYSTLRd9lySsNAZOo1g7iGk0QkKLKhha07ED8sQW_nLMt7E0M",
      },
      {
        id: "hiphop",
        title: "Hip-Hop & R&B",
        subtitle: "Urban & Groovy",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDoZdB08kSUslqCCD90MdclZQEfZZwDHxKlcRt3JUAZmbSSVwfngj8YPjJq4z9ZMlfLuY6Ugsmp-WIe7hJmQ6fTM9YC08vWyqP7s8YdJcUsxAGEmsQ6qaeCUcj7RR3ZF5xuTKa2XQ-F3-Om2PDSo91Fz6oWXVC9ROqGEzezbtFktwqNyvgcaFfhvVvr7U9md2UqRGv_9dnPYbKOtDtXunmqs13MfCW1izIiZHieSBrTr_W7jIC0T4lbJfN8yC1FUQz9l198Ut5yEMR8",
      },
      {
        id: "jazz",
        title: "Jazz & Live Bands",
        subtitle: "Sophisticated & Cozy",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBiX_jSwbK4MxIx1UHRY_udpH9CI_i_vCXLMJqluHCyDPDmyMbETSezDr58D0vU-Dr56nmU2FrAgmR_jT_0Xtdd4pGV7cbq1HVdQ2wHHnD6UbMxdfZT-D8rAhhsyxBVVcVYYm7qnMqAlkfBpZRbghCdUi-yVKLSoz8QVocPMeVnlLH28jr7IxNcy1iobNhep_UGjfqzNMK0xseOm1XKF4_-McVpZ6iJifdCxhkGsqLAU263WQ7nhEBR-H2VKhtGNLjMHsMIjVAEwJ3e",
      },
      {
        id: "sunset",
        title: "Chill Sunset",
        subtitle: "Relaxed Beach Vibes",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB9quBpPefSBXf0jGiwYekjIbXLyQg1OC5BvprCjRWZez03syMFPNwqIJkUP0PtJRgrbqyLHn_bCao9zT7hfA19LK57SOg4MDzl-AXu95hsGn1H8jhvt3lTSFeiV5BKa-ej9vwBGqtkXxCuFGhzL_A2Oi9YBbpVmzRerevCxTa0qQyH1g03htYGnMkEs1IZzKc0MGTNBJVqszQIxU9Q7I3NDuwJi8UdUaDr-ZQzmC-s93BBD90scfvYPSJz99yIKVSZKasS9tAWgVcB",
      },
    ],
    [],
  );

  // Default selected in the HTML: Techno + Jazz
  const [selected, setSelected] = useState<string[]>(["techno", "jazz"]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleNext = () => {
    console.log("Selected music:", selected);
    navigate("/step4"); // create Step4 later
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
            stepLabel="Step 3 of 6"
            title="What’s your nightlife vibe?"
            progressPercent={30}
          />

          <div className="px-6 py-8 sm:px-8">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </span>
                  <h2 className="text-xl font-bold text-black">
                    Pick the music you’d enjoy most
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {musicOptions.map((m) => (
                    <MusicCard
                      key={m.id}
                      data={m}
                      selected={selected.includes(m.id)}
                      onToggle={toggle}
                    />
                  ))}
                </div>

                {/* Fun fact card */}
                <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 mb-24">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        lightbulb
                      </span>
                    </div>

                    <div>
                      <h4 className="text-primary font-bold text-lg mb-1">
                        Fun Fact
                      </h4>
                      <p className="text-primary/80 leading-relaxed max-w-2xl">
                        Beirut was once known as the “Paris of the Middle East”
                        for its legendary live music scenes and diverse jazz
                        clubs that attracted icons from around the world.
                      </p>

                      <a
                        className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-primary border-b border-primary/30 hover:border-primary transition-colors"
                        href="#"
                      >
                        Learn more about Lebanese Nightlife
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Bottom buttons */}
          <div className="px-6 py-6 sm:px-8">
            <div className="flex items-center justify-end gap-10">
              <Link
                to="/step4"
                className="cursor-pointer font-semibold text-muted transition-colors hover:text-primary"
              >
                Skip this step
              </Link>

              <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
              >
                Choose Food Preferences
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
