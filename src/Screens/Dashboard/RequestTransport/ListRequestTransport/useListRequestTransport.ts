import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { serviceGetRequestTransport } from "@/services/api/requestTransport";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IItemRequestTransport } from "@/_types/RequestTransport/ServiceRequestTransport";
import {
  type IShowRequestTransport,
  type useListRequestTransportData
} from "@/_types/RequestTransport/ListRequestTransport";
import { PATHS } from "@/_utils/constants";
import { regexCPF, regexPhone } from "@/_utils/masks";
import { type formatDataStartEndProps } from "@/_types/Common";
import moment from "moment";
import { getSession } from "next-auth/react";

export function useListRequestTransport(): useListRequestTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataRequestTransport, setDataRequestTransport] = React.useState<
    IItemRequestTransport[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isOpenShowDetails, setIsOpenShowDetails] = React.useState(false);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [shouldRenderEditOption, setShouldRenderEditOption] =
    React.useState(false);
  const [dataShowRequestTransport, setDataShowRequestTransport] =
    React.useState<IShowRequestTransport>({} as IShowRequestTransport);
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
  function formatDataStartEnd({ start, end }: formatDataStartEndProps): string {
    const formatted = `${moment(start).format(
      "DD[/]MM[/]YYYY [de] HH:mm"
    )} às ${moment(end).format("HH:mm")}`;
    return formatted;
  }

  function onGetDataShowDetails(value: IItemRequestTransport): void {
    const externo =
      value?.solicitacao?.externo !== null && value?.solicitacao?.externo !== ""
        ? value?.solicitacao?.externo
        : "Não";
    const formatted = {
      shouldRenderJustify:
        value?.solicitacao?.justificativa !== null &&
        value?.solicitacao?.justificativa !== "" &&
        value?.solicitacao?.autorizacao === "NEGADO",
      // Status da solicitação
      autorizacao: value?.solicitacao?.autorizacao ?? "Não informado",
      // Informações do solitante
      externo: externo ?? "Não informado",
      nome: value?.solicitacao?.solicitante?.nome ?? "Não informado",
      siape: value?.solicitacao?.solicitante?.siape ?? "Não informado",
      telefone:
        value?.solicitacao?.solicitante?.telefone?.numero !== ""
          ? regexPhone(value?.solicitacao?.solicitante?.telefone?.numero)
          : "Não informado",
      email: value?.solicitacao?.solicitante?.email ?? "Não informado",
      // Informações do translado
      data_evento:
        formatDataStartEnd({
          start: value?.solicitacao?.dataInicio,
          end: value?.solicitacao?.dataFinal
        }) ?? "Não informado",
      finalidade: value?.solicitacao?.finalidade ?? "Não informado",
      data_solicitacao:
        moment(value?.solicitacao?.dataSolicitacao).format(
          "DD[/]MM[/]YYYY [às] HH:mm"
        ) ?? "Não informado",
      justificativa: value?.solicitacao?.justificativa ?? "Não informado",
      destino: value?.destino ?? "Não informado",
      saida: value?.saida ?? "Não informado",
      motorista: value?.motorista?.numeroCnh ?? "Não informado",
      nome_motorista: "Informação indisponível no momento",
      veiculo: `${value?.transporte?.descricao} - ${value?.transporte?.placa}`,
      // Informações dos passageiros
      passageiros: (value?.passageiros ?? []).map(passageiro => ({
        nome: passageiro?.nome ?? "Não informado",
        cpf:
          passageiro?.cpf !== "" && passageiro?.cpf !== null
            ? regexCPF(passageiro?.cpf)
            : "Não informado"
      }))
    };

    setDataShowRequestTransport(formatted);
    setIsOpenShowDetails(true);
  }

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const session = await getSession();
      if (session?.user_type === "ADMIN") {
        setShouldRenderEditOption(true);
      }

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
    isOpenShowDetails,
    dataShowRequestTransport,
    shouldRenderEditOption,
    onCloseDetails: () => {
      setIsOpenShowDetails(false);
    },
    onGetDataShowDetails,
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
