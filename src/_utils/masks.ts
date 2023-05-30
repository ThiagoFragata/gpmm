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
