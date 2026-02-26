import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "text-sm font-bold transition-all";
  const styles =
    variant === "primary"
      ? "bg-primary text-white px-6 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90"
      : "text-slate-700 hover:text-primary";

  return <button className={`${base} ${styles} ${className}`.trim()} {...props} />;
}