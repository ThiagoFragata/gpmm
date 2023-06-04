import type { itemBreadCrumb } from "./BreadCrumb";

export type ITabOptionsRequests = 0 | 1;

export interface useRequestsData {
  onChangeTab: (tab: number) => void;
  currentTab: ITabOptionsRequests;
  breadCrumb: itemBreadCrumb[];
  isListRequestPlace: boolean;
  isListRequestTransport: boolean;
  optionsTab: Array<{
    id: ITabOptionsRequests;
    label: string;
  }>;
}

export type RenderCurrenTabProps = Pick<
  useRequestsData,
  "onChangeTab" | "currentTab"
>;
