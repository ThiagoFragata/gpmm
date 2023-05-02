import React from "react";
import type { RenderIconProps, ButtonProps } from "@/_types/Button";
import { ContainerButton } from "./style";
import * as icons from "@/assets/icons";

function RenderIcon({ iconName }: RenderIconProps): JSX.Element {
  const Component = icons[iconName];
  return <Component className="button__icon" />;
}

export function Button({
  title,
  variant = "primary",
  className,
  type = "button",
  disabled,
  iconName,
  onClick
}: ButtonProps): JSX.Element {
  const shouldRenderIcon = iconName !== undefined;
  return (
    <ContainerButton
      className={className}
      onClick={onClick}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {title}
      {shouldRenderIcon && <RenderIcon iconName={iconName} />}
    </ContainerButton>
  );
}
