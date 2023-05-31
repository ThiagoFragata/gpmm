import { type IItemUserRegister } from "./Users/serviceUsers";

export interface IDataPage {
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
}

export interface IDataPagination {
  totalPages: number;
  totalPerPage: number;
  currentPage: number;
}

export interface IRestDataPagination {
  onChangePage: (value: number) => void;
  onChangeSizePage: (value: number) => void;
  dataPagination: IDataPagination;
}

export interface dataDeleteProps {
  name: string;
  id: number;
}

export type typeStringStatus =
  | "PENDENTE_ATIVACAO_USUARIO"
  | "PENDENTE_ATIVACAO_ADMIN"
  | "DESATIVADA"
  | "ATIVADA";

export type IDataFormUser = {
  auth__drive: boolean;
  numeroCnh?: string;
} & IItemUserRegister;
