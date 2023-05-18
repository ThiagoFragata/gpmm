import React from "react";
import { useRouter } from "next/navigation";
import type {
  dataDeleteProps,
  onGetDataDeleteProps,
  useListLocalData
} from "@/_types/Local/ListLocal";
import type { IItemLocal } from "@/_types/Local/ServiceLocal";
import { serviceDeleteLocal, serviceGetLocal } from "@/services/api/local";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { PATHS } from "@/_utils/constants";

export function useListLocal(): useListLocalData {
  const dispatch = useDispatch();
  const [dataLocal, setDataLocal] = React.useState<IItemLocal[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAwaitDelete, setIsAwaitDelete] = React.useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [dataDelete, setDataDelete] = React.useState<dataDeleteProps>({
    name: "",
    id: 0
  });
  const router = useRouter();
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

  function onHandlerDialogModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  function onGetDataDelete(data: onGetDataDeleteProps): void {
    onHandlerDialogModal();
    setDataDelete(data);
  }

  async function onConfirmDelete(): Promise<void> {
    try {
      setIsAwaitDelete(true);
      onHandlerDialogModal();
      await serviceDeleteLocal({
        id: dataDelete?.id
      });
      getListData();
    } catch {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: `Falha excluir o item "${dataDelete.name}"`,
          description: "Não foi realizar a ação, tente novamente mais tarde"
        })
      );
    } finally {
      setIsAwaitDelete(false);
    }
  }

  React.useEffect(() => {
    getListData();
  }, []);

  return {
    dataLocal,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataLocal.length === 0,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    onTryAgainGetData: () => getListData(),
    onSendToEdit: id => {
      router.push(`${PATHS.dashboard.recursosEditarLocal}${id}`);
    },
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete
  };
}
