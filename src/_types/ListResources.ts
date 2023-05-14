import type { itemBreadCrumb } from "./BreadCrumb";

export type ITabOptions = 0 | 1 | 2 | 3;

export interface useListResourcesData {
  onChangeTab: (tab: ITabOptions) => void;
  currentTab: ITabOptions;
  breadCrumb: itemBreadCrumb[];
  isListPlace: boolean;
  isListTransport: boolean;
  isListDriver: boolean;
}

export type RenderCurrenTabProps = Pick<
  useListResourcesData,
  "onChangeTab" | "currentTab"
>;
