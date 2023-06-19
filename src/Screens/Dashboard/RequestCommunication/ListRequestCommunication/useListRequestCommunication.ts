import React from "react";
import { type useListRequestCommunicationData } from "@/_types/RequestCommunication/ListRequestCommunication";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { serviceGetCommunication } from "@/services/api/communication";
import { type IItemCommunicatoin } from "@/_types/RequestCommunication/ServiceRequestCommunication";

export function useListRequestCommunication(): useListRequestCommunicationData {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [dataCommunication, setDataCommunication] = React.useState<
    IItemCommunicatoin[]
  >([]);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [dataPagination, setDataPagination] = React.useState({
    totalPages: 0,
    totalPerPage: 0,
    currentPage: 0
  });

  const tableTitle = [
    {
      label: "Solicitante",
      className: "column__user"
    },
    {
      label: "Data solicitação",
      className: "column__data"
    },
    {
      label: "Assunto",
      className: "column__object"
    },
    {
      label: "Mensagem",
      className: "column__message"
    }
  ];

  function onChangeSizePage(value: number): void {
    setCurrentPage(0);
    setCurrentSizePage(value);
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetCommunication({
        size: currentSizePage,
        page: currentPage
      });
      setDataCommunication(data?.content);
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: "Não foi possível recuperar os dados das solicitações"
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
    tableTitle,
    dataCommunication,
    dataPagination,
    isNotFoundData: !isLoading && dataCommunication?.length === 0,
    isLoading,
    onTryAgainGetData: () => getListData(),
    onChangeSizePage,
    onChangePage: (value: number): void => {
      setCurrentPage(value);
    }
  };
}
