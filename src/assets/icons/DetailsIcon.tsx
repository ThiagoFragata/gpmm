import type { DefaultIconPros } from "@/_types/Icons";
import React from "react";

export function DetailsIcon({
  fill = "#94949D",
  className
}: DefaultIconPros): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z"
        fill={fill}
      />
    </svg>
  );
}
