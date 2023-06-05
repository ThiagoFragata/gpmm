import React from "react";
import { ContainerContentScroll } from "./style";

export function ContentScroll({
  children,
  className
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <ContainerContentScroll className={className}>
      <div className="scroll">{children}</div>
    </ContainerContentScroll>
  );
}
