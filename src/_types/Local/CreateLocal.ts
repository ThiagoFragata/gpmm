import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemLocal } from "./ServiceLocal";

export interface useCreateLocalData {
  onCreateLocal: (payload: IItemLocal) => void;
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
}

export type onCreateLocalProps = IItemLocal;
