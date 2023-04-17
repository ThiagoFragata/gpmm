import React from "react";
import { ContainerTitleSubtitle } from "./style";

export function TitleSubtitle({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}): JSX.Element {
  return (
    <ContainerTitleSubtitle>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </ContainerTitleSubtitle>
  );
}
