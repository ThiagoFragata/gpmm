import type { itemBreadCrumb } from "../BreadCrumb";
import { type IItemUser } from "./serviceUsers";

export interface useCreateUserData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  onCreateUser: (payload: IItemUser) => void;
}

export type onCreateUserProps = IItemUser;
