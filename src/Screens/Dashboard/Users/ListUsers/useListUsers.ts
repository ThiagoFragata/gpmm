import type { itemBreadCrumb } from "@/_types/BreadCrumb";
import type { useListUsersData } from "@/_types/ListUsers";

export function useListUsers(): useListUsersData {
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Todos usuários"
    }
  ];
  return {
    breadCrumb
  };
}
