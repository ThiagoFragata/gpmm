import React from "react";
import { ContainerSideBar } from "./style";
import { type SideBarProps } from "@/_types/LayoutDashboard";

export function SideBar({
  isExpanded,
  onHandlerExpand
}: SideBarProps): JSX.Element {
  return (
    <ContainerSideBar isExpanded={isExpanded}>
      <h1>SideBar</h1>
      <button type="button" onClick={onHandlerExpand}>
        Expandir
      </button>
    </ContainerSideBar>
  );
}
