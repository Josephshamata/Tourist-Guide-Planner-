import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthDivider from "../components/auth/AuthDivider";
import AuthFooterLink from "../components/auth/AuthFooterLink";
import AuthPhoneInput from "../components/auth/AuthPhoneInput";
import { handleRegister } from "../../controllers/auth.controller";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+961",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("Register form:", form);
    try {
      const res = await handleRegister({
        name: form.name,
        email: form.email,
        phone: `${form.countryCode}${form.phone}`,
        password: form.password,
      });

      console.log("Registered:", res);

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
      title="Create Account"
      subtitle="Start planning unforgettable Lebanon experiences tailored to your personality and travel style."
    >
      <AuthCard>
        <div className="mb-6">
          <h2 className="text-[32px] leading-[40px] font-extrabold text-[var(--text-dark)]">
            Join 961 Travelers
          </h2>
          <p className="mt-2 text-[var(--slate-500)]">
            Create your account to begin.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <AuthInput
            label="Full Name"
            type="text"
            name="name"
            placeholder="Elias Haddad"
            value={form.name}
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

          <AuthPhoneInput
            label="Phone Number"
            countryCodeName="countryCode"
            phoneName="phone"
            countryCodeValue={form.countryCode}
            phoneValue={form.phone}
            onChange={onChange}
          />

          <AuthInput
            label="Password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={onChange}
            isPassword
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
