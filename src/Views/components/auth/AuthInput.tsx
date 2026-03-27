import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({
  label,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-[var(--text-dark)]">
        {label}
      </label>
      <input
        {...props}
        className="h-12 rounded-full border border-[var(--slate-200)] bg-white px-5 text-[var(--text-dark)] outline-none transition focus:border-[var(--primary)] placeholder:text-[var(--slate-400)] placeholder:opacity-50"
      />
    </div>
  );
}