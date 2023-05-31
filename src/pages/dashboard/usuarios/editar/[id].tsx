import React from "react";
import { EditUser } from "@/Screens";
import { LayoutDashboard } from "@/Components";

EditUser.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default EditUser;
