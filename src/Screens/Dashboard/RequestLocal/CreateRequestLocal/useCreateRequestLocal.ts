import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import {
  type IDataFormRequestLocal,
  type useCreateRequestLocalData
} from "@/_types/RequestsLocal/CreateRequestLocal";
import { serviceGeRequestLocal } from "@/services/api/requestLocal";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { checkValidDate, validFutureDate } from "@/_utils/masks";
import { getOnlyRequestDay } from "@/_utils/treatAvailability";
import createDecorator from "final-form-focus";

export function useCreateRequestLocal(): useCreateRequestLocalData {
  const dispatch = useDispatch();
  const [reservedHoursDay, setReservedHoursDay] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [disabledCalendarForm, setDisabledCalendarForm] =
    React.useState<boolean>(true);
  const [selectedTimes, setSelectedTimes] = React.useState<string[]>([]);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Solicitações"
    },
    {
      label: "Solicitações de locais",
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
              description: "Informa uma data a partir de hoje"
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
    console.log(JSON.stringify(data?.hours, null, 2));
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
  }

  const focusOnError = React.useMemo(
    () =>
      createDecorator<IDataFormRequestLocal, Partial<IDataFormRequestLocal>>(),
    []
  );

  return {
    onGetRequestsDay,
    focusOnError,
    onCreateRequestLocal,
    setSelectedTimes,
    disabledCalendarForm,
    breadCrumb,
    selectedTimes,
    isLoading,
    reservedHoursDay
  };
}
