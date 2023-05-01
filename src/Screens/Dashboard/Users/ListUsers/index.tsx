import React from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import { ContainerListUsers } from "./style";
import { BreadCrumb, Button, DataBox, Search } from "@/Components";
import { useListUsers } from "./useListUsers";

export const ListUsers: NextPageWithLayout = () => {
  const { breadCrumb } = useListUsers();
  return (
    <ContainerListUsers>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <div className="top__options">
          <Search />
          <Button title="Novo" iconName="MoreIcon" />
        </div>
      </DataBox>
    </ContainerListUsers>
  );
};
