import { type tableItems } from "../Table";
import { type IItemLocal } from "./ServiceLocal";

export interface dataDeleteProps {
  name: string;
  id: number;
}

export interface useListLocalData {
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
}

export type onGetDataDeleteProps = dataDeleteProps;
