import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthDivider from "../components/auth/AuthDivider";
import AuthFooterLink from "../components/auth/AuthFooterLink";

import { handleRegister } from "../../controllers/auth.controller";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
        phone: form.phone,
        password: form.password,
      });

      console.log("Registered:", res);

      // sessionStorage.setItem("tabAuthenticated", "true");

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

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

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

          {/* FULL NAME */}
          <AuthInput
            label="Full Name"
            type="text"
            name="name"
            placeholder="Elias Haddad"
            value={form.name}
            onChange={onChange}
          />

          {/* EMAIL */}
          <AuthInput
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={onChange}
          />

          {/* PHONE INPUT */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--text-dark)]">
              Phone Number
            </label>

            <PhoneInput
              defaultCountry="lb"
              value={form.phone}
              onChange={(phone) =>
                setForm((prev) => ({
                  ...prev,
                  phone,
                }))
              }
              inputClassName="!w-full !h-12 !rounded-full !border !border-[var(--slate-200)] !bg-white !px-4 !text-[15px] !shadow-sm"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!h-12 !min-w-[110px] !px-4 !rounded-full !border !border-[var(--slate-200)] !bg-white !shadow-sm !mr-2 hover:!bg-[var(--slate-50)] !flex !items-center !justify-center",
                dropdownStyleProps: {
                  className:
                    "!rounded-2xl !border !border-[var(--slate-200)] !shadow-xl",
                  listItemClassName:
                    "hover:!bg-[var(--primary)]/10 !transition-colors",
                },
              }}
            />
          </div>

          {/* PASSWORD */}
          <AuthInput
            label="Password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={onChange}
            isPassword
          />

          {/* ERROR */}
          {error && (
            <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* SIGN UP BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-full border border-[var(--slate-200)] bg-[var(--primary)] text-white font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <AuthDivider />

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full h-12 rounded-full border border-[var(--slate-200)] bg-white text-[var(--text-dark)] font-semibold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-3"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />

            Continue with Google
          </button>

          {/* FOOTER LINK */}
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