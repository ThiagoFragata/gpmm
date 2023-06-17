import { type Decorator } from "final-form";

export interface IDataFormPublicUser {
  nome: string;
  cpf: string;
  siape: string;
  dataNascimento: string;
  telefone: string;
  setor: number;
  label_setor?: string;
  email: string;
  senha: string;
}

export interface RegisterUserData {
  focusOnError: Decorator<IDataFormPublicUser, Partial<IDataFormPublicUser>>;
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  onCreateUser: (payload: IDataFormPublicUser) => Promise<void>;
}
