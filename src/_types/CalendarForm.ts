import { type ISelectedTimes } from "./Common";

export type CalendarFormProps = {
  typeCalendar?: "register" | "edit";
  className?: string;
  reservedHoursDay: string[];
  onSelectHours: (hours: { start: string; end: string } | null) => void;
  disabled: boolean;
} & ISelectedTimes;

export type TimesProps = Pick<
  CalendarFormProps,
  "reservedHoursDay" | "onSelectHours" | "disabled" | "typeCalendar"
> &
  ISelectedTimes;

export type TimesModifier = Pick<CalendarFormProps, "typeCalendar">;

export interface checkStatusTimeData {
  disabledButton: boolean;
  classStatus: string;
  label: string;
}

export type useTimesProps = Pick<
  CalendarFormProps,
  "reservedHoursDay" | "onSelectHours"
> &
  ISelectedTimes;

export interface useTimesData {
  checkStatusTime: (value: string) => checkStatusTimeData;
  onSelectItem: (data: string) => void;
}
