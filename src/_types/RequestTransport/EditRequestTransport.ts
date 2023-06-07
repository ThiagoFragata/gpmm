import { type itemBreadCrumb } from "../BreadCrumb";

export interface IShowData {
  motorista: string;
  finalidade: string;
  transporte: string;
  saida: string;
  destino: string;
  passageiros:
    | Array<{
        id: number;
        nome: string;
        cpf: string;
      }>
    | [];
  dataEvento: string;
}

export interface useEditRequestTransportData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  reservedHoursDay: string[];
  showData: IShowData;
}
