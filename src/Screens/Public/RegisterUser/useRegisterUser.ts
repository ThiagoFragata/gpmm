import React from "react";
import {
  type IDataFormPublicUser,
  type RegisterUserData
} from "@/_types/RegisterUser/RegisterUser";
import { useDispatch } from "react-redux";
import createDecorator from "final-form-focus";
import { useRouter } from "next/navigation";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { PATHS } from "@/_utils/constants";
import { servicePostPublicUser } from "@/services/api/user";
import { formatDateToBack } from "@/_utils/masks";

export function useRegisterUser(): RegisterUserData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);

  async function onCreateUser(data: IDataFormPublicUser): Promise<void> {
    try {
      setIsLoading(true);
      const payload = {
        nome: data?.nome,
        cpf: data?.cpf,
        siape: data?.siape,
        dataNascimento: formatDateToBack(data?.dataNascimento),
        telefone: data?.telefone,
        setor: Number(data?.setor),
        email: data?.email,
        senha: data.senha
      };
      await servicePostPublicUser(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description:
            "Cadastro realizado. Agora, um administrador do sistema precisa liberar a conta para que voce possa acessar"
        })
      );
      router.push(PATHS.login);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao criar registro, tente novamente"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }
  const focusOnError = React.useMemo(
    () => createDecorator<IDataFormPublicUser, Partial<IDataFormPublicUser>>(),
    []
  );
  return {
    isLoading,
    isShowSectors,
    onCreateUser,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    focusOnError
  };
}
