import React from "react";
import { type ButtonProps } from "@/_types/Button";
import { ContainerButton } from "./style";

export function Button({
  title,
  variant = "blue",
  className,
  onClick
}: ButtonProps): JSX.Element {
  return (
    <ContainerButton className={className} onClick={onClick} variant={variant}>
      {title}
    </ContainerButton>
  );
}
