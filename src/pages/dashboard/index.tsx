import React from "react";
import { getSession } from "next-auth/react";
import { Home } from "@/Screens";
import { LayoutDashboard } from "@/Components";
import { type GetServerSideProps } from "next";

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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};

export default Home;
