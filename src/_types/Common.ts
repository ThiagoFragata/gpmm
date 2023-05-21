export interface IDataPage {
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
}

export interface IDataPagination {
  totalPages: number;
  totalPerPage: number;
  currentPage: number;
}

export interface IRestDataPagination {
  onChangePage: (value: number) => void;
  onChangeSizePage: (value: number) => void;
  dataPagination: IDataPagination;
}

export interface dataDeleteProps {
  name: string;
  id: number;
}
