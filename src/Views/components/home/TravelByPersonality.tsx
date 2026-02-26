import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { PersonalityCard, Personality } from "./PersonalityCard";

const PERSONALITIES: Personality[] = [
  {
    tag: "The Explorer",
    title: "Rugged Landscapes",
    imageAlt: "Hiker standing on a mountain ridge",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDd6VVHhVO29zMe_jsthSaq7zufTknAG3VjAFS7e1JYP7PCt9vpnDgFT9IJSusqCqi4P7w_32wWdE7oEF6StRqMZxcml7YjBkTlYHCDZEgTCHKCNog4t05H0bsvrsTFNPZWTrIyK6-gOuvPRxbsfyberpL53UFTpIa2gkz-CQyU1OF8Bb2fhmK3bajn0lvrUQK8w9746PgKUaek0X3sonmNqu6S9AxR3aLMMnBMLZ7EHLLPo__E-gyr3rso3eixtBavxsDXYVMfzJ8",
  },
  {
    tag: "The Foodie",
    title: "Culinary Masterpieces",
    imageAlt: "Chef preparing a gourmet dish",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIo1p7KJYyUqGkLz1VnOCx5YJxJ_ybWZwEHvoj5SzEFr7IoFBl5XT3wMlvOkAlJtOS2bOV5oWiMinykw8oHudWGzFXGICBZ3Q8B3EZ30GvcUgkVglGHx7ftwvF_ZQpSvMh9Y6GI1w_QkFiFN0F-lvfi2VjDbC2WJVuP7zENiDeljjwdVqKqMsSUJG6FWFzzOkWmuG_Av67bCCyx85y1CpoOhEeLWH_J1bI3rj2HIynJNDBO5qrCj7OQDzxwC1yeEXgThDyBVW6VuQ",
  },
  {
    tag: "The Historian",
    title: "Ancient Footsteps",
    imageAlt: "Ancient architectural details",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDn6Uae11gkW9iiTO-W2bKwCmntBD2MGJr2Br_t1aQxGimwxvLFEeZPO12sDTU_WPpKalAvjTZukvpgYB-UHZZp6cnnzIrKaX1rG8bNN0neNMM9Oro2dGI-g3toPfJyKSPiS5CkiKMuES9Bxk3_DH01QVirB7cypVew_G-zD1HpgjQIO-xfNDK6GUMclrfaU8zRo3IEHw_JQOXilAt--lhISsLBOklpZnDuGbAFsq1wrq-Yi33117MHckcL5x-cq3l67SZlrjjDpFE",
  },
  {
    tag: "The Socialite",
    title: "Beirut Nights",
    imageAlt: "Lively night street in Beirut",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBysLoxmUjTPqKXcfI6aBoCXWJDOWdpMNb7fPP8J13vxJZIVypm4IarC5pzyryitQWNlmH_HhtD9T5n9OMotTqb_1j9kF58Y8Ez4XZwcZQgg-xOzrpcs78qYcZ58jvEVYvXQI9sc0Se8yKZi_uC8-thGimXdJcEi-lRhGo0o1XY2nyIfe5FHZO5yDcUYme2-H_dDiWgxJplAE38yrVsIYYCfIXmw6_EaI0t1wBFez9OazIW2JhdLY-Gf6Dr37Z8R_LgXd7xmUnkiOU",
  },
];

export function TravelByPersonality() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <SectionTitle title="Travel by Personality" />
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 custom-scrollbar">
          {PERSONALITIES.map((item) => (
            <PersonalityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}