import React from "react";
import { Resources } from "@/Screens";
import { LayoutDashboard } from "@/Components";

Resources.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Resources;
