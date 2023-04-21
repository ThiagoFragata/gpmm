import React from "react";
import type { useLayoutDashboardData } from "@/_types/LayoutDashboard";

export function useLayoutDashboard(): useLayoutDashboardData {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  function onHandlerExpand(): void {
    setIsExpanded(!isExpanded);
  }
  return {
    onHandlerExpand,
    isExpanded
  };
}
