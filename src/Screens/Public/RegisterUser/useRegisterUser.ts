import {
  type IDataFormPublicUser,
  type RegisterUserData
} from "@/_types/RegisterUser/RegisterUser";
import createDecorator from "final-form-focus";
import React from "react";

export function useRegisterUser(): RegisterUserData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);
  const focusOnError = React.useMemo(
    () => createDecorator<IDataFormPublicUser, Partial<IDataFormPublicUser>>(),
    []
  );
  return {
    isLoading,
    isShowSectors,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    focusOnError
  };
}
