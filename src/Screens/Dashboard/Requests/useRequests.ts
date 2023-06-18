import React from "react";
import {
  type ITabOptionsRequests,
  type useRequestsData
} from "@/_types/Requests";
import { PATHS, TABS_REQUESTS } from "@/_utils/constants";
import { useRouter, usePathname } from "next/navigation";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";

export function useRequests(): useRequestsData {
  const { TAB_LIST_PLACE, TAB_LIST_TRANSPORT, TAB_LIST_COMMUNICATION } =
    TABS_REQUESTS;
  const [currentTab, setCurrentTab] =
    React.useState<ITabOptionsRequests>(TAB_LIST_TRANSPORT);
  const router = useRouter();
  const pathname = usePathname();
  const breadCrumbPlace: itemBreadCrumb[] = [
    {
      label: "Solicitações"
    }
  ];

  const optionsTab = [
    {
      id: TAB_LIST_PLACE,
      label: "Locais"
    },
    {
      id: TAB_LIST_TRANSPORT,
      label: "Transportes"
    },
    {
      id: TAB_LIST_COMMUNICATION,
      label: "Gerais"
    }
  ];

  function onChangeTab(value: number): void {
    const tab = value as ITabOptionsRequests;
    const mapScreens = {
      1: PATHS.dashboard.solicitacoesLocais,
      2: PATHS.dashboard.solicitacoesTranportes,
      3: PATHS.dashboard.solicitacoesComunicacao
    };
    setCurrentTab(tab);
    router.push(mapScreens[tab]);
  }

  function initTab(): void {
    const paths = {
      [PATHS.dashboard.solicitacoesLocais]: TAB_LIST_PLACE,
      [PATHS.dashboard.solicitacoesTranportes]: TAB_LIST_TRANSPORT,
      [PATHS.dashboard.solicitacoesComunicacao]: TAB_LIST_COMMUNICATION
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
    optionsTab,
    currentTab,
    breadCrumb: breadCrumbPlace,
    isListRequestPlace: currentTab === TAB_LIST_PLACE,
    isListRequestTransport: currentTab === TAB_LIST_TRANSPORT
  };
}
