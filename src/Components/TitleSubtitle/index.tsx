import React from "react";
import { ContainerTitleSubtitle } from "./style";

export function TitleSubtitle({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}): JSX.Element {
  const shouldRenderSubtitle = subtitle !== undefined;
  return (
    <ContainerTitleSubtitle>
      <h1 className="title">{title}</h1>
      {shouldRenderSubtitle && <h2 className="subtitle">{subtitle}</h2>}
    </ContainerTitleSubtitle>
  );
}
