import React from "react";
import { Resources } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { checkPermissionRules } from "@/_utils/permissionRules";
import { type GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkPermissionRules({
    context
  });
  return permission;
};

Resources.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Resources;
