import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { type useEditTransportData } from "@/_types/Transport/EditTransport";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { PATHS } from "@/_utils/constants";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  serviceGetTransportById,
  servicePutTransport
} from "@/services/api/transport";
import { type IItemTransport } from "@/_types/Transport/serviceTransport";

export function useEditTransport(): useEditTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idTransport = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [initialValues, setInitialValues] = React.useState({
    descricao: "",
    placa: ""
  });
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Transportes",
      destiny: PATHS.dashboard.recursosTransportes
    },
    {
      label: `Edição ${initialValues?.descricao ?? "transporte"}`
    }
  ];

  async function onEditTransport(payload: IItemTransport): Promise<void> {
    try {
      setIsLoading(true);
      await servicePutTransport({
        id: Number(idTransport),
        descricao: payload?.descricao,
        identificacao: payload?.placa,
        totalDeAssento: Number(payload?.totalDeAssentos)
      });
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "info",
          description: "Transporte atualizado"
        })
      );
      router.push(PATHS.dashboard.recursosLocais);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao atualizar transporte, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  const getDataTransport = React.useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const data = await serviceGetTransportById(id);
        setInitialValues(data);
      } catch (error) {
        dispatch(
          onChangeToastAlert({
            isVisible: true,
            variant: "error",
            title: "Falha ao buscar dados",
            description: "Não foi possível recuperar os dados do transporte"
          })
        );
        router.push(PATHS.dashboard.recursosTransportes);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    const isExistIdParam = idTransport !== undefined;
    if (isExistIdParam) {
      getDataTransport(Number(idTransport));
    }
  }, [idTransport]);

  return {
    onEditTransport,
    breadCrumb,
    isLoading,
    initialValues
  };
}
