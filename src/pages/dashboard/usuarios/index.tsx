import React from "react";
import { ListUsers } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";
import { checkPermissionRules } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkPermissionRules({
    context,
    isOnlyAdm: true
  });
  return permission;
};

ListUsers.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default ListUsers;
