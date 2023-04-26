import React from "react";
import { useRouter } from "next/router";
import type {
  onSubmitForgotPasswordProps,
  useForgotPasswordData
} from "@/_types/ForgotPassword";
import { PATHS } from "@/_utils/constants";

export function useForgotPassword(): useForgotPasswordData {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const titleButton = isLoading ? "Aguarde..." : "Solicitar";

  function onSubmitForgotPassword({
    email
  }: onSubmitForgotPasswordProps): void {
    setIsLoading(true);
    setIsLoading(!isLoading);
  }

  return {
    onSubmitForgotPassword,
    goToLogin: () => {
      router.push(PATHS.login);
    },
    isLoading,
    titleButton
  };
}
