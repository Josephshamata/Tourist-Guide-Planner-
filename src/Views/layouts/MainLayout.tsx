import React from "react";
import { Header } from "../components/nav/Header";
import { Footer } from "../components/footer/Footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-light text-slate-900 font-display min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}