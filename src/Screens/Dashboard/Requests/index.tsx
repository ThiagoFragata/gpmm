import { BreadCrumb, DataBox, TabResources } from "@/Components";
import { type RenderCurrenTabProps } from "@/_types/Requests";
import { type NextPageWithLayout } from "@/pages/_app";
import { ListRequestCommunication } from "../RequestCommunication/ListRequestCommunication";
import { ListRequestLocal } from "../RequestLocal/ListRequestLocal";
import { ListRequestTransport } from "../RequestTransport/ListRequestTransport";
import { ContainerRequests } from "./style";
import { useRequests } from "./useRequests";

function RenderCurrenTab({ currentTab }: RenderCurrenTabProps): JSX.Element {
  const isTabRequestLocal = currentTab === 1;
  const tabs = {
    1: <ListRequestLocal isCurrentTab={isTabRequestLocal} />,
    2: <ListRequestTransport />,
    3: <ListRequestCommunication />
  };

  return tabs[currentTab] ?? <h1>SEM ABA</h1>;
}

export const Requests: NextPageWithLayout = () => {
  const { onChangeTab, optionsTab, currentTab, breadCrumb } = useRequests();
  return (
    <ContainerRequests>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <TabResources
          tabName="requests"
          onChange={onChangeTab}
          currentTab={currentTab}
          optionsTab={optionsTab}
        />
        <RenderCurrenTab currentTab={currentTab} onChangeTab={onChangeTab} />
      </DataBox>
    </ContainerRequests>
  );
};
