import React from "react";
import { ForgotPassword } from "@/Screens";
import { LayoutPublic } from "@/Layout/LayoutPublic";
import { type GetServerSideProps } from "next";
import { checkExistSession } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkExistSession({
    context
  });
  return permission;
};

export default function ForgotPasswordScreen(): JSX.Element {
  return (
    <LayoutPublic>
      <ForgotPassword />
    </LayoutPublic>
  );
}
