import { type Decorator } from "final-form";
import type { itemBreadCrumb } from "../BreadCrumb";
import { type IDataFormUser } from "../Common";

export interface useEditUserData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  isShowSectors: boolean;
  dataUser: IDataFormUser;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  onEditUser: (payload: IDataFormUser) => void;
  focusOnError: Decorator<IDataFormUser, Partial<IDataFormUser>>;
  idUser: number;
}

export type onEditUserProps = IDataFormUser;
