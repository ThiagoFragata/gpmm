import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemDriver } from "./ServiceDriver";

export interface useEditDriverData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  dataDrive: IItemDriver | undefined;
  onEditDrive: (payload: IItemDriver) => void;
}
