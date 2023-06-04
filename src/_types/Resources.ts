import type { itemBreadCrumb } from "./BreadCrumb";

export type ITabOptions = 0 | 1 | 2 | 3;

export interface useResourcesData {
  onChangeTab: (tab: number) => void;
  currentTab: ITabOptions;
  breadCrumb: itemBreadCrumb[];
  isListPlace: boolean;
  isListTransport: boolean;
  isListDriver: boolean;
  optionsTab: Array<{
    id: ITabOptions;
    label: string;
  }>;
}

export type RenderCurrenTabProps = Pick<
  useResourcesData,
  "onChangeTab" | "currentTab"
>;
