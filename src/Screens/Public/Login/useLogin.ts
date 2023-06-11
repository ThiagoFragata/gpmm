import React from "react";
import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { servicePostLogin } from "@/services/api/user";
import { setCookie } from "nookies";

export function useLogin(): useLoginData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  async function onSubmitLogin(payload: onSubmitLoginProps): Promise<void> {
    try {
      const result = await servicePostLogin(payload);
      const firstName = result?.usuario?.nome.split(" ")[0];
      const dataToCookie = {
        jwt: result?.token,
        idUser: result.usuario?.id,
        typeProfile: result?.usuario?.tipoPerfil
      };
      const twentyFourHoursInSeconds = 24 * 60 * 60; // 24 horas em segundos
      setCookie(undefined, "42auth-nextts", JSON.stringify(dataToCookie), {
        maxAge: twentyFourHoursInSeconds
      });
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Logado com sucesso!",
          description: `Seja bem-vindo ${firstName}!`
        })
      );
      window.location.href = PATHS.dashboard.inicio;
      // router.push(PATHS.dashboard.inicio);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao logar!",
          description: "E-mail ou senha inválido, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }
  return {
    onSubmitLogin,
    isLoading,
    titleButton
  };
}
