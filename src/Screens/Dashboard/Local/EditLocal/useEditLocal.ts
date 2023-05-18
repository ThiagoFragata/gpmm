import React from "react";
import {
  type onEditLocalProps,
  type useEditLocalData
} from "@/_types/Local/EditLocal";
import { useDispatch } from "react-redux";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { type IItemLocal } from "@/_types/Local/ServiceLocal";
import { PATHS } from "@/_utils/constants";
import { serviceGetLocalById, servicePutLocal } from "@/services/api/local";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { useRouter } from "next/router";

export function useEditLocal(): useEditLocalData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idLocal = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataLocal, setDataLocal] = React.useState<IItemLocal | undefined>();
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

  const getDataLocal = React.useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const data = await serviceGetLocalById(id);
        setDataLocal(data);
        console.log("🔥🔥🔥🔥________________________🚑");
        console.log(JSON.stringify(data, null, 2));
        console.log("🔥🔥🔥🔥________________________🚑");
      } catch (error) {
        dispatch(
          onChangeToastAlert({
            isVisible: true,
            variant: "error",
            title: "Falha ao buscar dados",
            description: "Não foi possível recuperar os dados dos locais"
          })
        );
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    const isExistIdParam = idLocal !== undefined;
    console.log(JSON.stringify(idLocal, null, 2));
    if (isExistIdParam) {
      getDataLocal(Number(idLocal));
    } else {
      console.log(JSON.stringify("nao exist parametro", null, 2));
    }
  }, [idLocal]);
  return {
    onEditLocal,
    dataLocal,
    breadCrumb,
    isLoading
  };
}
