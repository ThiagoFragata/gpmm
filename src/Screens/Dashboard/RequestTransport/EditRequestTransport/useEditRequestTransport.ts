import React from "react";
import {
  type IShowData,
  type useEditRequestTransportData
} from "@/_types/RequestTransport/EditRequestTransport";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import { serviceGetRequestTransportById } from "@/services/api/requestTransport";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IDataServeError } from "@/_types/Common";
import moment from "moment";
import { getOnlyRequestDay } from "@/_utils/treatAvailability";

export function useEditRequestTransport(): useEditRequestTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idRequestTransport = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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

  const getDataRequestLocal = React.useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const data = await serviceGetRequestTransportById(id);
        // setDataRequestTransport(data);
        const formattedShowData = {
          motorista: "nome motorista",
          finalidade: data?.solicitacao?.finalidade,
          transporte: `${data?.transporte?.descricao} - ${data?.transporte.placa}`,
          saida: data?.saida,
          destino: data?.destino,
          passageiros: data?.passageiros ?? [],
          dataEvento: moment(data?.solicitacao?.dataInicio).format("DD/MM/YYYY")
        };
        setShowData(formattedShowData);

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
        console.log("🔥🔥🔥🔥________________________🚑");
        console.log(JSON.stringify(_reservedHoursDay, null, 2));
        // console.log(JSON.stringify(formattedShowData, null, 2));
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
    breadCrumb,
    isLoading,
    reservedHoursDay,
    showData
  };
}
