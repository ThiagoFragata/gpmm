import React from "react";
import type { FirstAccessData, IScreenSteps } from "@/_types/FirstAccess";
import { FIRST_ACCESS_SCREENS } from "@/_utils/constants";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  servicePostRequestCode,
  servicePostValidCode
} from "@/services/api/firstAccess";
import { type IDataServeError } from "@/_types/Common";
const { SCREEN_GET_EMAIL, SCREEN_GET_CODE, SCREEN_GET_PASSWORD } =
  FIRST_ACCESS_SCREENS;

export function useFirstAccess(): FirstAccessData {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentscreen, setCurrentScreen] =
    React.useState<IScreenSteps>(SCREEN_GET_EMAIL);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [capturedEmail, setCapturedEmail] = React.useState<string>("");
  const isScreenGetEmail = SCREEN_GET_EMAIL === currentscreen;
  const isScreenGetCode = SCREEN_GET_CODE === currentscreen;
  const isScreenGetPassword = SCREEN_GET_PASSWORD === currentscreen;

  async function onRequestCode(email: string): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostRequestCode(email);
      setCurrentScreen(SCREEN_GET_CODE);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "info",
          title: "E-mail enviado com sucesso",
          description: "Verifique sua caixa de email"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi possível enviar o e-mail, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao enviar e-mail",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function onValidateCode(payload: {
    codigo: string;
    email: string;
  }): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostValidCode(payload);
      setCurrentScreen(SCREEN_GET_PASSWORD);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Código validado com sucesso",
          description: "Pode definir sua senha"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi possível validar o código, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Código inválido",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    const isExistQueryEmail = router.query?.email !== undefined;
    if (isExistQueryEmail) {
      setCapturedEmail(String(router.query?.email) ?? "");
      setCurrentScreen(SCREEN_GET_CODE);
    }
  }, [router.query?.email]);

  return {
    onRequestCode,
    goBackGetEmail: () => {
      setCurrentScreen(SCREEN_GET_EMAIL);
    },
    onValidateCode,
    capturedEmail,
    isLoading,
    isScreenGetEmail,
    isScreenGetCode,
    isScreenGetPassword
  };
}
