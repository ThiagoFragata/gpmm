import type { itemBreadCrumb } from "../BreadCrumb";
import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import type { tableItems } from "../Table";
import { type IItemUser } from "./serviceUsers";

export type useListUsersData = {
  dataUsers: IItemUser[];
  breadCrumb: itemBreadCrumb[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  onTryAgainGetData: () => void;
} & IRestDataPagination;
