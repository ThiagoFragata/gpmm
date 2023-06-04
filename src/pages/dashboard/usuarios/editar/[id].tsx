import React from "react";
import { EditUser } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";
import { checkExistSession } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkExistSession({
    context
  });
  return permission;
};

EditUser.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default EditUser;
