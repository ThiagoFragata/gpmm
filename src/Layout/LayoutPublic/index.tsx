import React from "react";
import { ContainerLayoutPublic } from "./style";
export function LayoutPublic({
  children
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <ContainerLayoutPublic>
      <div className="public__children">{children}</div>
      <aside className="public__side">
        <div className="side__bar" />
        <div className="side__bar" />
        <div className="side__bar" />
      </aside>
    </ContainerLayoutPublic>
  );
}
