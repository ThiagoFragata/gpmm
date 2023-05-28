import React from "react";
import { type IItemSector } from "@/_types/Sectors/serviceSectors";
import { serviceGetSectors, servicePostSectors } from "@/services/api/sectors";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import {
  type onCreateSectorProps,
  type useListSectorsData
} from "@/_types/Sectors/ListSectors";
import { type dataDeleteProps } from "@/_types/Common";

export function useListSectors(): useListSectorsData {
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
  React.useEffect(() => {
    getDataSectors();
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

  async function onConfirmDelete(): Promise<void> {
    try {
      setIsAwaitDelete(true);
      onHandlerDialogModal();
      // await setor({
      // id: dataDelete?.id
      // });
      getDataSectors();
    } catch {
      dispatch(
        onChangeToastAlert({
          isVisible: true,
          variant: "error",
          title: `Falha excluir o item "${dataDelete.name}"`,
          description: "Não foi realizar a ação, tente novamente mais tarde"
        })
      );
    } finally {
      setIsAwaitDelete(false);
    }
  }

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
    isNotFoundData: !isLoading && dataSector.length === 0,
    isLoading,
    dataSector,
    isVisibleDefaultTop: showComponentTop === SHOW_TOP_DEFAULT,
    isVisibleNewSector: showComponentTop === SHOW_NEW,
    tableTitle,
    isAwaitDelete,
    isOpenModalDialog,
    dataDelete
  };
}
