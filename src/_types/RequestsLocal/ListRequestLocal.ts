import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import { type tableItems } from "../Table";
import { type IItemRequestLocal } from "./ServiceRequestLocal";

export interface formatDataStartEndProps {
  start: string;
  end: string;
}

export type IShowRequestLocal = { data_evento: string } & Pick<
  IItemRequestLocal,
  | "solicitante"
  | "externo"
  | "telefone"
  | "cpf"
  | "siape"
  | "autorizacao"
  | "identificacao"
  | "local"
  | "finalidade"
  | "data_solicitacao"
>;

export type useListRequestLocalData = {
  dataRequestLocal: IItemRequestLocal[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenShowDetails: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  dataShowRequestLocal: IShowRequestLocal;
  onGetDataShowDetails: (value: IItemRequestLocal) => void;
  formatDataStartEnd: (value: formatDataStartEndProps) => string;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
  onHandlerDialogModal: () => void;
  onGetDataDelete: (data: dataDeleteProps) => void;
  onConfirmDelete: () => void;
  onCloseDetails: () => void;
} & IRestDataPagination;

export interface ShowDetailsRequestLocalProps {
  isOpen: boolean;
  data: IShowRequestLocal;
  onClose: () => void;
}
