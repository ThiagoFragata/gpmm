import React from "react";
import { CreateLocal } from "@/Screens";
import { LayoutDashboard } from "@/Components";

CreateLocal.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default CreateLocal;
