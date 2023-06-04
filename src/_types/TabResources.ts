import { type ITabOptionsRequests } from "./Requests";
import { type ITabOptions } from "./Resources";

interface DataTabResourcesProps {
  tabName: "resources";
  onChange: (value: number) => void;
  currentTab: ITabOptions;
  optionsTab: Array<{
    id: ITabOptions;
    label: string;
  }>;
}

interface DataTabRequestsProps {
  tabName: "requests";
  onChange: (value: number) => void;
  currentTab: ITabOptionsRequests;
  optionsTab: Array<{
    id: ITabOptionsRequests;
    label: string;
  }>;
}

export type TabResourcesProps = DataTabResourcesProps | DataTabRequestsProps;
