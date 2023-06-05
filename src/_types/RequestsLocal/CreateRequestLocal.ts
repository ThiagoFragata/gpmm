import { type itemBreadCrumb } from "../BreadCrumb";

export interface useCreateRequestLocalData {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  reservedHoursDay: string[];
  onGetRequestsDay: (value: string) => Promise<void>;
  //   onCreateRequestLocal: (payload: IDataFormUser) => void;
  // focusOnError: Decorator<IDataFormUser, Partial<IDataFormUser>>;
}
