import { type IDataPage } from "../Common";

export interface IItemTransport {
  id?: number;
  descricao: string;
  placa: string;
  totalDeAssentos: string;
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

export type servicePutTransportProps = IItemTransport;

export interface serviceDeleteTransportProps {
  id: number;
}
