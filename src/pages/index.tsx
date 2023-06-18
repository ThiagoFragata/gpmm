import React from "react";
import { Login } from "@/Screens";
import { LayoutPublic } from "@/Layout/LayoutPublic";
import { type GetServerSideProps } from "next";
import {
  checkExistSession,
  checkPublicPermission
} from "@/_utils/permissionRules";
import { getSession } from "next-auth/react";
import { PATHS } from "@/_utils/constants";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  // return { props: {} };
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
