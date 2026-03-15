import React from "react";

export default function AuthDivider() {
  return (
    <div className="relative flex items-center justify-center py-2">
      <div className="absolute inset-0 flex items-center">
        <div className="h-px w-full bg-[var(--slate-200)]" />
      </div>
      <span className="relative bg-white px-4 text-sm font-medium text-[var(--slate-400)]">
        or continue with
      </span>
    </div>
  );
}