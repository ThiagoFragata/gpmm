import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { serviceGetRequestTransport } from "@/services/api/requestTransport";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IItemRequestTransport } from "@/_types/RequestTransport/ServiceRequestTransport";
import { type useListRequestTransportData } from "@/_types/RequestTransport/ListRequestTransport";
import { PATHS } from "@/_utils/constants";

export function useListRequestTransport(): useListRequestTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataRequestTransport, setDataRequestTransport] = React.useState<
    IItemRequestTransport[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [dataPagination, setDataPagination] = React.useState({
    totalPages: 0,
    totalPerPage: 0,
    currentPage: 0
  });

  const tableTitle = [
    {
      label: "Finalidade",
      className: "column__table"
    },
    {
      label: "Início - Fim",
      className: "column__table"
    },
    {
      label: "Partida - Destino",
      className: "column__partida"
    },
    {
      label: "Status",
      className: "column__status"
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
      const data = await serviceGetRequestTransport({
        size: currentSizePage,
        page: currentPage
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });
      setDataRequestTransport(data?.content);
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

  React.useEffect(() => {
    getListData();
  }, [currentPage, currentSizePage]);

  return {
    dataRequestTransport,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataRequestTransport?.length === 0,
    dataPagination,
    onTryAgainGetData: () => getListData(),
    onSendToEdit: id => {
      router.push(`${PATHS.dashboard.solicitacoesEditarTranporte}${id}`);
    },
    onChangeSizePage,
    onChangePage: (value: number): void => {
      setCurrentPage(value);
    }
  };
}
