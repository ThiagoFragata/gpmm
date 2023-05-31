import type { itemBreadCrumb } from "../BreadCrumb";
import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import type { tableItems } from "../Table";
import { type IItemUser } from "./serviceUsers";
export type IDataShowUser = {
  firstName: string;
} & IItemUser;

export type useListUsersData = {
  dataUsers: IItemUser[];
  breadCrumb: itemBreadCrumb[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  dataShowUser: IDataShowUser;
  isOpenShowDetails: boolean;
  onCloseDetails: () => void;
  onTryAgainGetData: () => void;
  onGetDataShowDetails: (value: IItemUser) => void;
  onSendToEdit: (value: number) => void;
} & IRestDataPagination;
export interface ShowDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  data: IDataShowUser;
}

export type onGetDataShowDetailsProps = IItemUser;
