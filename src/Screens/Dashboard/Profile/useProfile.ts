import React from "react";
import { TABS_PROFILE } from "@/_utils/constants";
import { getSession } from "next-auth/react";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { useDispatch } from "react-redux";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import {
  type useProfileData,
  type ITabOptionsProfile,
  type onEditProfileProps
} from "@/_types/Profile";
import { serviceGetUserById, servicePutUser } from "@/services/api/user";
import { type IItemUser } from "@/_types/Users/serviceUsers";
import { formatDateToBack } from "@/_utils/masks";
import { type IDataServeError } from "@/_types/Common";

export function useProfile(): useProfileData {
  const dispatch = useDispatch();
  const { TAB_DATA, TAB_PASSWORD } = TABS_PROFILE;
  const [currentTab, setCurrentTab] =
    React.useState<ITabOptionsProfile>(TAB_DATA);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataProfile, setDataProfile] = React.useState<IItemUser>(
    {} as IItemUser
  );
  const breadCrumbPlace: itemBreadCrumb[] = [
    {
      label: "Perfil"
    },
    {
      label: dataProfile?.nome ?? "Usuário logado"
    }
  ];

  const optionsTab = [
    {
      id: TAB_DATA,
      label: "Dados"
    }
    // {
    //   id: TAB_PASSWORD,
    //   label: "Segurança"
    // }
  ];

  function onChangeTab(value: number): void {
    const tab = value as ITabOptionsProfile;
    setCurrentTab(tab);
  }

  const getDataUser = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const session = await getSession();
      const idUser = Number(session?.id);
      const data = await serviceGetUserById(idUser);
      setDataProfile(data);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: "Não foi possível recuperar os dados do usuário logado"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  async function onEditProfile({
    payload,
    form
  }: onEditProfileProps): Promise<void> {
    try {
      setIsLoading(true);
      const formattedPayload = {
        ...payload,
        setor: dataProfile?.setor?.id,
        tipoPerfil: dataProfile?.tipoPerfil,
        numeroCnh: dataProfile?.motorista?.numeroCnh,
        dataNascimento: formatDateToBack(payload?.dataNascimento)
      };
      form.restart();
      getDataUser();
      await servicePutUser({
        payload: formattedPayload,
        id:
          dataProfile?.id !== null && dataProfile?.id !== undefined
            ? Number(dataProfile?.id)
            : 0
      });
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Perfil atualizado com sucesso"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao atualizar perfil, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: messageError
        })
      );
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getDataUser();
  }, []);

  return {
    onChangeTab,
    onEditProfile,
    dataProfile,
    currentTab,
    breadCrumb: breadCrumbPlace,
    optionsTab,
    isLoading
  };
}
