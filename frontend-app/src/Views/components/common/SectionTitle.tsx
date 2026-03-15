import React from "react";

export function SectionTitle({ title }: { title: string }) {
  return <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>;
}