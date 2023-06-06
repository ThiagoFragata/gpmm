import { type Decorator } from "final-form";
import { type itemBreadCrumb } from "../BreadCrumb";
import { type ISelectedTimes } from "../Common";

export interface IDataFormRequestLocal {
  idLocal?: string;
  finalidade: string;
  is__external: boolean;
  externo?: string;
  event__data: string;
  hours: { start: string; end: string } | null;
}

export type useCreateRequestLocalData = {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  reservedHoursDay: string[];
  disabledCalendarForm: boolean;
  dataLocal: Array<{
    id: number;
    name: string;
  }>;
  onCreateRequestLocal: (data: IDataFormRequestLocal) => Promise<void>;
  onGetRequestsDay: (value: string) => Promise<void>;
  focusOnError: Decorator<
    IDataFormRequestLocal,
    Partial<IDataFormRequestLocal>
  >;
} & ISelectedTimes;
