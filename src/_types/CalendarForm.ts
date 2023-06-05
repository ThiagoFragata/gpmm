export interface CalendarFormProps {
  className?: string;
  reservedHoursDay: string[];
}

export type TimesProps = Pick<CalendarFormProps, "reservedHoursDay">;

export interface checkStatusTimeData {
  disabledButton: boolean;
  classStatus: string;
  label: string;
}

export type useTimesProps = Pick<CalendarFormProps, "reservedHoursDay">;

export interface useTimesData {
  checkStatusTime: (value: string) => checkStatusTimeData;
  onSelectItem: (data: string) => void;
}
