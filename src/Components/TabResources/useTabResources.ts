import type { useTabResourcesData } from "@/_types/TabResources";
import { TABS_RESOURCES } from "@/_utils/constants";

export function useTabResources(): useTabResourcesData {
  const { TAB_LIST_DRIVER, TAB_LIST_PLACE, TAB_LIST_TRANSPORT } =
    TABS_RESOURCES;
  const optionsTab = [
    {
      id: TAB_LIST_PLACE,
      label: "Locais"
    },
    {
      id: TAB_LIST_TRANSPORT,
      label: "Tranportes"
    },
    {
      id: TAB_LIST_DRIVER,
      label: "Motoristas"
    }
  ];
  return {
    optionsTab
  };
}
