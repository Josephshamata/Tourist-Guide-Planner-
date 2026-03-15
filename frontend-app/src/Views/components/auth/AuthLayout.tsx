import React from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[var(--bg-light)] flex items-center justify-center px-6">
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-10 items-center">
        {/* Left branding / visual */}
        <div className="hidden lg:flex flex-col justify-center h-full">
          <span className="text-[var(--primary)] font-bold uppercase tracking-[0.12em] text-sm">
            Welcome to Levantine
          </span>

          <h1 className="mt-4 text-[56px] leading-[64px] font-extrabold text-[var(--text-dark)]">
            {title}
          </h1>

          <p className="mt-5 max-w-[520px] text-[18px] leading-[28px] text-[var(--slate-500)]">
            {subtitle}
          </p>

          <div className="mt-8 rounded-[48px] overflow-hidden shadow-xl max-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Lebanon"
              className="w-full h-[340px] object-cover"
            />
          </div>
        </div>

        {/* Right form */}
        <div className="flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}