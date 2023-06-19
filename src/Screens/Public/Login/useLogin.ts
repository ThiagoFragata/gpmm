import React from "react";
import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { signIn } from "next-auth/react";

export function useLogin(): useLoginData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  async function onSubmitLogin(payload: onSubmitLoginProps): Promise<void> {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: payload?.email,
      password: payload?.senha
    });
    setIsLoading(false);
    const isSuccess = result?.error === null;
    if (isSuccess) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          title: "Logado com sucesso.",
          description: `Seja bem-vindo!`
        })
      );
      router.push(PATHS.dashboard.solicitacoesLocais);
    } else {
      const message =
        result?.error ?? "E-mail ou senha inválido, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao logar!",
          description: message
        })
      );
    }
  }
  return {
    onSubmitLogin,
    isLoading,
    titleButton
  };
}
