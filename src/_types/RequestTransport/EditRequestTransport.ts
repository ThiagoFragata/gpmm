import { type itemBreadCrumb } from "../BreadCrumb";

export interface onSendAuthorizationProps {
  isAuthorized: boolean;
  justificativa?: string;
}

export interface IShowData {
  motorista: string;
  finalidade: string;
  transporte: string;
  solicitante: string;
  saida: string;
  justificativa?: string;
  destino: string;
  isAuthorized: boolean;
  isDenied: boolean;
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
  onSendAuthorization: (data: onSendAuthorizationProps) => Promise<void>;
}
