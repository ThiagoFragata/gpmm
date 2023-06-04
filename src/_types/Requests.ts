import type { itemBreadCrumb } from "./BreadCrumb";

export type ITabOptionsRequests = 0 | 1;

export interface useRequestsData {
  onChangeTab: (tab: ITabOptionsRequests) => void;
  currentTab: ITabOptionsRequests;
  breadCrumb: itemBreadCrumb[];
  isListRequestPlace: boolean;
  isListRequestTransport: boolean;
}

export type RenderCurrenTabProps = Pick<
  useRequestsData,
  "onChangeTab" | "currentTab"
>;
