import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/navigation";
import { PATHS } from "@/_utils/constants";
import {
  type onCreateUserProps,
  type useCreateUserData
} from "@/_types/Users/CreateUsers";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { formatDateToBack } from "@/_utils/masks";
import { servicePostUser } from "@/services/api/user";
import createDecorator from "final-form-focus";
import { type IDataFormUser } from "@/_types/Common";
import { getLabelTypeProfile } from "@/_utils/getTypeProfile";

export function useCreateUser(): useCreateUserData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Novo usuário"
    }
  ];

  async function onCreateUser(data: onCreateUserProps): Promise<void> {
    try {
      setIsLoading(true);
      const typeProfile = getLabelTypeProfile(data?.tipoPerfil);
      const shouldSendCHN = data?.auth__drive && data?.numeroCnh !== undefined;
      const payload = {
        nome: data?.nome,
        cpf: data?.cpf,
        siape: data?.siape,
        dataNascimento: formatDateToBack(data?.dataNascimento),
        tipoPerfil: typeProfile,
        telefone: data?.telefone,
        setor: Number(data?.setor),
        email: data?.email,
        numeroCnh: shouldSendCHN ? data?.numeroCnh : null
      };
      await servicePostUser(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo usuário registrado"
        })
      );
      router.push(PATHS.dashboard.usuarios);
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
    () => createDecorator<IDataFormUser, Partial<IDataFormUser>>(),
    []
  );

  return {
    isLoading,
    breadCrumb,
    isShowSectors,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    onCreateUser,
    focusOnError
  };
}
