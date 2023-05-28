import { type dataDeleteProps, type IRestDataPagination } from "../Common";
import { type tableItems } from "../Table";
import { type IItemLocal } from "./ServiceLocal";

export type useListLocalData = {
  dataLocal: IItemLocal[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
  onHandlerDialogModal: () => void;
  onGetDataDelete: (data: dataDeleteProps) => void;
  onConfirmDelete: () => void;
} & IRestDataPagination;

export interface getListDataProps {
  sizePage?: number;
  page?: number;
}

export type onGetDataDeleteProps = dataDeleteProps;
