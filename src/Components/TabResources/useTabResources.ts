import type { useTabResourcesData } from "@/_types/TabResources";
import { TABS_RESOURCES } from "@/_utils/constants";

export function useTabResources(): useTabResourcesData {
  const { LIST_DRIVER, LIST_PLACE, LIST_TRANSPORT } = TABS_RESOURCES;
  const optionsTab = [
    {
      id: LIST_PLACE,
      label: "Locais"
    },
    {
      id: LIST_TRANSPORT,
      label: "Tranportes"
    },
    {
      id: LIST_DRIVER,
      label: "Motoristas"
    }
  ];
  return {
    optionsTab
  };
}
