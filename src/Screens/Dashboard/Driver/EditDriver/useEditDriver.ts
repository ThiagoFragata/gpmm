import { type useEditDriverData } from "@/_types/Driver/EditDrive";
import React from "react";
import { useDispatch } from "react-redux";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { useRouter } from "next/router";
import { type IItemDriver } from "@/_types/Driver/ServiceDriver";

export function useEditDriver(): useEditDriverData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idDrive = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataDrive, setDataDrive] = React.useState<IItemDriver | undefined>();
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Recursos"
    },
    {
      label: "Locais",
      destiny: PATHS.dashboard.recursosLocais
    },
    {
      label: `Edição ${dataDrive?.nome ?? "motorista"}`
    }
  ];

  async function onEditDrive(payload: IItemDriver): Promise<void> {
    try {
      setIsLoading(true);
      //   await servicePutLocal({
      //     id: Number(idDrive),
      //     ...payload
      //   });
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "info",
          description: "Motorista atualizado"
        })
      );
      router.push(PATHS.dashboard.recursosLocais);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao atualizar motorista, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onEditDrive,
    breadCrumb,
    isLoading,
    dataDrive
  };
}
