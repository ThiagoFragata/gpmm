import React from "react";
// import { useRouter } from "next/navigation";
import type { useListLocalData } from "@/_types/Local/ListLocal";
import type { IItemLocal } from "@/_types/Local/ServiceLocal";
import { serviceGetLocal } from "@/services/api/local";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
// import { PATHS } from "@/_utils/constants";

export function useListLocal(): useListLocalData {
  const dispatch = useDispatch();
  const [dataLocal, setDataLocal] = React.useState<IItemLocal[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const router = useRouter();
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
    console.log(JSON.stringify("teste", null, 2));
    try {
      setIsLoading(true);
      const data = await serviceGetLocal();
      setDataLocal(data?.content);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: "Não foi possível recuperar os dados dos locais"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getListData();
  }, []);

  return {
    dataLocal,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataLocal.length === 0,
    onTryAgainGetData: () => getListData()
  };
}
