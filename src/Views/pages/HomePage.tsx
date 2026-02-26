import React from "react";
import { HeroSearch } from "../components/home/HeroSearch";
import { SignatureOffers } from "../components/home/SignatureOffers";
import { TravelByPersonality } from "../components/home/TravelByPersonality";
import { PopularDestinations } from "../components/home/PopularDestinations";
import { UpcomingEvents } from "../components/home/UpcomingEvents";
import { BeforeYouTravel } from "../components/home/BeforeYouTravel";


export function HomePage() {
  return (
    <>
      <HeroSearch />
      <SignatureOffers />
      <TravelByPersonality />
      <PopularDestinations />
      <UpcomingEvents />
      <BeforeYouTravel />
    </>
  );
}