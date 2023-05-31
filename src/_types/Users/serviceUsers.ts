import { type IDataPage } from "../Common";

export interface IItemUser {
  id?: number;
  nome: string;
  cpf: string;
  siape: string;
  dataNascimento: string;
  tipoPerfil: string;
  telefone: {
    tipo: string;
    numero: string;
  };
  setor: {
    id: number;
    nome: string;
  };
  email: string;
  codigoAtivacao?: string;
  status?:
    | "PENDENTE_ATIVACAO_USUARIO"
    | "PENDENTE_ATIVACAO_ADMIN"
    | "DESATIVADA"
    | "ATIVADA";
  motorista: {
    numeroCnh?: string;
  };
}

export type IItemUserRegister = {
  telefone: string;
  setor: number;
} & Pick<
  IItemUser,
  "nome" | "cpf" | "siape" | "dataNascimento" | "tipoPerfil" | "email"
>;

export type serviceGetUserResponse = {
  content: IItemUser[];
} & IDataPage;

export interface serviceGetUsersProps {
  page: number;
  size: number;
}

export type serviceGetUserByIdResponse = IItemUser;

export type servicePostUserProps = IItemUserRegister;

export type servicePutUserProps = IItemUser;

export interface serviceDeleteUserProps {
  id: number;
}
