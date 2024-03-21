import { type Dispatch } from "react";
import { type IRestDataPagination } from "../Common";
import { type tableItems } from "../Table";
import { type IItemCommunicatoin } from "./ServiceRequestCommunication";

export type useListRequestCommunicationData = {
  tableTitle: tableItems[];
  dataCommunication: IItemCommunicatoin[];
  isNotFoundData: boolean;
  isLoading: boolean;
  setSort: Dispatch<React.SetStateAction<string>>;
  // isAdmin: boolean;
  onTryAgainGetData: () => void;
} & IRestDataPagination;
