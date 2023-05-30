import type { itemBreadCrumb } from "../BreadCrumb";
import { type IItemUserRegister } from "./serviceUsers";

export interface useCreateUserData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
  onCreateUser: (payload: IItemUserRegister) => void;
}

export type onCreateUserProps = IItemUserRegister;
