import React from "react";
import { ContainerListResources } from "./style";
import { useListResources } from "./useListResources";
import { type NextPageWithLayout } from "@/pages/_app";
import { BreadCrumb, DataBox, TabResources } from "@/Components";
import { Onboard } from "./Partials/Onboard";

export const ListResources: NextPageWithLayout = () => {
  const {
    onChangeTab,
    currentTab,
    breadCrumb,
    isListPlace,
    isListTransport,
    isListDriver
  } = useListResources();
  return (
    <ContainerListResources>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <TabResources onChange={onChangeTab} currentTab={currentTab} />
        <Onboard />
        {/* <div className="top__options">
          <Search />
          <Button title="Novo" iconName="MoreIcon" />
        </div> */}
      </DataBox>
    </ContainerListResources>
  );
};
