import React from "react";
import { EditLocal } from "@/Screens";
import { LayoutDashboard } from "@/Components";

EditLocal.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default EditLocal;
