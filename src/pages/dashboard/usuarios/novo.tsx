import React from "react";
import { CreateUser } from "@/Screens";
import { LayoutDashboard } from "@/Components";

CreateUser.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default CreateUser;
