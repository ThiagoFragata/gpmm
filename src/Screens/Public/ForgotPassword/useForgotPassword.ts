import React from "react";
import { useRouter } from "next/router";
import type {
  onCreatePasswordProps,
  useForgotPasswordData
} from "@/_types/ForgotPassword";
import { FORGOT_PASSWORD_SCREENS, PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IDataServeError } from "@/_types/Common";
import {
  servicePostRequestCodeForgotPassword,
  servicePostValidCode,
  servicePutCreatePassword
} from "@/services/api/firstAccess";

export function useForgotPassword(): useForgotPasswordData {
  const dispatch = useDispatch();
  const router = useRouter();
  const { SCREEN_GET_EMAIL, SCREEN_GET_CODE, SCREEN_GET_PASSWORD } =
    FORGOT_PASSWORD_SCREENS;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentscreen, setCurrentScreen] = React.useState<0 | 1 | 2>(
    SCREEN_GET_EMAIL
  );
  const [capturedEmail, setCapturedEmail] = React.useState<string>("");
  const isScreenGetEmail = SCREEN_GET_EMAIL === currentscreen;
  const isScreenGetCode = SCREEN_GET_CODE === currentscreen;
  const isScreenGetPassword = SCREEN_GET_PASSWORD === currentscreen;
  const [dataCreatePassword, setDataCreatePassword] = React.useState({
    codigo: "",
    idUser: 0
  });

  async function onRequestCode(email: string): Promise<void> {
    try {
      setIsLoading(true);
      await servicePostRequestCodeForgotPassword(email);
      setCapturedEmail(email);
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
      const data = await servicePostValidCode(payload);
      setDataCreatePassword({
        codigo: payload?.codigo,
        idUser: data?.id
      });
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

  async function onCreatePassword({
    codigo,
    idUser,
    senha
  }: onCreatePasswordProps): Promise<void> {
    try {
      setIsLoading(true);
      await servicePutCreatePassword({ codigo, idUser, senha });
      router.push(PATHS.login);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Senha criada com sucesso!",
          description:
            "Agora basta informar seus dados de acesso para entrar no sistema"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi possível criar a senha, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha na solicitação",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  return {
    onRequestCode,
    goBackGetEmail: () => {
      setCurrentScreen(SCREEN_GET_EMAIL);
    },
    onValidateCode,
    onCreatePassword,
    dataCreatePassword,
    capturedEmail,
    isLoading,
    isScreenGetEmail,
    isScreenGetCode,
    isScreenGetPassword
  };
}
