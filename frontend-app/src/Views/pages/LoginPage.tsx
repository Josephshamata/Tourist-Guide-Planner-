import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthDivider from "../components/auth/AuthDivider";
import AuthFooterLink from "../components/auth/AuthFooterLink";
import { handleLogin } from "../../controllers/auth.controller";


export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

async function onSubmit(e: React.FormEvent) {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await handleLogin(form);

    console.log("Login success:", res);

    sessionStorage.setItem("tabAuthenticated", "true");

    window.location.assign("/home");
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong.");
    }
  } finally {
    setLoading(false);
  }
}

  return (
    <AuthLayout
      title="Log In"
      subtitle="Access your personalized trips, saved itineraries, and curated Lebanon experiences."
    >
      <AuthCard>
        <div className="mb-8">
          <h2 className="text-[32px] leading-[40px] font-extrabold text-[var(--text-dark)]">
            Welcome Back
          </h2>
          <p className="mt-2 text-[var(--slate-500)]">
            Sign in to continue your journey.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <AuthInput
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
          />

          <AuthInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={onChange}
          />

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-[var(--primary)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {error && (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-full bg-[var(--primary)] text-red-900 font-bold transition hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Log In"}
          </button>

          <AuthDivider />

          <button
            type="button"
            className="w-full h-12 rounded-full border border-[var(--slate-200)] bg-white text-[var(--text-dark)] font-semibold hover:border-[var(--primary)] transition"
          >
            Continue with Google
          </button>

          <AuthFooterLink
            text="Don’t have an account?"
            linkText="Sign up"
            to="/signup"
          />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}