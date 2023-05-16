import React from "react";
import { useRouter } from "next/navigation";
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
  navigateTo,
  onClick
}: ButtonProps): JSX.Element {
  const router = useRouter();
  const shouldRenderIcon = iconName !== undefined;

  function onAction(): void {
    const isNavigate = navigateTo !== undefined;
    const isExistonClick = onClick !== undefined;
    if (isNavigate) {
      router.push(navigateTo);
    }
    if (isExistonClick) {
      onClick();
    }
  }
  return (
    <ContainerButton
      className={className}
      onClick={onAction}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {title}
      {shouldRenderIcon && <RenderIcon iconName={iconName} />}
    </ContainerButton>
  );
}
