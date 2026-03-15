import React, { useState } from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword?: boolean;
}

export default function AuthInput({
  label,
  isPassword = false,
  type,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-[var(--text-dark)]">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          type={inputType}
          className="h-12 w-full rounded-full border border-[var(--slate-200)] bg-white px-5 pr-12 text-[var(--text-dark)] outline-none transition focus:border-[var(--primary)] placeholder:text-[var(--slate-400)] placeholder:opacity-50"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--slate-500)] hover:text-[var(--text-dark)]"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.584 10.587A2 2 0 0013.414 13.4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.88 5.09A9.77 9.77 0 0112 4.8c5.05 0 9.27 3.11 10.5 7.2a11.8 11.8 0 01-2.84 4.46M6.61 6.61A11.87 11.87 0 001.5 12c.69 2.29 2.2 4.26 4.22 5.65"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}