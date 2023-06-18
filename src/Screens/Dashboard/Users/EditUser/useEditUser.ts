import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/router";
import { PATHS, TYPES_STATUS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { formatDateToBack, regexCPF, regexPhone } from "@/_utils/masks";
import { serviceGetUserById, servicePutUser } from "@/services/api/user";
import createDecorator from "final-form-focus";
import { type typeStringStatus, type IDataFormUser } from "@/_types/Common";
import moment from "moment";
import {
  type onEditUserProps,
  type useEditUserData
} from "@/_types/Users/EditUser";
import { getIdTypeProfile, getLabelTypeProfile } from "@/_utils/getTypeProfile";

export function useEditUser(): useEditUserData {
  const dispatch = useDispatch();
  const router = useRouter();
  const idUser = router.query.id;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowSectors, setIsShowSectors] = React.useState<boolean>(false);
  const [dataUser, setDataUser] = React.useState<IDataFormUser>(
    {} as IDataFormUser
  );
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: `Edição ${dataUser?.nome ?? "usuário"}`
    }
  ];

  const getDataUser = React.useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const data = await serviceGetUserById(id);
        const status: typeStringStatus =
          TYPES_STATUS.find(item => item === data?.status) ?? "unknow";
        const formInitialData = {
          auth__drive:
            data?.motorista?.numeroCnh !== undefined &&
            data?.motorista?.numeroCnh !== "",
          numeroCnh:
            data?.motorista?.numeroCnh !== undefined
              ? data?.motorista?.numeroCnh
              : undefined,
          telefone:
            data?.telefone?.numero !== null &&
            data?.telefone?.numero !== undefined
              ? regexPhone(data?.telefone?.numero)
              : "",
          setor: data?.setor?.id,
          label_setor: data?.setor?.nome,
          nome: data?.nome,
          cpf:
            data?.cpf !== null && data?.cpf !== undefined
              ? regexCPF(data?.cpf)
              : "",
          siape: data?.siape,
          dataNascimento:
            data?.dataNascimento !== null && data?.dataNascimento !== undefined
              ? moment(data?.dataNascimento).format("DD[/]MM[/]YYYY")
              : "",
          tipoPerfil: getIdTypeProfile(data?.tipoPerfil),
          email: data?.email,
          status
        };
        setDataUser(formInitialData);
      } catch (error) {
        dispatch(
          onChangeToastAlert({
            isVisible: true,
            variant: "error",
            title: "Falha ao buscar dados",
            description: "Não foi possível recuperar os dados do usuário"
          })
        );
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    const isExistIdParam = idUser !== undefined;
    if (isExistIdParam) {
      getDataUser(Number(idUser));
    }
  }, [idUser]);

  async function onEditUser(data: onEditUserProps): Promise<void> {
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
        numeroCnh: shouldSendCHN ? data?.numeroCnh : ""
      };
      await servicePutUser({ id: Number(idUser), payload });
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Usuário atualizado com sucesso"
        })
      );
      router.push(PATHS.dashboard.usuarios);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: "Falha ao atualizar registro, tente novamente"
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
    breadCrumb,
    isLoading,
    isShowSectors,
    dataUser,
    onOpenListSectors: () => {
      setIsShowSectors(true);
    },
    onCloseListSectors: () => {
      setIsShowSectors(false);
    },
    onEditUser,
    focusOnError,
    idUser: Number(idUser)
  };
}
