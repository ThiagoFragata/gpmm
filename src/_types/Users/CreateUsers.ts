import type { itemBreadCrumb } from "../BreadCrumb";

export interface useCreateUserData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  isShowSectors: boolean;
  onOpenListSectors: () => void;
  onCloseListSectors: () => void;
}
