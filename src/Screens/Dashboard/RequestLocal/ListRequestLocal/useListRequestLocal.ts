import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type dataDeleteProps } from "@/_types/Common";
import {
  type IShowRequestLocal,
  type formatDataStartEndProps,
  type useListRequestLocalData
} from "@/_types/RequestsLocal/ListRequestLocal";
import { type IItemRequestLocal } from "@/_types/RequestsLocal/ServiceRequestLocal";
import { PATHS } from "@/_utils/constants";
import { regexCPF, regexPhone } from "@/_utils/masks";
import { serviceDeleteLocal } from "@/services/api/local";
import { serviceGeRequestLocal } from "@/services/api/requestLocal";
import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

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
  const [sort, setSort] = React.useState("asc");
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

  function SortingForDateInitAndFinal(
    array: IItemRequestLocal[],
    ordenacao: string | undefined
  ) {
    return array.sort((a, b) => {
      const dataInicioA = new Date(a.data_inicio);
      const dataInicioB = new Date(b.data_inicio);
      const dataFinalA = new Date(a.data_final);
      const dataFinalB = new Date(b.data_final);

      let comparador = 0;

      // Determinando o sentido da ordenação com base no parâmetro "ordenação"
      if (ordenacao === "asc") {
        comparador = 1;
      } else if (ordenacao === "desc") {
        comparador = -1;
      }

      // Comparando as datas de início
      if (dataInicioA < dataInicioB) {
        return -1 * comparador;
      }
      if (dataInicioA > dataInicioB) {
        return 1 * comparador;
      }

      // Se as datas de início forem iguais, comparando as datas finais
      if (dataFinalA < dataFinalB) {
        return -1 * comparador;
      }
      if (dataFinalA > dataFinalB) {
        return 1 * comparador;
      }

      // Se ambas as datas de início e fim forem iguais, a ordenação permanece inalterada
      return 0;
    });
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGeRequestLocal({
        size: currentSizePage,
        page: currentPage
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });

      const arrayOrdenado = SortingForDateInitAndFinal(data.content, sort);

      setDataRequestLocal(arrayOrdenado);
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
  }, [currentPage, currentSizePage, dispatch, sort]);

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
    if (isCurrentTab) {
      getListData();
    }
  }, [currentPage, currentSizePage, sort]);

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
    formatDataStartEnd,
    setSort,
    sort
  };
}
