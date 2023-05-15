import React from "react";
import type { DefaultIconPros } from "@/_types/Icons";

export function MoreIcon({
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
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={fill} />
    </svg>
  );
}
