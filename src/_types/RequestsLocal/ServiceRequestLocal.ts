import { type IDataPage } from "../Common";

export interface IItemRequestLocal {
  data_solicitacao: string;
  local_id: number;
  total_de_assento: string;
  finalidade: string;
  data_inicio: string;
  autorizacao: string;
  identificacao: string;
  data_final: string;
  solicitante: string;
  solicitacao_id: number;
  telefone: string;
  solicitante_id: number;
  externo?: null | string;
  local: string;
  cpf: string;
  siape: string;
}

export type serviceGetRequestLocalResponse = {
  content: IItemRequestLocal[];
} & IDataPage;

export interface serviceGetRequestLocalProps {
  page: number;
  size: number;
}

export type serviceGetRequestLocalByIdResponse = IItemRequestLocal;

export interface servicePostRequestLocalProps {
  idPessoa?: string;
  dataInicio?: string;
  dataFinal?: string;
  finalidade?: string;
  idLocal?: string;
  externo?: string;
}

export type servicePutRequestLocalProps = IItemRequestLocal;

export interface serviceDeleteRequestLocalProps {
  id: number;
}
