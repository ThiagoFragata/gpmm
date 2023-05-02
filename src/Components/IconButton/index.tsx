import React from "react";
import { ContainerIconButton } from "./style";
import type { IconButtonProps } from "@/_types/IconButton";
import * as icons from "@/assets/icons";
import type { RenderIconProps } from "@/_types/Button";

function RenderIcon({ iconName, ...props }: RenderIconProps): JSX.Element {
  const Component = icons[iconName];
  return <Component className="button__icon" {...props} />;
}

export function IconButton({
  name,
  className,
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <ContainerIconButton className={className}>
      <RenderIcon iconName={name} {...props} />
    </ContainerIconButton>
  );
}
