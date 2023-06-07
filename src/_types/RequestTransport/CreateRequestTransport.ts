import { type Decorator } from "final-form";
import { type itemBreadCrumb } from "../BreadCrumb";
import { type IDataInputSelect, type ISelectedTimes } from "../Common";

export type IDataFormRequestTransport = {
  finalidade: string;
  saida: string;
  destino: string;
  idMotorista: string;
  idTransporte: string;
  event__data: string;
  hours: { start: string; end: string } | null;
} & Record<string, string>;

export type useCreateRequestTransportData = {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  reservedHoursDay: string[];
  disabledCalendarForm: boolean;
  dataTransport: IDataInputSelect;
  dataDriver: IDataInputSelect;
  onGetRequestsDay: (value: string) => Promise<void>;
  onCreateRequestTransport: (data: IDataFormRequestTransport) => Promise<void>;
  getVacanciesTransportSelected: (id?: string) => number;
  focusOnError: Decorator<
    IDataFormRequestTransport,
    Partial<IDataFormRequestTransport>
  >;
} & ISelectedTimes;
