import React from "react";
import { ContainerProfile } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useProfile } from "./useProfile";
import { AwaitRequest, BreadCrumb, DataBox, TabResources } from "@/Components";
import { type RenderCurrenTabProps } from "@/_types/Profile";
import { Data } from "./Partials/Data";
import { Password } from "./Partials/Password";

function RenderCurrenTab({
  onEditProfile,
  currentTab,
  dataProfile,
  isLoading
}: RenderCurrenTabProps): JSX.Element {
  const tabs = {
    1: (
      <Data
        data={dataProfile}
        isLoading={isLoading}
        onEditProfile={onEditProfile}
      />
    ),
    2: <Password />
  };
  return tabs[currentTab] ?? <h1>SEM ABA</h1>;
}

export const Profile: NextPageWithLayout = () => {
  const {
    onChangeTab,
    onEditProfile,
    currentTab,
    breadCrumb,
    optionsTab,
    dataProfile,
    isLoading
  } = useProfile();
  return (
    <ContainerProfile>
      <BreadCrumb items={breadCrumb} />
      <AwaitRequest isVisible={isLoading} />
      <DataBox>
        <TabResources
          tabName="requests"
          onChange={onChangeTab}
          currentTab={currentTab}
          optionsTab={optionsTab}
        />
        <RenderCurrenTab
          currentTab={currentTab}
          onChangeTab={onChangeTab}
          dataProfile={dataProfile}
          isLoading={isLoading}
          onEditProfile={onEditProfile}
        />
      </DataBox>
    </ContainerProfile>
  );
};
