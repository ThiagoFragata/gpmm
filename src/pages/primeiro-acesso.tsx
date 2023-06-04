import React from "react";
import { FirstAccess } from "@/Screens";
import { type GetServerSideProps } from "next";
import { checkExistSession } from "@/_utils/permissionRules";

export const getServerSideProps: GetServerSideProps = async context => {
  const permission = checkExistSession({
    context
  });
  return permission;
};

export default function FirstAccessScreen(): JSX.Element {
  return <FirstAccess />;
}
