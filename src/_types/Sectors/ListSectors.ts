import { type FormApi } from "final-form";
import { type dataDeleteProps } from "../Common";
import { type tableItems } from "../Table";
import { type IItemSector } from "./serviceSectors";

interface fieldsForm {
  set_item: boolean;
  nome: string;
}

export interface createSector extends fieldsForm {
  form: FormApi<any, fieldsForm>;
}

export interface useListSectorsData {
  onCallTopNew: () => void;
  onCallTopDefault: () => void;
  onHandlerDialogModal: () => void;
  onGetDataDelete: (data: dataDeleteProps) => void;
  onConfirmDelete: () => void;
  onCreateSector: (data: createSector) => void;
  isNotFoundData: boolean;
  isLoading: boolean;
  dataSector: IItemSector[];
  isVisibleDefaultTop: boolean;
  isVisibleNewSector: boolean;
  tableTitle: tableItems[];
  isOpenModalDialog: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
}

export type TopNewSectorProps = {
  isVisible: boolean;
} & Pick<useListSectorsData, "onCreateSector" | "isLoading">;

export interface TopItemModifier {
  isVisible: boolean;
}

export type ListProps = Pick<
  useListSectorsData,
  | "dataSector"
  | "isNotFoundData"
  | "isLoading"
  | "tableTitle"
  | "isAwaitDelete"
  | "onGetDataDelete"
>;

export type onCreateSectorProps = createSector;
