import type { itemBreadCrumb } from "@/_types/BreadCrumb";
import type { useListUsersData } from "@/_types/Users/ListUsers";

export function useListUsers(): useListUsersData {
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Todos usuários"
    }
  ];

  const tableTitle = [
    {
      label: "Usuário",
      className: "size__name"
    },
    {
      label: "SIAPE",
      className: "size__siape"
    },
    {
      label: "Telefone",
      className: "size__phone"
    },
    {
      label: "Status",
      className: "size__status"
    },
    {
      label: "Vínculo",
      className: "size__link"
    },
    {
      label: "Ação",
      className: "size__action"
    }
  ];
  return {
    breadCrumb,
    tableTitle
  };
}
