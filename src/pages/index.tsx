import React from "react";
import { Login } from "@/Screens";
import { LayoutPublic } from "@/Layout/LayoutPublic";
import { type GetServerSideProps } from "next";
import { checkPublicPermission } from "@/_utils/permissionRules";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  const permission = checkPublicPermission(session);
  return permission;
};

export default function LoginScreen(): JSX.Element {
  return (
    <LayoutPublic>
      <Login />
    </LayoutPublic>
  );
}
