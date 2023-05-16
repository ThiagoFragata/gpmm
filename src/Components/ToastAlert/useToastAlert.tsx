import React from "react";
import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from "@/assets/icons";
import { type useToastAlertData } from "@/_types/ToastAlert";
import { colors } from "@/style/theme";

export function useToastAlert(): useToastAlertData {
  const icons = {
    success: () => <CheckIcon fill={colors.WHITE} />,
    error: () => <ErrorIcon fill={colors.WHITE} />,
    info: () => <InfoIcon fill={colors.WHITE} />,
    warning: () => <WarningIcon fill={colors.WHITE} />,
    ghost: () => <ErrorIcon fill={colors.WHITE} />
  };
  const title = {
    success: "Sucesso!",
    error: "Erro!",
    info: "Informação!",
    warning: "Atenção!",
    ghost: ""
  };

  const description = {
    success: "Ação realizada com êxito!",
    error: "Falha ao realizar ação",
    info: "Ação realizada com êxito",
    warning: "Revise seus dados",
    ghost: ""
  };

  return {
    icons,
    mapTitle: title,
    mapDescription: description
  };
}
