import React from "react";
import { CreateRequestLocal } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";
import { checkPermissionRules } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkPermissionRules({
    context
  });
  return permission;
};

CreateRequestLocal.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default CreateRequestLocal;