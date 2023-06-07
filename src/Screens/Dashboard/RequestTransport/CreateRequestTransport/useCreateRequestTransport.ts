import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import {
  type IDataFormRequestTransport,
  type useCreateRequestTransportData
} from "@/_types/RequestTransport/CreateRequestTransport";
import createDecorator from "final-form-focus";
import { serviceGetDriver } from "@/services/api/driver";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  type IDataInputSelectTransport,
  type IDataInputSelect,
  type IDataServeError
} from "@/_types/Common";
import { serviceGetTransport } from "@/services/api/transport";
import { checkValidDate, validFutureDate } from "@/_utils/masks";
import {
  serviceGetRequestTransport,
  servicePostrequestTransport
} from "@/services/api/requestTransport";
import { getOnlyRequestDay } from "@/_utils/treatAvailability";
import { parseCookies } from "nookies";
import moment from "moment";

export function useCreateRequestTransport(): useCreateRequestTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [reservedHoursDay, setReservedHoursDay] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [disabledCalendarForm, setDisabledCalendarForm] =
    React.useState<boolean>(true);
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([]);
  const [dataTransport, setDataTransport] =
    React.useState<IDataInputSelectTransport>([]);
  const [dataDriver, setDataDriver] = React.useState<IDataInputSelect>([]);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Solicitações",
      destiny: PATHS.dashboard.solicitacoesTranportes
    },
    {
      label: "Nova solicitação de transporte"
    }
  ];

  const focusOnError = React.useMemo(
    () =>
      createDecorator<
        IDataFormRequestTransport,
        Partial<IDataFormRequestTransport>
      >(),
    []
  );

  function getVacanciesTransportSelected(id?: string): number {
    const _id = Number(id);
    const result =
      dataTransport.find(item => item.id === _id)?.totalDeAssentos ?? 0;
    const isExistAmount = result > 0;
    const amount = isExistAmount ? result - 1 : result;
    return amount;
  }

  async function onGetRequestsDay(value: string): Promise<void> {
    if (value.length === 10) {
      const isValidDate = checkValidDate(value);
      if (isValidDate) {
        const isValidFuture = validFutureDate(value);
        if (!isValidFuture) {
          dispatch(
            onChangeToastAlert({
              isVisible: true,
              variant: "warning",
              title: "Atenção",
              description: "Informe uma data a partir de hoje"
            })
          );
          return;
        }

        if (disabledCalendarForm) setDisabledCalendarForm(false);

        try {
          setSelectedTimes([]);
          setIsLoading(true);
          const data = await serviceGetRequestTransport({
            size: 0,
            page: 0
          });
          const isExistRequests = data?.content.length > 0;
          if (isExistRequests) {
            const _reservedHoursDay = getOnlyRequestDay({
              informedDay: value,
              times: (data?.content ?? []).map(item => ({
                data_inicio: item?.solicitacao?.dataInicio,
                data_final: item?.solicitacao?.dataFinal
              }))
            });
            setReservedHoursDay(_reservedHoursDay);
          }
        } catch (error) {
          dispatch(
            onChangeToastAlert({
              isVisible: true,
              variant: "error",
              title: "Falha ao buscar dados",
              description:
                "Não foi possível recuperar os dados das solicitações"
            })
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        dispatch(
          onChangeToastAlert({
            isVisible: true,
            variant: "warning",
            title: "Data inválida",
            description: "Verifique o formato de data informado"
          })
        );
      }
    }
  }

  async function onCreateRequestTransport(
    data: IDataFormRequestTransport
  ): Promise<void> {
    const isNoTimeGap = data?.hours === null || data?.hours === undefined;
    if (isNoTimeGap) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "warning",
          title: "Atenção",
          description: "Selecione ao menos um intervalo de horas."
        })
      );
    }
    try {
      const hourStart = data?.hours != null ? data?.hours?.start : "";
      const hourEnd = data?.hours != null ? data?.hours?.end : "";
      const cookie = parseCookies();
      const isValidDateCookie =
        cookie["42auth-nextts"] !== undefined &&
        typeof cookie["42auth-nextts"] === "string";
      const dataCookie = isValidDateCookie
        ? JSON.parse(cookie["42auth-nextts"])
        : "";
      const _dataCookie = dataCookie as { idUser: string };
      const eventData = moment(data?.event__data, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );
      const amountVacancies = getVacanciesTransportSelected(data.idTransporte);
      const vacanciesTransport = new Array(amountVacancies).fill("");
      const getFormattedPassengers = vacanciesTransport.map((_, index) => {
        const position = index + 1;
        return {
          nome: data[`nome_passageiro_${position}`],
          cpf: data[`cpf_passageiro_${position}`]
        };
      });
      const payload = {
        idPessoa: _dataCookie?.idUser,
        dataInicio: `${eventData}T${hourStart}:00`,
        dataFinal: `${eventData}T${hourEnd}:00`,
        idMotorista: data?.idMotorista,
        idTransporte: data?.idTransporte,
        finalidade: data?.finalidade,
        saida: data?.saida,
        destino: data?.destino,
        passageiros: getFormattedPassengers.filter(
          item => item.nome !== undefined && item.cpf !== undefined
        )
      };
      await servicePostrequestTransport(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Tudo certo!",
          description: "Solicitção enviada com sucesso"
        })
      );
      router.push(PATHS.dashboard.solicitacoesTranportes);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao solicitar transporte, tente novamente mais tarde";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Erro ao realizar ação!",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  const getDataTransportdAndDrivers = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const [resultDrivers, resultTransports] = await Promise.all([
        serviceGetDriver({
          size: 0,
          page: 0
        }),
        serviceGetTransport({
          size: 0,
          page: 0
        })
      ]);
      if (resultTransports.content.length > 0) {
        setDataTransport(
          resultTransports.content.map(item => ({
            id: item.id ?? 0,
            name: `${item.descricao} - Placa ${item.placa}`,
            totalDeAssentos: item.totalDeAssentos ?? 0
          }))
        );
      }
      if (resultDrivers.content.length > 0) {
        setDataDriver(
          resultDrivers.content.map(item => ({
            id: item.id ?? 0,
            name: item.nome
          }))
        );
      }
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi possível recuperar dados necessarios para o registro, tente novamente mais tarde";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados!",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getDataTransportdAndDrivers();
  }, []);

  return {
    setSelectedTimes,
    focusOnError,
    getVacanciesTransportSelected,
    onGetRequestsDay,
    onCreateRequestTransport,
    dataTransport,
    dataDriver,
    breadCrumb,
    isLoading,
    reservedHoursDay,
    disabledCalendarForm,
    selectedTimes
  };
}
