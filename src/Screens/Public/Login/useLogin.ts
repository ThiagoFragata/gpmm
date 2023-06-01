import React from "react";
import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import { servicePostLogin } from "@/services/api/user";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function useLogin(): useLoginData {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  async function onSubmitLogin(payload: onSubmitLoginProps): Promise<void> {
    try {
      setIsLoading(true);
      const result = await servicePostLogin(payload);
      const firstName = result?.usuario?.nome.split(" ")[0] ?? "";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: `Seja bem-vindo ${firstName}!`
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
