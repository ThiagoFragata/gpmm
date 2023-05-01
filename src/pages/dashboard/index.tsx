import React from "react";
import { Home } from "@/Screens";
import { LayoutDashboard } from "@/Components";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Home;
