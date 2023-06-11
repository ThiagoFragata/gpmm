import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import {
  type onCreateTransportProps,
  type useCreateTransportData
} from "@/_types/Transport/CreateTransport";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { servicePostTransport } from "@/services/api/transport";

export function useCreateTransport(): useCreateTransportData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Transportes",
      destiny: PATHS.dashboard.recursosTransportes
    },
    {
      label: "Novo transporte"
    }
  ];

  async function onCreateTransport(
    payload: onCreateTransportProps
  ): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostTransport(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo transporte registrado"
        })
      );
      router.push(PATHS.dashboard.recursosTransportes);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao criar registro, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onCreateTransport,
    isLoading,
    breadCrumb
  };
}
