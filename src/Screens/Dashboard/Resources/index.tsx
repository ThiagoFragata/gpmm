import React from "react";
import { ContainerResources } from "./style";
import { useResources } from "./useResources";
import { type NextPageWithLayout } from "@/pages/_app";
import { BreadCrumb, DataBox, TabResources } from "@/Components";
import { Onboard } from "./Partials/Onboard";
import { type RenderCurrenTabProps } from "@/_types/Resources";
import { ListLocal } from "../Local/ListLocal";
import { ListDriver } from "../Driver/ListDriver";
import { ListTransport } from "../Transport/ListTransport";

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

export const Resources: NextPageWithLayout = () => {
  const {
    onChangeTab,
    currentTab,
    breadCrumb,
    optionsTab,
    isListPlace,
    isListTransport,
    isListDriver
  } = useResources();
  return (
    <ContainerResources>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <TabResources
          tabName="resources"
          onChange={onChangeTab}
          currentTab={currentTab}
          optionsTab={optionsTab}
        />
        <RenderCurrenTab currentTab={currentTab} onChangeTab={onChangeTab} />
      </DataBox>
    </ContainerResources>
  );
};
