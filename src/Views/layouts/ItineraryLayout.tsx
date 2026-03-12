import React from "react";
import { Header } from "../components/nav/Header";

export function ItineraryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      <Header />
      {children}
    </div>
  );
}