import React from "react";
import { ContainerContentScroll } from "./style";

export function ContentScroll({
  children
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <ContainerContentScroll>
      <div className="scroll">{children}</div>
    </ContainerContentScroll>
  );
}
