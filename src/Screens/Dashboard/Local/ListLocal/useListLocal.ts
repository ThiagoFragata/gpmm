import React from "react";
import { useRouter } from "next/navigation";
import type {
  onGetDataDeleteProps,
  useListLocalData
} from "@/_types/Local/ListLocal";
import type { IItemLocal } from "@/_types/Local/ServiceLocal";
import { type IDataServeError, type dataDeleteProps } from "@/_types/Common";
import { serviceDeleteLocal, serviceGetLocal } from "@/services/api/local";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { PATHS } from "@/_utils/constants";

export function useListLocal(): useListLocalData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataLocal, setDataLocal] = React.useState<IItemLocal[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAwaitDelete, setIsAwaitDelete] = React.useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [dataDelete, setDataDelete] = React.useState<dataDeleteProps>({
    name: "",
    id: 0
  });
  const [dataPagination, setDataPagination] = React.useState({
    totalPages: 0,
    totalPerPage: 0,
    currentPage: 0
  });
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

  function onHandlerDialogModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  function onGetDataDelete(data: onGetDataDeleteProps): void {
    onHandlerDialogModal();
    setDataDelete(data);
  }

  function onChangeSizePage(value: number): void {
    setCurrentPage(0);
    setCurrentSizePage(value);
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetLocal({
        size: currentSizePage,
        page: currentPage
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });
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
  }, [currentPage, currentSizePage, dispatch]);

  async function onConfirmDelete(): Promise<void> {
    try {
      setIsAwaitDelete(true);
      onHandlerDialogModal();
      await serviceDeleteLocal({
        id: dataDelete?.id
      });
      getListData();
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Local excluido com sucesso!"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi realizar a ação, tente novamente mais tarde";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: `Falha excluir o item "${dataDelete.name}"`,
          description: messageError
        })
      );
    } finally {
      setIsAwaitDelete(false);
    }
  }

  React.useEffect(() => {
    getListData();
  }, [currentPage, currentSizePage]);

  return {
    dataLocal,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataLocal?.length === 0,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    dataPagination,
    onTryAgainGetData: () => getListData(),
    onSendToEdit: id => {
      router.push(`${PATHS.dashboard.recursosEditarLocal}${id}`);
    },
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onChangePage: (value: number): void => {
      setCurrentPage(value);
    },
    onChangeSizePage
  };
}
