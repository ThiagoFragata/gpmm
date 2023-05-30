export const messageValidations = {
  email: "Formato de e-mail inválido.",
  required: "Este campo é obrigatório.",
  confirmPassword: "A confirmação da senha está incorreta.",
  number: "Número inválido.",
  sector: "O setor é obrigatório.",
  date: "Formato de data inválido.",
  maxSize: ({ name, size }: { name: string; size: number }) =>
    `${name} pode ter no máximo ${size} caracteres.`
};
