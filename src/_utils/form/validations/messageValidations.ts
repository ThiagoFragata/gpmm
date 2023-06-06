export const messageValidations = {
  email: "Formato de e-mail inválido.",
  required: "Este campo é obrigatório.",
  confirmPassword: "A confirmação da senha está incorreta.",
  number: "Número inválido.",
  sector: "O setor é obrigatório.",
  date: "Formato de data inválido.",
  dateBefore: "Informe uma data no futuro.",
  phone: "Formato de telefone inválido.",
  document: "Formato de documento inválido.",
  maxSize: ({ name, size }: { name: string; size: number }) =>
    `${name} pode ter no máximo ${size} caracteres.`,
  minSize: ({ name, size }: { name: string; size: number }) =>
    `${name} deve ter no mínimo ${size} caracteres.`
};
