import React from "react";
import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import { useRouter } from "next/router";
import { PATHS } from "@/_utils/constants";

export function useLogin(): useLoginData {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  function onSubmitLogin({ user_name, password }: onSubmitLoginProps): void {
    setIsLoading(true);
    setIsLoading(!isLoading);
    setTimeout(() => {
      router.push(PATHS.dashboard.inicio);
    }, 2500);
  }
  return {
    onSubmitLogin,
    isLoading,
    titleButton
  };
}
