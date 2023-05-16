import React from "react";
import {
  type onEditLocalProps,
  type useEditLocalData
} from "@/_types/Local/EditLocal";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import { servicePutLocal } from "@/services/api/local";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function useEditLocal(): useEditLocalData {
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
      label: "Edição local"
    }
  ];

  async function onEditLocal(payload: onEditLocalProps): Promise<void> {
    try {
      setIsLoading(true);
      await servicePutLocal(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "info",
          description: "Local atualizado"
        })
      );
      router.push(PATHS.dashboard.recursosLocais);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao atualizar local, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onEditLocal,
    breadCrumb,
    isLoading
  };
}
