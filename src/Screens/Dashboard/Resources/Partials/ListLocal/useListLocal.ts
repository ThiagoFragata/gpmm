import type { useListLocalData } from "@/_types/Local/ListLocal";
import type { IItemLocal } from "@/_types/Local/ServiceLocal";
import { serviceGetLocal } from "@/services/api/local";
import React from "react";

export function useListLocal(): useListLocalData {
  const [dataLocal, setDataLocal] = React.useState<IItemLocal[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const tableTitle = [
    {
      label: "Descrição",
      className: "column__table"
    },
    {
      label: "Identificação",
      className: "column__table"
    },
    {
      label: "N° de Assentos",
      className: "column__table"
    },
    {
      label: "Ação",
      className: "size__action"
    }
  ];
  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetLocal();
      setDataLocal(data?.content);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getListData();
  }, []);

  return {
    dataLocal,
    tableTitle,
    isLoading
  };
}
