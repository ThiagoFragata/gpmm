import React from "react";
import type { itemBreadCrumb } from "@/_types/BreadCrumb";
import type { ITabOptions, useListResourcesData } from "@/_types/ListResources";
import { PATHS, TABS_RESOURCES } from "@/_utils/constants";
import { useRouter, usePathname } from "next/navigation";

export function useListResources(): useListResourcesData {
  const { LIST_DRIVER, LIST_PLACE, LIST_TRANSPORT } = TABS_RESOURCES;
  const [currentTab, setCurrentTab] = React.useState<ITabOptions>(LIST_PLACE);
  const router = useRouter();
  const pathname = usePathname();
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Todos locais"
    }
  ];

  function onChangeTab(tab: ITabOptions): void {
    const mapScreens = {
      0: PATHS.dashboard.recursosLocais,
      1: PATHS.dashboard.recursosTransportes,
      2: PATHS.dashboard.recursosMotoristas,
      3: PATHS.dashboard.recursos
    };
    setCurrentTab(tab);
    router.push(mapScreens[tab]);
  }

  function initTab(): void {
    const paths = {
      [PATHS.dashboard.recursosLocais]: LIST_PLACE,
      [PATHS.dashboard.recursosTransportes]: LIST_TRANSPORT,
      [PATHS.dashboard.recursosMotoristas]: LIST_DRIVER
    };
    const getTab: ITabOptions =
      pathname !== null
        ? paths[pathname ?? [PATHS.dashboard.recursosLocais]]
        : paths[PATHS.dashboard.recursosLocais];
    setCurrentTab(getTab);
  }

  React.useEffect(() => {
    initTab();
  }, []);

  return {
    onChangeTab,
    breadCrumb,
    currentTab,
    isListPlace: currentTab === LIST_PLACE,
    isListTransport: currentTab === LIST_TRANSPORT,
    isListDriver: currentTab === LIST_DRIVER
  };
}
