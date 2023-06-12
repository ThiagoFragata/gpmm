import React from "react";
import { type useListDriverData } from "@/_types/Driver/ListDriver";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { type IDataServeError, type dataDeleteProps } from "@/_types/Common";
import { PATHS } from "@/_utils/constants";
import { type IItemDriver } from "@/_types/Driver/ServiceDriver";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { serviceGetDriver } from "@/services/api/driver";

export function useListDriver(): useListDriverData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataDriver, setDataDriver] = React.useState<IItemDriver[]>([]);
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
      label: "Nome",
      className: "column__table"
    },
    {
      label: "N°. CNH",
      className: "column__table"
    },
    {
      label: "Ação",
      className: "size__action"
    }
  ];

  function onChangeSizePage(value: number): void {
    setCurrentPage(0);
    setCurrentSizePage(value);
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetDriver({
        size: currentSizePage,
        page: currentPage
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });
      setDataDriver(data?.content);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi possível recuperar os dados dos motoristas";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentSizePage, dispatch]);

  React.useEffect(() => {
    getListData();
  }, [currentPage, currentSizePage]);

  return {
    dataDriver,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataDriver?.length === 0,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    dataPagination,
    onTryAgainGetData: () => getListData(),
    onChangePage: (value: number): void => {
      setCurrentPage(value);
    },
    onChangeSizePage,
    onSendToEdit: id => {
      router.push(`${PATHS.dashboard.recursosEditarMotorista}${id}`);
    }
  };
}
