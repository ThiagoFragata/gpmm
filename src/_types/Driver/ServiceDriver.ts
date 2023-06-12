import { type IDataPage } from "../Common";

export interface IItemDriver {
  id?: number;
  nome: string;
  numero_cnh: string;
}

export type serviceGetDriverResponse = {
  content: IItemDriver[];
} & IDataPage;

export interface serviceGetDriverProps {
  page: number;
  size: number;
}
