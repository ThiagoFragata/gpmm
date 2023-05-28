import { type IDataPage } from "../Common";

export interface IItemLocal {
  id?: number;
  descricao: string;
  identificacao: string;
  totalDeAssento: string;
}

export type serviceGetLocalResponse = {
  content: IItemLocal[];
} & IDataPage;

export interface serviceGetLocalProps {
  page: number;
  size: number;
}

export type serviceGetLocalByIdResponse = IItemLocal;

export type servicePostLocalProps = IItemLocal;

export type servicePutLocalProps = IItemLocal;

export interface serviceDeleteLocalProps {
  id: number;
}
