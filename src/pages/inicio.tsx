import React from "react";
import { LayoutDashboard } from "@/Components";
import { Home } from "@/Screens";

export default function ScreenInicio(): JSX.Element {
  return (
    <LayoutDashboard>
      <Home />
    </LayoutDashboard>
  );
}
