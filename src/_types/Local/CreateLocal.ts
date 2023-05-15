import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemLocal } from "./ServiceLocal";

export interface useCreateLocalData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  onCreateLocal: (payload: IItemLocal) => void;
}

export type onCreateLocalProps = IItemLocal;
