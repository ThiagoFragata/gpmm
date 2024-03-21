import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import type { itemBreadCrumb } from "@/_types/BreadCrumb";
import { type dataDeleteProps } from "@/_types/Common";
import type {
  IDataShowUser,
  onGetDataShowDetailsProps,
  useListUsersData
} from "@/_types/Users/ListUsers";
import { type IItemUser } from "@/_types/Users/serviceUsers";
import { PATHS } from "@/_utils/constants";
import { serviceGetUsers } from "@/services/api/user";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export function useListUsers(): useListUsersData {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dataUsers, setDataUsers] = React.useState<IItemUser[]>([]);
  const [dataShowUser, setDataShowUser] = React.useState<IDataShowUser>(
    {} as IDataShowUser
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAwaitDelete, setIsAwaitDelete] = React.useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenShowDetails, setIsOpenShowDetails] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentSizePage, setCurrentSizePage] = React.useState(10);
  const [dataDelete, setDataDelete] = React.useState<dataDeleteProps>({
    name: "",
    id: 0
  });
  const [dataPagination, setDataPagination] = React.useState({
    totalPages: 0,
    totalPerPage: 0,
    currentPage: 0
  });
  const [ordenacaoAscendente, setOrdenacaoAscendente] = React.useState(true);
  const breadCrumb: itemBreadCrumb[] = [
    {
      label: "Usuários"
    },
    {
      label: "Todos usuários"
    }
  ];

  const tableTitle = [
    {
      label: "Usuário",
      className: "size__name"
    },
    {
      label: "SIAPE",
      className: "size__siape"
    },
    {
      label: "Telefone",
      className: "size__phone"
    },
    {
      label: "Status",
      className: "size__status"
    },
    {
      label: "Setor",
      className: "size__link"
    },
    {
      label: "Ação",
      className: "size__action"
    }
  ];

  function onHandlerDialogModal(): void {
    setIsOpenModal(!isOpenModal);
  }

  function onGetDataDelete(data: dataDeleteProps): void {
    onHandlerDialogModal();
    setDataDelete(data);
  }

  function onChangeSizePage(value: number): void {
    setCurrentPage(0);
    setCurrentSizePage(value);
  }

  function onGetDataShowDetails(value: onGetDataShowDetailsProps): void {
    const firstName = value?.nome.split(" ")[0];
    const formatedData = {
      ...value,
      firstName
    };
    setDataShowUser(formatedData);
    setIsOpenShowDetails(true);
  }

  const ordenarPorNome = () => {
    const dadosOrdenados = [...dataUsers].sort((a, b) => {
      if (ordenacaoAscendente) {
        return a.nome.localeCompare(b.nome);
      } else {
        return b.nome.localeCompare(a.nome);
      }
    });
    setDataUsers(dadosOrdenados);
    setOrdenacaoAscendente(!ordenacaoAscendente);
  };

  const getListData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetUsers({
        size: currentSizePage,
        page: currentPage
      });
      setDataPagination({
        totalPages: data?.totalPages,
        totalPerPage: data?.size,
        currentPage: data?.number
      });

      const dadosOrdenados = data.content.sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      });
      setDataUsers(dadosOrdenados);
      setOrdenacaoAscendente(!ordenacaoAscendente);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: "Não foi possível recuperar os dados dos usuários"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentSizePage, dispatch]);

  React.useEffect(() => {
    getListData();
  }, [currentPage, currentSizePage]);

  return {
    dataUsers,
    tableTitle,
    breadCrumb,
    isLoading,
    isNotFoundData: !isLoading && dataUsers.length === 0,
    isOpenModal,
    dataDelete,
    isAwaitDelete,
    dataPagination,
    dataShowUser,
    isOpenShowDetails,
    onCloseDetails: () => {
      setIsOpenShowDetails(false);
    },
    onTryAgainGetData: () => getListData(),
    onChangePage: (value: number): void => {
      setCurrentPage(value);
    },
    onChangeSizePage,
    onGetDataShowDetails,
    onSendToEdit: id => {
      router.push(`${PATHS.dashboard.usuarioEditar}${id}`);
    },
    ordenarPorNome,
    ordenacaoAscendente
  };
}
