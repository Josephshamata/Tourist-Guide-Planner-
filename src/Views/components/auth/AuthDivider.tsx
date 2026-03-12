import React from "react";

export default function AuthDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-[var(--slate-200)]" />
      <span className="text-sm text-[var(--slate-400)]">or</span>
      <div className="h-px flex-1 bg-[var(--slate-200)]" />
    </div>
  );
}