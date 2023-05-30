import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import {
  type onCreateUserProps,
  type useCreateUserData
} from "@/_types/Users/CreateUsers";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function useCreateUser(): useCreateUserData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Novo usuário"
    }
  ];

  async function onCreateUser(payload: onCreateUserProps): Promise<void> {
    try {
      setIsLoading(true);
      // await servicePostLocal(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo usuário registrado"
        })
      );
      console.log("🔥🔥🔥🔥________________________🚑");
      console.log(JSON.stringify(payload, null, 2));
      console.log("🔥🔥🔥🔥________________________🚑");
      // router.push(PATHS.dashboard.usuarios);
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
    isLoading,
    breadCrumb,
    isShowSectors,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    onCreateUser
  };
}
