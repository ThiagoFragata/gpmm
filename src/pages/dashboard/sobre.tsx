import React from "react";
import { About } from "@/Screens";
import { LayoutDashboard } from "@/Components";

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default About;
