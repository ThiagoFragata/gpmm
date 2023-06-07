import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/navigation";
import {
  type IDataFormRequestLocal,
  type useCreateRequestLocalData
} from "@/_types/RequestsLocal/CreateRequestLocal";
import {
  serviceGeRequestLocal,
  servicePostrequestLocal
} from "@/services/api/requestLocal";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { checkValidDate, validFutureDate } from "@/_utils/masks";
import { getOnlyRequestDay } from "@/_utils/treatAvailability";
import createDecorator from "final-form-focus";
import moment from "moment";
import { parseCookies } from "nookies";
import { serviceGetLocal } from "@/services/api/local";
import { type IDataServeError } from "@/_types/Common";

export function useCreateRequestLocal(): useCreateRequestLocalData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [reservedHoursDay, setReservedHoursDay] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataLocal, setDataLocal] = React.useState<
    Array<{
      id: number;
      name: string;
    }>
  >([]);
  const [disabledCalendarForm, setDisabledCalendarForm] =
    React.useState<boolean>(true);
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([]);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Solicitações",
      destiny: PATHS.dashboard.solicitacoesLocais
    },
    {
      label: "Nova solicitação de local"
    }
  ];

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
          const data = await serviceGeRequestLocal({
            size: 0,
            page: 0
          });
          const isExistRequests = data?.content.length > 0;
          if (isExistRequests) {
            const _reservedHoursDay = getOnlyRequestDay({
              informedDay: value,
              times: (data?.content ?? []).map(item => ({
                data_inicio: item?.data_inicio,
                data_final: item?.data_final
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

  async function onCreateRequestLocal(
    data: IDataFormRequestLocal
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
      const payload = {
        idPessoa: _dataCookie?.idUser,
        dataInicio: `${eventData}T${hourStart}:00`,
        dataFinal: `${eventData}T${hourEnd}:00`,
        finalidade: data?.finalidade,
        externo: data?.externo,
        idLocal: data?.idLocal
      };
      await servicePostrequestLocal(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Tudo certo!",
          description: "Agendamento concluido com sucesso"
        })
      );
      router.push(PATHS.dashboard.solicitacoesLocais);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao agendar local, tente novamente mais tarde";
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

  const focusOnError = React.useMemo(
    () =>
      createDecorator<IDataFormRequestLocal, Partial<IDataFormRequestLocal>>(),
    []
  );

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetLocal({
        size: 0,
        page: 0
      });
      const result = (data?.content ?? []).map(item => ({
        id: item.id ?? 0,
        name: item.descricao
      }));
      setDataLocal(result);
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
    onGetRequestsDay,
    focusOnError,
    onCreateRequestLocal,
    setSelectedTimes,
    dataLocal,
    disabledCalendarForm,
    breadCrumb,
    selectedTimes,
    isLoading,
    reservedHoursDay
  };
}
