import { type IItemSector } from "./serviceSectors";

export interface useListSectorsData {
  onCallTopNew: () => void;
  onCallTopDefault: () => void;
  isNotFoundData: boolean;
  isLoading: boolean;
  dataSector: IItemSector[];
  isVisibleDefaultTop: boolean;
  isVisibleNewSector: boolean;
}

export interface TopNewSectorProps {
  isVisible: boolean;
  isLoading: boolean;
}

export interface TopItemModifier {
  isVisible: boolean;
}
