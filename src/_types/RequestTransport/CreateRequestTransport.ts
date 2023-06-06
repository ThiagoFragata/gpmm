import { type Decorator } from "final-form";
import { type itemBreadCrumb } from "../BreadCrumb";
import { type IDataInputSelect, type ISelectedTimes } from "../Common";

export interface IDataFormRequestTransport {
  idMotorista?: string;
  idTransporte?: string;
  finalidade: string;
  passageiros: string;
  // dataInicio: string;
  // dataFinal: string;
  saida: string;
  destino: string;
  event__data: string;
  hours: { start: string; end: string } | null;
}

export type useCreateRequestTransportData = {
  breadCrumb: itemBreadCrumb[];
  isLoading: boolean;
  reservedHoursDay: string[];
  disabledCalendarForm: boolean;
  dataTransport: IDataInputSelect;
  dataDriver: IDataInputSelect;
  // dataTransport: Array<{
  //   id: number;
  //   name: string;
  // }>;
  // onCreateRequestTransport: (data: IDataFormRequestLocal) => Promise<void>;
  // onGetRequestsDay: (value: string) => Promise<void>;
  getVacanciesTransportSelected: (id?: string) => number;
  focusOnError: Decorator<
    IDataFormRequestTransport,
    Partial<IDataFormRequestTransport>
  >;
} & ISelectedTimes;
