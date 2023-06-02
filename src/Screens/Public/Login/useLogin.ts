import React from "react";
import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function useLogin(): useLoginData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  async function onSubmitLogin(payload: onSubmitLoginProps): Promise<void> {
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        ...payload,
        redirect: false
      });

      if (result?.error !== null) {
        dispatch(
          onChangeToastAlert({
            isVisible: true,
            variant: "error",
            title: "Falha ao logar!",
            description: result?.error
          })
        );
        return;
      }
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Logado com sucesso!",
          description: `Seja bem-vindo!`
        })
      );
      router.push(PATHS.dashboard.usuarios);
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
