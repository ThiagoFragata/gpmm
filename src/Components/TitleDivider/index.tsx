import React from "react";
import { ContainerTitleDivider } from "./style";
import { type TitleDividerProps } from "@/_types/TitleDivider";

export function TitleDivider({
  title,
  className
}: TitleDividerProps): JSX.Element {
  return (
    <ContainerTitleDivider className={className}>
      <p className="divider__title">{title}</p>
    </ContainerTitleDivider>
  );
}
