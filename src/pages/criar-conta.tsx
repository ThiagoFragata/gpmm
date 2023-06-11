import React from "react";
import { RegisterUser } from "@/Screens";
import { type GetServerSideProps } from "next";
import { checkExistSession } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkExistSession({
    context
  });
  return permission;
};

export default function RegisterUserScreen(): React.ReactNode {
  return <RegisterUser />;
}
