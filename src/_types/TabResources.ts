import { type ITabOptions } from "./Resources";

export interface TabResourcesProps {
  onChange: (value: ITabOptions) => void;
  currentTab: ITabOptions;
}

export interface useTabResourcesData {
  optionsTab: Array<{
    id: ITabOptions;
    label: string;
  }>;
}
