import { type IDataPagination } from "./Common";

export interface FooterDataProps {
  onChangePage: (value: number) => void;
  onChangeSizePage: (value: number) => void;
  data: IDataPagination;
}
