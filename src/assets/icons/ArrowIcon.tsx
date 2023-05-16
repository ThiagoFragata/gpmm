import React from "react";
import type { ArrowIconPros } from "@/_types/Icons";

export function ArrowIcon({
  fill = "#94949D",
  className,
  direction = "right"
}: ArrowIconPros): JSX.Element {
  const optionDirection = {
    left: 180,
    right: 0,
    top: -90,
    bottom: 90
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${optionDirection[direction]}deg)` }}
    >
      <path
        d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
        fill={fill}
      />
    </svg>
  );
}
