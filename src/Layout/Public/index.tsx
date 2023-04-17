import React from "react";
import { ContainerPublic } from "./style";

export function Public({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <ContainerPublic>
      <div className="public__children">{children}</div>
      <aside className="public__side">
        <div className="side__bar" />
        <div className="side__bar" />
        <div className="side__bar" />
      </aside>
    </ContainerPublic>
  );
}
