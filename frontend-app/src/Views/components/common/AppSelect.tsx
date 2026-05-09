import Select from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

type AppSelectProps = {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
};

export function AppSelect({
  value,
  options,
  onChange,
  placeholder = "Select...",
}: AppSelectProps) {
  const selectedOption =
    options.find((option) => option.value === value) || null;

  return (
    <Select
      value={selectedOption}
      options={options}
      placeholder={placeholder}
      isSearchable={false}
      onChange={(option) => onChange(option?.value || "")}
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: "44px",
          borderRadius: "12px",
          borderColor: state.isFocused ? "var(--primary)" : "#e2e8f0",
          boxShadow: "none",
          fontSize: "14px",
          fontWeight: 500,
          "&:hover": {
            borderColor: "var(--primary)",
          },
        }),

        menu: (base) => ({
          ...base,
          borderRadius: "16px",
          overflow: "hidden",
          padding: "6px",
        }),

        menuList: (base) => ({
          ...base,
          padding: 0,
        }),

        option: (base, state) => ({
          ...base,
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor: state.isSelected
            ? "var(--primary)"
            : state.isFocused
              ? "#f8fafc"
              : "white",
          color: state.isSelected ? "white" : "#334155",
        }),
      }}
    />
  );
}
