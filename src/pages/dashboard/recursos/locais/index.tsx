import React from "react";
import { Resources } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { checkExistSession } from "@/_utils/permissionRules";
import { type GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkExistSession({
    context
  });
  return permission;
};

Resources.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Resources;
