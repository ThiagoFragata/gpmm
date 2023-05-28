import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { type useCreateUserData } from "@/_types/Users/CreateUsers";
import React from "react";

export function useCreateUser(): useCreateUserData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Novo usuário"
    }
  ];
  function onOpenListSectors(): void {
    setIsShowSectors(true);
  }
  function onCloseListSectors(): void {
    setIsShowSectors(false);
  }
  return {
    isLoading,
    breadCrumb,
    isShowSectors,
    onOpenListSectors,
    onCloseListSectors
  };
}
