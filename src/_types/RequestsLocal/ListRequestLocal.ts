import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import { type tableItems } from "../Table";
import { type IItemRequestLocal } from "./ServiceRequestLocal";

export interface formatDataStartEndProps {
  start: string;
  end: string;
}

export type useListRequestLocalData = {
  dataRequestLocal: IItemRequestLocal[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  formatDataStartEnd: (value: formatDataStartEndProps) => string;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
  onHandlerDialogModal: () => void;
  onGetDataDelete: (data: dataDeleteProps) => void;
  onConfirmDelete: () => void;
} & IRestDataPagination;
