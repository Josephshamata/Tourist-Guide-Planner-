import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StepHeader from "../components/StepHeader";


type Experience = {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

function ExperienceCard({
  data,
  selected,
  onToggle,
}: {
  data: Experience;
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(data.id)}
      className={[
        "cursor-pointer w-full text-left overflow-hidden rounded-xl aspect-[4/5] transition",
        selected
          ? "border-4 border-primary shadow-xl scale-[1.02]"
          : "border-4 border-transparent hover:border-primary/30",
      ].join(" ")}
    >
      {/* no absolute: everything is in flow */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-b from-black/5 to-black/85 p-5 flex flex-col justify-between">
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

          <div>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-2">
              {data.tag}
            </span>

            <h4 className="text-white text-xl font-bold leading-tight">
              {data.title}
              {data.subtitle ? (
                <>
                  <br />
                  <span className="text-white/80 font-medium text-base">
                    ({data.subtitle})
                  </span>
                </>
              ) : null}
            </h4>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Step2() {
  const navigate = useNavigate();

  const experiences = useMemo<Experience[]>(
    () => [
      {
        id: "baalbek",
        tag: "History",
        title: "Roman Ruins",
        subtitle: "Baalbek",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuARNHEkdqqM2RunsylhihC-l9wJHYhTctepoNZjNJpnGLoZIilVC9q_hIhd5L7tUXEfBPD8yJkZPbP250hm5LXKPngXSBvSBwC7uJpF93ARQ6UocVG0QqIseOGLabvdcxXvKQXArqi-KS05KuVKUUpRbdFy0ddNLHw4euucIGPHI4bvTtY6OrIeWaUqdRgyS3BGh_kV_w1SBQ-uzomWvqn9R1AMktWxfmAPOhlMovqbXjQU1NxAxVIC2PZPihndLxSLr2Y5Ehn_mvDK",
      },
      {
        id: "cedars",
        tag: "Nature",
        title: "Mountains &",
        subtitle: "Cedar Forests",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDK7jZoUSrH6yH2Dg7DggKN65CzAZO5q0D_jllZ80icnkmXNNVX9G3F3P80v4RRSayNfVEfZ5ronUzrog0ZS0kBHZwwm6SHGJZlmCME4IMcOgNNDOE5FX32JjxUcS05zEinlO0JY6yM7kAbg0M4tNW2JU269HhHZOwEy_Jo6KSmp8WfBIs6Ph6U3NrnLTLRcgGBbfmhL0qRmZu3maF-LbhYdA8SAj7I_k9U1XipFxFqt5F_Palh5nb5Z3gtjEfk54oYE4dM-0YCU6TM",
      },
      {
        id: "batroun",
        tag: "Coastal",
        title: "Boat Trips",
        subtitle: "Batroun",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBxA1eu_IBxjby91vWp5RHMBwRAANMKdxB_bTda1nyH0PrNS7Zl0Oh84lYbXs2uQ4AqU_Jv1bYJKN4HP7MwOxlGZKuDV4HqouUh4leXHa24Qjxt3dPNBBy2Fg8JIGbf20B_GL22J6FrSfpOjZYm0vMjytDbLXMhs_J-X-KXvBR-2ips6Tp8OXRNWzubqAGKpXR-Vnx8z-7WQCg-OoDIEIPhcnm8G8VZsfYN0iayeKPVTdpZJc-Kip6zdJaDLMsJFHGBWPT6-HBUVtno",
      },
      {
        id: "wine",
        tag: "Culinary",
        title: "Wine Tasting",
        subtitle: "Bekaa",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD0z4FtXXEmS8z-t3DeJTDN-XLzbeM2ohQSaNiW7-yQJGlVyrWCbwk872r22BWcYdP17lUXv08hyM7WIO6pU0uyRxCUrsH6yEYcP5KB5wRKiQZaZwa2ZV8iPGGmzpUqGwZBbCVFpXCYPL2rlSqhsk7hWIodMLznt9959SkIfGgTcr3kG0rN0KXB1E90Dcspzv2kdyRbQuUZH93EHLfXPs_HjQGqxrNZivY-EhkLVggBEbAspVmTYulAzWT2u-fADeFc6wi1w4b5tr36",
      },
      {
        id: "beach",
        tag: "Social",
        title: "Beach Clubs",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ngowPea0oYdqVjE8xcC5BaVuELKNdYPUWfrYGdbrVGc3bu_FjcPm2ezZ4Ey_uu6d0cZxmEGlMLdamSeuADOmTNlalERNvbLAUcfpE3OEeizS7l96MwfrGKXlh4ylT-h7BLUDA9Xtk3Dl39LITtHpjgFfCr-DFT6le6aBGe_ZKttGztTndgd8Whxh_nRMJ7RaRVokvlEA_MZAOC68-gQ_pdcqR0cbCQOSyhWWuJJckJWsrnhVT8Goju7fCFX8EIlSmGMltG36pQNc",
      },
      {
        id: "hike",
        tag: "Adventure",
        title: "Hiking & Adventure",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAv_5yptYAQGo3hlH85MEgOD5WVETaOV0lP9mSEdHhF6eFPzyDoCaarXwSIy3HgGrweibAffsrGud4wia76XEXZsUrKFI2kwJc6VTK7rEYd-VDxxGknXhxzZ9ilR-2ttNMLhrkM-DCo4QDDjCa7mb7rgCIkypOoEup9LzGnWwiJff4YD48HUBoV70h-76sGVis4CQEJ-tAyqnwFnkMFHxkuKPLbzV2-3v1_XFg7HKpsSM1zuQIFQkY3Mgd9MrjpVrFsSYCHcQbd6xMp",
      },
      {
        id: "markets",
        tag: "Local Life",
        title: "Local Markets",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Yde2d1W0HxzsyX1FT2I-IX18Gw1z7q87KmpEO1v5cpARBtSJTnU6TvYcD_gn-eqkh_BLNIlS3-2HQpDpPlrYMpfGsh3m1bktGakdV6z0mKdo1Dx8GexwnaCN4ophHNkjh7YjJMZD-ObJZQHN6LbWMk9D0oyASvALrkqLVn2_ahWkuFLYBuIVWQnTobQkTNmQfgVlpnRvlS7hg-L1sfx9Kp4Ddh7HZS8B4BQ6GtCoBHlYTeGe35dQjvA9Sro9k2UUA0GdqMbKD_Lj",
      },
      {
        id: "arts",
        tag: "Arts",
        title: "Art & Cultural Spaces",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBjDCA1uaVgAT3X3HAwA1s8BQPZ1pwPoU_RnJHQZd-hUJREyyuuwuzztYftGWeVlz8Mq6W-EY6hXrqb6CQ5hexX1MhLGaSfED4rq3SGfKJ-ZLMVIhYEXT3HqlKWnukKGZAewBtnkwwAXKuXu6EM6EgjjSC8W8yR1CCtyfgibjDTb4ECscuzth_62Jugzdiw3jUQkNt7DqptqVf7gWhoY6Ho8ikwaIE90_XEw-OpTWUlq1yYeujFNgUk8eBMX61PH5QLJW9Db-dUGm4l",
      },
    ],
    []
  );

  // Start with Baalbek + Wine selected like the HTML
  const [selected, setSelected] = useState<string[]>(["baalbek", "wine"]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    console.log("Selected experiences:", selected);
    navigate("/step3");
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
            stepLabel="Step 2 of 6"
            title="Pick your experiences"
            progressPercent={20}
          />

          <div className="px-6 py-8 sm:px-8">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </span>
                  <h2 className="text-xl font-bold text-black">
                    What do you want to do in Lebanon?
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                  {experiences.map((exp) => (
                    <ExperienceCard
                      key={exp.id}
                      data={exp}
                      selected={selected.includes(exp.id)}
                      onToggle={toggle}
                    />
                  ))}
                </div>

                {/* Fun fact (same style system as your Step1 tip card) */}
                <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 mb-24">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-4xl text-primary">
                      lightbulb
                    </span>
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h5 className="text-lg font-bold text-primary mb-1">
                      Did you know?
                    </h5>
                    <p className="text-muted leading-relaxed max-w-2xl">
                      The Temple of Jupiter in Baalbek features some of the largest
                      monolithic stones ever quarried, weighing over 800 tons each.
                      Lebanon&apos;s history spans over 7,000 years!
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-primary border-b border-primary/30 hover:border-primary transition-colors cursor-pointer"
                    onClick={() => console.log("Learn more")}
                  >
                    Learn more
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>
            </form>
          </div>

          {/* Bottom buttons */}
          <div className="px-6 py-6 sm:px-8">
            <div className="flex items-center justify-end gap-10">
              <Link
                to="/step3"
                className="cursor-pointer font-semibold text-muted transition-colors hover:text-primary"
              >
                Skip this step
              </Link>

              <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
              >
                Select Nightlife Vibe
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