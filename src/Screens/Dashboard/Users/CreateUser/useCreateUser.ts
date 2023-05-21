import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { type useCreateUserData } from "@/_types/Users/CreateUsers";
import React from "react";

export function useCreateUser(): useCreateUserData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Novo usuário"
    }
  ];
  return {
    isLoading,
    breadCrumb
  };
}
