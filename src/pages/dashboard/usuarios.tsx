import React from "react";
import { ListUsers } from "@/Screens";
import { LayoutDashboard } from "@/Components";

ListUsers.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default ListUsers;
