import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { type useCreateDriveData } from "@/_types/Driver/CreateDrive";
import { type IItemDriver } from "@/_types/Driver/ServiceDriver";
import { PATHS } from "@/_utils/constants";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { servicePostDrive } from "@/services/api/driver";

export function useCreateDrive(): useCreateDriveData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Motoristas",
      destiny: PATHS.dashboard.recursosMotoristas
    },
    {
      label: "Novo motorista"
    }
  ];

  async function onCreateDriver(payload: IItemDriver): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostDrive(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo motorista registrado"
        })
      );
      router.push(PATHS.dashboard.recursosMotoristas);
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
    onCreateDriver,
    breadCrumb,
    isLoading
  };
}
