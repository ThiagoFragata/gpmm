import type { onSubmitLoginProps, useLoginData } from "@/_types/Login";
import React from "react";

export function useLogin(): useLoginData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Entrar";
  function onSubmitLogin({ user_name, password }: onSubmitLoginProps): void {
    setIsLoading(true);
    setIsLoading(!isLoading);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2500);
  }
  return {
    onSubmitLogin,
    isLoading,
    titleButton
  };
}
