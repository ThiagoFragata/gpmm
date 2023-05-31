import React from "react";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { useRouter } from "next/router";
import { PATHS, PROFILE_TYPE } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { formatDateToBack, regexCPF, regexPhone } from "@/_utils/masks";
import { serviceGetUserById } from "@/services/api/user";
import createDecorator from "final-form-focus";
import { type IDataFormUser } from "@/_types/Common";
import moment from "moment";
import { type useEditUserData } from "@/_types/Users/EditUser";
import { getIdTypeProfile } from "@/_utils/getTypeProfile";

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
        const formInitialData = {
          auth__drive: data?.motorista?.numeroCnh !== undefined,
          numeroCnh:
            data?.motorista?.numeroCnh !== undefined
              ? data?.motorista?.numeroCnh
              : undefined,
          telefone: regexPhone(data?.telefone?.numero),
          setor: data?.setor?.id,
          label_setor: data?.setor?.nome,
          nome: data?.nome,
          cpf: regexCPF(data?.cpf),
          siape: data?.siape,
          dataNascimento: moment(data?.dataNascimento).format("DD[/]MM[/]YYYY"),
          tipoPerfil: getIdTypeProfile(data?.tipoPerfil),
          email: data?.email,
          status: data?.status
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
    // onEditUser,
    focusOnError
  };
}
