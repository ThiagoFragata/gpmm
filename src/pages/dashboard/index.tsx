import React from "react";
import { Home } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { checkProfilePermission } from "@/_utils/permissionRules";
import { getSession } from "next-auth/react";
import { type GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  const permission = checkProfilePermission({ session, isOnlyAdm: false });
  return permission;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Home;
