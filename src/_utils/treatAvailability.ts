import { type getOnlyRequestDayProps } from "@/_types/Common";
import moment from "moment";

export function getOnlyRequestDay({
  informedDay,
  times
}: getOnlyRequestDayProps): string[] {
  const filterOnlyDay = times.filter(
    time => moment(time?.data_inicio).format("DD[/]MM[/]YYYY") === informedDay
  );
  let hoursInUse: string[] = [];
  for (let i = 0; i <= filterOnlyDay.length - 1; i++) {
    const formatted = getDivision30Minutes({
      start: filterOnlyDay[i].data_inicio,
      end: filterOnlyDay[i].data_final
    });
    hoursInUse = hoursInUse.concat(formatted);
  }
  return hoursInUse;
}

export function getDivision30Minutes({
  start,
  end
}: {
  start: string;
  end: string;
}): string[] {
  const _end: Date = new Date(end);

  const interval = 30;
  const formattedHours: string[] = [];

  for (
    let _start = new Date(start);
    // eslint-disable-next-line no-unmodified-loop-condition
    _start <= _end;
    _start.setMinutes(_start.getMinutes() + interval)
  ) {
    const horaFormatada: string = _start.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    formattedHours.push(horaFormatada);
  }
  return formattedHours;
}
