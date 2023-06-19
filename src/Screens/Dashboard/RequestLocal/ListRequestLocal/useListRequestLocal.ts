import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { PATHS } from "@/_utils/constants";
import { type dataDeleteProps } from "@/_types/Common";
import { serviceGeRequestLocal } from "@/services/api/requestLocal";
import { type IItemRequestLocal } from "@/_types/RequestsLocal/ServiceRequestLocal";
import {
  type IShowRequestLocal,
  type formatDataStartEndProps,
  type useListRequestLocalData
} from "@/_types/RequestsLocal/ListRequestLocal";
import moment from "moment";
import "moment/locale/pt-br";
import { regexCPF, regexPhone } from "@/_utils/masks";

export function useListRequestLocal({
  isCurrentTab
}: {
  isCurrentTab: boolean;
}): useListRequestLocalData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataRequestLocal, setDataRequestLocal] = React.useState<
    IItemRequestLocal[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAwaitDelete, setIsAwaitDelete] = React.useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [isOpenShowDetails, setIsOpenShowDetails] = React.useState(false);
  const [dataShowRequestLocal, setDataShowRequestLocal] =
    React.useState<IShowRequestLocal>({} as IShowRequestLocal);
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
      label: "Atividade",
      className: "column__table"
    },
    {
      label: "Início - Fim",
      className: "column__table"
    },
    {
      label: "Solicitante",
      className: "column__table"
    },
    {
      label: "Local",
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

  function onGetDataDelete(data: dataDeleteProps): void {
    onHandlerDialogModal();
    setDataDelete(data);
  }

  function onChangeSizePage(value: number): void {
    setCurrentPage(0);
    setCurrentSizePage(value);
  }

  function formatDataStartEnd({ start, end }: formatDataStartEndProps): string {
    const formatted = `${moment(start).format(
      "DD[/]MM[/]YYYY [de] HH:mm"
    )} às ${moment(end).format("HH:mm")}`;
    return formatted;
  }

  function onGetDataShowDetails(value: IItemRequestLocal): void {
    const externo =
      value?.externo !== null && value?.externo !== "" ? value?.externo : "Não";
    setDataShowRequestLocal({
      solicitante: value?.solicitante,
      externo: externo ?? "Não informado",
      telefone:
        value?.telefone !== "" ? regexPhone(value?.telefone) : "Não informado",
      cpf: value?.cpf !== "" ? regexCPF(value?.cpf) : "Não informado",
      siape: value?.siape ?? "Não informado",
      autorizacao: value?.autorizacao,
      identificacao: value?.identificacao ?? "Não informado",
      local: value?.local ?? "Não informado",
      finalidade: value?.finalidade ?? "Não informado",
      data_solicitacao:
        moment(value?.data_solicitacao).format("DD[/]MM[/]YYYY [às] HH:mm") ??
        "Não informado",
      data_evento:
        formatDataStartEnd({
          start: value?.data_inicio,
          end: value?.data_final
        }) ?? "Não informado"
    });

    setIsOpenShowDetails(true);
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGeRequestLocal({
        // size: currentSizePage,
        // page: currentPage
        size: 0,
        page: 0
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });
      setDataRequestLocal(data?.content);
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

  async function onConfirmDelete(): Promise<void> {
    try {
      setIsAwaitDelete(true);
      onHandlerDialogModal();
      //   await serviceDeleteLocal({
      //     id: dataDelete?.id
      //   });
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
    if (isCurrentTab) {
      getListData();
    }
  }, [currentPage, currentSizePage]);
  return {
    dataRequestLocal,
    tableTitle,
    isLoading,
    isNotFoundData: !isLoading && dataRequestLocal?.length === 0,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    dataPagination,
    isOpenShowDetails,
    dataShowRequestLocal,
    onGetDataShowDetails,
    onCloseDetails: () => {
      setIsOpenShowDetails(false);
    },
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
    onChangeSizePage,
    formatDataStartEnd
  };
}
