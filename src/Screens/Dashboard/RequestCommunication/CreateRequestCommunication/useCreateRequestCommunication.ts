import React from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import {
  type IDataCreateCommunication,
  type useCreateRequestCommunicationData
} from "@/_types/RequestCommunication/CreateRequestCommunication";
import { type itemBreadCrumb } from "@/_types/BreadCrumb";
import { PATHS } from "@/_utils/constants";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type IDataServeError } from "@/_types/Common";
import { servicePostCommunication } from "@/services/api/communication";

export function useCreateRequestCommunication(): useCreateRequestCommunicationData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Solicitações"
    },
    {
      label: "Gerais",
      destiny: PATHS.dashboard.solicitacoesComunicacao
    },
    {
      label: "Nova mensagem"
    }
  ];

  async function onCreateCommunication(
    data: IDataCreateCommunication
  ): Promise<void> {
    try {
      setIsLoading(true);
      const session = await getSession();
      const pessoaId = Number(session?.id);
      const payload = {
        ...data,
        pessoaId
      };
      await servicePostCommunication(payload);
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Solicitação enviada!"
        })
      );
      router.push(PATHS.dashboard.solicitacoesComunicacao);
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao criar solicitação, tente novamente";
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

  return { breadCrumb, isLoading, onCreateCommunication };
}
