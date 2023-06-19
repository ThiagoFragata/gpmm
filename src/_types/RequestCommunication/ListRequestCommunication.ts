import { type IRestDataPagination } from "../Common";
import { type tableItems } from "../Table";
import { type IItemCommunicatoin } from "./ServiceRequestCommunication";

export type useListRequestCommunicationData = {
  tableTitle: tableItems[];
  dataCommunication: IItemCommunicatoin[];
  isNotFoundData: boolean;
  isLoading: boolean;
  // isAdmin: boolean;
  onTryAgainGetData: () => void;
} & IRestDataPagination;
