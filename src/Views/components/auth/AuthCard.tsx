import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="w-full max-w-[460px] bg-white rounded-[48px] p-8 md:p-10"
      style={{
        boxShadow:
          "0px 20px 25px -5px var(--shadow-accent), 0px 8px 10px -6px var(--shadow-accent)",
      }}
    >
      {children}
    </div>
  );
}