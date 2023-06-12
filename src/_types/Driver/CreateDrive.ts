import { type itemBreadCrumb } from "../BreadCrumb";
import { type IItemDriver } from "./ServiceDriver";

export interface useCreateDriveData {
  onCreateDriver: (payload: IItemDriver) => void;
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
}
