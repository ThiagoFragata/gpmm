import { type IDataPage } from "../Common";
import { type IItemUser } from "../Users/serviceUsers";

export interface IItemCommunicatoin {
  id?: number;
  assunto: string;
  mensagem: string;
  dataEnvio: string;
  status: string;
  pessoa: IItemUser;
}

export type serviceGetCommunicationResponse = {
  content: IItemCommunicatoin[];
} & IDataPage;

export interface serviceGetCommunicationProps {
  page: number;
  size: number;
}

export interface servicePostCommunicationProps {
  pessoaId: number;
  assunto: string;
  mensagem: string;
}
