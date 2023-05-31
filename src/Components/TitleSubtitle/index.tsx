import React from "react";
import { ContainerTitleSubtitle } from "./style";

export function TitleSubtitle({
  title,
  subtitle,
  className
}: {
  title: string;
  subtitle?: string;
  className?: string;
}): JSX.Element {
  const shouldRenderSubtitle = subtitle !== undefined;
  return (
    <ContainerTitleSubtitle className={className}>
      <h1 className="title">{title}</h1>
      {shouldRenderSubtitle && <h2 className="subtitle">{subtitle}</h2>}
    </ContainerTitleSubtitle>
  );
}
