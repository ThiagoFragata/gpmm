import { type itemBreadCrumb } from "../BreadCrumb";

export interface IDataCreateCommunication {
  assunto: string;
  mensagem: string;
}

export interface useCreateRequestCommunicationData {
  onCreateCommunication: (payload: IDataCreateCommunication) => Promise<void>;
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
}
