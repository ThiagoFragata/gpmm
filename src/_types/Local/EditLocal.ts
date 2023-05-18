import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemLocal } from "./ServiceLocal";

export interface useEditLocalData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  dataLocal: IItemLocal | undefined;
  onEditLocal: (payload: IItemLocal) => void;
}

export type onEditLocalProps = IItemLocal;
