import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import { type tableItems } from "../Table";
import { type IItemTransport } from "./serviceTransport";

export type useListTransportData = {
  dataTransport: IItemTransport[];
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

export type onGetDataDeleteProps = dataDeleteProps;
