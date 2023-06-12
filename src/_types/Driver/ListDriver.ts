import { type IRestDataPagination, type dataDeleteProps } from "../Common";
import { type tableItems } from "../Table";
import { type IItemDriver } from "./ServiceDriver";

export type useListDriverData = {
  dataDriver: IItemDriver[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  isOpenModal: boolean;
  dataDelete: dataDeleteProps;
  isAwaitDelete: boolean;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
} & IRestDataPagination;
