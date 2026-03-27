import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthDivider from "../components/auth/AuthDivider";
import AuthFooterLink from "../components/auth/AuthFooterLink";
import { handleSignup } from "../../Controllers/auth.controller";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      await handleSignup(form);
      navigate("/");
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
      title="Create Account"
      subtitle="Start planning unforgettable Lebanon experiences tailored to your personality and travel style."
    >
      <AuthCard>
        <div className="mb-8">
          <h2 className="text-[32px] leading-[40px] font-extrabold text-[var(--text-dark)]">
            Join 961 Travelers
          </h2>
          <p className="mt-2 text-[var(--slate-500)]">
            Create your account to begin.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <AuthInput
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Elias Haddad"
            value={form.fullName}
            onChange={onChange}
          />

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
            placeholder="Create a password"
            value={form.password}
            onChange={onChange}
          />

          <AuthInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={form.confirmPassword}
            onChange={onChange}
          />

          {error && (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-full border border-[var(--slate-200)] bg-[var(--primary)] text-black font-bold transition hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <AuthDivider />

          <button
            type="button"
            className="w-full h-12 rounded-full border border-[var(--slate-200)] bg-white text-[var(--text-dark)] font-semibold hover:border-[var(--primary)] transition"
          >
            Continue with Google
          </button>

          <AuthFooterLink
            text="Already have an account?"
            linkText="Log in"
            to="/login"
          />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}