import React from "react";
import {
  type IDataFormPublicUser,
  type RegisterUserData
} from "@/_types/RegisterUser/RegisterUser";
import { useDispatch } from "react-redux";
import createDecorator from "final-form-focus";
import { useRouter } from "next/navigation";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { PATHS } from "@/_utils/constants";

export function useRegisterUser(): RegisterUserData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);

  async function onCreateUser(payload: ): Promise<void> {
    try {
      setIsLoading(true);
      // await servicePostDrive(payload);``
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo motorista registrado"
        })
      );
      // router.push(PATHS.);
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
  const focusOnError = React.useMemo(
    () => createDecorator<IDataFormPublicUser, Partial<IDataFormPublicUser>>(),
    []
  );
  return {
    isLoading,
    isShowSectors,
    onCreateUser,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    focusOnError
  };
}
