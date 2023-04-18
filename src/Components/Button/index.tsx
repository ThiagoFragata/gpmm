import React from "react";
import { type ButtonProps } from "@/_types/Button";
import { ContainerButton } from "./style";

export function Button({
  title,
  variant = "primary",
  className,
  onClick,
  type = "button"
}: ButtonProps): JSX.Element {
  return (
    <ContainerButton
      className={className}
      onClick={onClick}
      variant={variant}
      type={type}
    >
      {title}
    </ContainerButton>
  );
}
