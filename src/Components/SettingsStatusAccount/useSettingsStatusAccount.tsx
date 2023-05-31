import React from "react";
import {
  type IDataCard,
  type useSettingsStatusAccountData,
  type useSettingsStatusAccountProps
} from "@/_types/SettingsStatusAccount";
import { CheckIcon, CloseIcon, InfoIcon, ProfileIcon } from "@/assets/icons";

export function useSettingsStatusAccount({
  status
}: useSettingsStatusAccountProps): useSettingsStatusAccountData {
  const shouldRenderButton = [
    "ATIVADA",
    "DESATIVADA",
    "PENDENTE_ATIVACAO_ADMIN"
  ].some(item => item === status);

  function dataCard(): IDataCard {
    if (status === "DESATIVADA") {
      return {
        variantButton: "primary",
        labelButton: "Ativar Conta",
        titleCard: "Conta desativada",
        description:
          "O usuário não poderá acessar sua conta até ativar ativá-la. Você pode ativá-la clicando no botão abaixo.",
        icon: () => <CloseIcon />
      };
    }
    if (status === "ATIVADA") {
      return {
        variantButton: "danger",
        labelButton: "Desativar Conta",
        titleCard: "Conta ativa",
        description:
          "O usuário tem acesso normal a sua conta. Você pode desativá-la clicando no botão abaixo.",
        icon: () => <CheckIcon />
      };
    }
    if (status === "PENDENTE_ATIVACAO_ADMIN") {
      return {
        variantButton: "light",
        labelButton: "Liberar Conta",
        titleCard: "Aguardando ativação do administrador",
        description:
          "Um administrador do sistema precisar liberar a conta do usuário para que ele possa acessá-la.",
        icon: () => <InfoIcon />
      };
    }
    return {
      titleCard: "Ativação por conta do usuário",
      description:
        "O usuário recebeu um e-mail com instruções para ativação de sua conta.",
      icon: () => <ProfileIcon />
    };
  }

  return {
    shouldRenderButton,
    dataCard: dataCard()
  };
}
