import React from "react";
import { type IItemSector } from "@/_types/Sectors/serviceSectors";
import {
  serviceDeleteSector,
  serviceGetSectors,
  servicePostSectors
} from "@/services/api/sectors";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  type useListSectorsProps,
  type onCreateSectorProps,
  type useListSectorsData,
  type onSelectSectorProps
} from "@/_types/Sectors/ListSectors";
import { type IDataServeError, type dataDeleteProps } from "@/_types/Common";

export function useListSectors({
  formRef,
  onClose
}: useListSectorsProps): useListSectorsData {
  const dispatch = useDispatch();
  const SHOW_TOP_DEFAULT = 0;
  const SHOW_NEW = 1;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAwaitDelete, setIsAwaitDelete] = React.useState<boolean>(false);
  const [isOpenModalDialog, setIsOpenModalDialog] = React.useState(false);
  const [dataSector, setDataSector] = React.useState<IItemSector[]>([]);
  const [showComponentTop, setShowComponentTop] = React.useState<0 | 1>(0);
  const [dataDelete, setDataDelete] = React.useState<dataDeleteProps>({
    name: "",
    id: 0
  });
  const tableTitle = [
    {
      label: "Nome",
      className: "column__table"
    },
    {
      label: "Ação",
      className: "size__action"
    }
  ];

  function onHandlerDialogModal(): void {
    setIsOpenModalDialog(!isOpenModalDialog);
  }

  function onGetDataDelete(data: dataDeleteProps): void {
    onHandlerDialogModal();
    setDataDelete(data);
  }

  function onSelectSector({ setor, label_setor }: onSelectSectorProps): void {
    formRef.current?.change("setor", setor);
    formRef.current?.change("label_setor", label_setor);
    onClose();
  }

  const getDataSectors = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetSectors({
        size: 200,
        page: 0
      });
      setDataSector(data?.content);
    } catch (error) {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: "Falha ao buscar dados",
          description: "Não foi possível recuperar os dados dos setores"
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function onCreateSector(payload: onCreateSectorProps): Promise<void> {
    const { form } = payload;
    try {
      setIsLoading(true);

      await servicePostSectors({ nome: payload?.nome });
      form.restart();
      setShowComponentTop(SHOW_TOP_DEFAULT);
      getDataSectors();
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Novo setor registrado"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao criar registro, tente novamente";
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

  async function onConfirmDelete(): Promise<void> {
    try {
      setIsAwaitDelete(true);
      onHandlerDialogModal();
      await serviceDeleteSector(dataDelete?.id);
      getDataSectors();
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "success",
          description: "Setor excluido com sucesso"
        })
      );
    } catch (error) {
      const _error = error as IDataServeError;
      const messageError =
        _error?.response?.data?.errors[0] ??
        "Falha ao excluir registro, tente novamente";
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          description: messageError
        })
      );
    } finally {
      setIsAwaitDelete(false);
    }
  }

  React.useEffect(() => {
    getDataSectors();
  }, []);

  return {
    onCallTopNew: () => {
      setShowComponentTop(SHOW_NEW);
    },
    onCallTopDefault: () => {
      setShowComponentTop(SHOW_TOP_DEFAULT);
    },
    onHandlerDialogModal,
    onGetDataDelete,
    onConfirmDelete,
    onCreateSector,
    onSelectSector,
    isNotFoundData: !isLoading && dataSector.length === 0,
    isLoading,
    dataSector,
    isVisibleDefaultTop: showComponentTop === SHOW_TOP_DEFAULT,
    isVisibleNewSector: showComponentTop === SHOW_NEW,
    tableTitle,
    isAwaitDelete,
    isOpenModalDialog,
    dataDelete,
    amountSector: dataSector.length ?? 0
  };
}
