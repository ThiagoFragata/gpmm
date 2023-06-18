import React from "react";
import { ListUsers } from "@/Screens";
import { getSession } from "next-auth/react";

import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";
import { checkPermissionRules } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  if (session == null) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
  }
  console.log("🔥🔥🔥🔥________________________🚑");
  console.log(JSON.stringify(session, null, 2));
  console.log("🔥🔥🔥🔥________________________🚑");
  return { props: {} };
  // const permission = checkPermissionRules({
  //   context,
  //   isOnlyAdm: false
  // });
  // return permission;
};
ListUsers.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default ListUsers;
