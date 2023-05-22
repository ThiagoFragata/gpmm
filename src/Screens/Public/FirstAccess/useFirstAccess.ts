import React from "react";
import type { FirstAccessData, IScreenSteps } from "@/_types/FirstAccess";
import { FIRST_ACCESS_SCREENS } from "@/_utils/constants";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { useDispatch } from "react-redux";
const { SCREEN_GET_EMAIL, SCREEN_GET_CODE, SCREEN_GET_PASSWORD } =
  FIRST_ACCESS_SCREENS;

export function useFirstAccess(): FirstAccessData {
  const dispatch = useDispatch();
  const [currentscreen, setCurrentScreen] =
    React.useState<IScreenSteps>(SCREEN_GET_EMAIL);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const isScreenGetEmail = SCREEN_GET_EMAIL === currentscreen;
  const isScreenGetCode = SCREEN_GET_CODE === currentscreen;
  const isScreenGetPassword = SCREEN_GET_PASSWORD === currentscreen;

  async function onRequestCode(email: string): Promise<void> {
    try {
      console.log(JSON.stringify("data", null, 2));
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
  }

  return {
    onRequestCode,
    isLoading,
    isScreenGetEmail,
    isScreenGetCode,
    isScreenGetPassword
  };
}
