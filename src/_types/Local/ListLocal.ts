import { type tableItems } from "../Table";
import { type IItemLocal } from "./ServiceLocal";

export interface useListLocalData {
  dataLocal: IItemLocal[];
  tableTitle: tableItems[];
  isLoading: boolean;
}
