import React from "react";
import { ForgotPassword } from "@/Screens";
import { type GetServerSideProps } from "next";
import { checkPublicPermission } from "@/_utils/permissionRules";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  const permission = checkPublicPermission(session);
  return permission;
};

export default function ForgotPasswordScreen(): JSX.Element {
  return <ForgotPassword />;
}
