import React from "react";
import { Link } from "react-router-dom";

interface AuthFooterLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export default function AuthFooterLink({
  text,
  linkText,
  to,
}: AuthFooterLinkProps) {
  return (
    <p className="text-sm text-center text-[var(--slate-500)]">
      {text}{" "}
      <Link to={to} className="font-bold text-[var(--primary)] hover:underline">
        {linkText}
      </Link>
    </p>
  );
}