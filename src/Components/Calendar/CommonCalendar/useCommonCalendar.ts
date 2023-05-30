import { type useCommonCalendarData } from "@/_types/CommonCalendar";
import { NAME_DAYS } from "@/_utils/constants";

export function useCommonCalendar(): useCommonCalendarData {
  const nameDays = NAME_DAYS.short;
  const nameMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  return {
    nameDays,
    nameMonths
  };
}
