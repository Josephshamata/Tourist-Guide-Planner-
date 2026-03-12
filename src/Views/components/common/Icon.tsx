import React from "react";

type IconProps = {
  name: string;
  className?: string;

  /** 100 - 700 (default 400) */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /** 0 or 1 (filled style) */
  fill?: 0 | 1;
};

export function Icon({
  name,
  className = "",
  weight = 400,
  fill = 0,
}: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}