import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemTransport } from "./serviceTransport";

export interface useCreateTransportData {
  onCreateTransport: (payload: IItemTransport) => void;
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
}

export type onCreateTransportProps = IItemTransport;
