import { type IDataPage } from "../Common";

export interface IItemTransport {
  id?: number;
  descricao: string;
  placa: string;
  totalDeAssentos: number;
}

export type serviceGetTransportResponse = {
  content: IItemTransport[];
} & IDataPage;

export interface serviceGetTransportProps {
  page: number;
  size: number;
}

export type serviceGetTransportByIdResponse = IItemTransport;

export type servicePostTransportProps = IItemTransport;

export interface servicePutTransportProps {
  id: number;
  descricao: string;
  identificacao: string;
  totalDeAssento?: number;
}

export interface serviceDeleteTransportProps {
  id: number;
}
