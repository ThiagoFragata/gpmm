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
  | "ATIVADA"
  | "unknow";

export type IDataFormUser = {
  id?: number;
  auth__drive: boolean;
  numeroCnh?: string;
  label_setor?: string;
  tipoPerfil: number;
} & IItemUserRegister;

export interface IDataServeError {
  response: {
    status: number;
    data: {
      timestamp: string;
      message?: string;
      errors: string[];
    };
  };
}

export interface getOnlyRequestDayProps {
  informedDay: string;
  times: Array<{
    data_final: string;
    data_inicio: string;
  }>;
}

export interface ISelectedTimes {
  setSelectedTimes: (value: string[]) => void;
  selectedTimes: string[];
}

export interface formatDataStartEndProps {
  start: string;
  end: string;
}

export type IDataInputSelect = Array<{
  id: number;
  name: string;
}>;

export type IDataInputSelectTransport = Array<{
  id: number;
  name: string;
  totalDeAssentos: number;
}>;

export interface ApiTokenData {
  headers: {
    Authorization: string;
  };
}
