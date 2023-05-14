import React from "react";
import { ContainerListResources } from "./style";
import { useListResources } from "./useListResources";
import { type NextPageWithLayout } from "@/pages/_app";
import { BreadCrumb, DataBox, TabResources } from "@/Components";
import { Onboard } from "./Partials/Onboard";
import { ListTransport } from "./Partials/ListTransport";
import { type RenderCurrenTabProps } from "@/_types/ListResources";
import { ListLocal } from "./Partials/ListLocal";
import { ListDriver } from "./Partials/ListDriver";

function RenderCurrenTab({
  currentTab,
  onChangeTab
}: RenderCurrenTabProps): JSX.Element {
  const tabs = {
    0: <Onboard onChangeTab={onChangeTab} />,
    1: <ListLocal />,
    2: <ListTransport />,
    3: <ListDriver />
  };

  return tabs[currentTab] ?? <Onboard onChangeTab={onChangeTab} />;
}

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
        <RenderCurrenTab currentTab={currentTab} onChangeTab={onChangeTab} />

        {/* <Onboard onChangeTab={onChangeTab} />
        <ListTransport /> */}
        {/* <div className="top__options">
          <Search />
          <Button title="Novo" iconName="MoreIcon" />
        </div> */}
      </DataBox>
    </ContainerListResources>
  );
};
