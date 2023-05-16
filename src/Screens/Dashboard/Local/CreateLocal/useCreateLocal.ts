import React from "react";
import { useRouter } from "next/navigation";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import type {
  onCreateLocalProps,
  useCreateLocalData
} from "@/_types/Local/CreateLocal";
import { PATHS } from "@/_utils/constants";
import { servicePostLocal } from "@/services/api/local";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function useCreateLocal(): useCreateLocalData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Locais",
      destiny: PATHS.dashboard.recursosLocais
    },
    {
      label: "Novo local"
    }
  ];

  async function onCreateLocal(payload: onCreateLocalProps): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostLocal(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo local registrado"
        })
      );
      router.push(PATHS.dashboard.recursosLocais);
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
    onCreateLocal,
    breadCrumb,
    isLoading
  };
}
