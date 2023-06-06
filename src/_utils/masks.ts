import { type formatDataStartEndProps } from "@/_types/Common";
import moment from "moment";

export function regexOnlyNumber(value: string): string {
  return value.replace(/\D/g, "");
}

export function regexCPF(value: string): string {
  const cpf = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(.\d{3})(\d)/, "$1.$2")
    .replace(/(.\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d/, "$1");
  return cpf;
}

export function regexPhone(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)/, "($1")
    .replace(/(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d/, "$1");
}

export function regexDate(value: string): string {
  const date = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
  return date;
}

export function formatDateToBack(value: string): string {
  const formated = `${value.slice(6, 10)}-${value.slice(3, 5)}-${value.slice(
    0,
    2
  )}`;
  return formated;
}

export function checkValidDate(value: string): boolean {
  const jack = value.split("/");
  const day = parseInt(jack[0], 10);
  const month = parseInt(jack[1], 10);
  const year = parseInt(jack[2], 10);
  const date = new Date(year, month - 1, day);
  const dayValidate = date.getDate() === day;
  const monthValidate = date.getMonth() === month - 1;
  const yearValidate = date.getFullYear() === year;
  const isValidDate = dayValidate && monthValidate && yearValidate;
  return isValidDate;
}

export function validFutureDate(value: string): boolean {
  const currentDate = moment().startOf("day");
  const providedDate = moment(value, "DD/MM/YYYY").startOf("day");
  const isValid = providedDate.isSameOrAfter(currentDate);
  return isValid;
}

export function formatDataStartEnd({
  start,
  end
}: formatDataStartEndProps): string {
  const formatted = `${moment(start).format(
    "DD[/]MM[/]YYYY [de] HH:mm"
  )} às ${moment(end).format("HH:mm")}`;
  return formatted;
}
