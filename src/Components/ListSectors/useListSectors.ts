import React from "react";
import { type IItemSector } from "@/_types/Sectors/serviceSectors";
import { serviceGetSectors } from "@/services/api/sectors";
import { useDispatch } from "react-redux";
import { onChangeToastAlert } from "@/_config/store/slices/toastAlertSlice";
import { type useListSectorsData } from "@/_types/Sectors/ListSectors";

export function useListSectors(): useListSectorsData {
  const SHOW_TOP_DEFAULT = 0;
  const SHOW_NEW = 1;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataSector, setDataSector] = React.useState<IItemSector[]>([]);
  const [showComponentTop, setShowComponentTop] = React.useState<0 | 1>(0);
  const dispatch = useDispatch();

  const getDataSectors = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await serviceGetSectors({
        size: 100,
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

  return {
    onCallTopNew: () => {
      setShowComponentTop(SHOW_NEW);
    },
    onCallTopDefault: () => {
      setShowComponentTop(SHOW_TOP_DEFAULT);
    },
    isNotFoundData: !isLoading && dataSector.length === 0,
    isLoading,
    dataSector,
    isVisibleDefaultTop: showComponentTop === SHOW_TOP_DEFAULT,
    isVisibleNewSector: showComponentTop === SHOW_NEW
  };
}
