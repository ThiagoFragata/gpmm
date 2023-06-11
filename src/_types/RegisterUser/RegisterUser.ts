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
}

export interface RegisterUserData {
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  focusOnError: Decorator<IDataFormPublicUser, Partial<IDataFormPublicUser>>;
}
