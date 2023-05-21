import React from "react";
import { CreateTransport } from "@/Screens";
import { LayoutDashboard } from "@/Components";

CreateTransport.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default CreateTransport;
