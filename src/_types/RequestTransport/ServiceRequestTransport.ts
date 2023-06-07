import { type IDataPage } from "../Common";
import { type typeStatusRequest } from "../StatusRequest";

export interface IItemRequestTransport {
  id: number;
  destino: string;
  saida: string;
  motorista: {
    numeroCnh: string;
    id: number;
  };
  solicitacao: {
    id: number;
    dataInicio: string;
    dataFinal: string;
    finalidade: string;
    dataSolicitacao: string;
    dataRetirada?: string;
    dataDevolucao?: string;
    externo?: string;
    autorizacao: typeStatusRequest;
    justificativa?: string;
    solicitante: {
      id: number;
      nome: string;
      siape: string;
      tipoPerfil: string;
      telefone: {
        tipo: string;
        numero: string;
      };
      email: string;
      status: string;
      motorista: {
        numeroCnh: string;
      };
    };
  };
  transporte: {
    id: number;
    descricao: string;
    placa: string;
    totalDeAssentos: number;
  };
  passageiros: Array<{
    id: number;
    nome: string;
    cpf: string;
  }>;
}

export type serviceGetRequestTransportResponse = {
  content: IItemRequestTransport[];
} & IDataPage;

export interface serviceGetRequestTransportProps {
  page: number;
  size: number;
}

export interface servicePostrequestTransportProps {
  idPessoa: string;
  dataInicio: string;
  dataFinal: string;
  idMotorista: string;
  idTransporte: string;
  finalidade: string;
  saida: string;
  destino: string;
  passageiros:
    | Array<{
        nome: string;
        cpf: string;
      }>
    | [];
}
