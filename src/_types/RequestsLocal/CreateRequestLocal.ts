import { type Decorator } from "final-form";
import { type itemBreadCrumb } from "../BreadCrumb";
import { type ISelectedTimes } from "../Common";

export interface IDataFormRequestLocal {
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
  onCreateRequestLocal: (data: IDataFormRequestLocal) => Promise<void>;
  onGetRequestsDay: (value: string) => Promise<void>;
  focusOnError: Decorator<
    IDataFormRequestLocal,
    Partial<IDataFormRequestLocal>
  >;
} & ISelectedTimes;
