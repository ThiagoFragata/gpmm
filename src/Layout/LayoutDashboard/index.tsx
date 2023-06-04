import React from "react";
import { ContainerLayoutDashboard } from "./style";
import { SideBar } from "./Partials/SideBar";
import { useLayoutDashboard } from "./useLayoutDashboard";
export function LayoutDashboard({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { onHandlerExpand, isExpanded } = useLayoutDashboard();
  return (
    <ContainerLayoutDashboard isExpanded={isExpanded}>
      <SideBar onHandlerExpand={onHandlerExpand} isExpanded={isExpanded} />
      <div className="layout__children">{children}</div>
    </ContainerLayoutDashboard>
  );
}
