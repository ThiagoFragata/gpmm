import { type dataDeleteProps, type IRestDataPagination } from "../Common";
import { type tableItems } from "../Table";
import { type IItemRequestTransport } from "./ServiceRequestTransport";

export type useListRequestTransportData = {
  dataRequestTransport: IItemRequestTransport[];
  tableTitle: tableItems[];
  isLoading: boolean;
  isNotFoundData: boolean;
  onSendToEdit: (id: number) => void;
  onTryAgainGetData: () => void;
} & IRestDataPagination;

export interface getListDataProps {
  sizePage?: number;
  page?: number;
}

export type onGetDataDeleteProps = dataDeleteProps;
