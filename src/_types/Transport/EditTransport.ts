import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemTransport } from "./serviceTransport";

export interface useEditTransportData {
  onEditTransport: (payload: IItemTransport) => void;
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  initialValues: {
    descricao: string;
    placa: string;
    totalDeAssentos?: number;
  };
}
