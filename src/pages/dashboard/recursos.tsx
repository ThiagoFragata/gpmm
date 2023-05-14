import React from "react";
import { ListResources } from "@/Screens";
import { LayoutDashboard } from "@/Components";

ListResources.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default ListResources;
