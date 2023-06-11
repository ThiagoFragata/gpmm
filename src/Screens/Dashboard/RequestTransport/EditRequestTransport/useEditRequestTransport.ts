import React from "react";
import {
  type onSendAuthorizationProps,
  type IShowData,
  type useEditRequestTransportData
} from "@/_types/RequestTransport/EditRequestTransport";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import {
  serviceGetRequestTransportById,
  servicePutTransportAuthorization
} from "@/services/api/requestTransport";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IDataServeError } from "@/_types/Common";
import moment from "moment";
import { getOnlyRequestDay } from "@/_utils/treatAvailability";

export function useEditRequestTransport(): useEditRequestTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idRequestTransport = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [idRequest, setIdRequest] = React.useState<number>(0);
  const [reservedHoursDay, setReservedHoursDay] = React.useState<string[]>([]);
  const [showData, setShowData] = React.useState<IShowData>({} as IShowData);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Solicitações",
      destiny: PATHS.dashboard.solicitacoesTranportes
    },
    {
      label: `Atualização da solicitação`
    }
  ];

  async function onSendAuthorization(
    data: onSendAuthorizationProps
  ): Promise<void> {
    try {
      setIsLoading(true);
      const isAuthorized = data?.isAuthorized;
      const payload = {
        autorizacao: isAuthorized ? "AUTORIZADO" : "NEGADO",
        justificativa: isAuthorized ? undefined : data.justificativa,
        id: idRequest
      };
      await servicePutTransportAuthorization(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Solicitação atualizada com sucesso!"
        })
      );
      router.push(PATHS.dashboard.solicitacoesTranportes);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao atualizar registro, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  const getDataRequestLocal = React.useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const data = await serviceGetRequestTransportById(id);
        const _reservedHoursDay = getOnlyRequestDay({
          informedDay: moment(data?.solicitacao?.dataInicio).format(
            "DD[/]MM[/]YYYY"
          ),
          times: [
            {
              data_inicio: data?.solicitacao?.dataInicio,
              data_final: data?.solicitacao?.dataFinal
            }
          ]
        });
        setReservedHoursDay(_reservedHoursDay);
        const formattedShowData = {
          motorista: "nome motorista",
          finalidade: data?.solicitacao?.finalidade,
          transporte: `${data?.transporte?.descricao} - ${data?.transporte.placa}`,
          saida: data?.saida,
          destino: data?.destino,
          solicitante: data?.solicitacao.solicitante.nome,
          passageiros: data?.passageiros ?? [],
          isAuthorized: data?.solicitacao?.autorizacao === "AUTORIZADO",
          isDenied: data?.solicitacao?.autorizacao === "NEGADO",
          justificativa: data?.solicitacao?.autorizacao,
          dataEvento: `${moment(data?.solicitacao?.dataInicio).format(
            "DD/MM/YYYY"
          )} de ${_reservedHoursDay[0]} às ${
            _reservedHoursDay[_reservedHoursDay.length - 1]
          }`
        };
        setShowData(formattedShowData);
        setIdRequest(data?.solicitacao?.id);
      } catch (error) {
        const _error = error as IDataServeError;
        const messageError =
          _error?.response?.data?.errors[0] ??
          "Não foi possível recuperar os dados da solicitação";
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
    },
    [dispatch]
  );

  React.useEffect(() => {
    const isExistIdParam = idRequestTransport !== undefined;
    if (isExistIdParam) {
      getDataRequestLocal(Number(idRequestTransport));
    }
  }, [idRequestTransport]);

  return {
    onSendAuthorization,
    breadCrumb,
    isLoading,
    reservedHoursDay,
    showData
  };
}
