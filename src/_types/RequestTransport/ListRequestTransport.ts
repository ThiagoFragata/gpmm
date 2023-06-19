import { type dataDeleteProps, type IRestDataPagination } from "../Common";
import { type tableItems } from "../Table";
import { type IItemRequestTransport } from "./ServiceRequestTransport";

export interface IShowRequestTransport {
  shouldRenderJustify: boolean;
  autorizacao: string;
  externo: string;
  nome: string;
  siape: string;
  telefone: string;
  email: string;
  data_evento: string;
  finalidade: string;
  data_solicitacao: string;
  justificativa: string;
  destino: string;
  saida: string;
  motorista: string;
  nome_motorista: string;
  veiculo: string;
  passageiros: Array<{
    nome: string;
    cpf: string;
  }>;
}

export type useListRequestTransportData = {
  dataRequestTransport: IItemRequestTransport[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenShowDetails: boolean;
  shouldRenderEditOption: boolean;
  dataShowRequestTransport: IShowRequestTransport;
  onGetDataShowDetails: (data: IItemRequestTransport) => void;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
  onCloseDetails: () => void;
} & IRestDataPagination;

export interface getListDataProps {
  sizePage?: number;
  page?: number;
}

export type onGetDataDeleteProps = dataDeleteProps;

export interface ShowDetailsRequestTransportProps {
  isOpen: boolean;
  data: IShowRequestTransport;
  onClose: () => void;
}
