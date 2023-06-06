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
      label: "Solicitações"
    },
    {
      label: "Solicitações de transportes",
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
    return result;
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
    dataTransport,
    dataDriver,
    breadCrumb,
    isLoading,
    reservedHoursDay,
    disabledCalendarForm,
    selectedTimes
  };
}
