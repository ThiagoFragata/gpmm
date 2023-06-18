import React from "react";
import { useDispatch } from "react-redux";
import {
  type IDataCard,
  type useSettingsStatusAccountData,
  type useSettingsStatusAccountProps
} from "@/_types/SettingsStatusAccount";
import { CheckIcon, CloseIcon, InfoIcon, ProfileIcon } from "@/assets/icons";
import { servicePutPublicUserStatus } from "@/services/api/user";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IDataServeError } from "@/_types/Common";

export function useSettingsStatusAccount({
  status
}: useSettingsStatusAccountProps): useSettingsStatusAccountData {
  const dispatch = useDispatch();

  const shouldRenderButton = [
    "ATIVADA",
    "DESATIVADA",
    "PENDENTE_ATIVACAO_ADMIN"
  ].some(item => item === status);

  async function onUpdateUserStatus({
    id,
    status,
    setCurrentStatus
  }: {
    id: number;
    status: string;
    setCurrentStatus: any;
  }): Promise<void> {
    try {
      await servicePutPublicUserStatus({
        id,
        status
      });

      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description:
            "Status da conta atualizado para " + status + " com sucesso"
        })
      );
      setCurrentStatus(status);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Não foi realizar a ação, tente novamente mais tarde";

      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha atualizar status",
          description: messageError
        })
      );
    }
  }

  function dataCard(): IDataCard {
    if (status === "DESATIVADA") {
      return {
        variantButton: "primary",
        labelButton: "Ativar Conta",
        titleCard: "Conta desativada",
        description:
          "O usuário não poderá acessar sua conta até ativar ativá-la. Você pode ativá-la clicando no botão abaixo.",
        icon: () => <CloseIcon />,
        onPress: ({ userId, setCurrentStatus }) => {
          onUpdateUserStatus({
            id: userId,
            status: "ATIVADA",
            setCurrentStatus
          });
        }
      };
    }
    if (status === "ATIVADA") {
      return {
        variantButton: "danger",
        labelButton: "Desativar Conta",
        titleCard: "Conta ativa",
        description:
          "O usuário tem acesso normal a sua conta. Você pode desativá-la clicando no botão abaixo.",
        icon: () => <CheckIcon />,
        onPress: ({ userId, setCurrentStatus }) => {
          onUpdateUserStatus({
            id: userId,
            status: "DESATIVADA",
            setCurrentStatus
          });
        }
      };
    }
    if (status === "PENDENTE_ATIVACAO_ADMIN") {
      return {
        variantButton: "light",
        labelButton: "Liberar Conta",
        titleCard: "Aguardando ativação do administrador",
        description:
          "Um administrador do sistema precisar liberar a conta do usuário para que ele possa acessá-la.",
        icon: () => <InfoIcon />,
        onPress: ({ userId, setCurrentStatus }) => {
          onUpdateUserStatus({
            id: userId,
            status: "ATIVADA",
            setCurrentStatus
          });
        }
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
