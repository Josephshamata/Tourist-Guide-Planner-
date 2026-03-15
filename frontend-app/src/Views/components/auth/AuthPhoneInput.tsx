import React from "react";

interface AuthPhoneInputProps {
  label: string;
  countryCodeName: string;
  phoneName: string;
  countryCodeValue: string;
  phoneValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AuthPhoneInput({
  label,
  countryCodeName,
  phoneName,
  countryCodeValue,
  phoneValue,
  onChange,
}: AuthPhoneInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-[var(--text-dark)]">
        {label}
      </label>

      <div className="flex gap-3">
        <select
          name={countryCodeName}
          value={countryCodeValue}
          onChange={onChange}
          className="h-12 min-w-[110px] rounded-full border border-[var(--slate-200)] bg-white px-4 text-[var(--text-dark)] outline-none transition focus:border-[var(--primary)]"
        >
          <option value="+961">🇱🇧 +961</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+33">🇫🇷 +33</option>
          <option value="+49">🇩🇪 +49</option>
          <option value="+971">🇦🇪 +971</option>
          <option value="+966">🇸🇦 +966</option>
          <option value="+20">🇪🇬 +20</option>
          <option value="+962">🇯🇴 +962</option>
        </select>

        <input
          type="tel"
          name={phoneName}
          placeholder="71 234 567"
          value={phoneValue}
          onChange={onChange}
          className="h-12 w-full rounded-full border border-[var(--slate-200)] bg-white px-5 text-[var(--text-dark)] outline-none transition focus:border-[var(--primary)] placeholder:text-[var(--slate-400)] placeholder:opacity-50"
        />
      </div>
    </div>
  );
}