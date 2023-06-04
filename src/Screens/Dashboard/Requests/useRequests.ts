import React from "react";
import {
  type ITabOptionsRequests,
  type useRequestsData
} from "@/_types/Requests";
import { PATHS, TABS_REQUESTS } from "@/_utils/constants";
import { useRouter, usePathname } from "next/navigation";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";

export function useRequests(): useRequestsData {
  const { TAB_LIST_PLACE, TAB_LIST_TRANSPORT } = TABS_REQUESTS;
  const [currentTab, setCurrentTab] =
    React.useState<ITabOptionsRequests>(TAB_LIST_PLACE);
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

  function onChangeTab(tab: ITabOptionsRequests): void {
    const mapScreens = {
      0: PATHS.dashboard.solicitacoesLocais,
      1: PATHS.dashboard.solicitacoesTranportes
    };
    setCurrentTab(tab);
    router.push(mapScreens[tab]);
  }

  function initTab(): void {
    const paths = {
      [PATHS.dashboard.solicitacoesLocais]: TAB_LIST_PLACE,
      [PATHS.dashboard.solicitacoesTranportes]: TAB_LIST_TRANSPORT
    };
    const getTab: ITabOptionsRequests =
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
    currentTab,
    breadCrumb,
    isListRequestPlace: currentTab === TAB_LIST_PLACE,
    isListRequestTransport: currentTab === TAB_LIST_TRANSPORT
  };
}
