import React from "react";
import { ContainerListUsers } from "./style";
import type { NextPageWithLayout } from "@/pages/_app";
import { BreadCrumb } from "@/Components";
import { useListUsers } from "./useListUsers";

export const ListUsers: NextPageWithLayout = () => {
  const { breadCrumb } = useListUsers();

  return (
    <ContainerListUsers>
      <BreadCrumb items={breadCrumb} />
    </ContainerListUsers>
  );
};
