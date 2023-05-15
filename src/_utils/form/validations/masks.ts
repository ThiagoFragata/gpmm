// export function maskDocument(value: string) {
//   const isCPNPJ = value.length > 14;
//   if (isCPNPJ) {
//     return value
//       .replace(/\D/g, "")
//       .replace(/(\d{2})(\d)/, "$1.$2")
//       .replace(/(.\d{3})(\d)/, "$1.$2")
//       .replace(/(.\d{3})(\d)/, "$1/$2")
//       .replace(/(.\d{4})(\d)/, "$1-$2")
//       .replace(/(-\d{2})(\d)/, "$1");
//   }
//   const cpf = value
//     .replace(/\D/g, "")
//     .replace(/(\d{3})(\d)/, "$1.$2")
//     .replace(/(.\d{3})(\d)/, "$1.$2")
//     .replace(/(.\d{3})(\d)/, "$1-$2")
//     .replace(/(-\d{2})\d/, "$1");

//   return cpf;
// }

export function maskPhone(value: string): string {
  const formated = value
    .replace(/\D/g, "")
    .replace(/(\d)/, "($1")
    .replace(/(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d/, "$1");
  return formated;
}

export function formOnlyNumber(value: string): string {
  const formated = value.replace(/\D/g, "");
  return formated;
}
