import { type ITabOptions } from "./ListResources";

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
