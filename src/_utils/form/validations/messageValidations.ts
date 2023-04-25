export const messageValidations = {
  email: "Formato inválido.",
  required: "Este campo é obrigatório.",
  confirmPassword: "A confirmação da senha está incorreta.",
  number: "Número inválido.",
  maxSize: ({ name, size }: { name: string; size: number }) =>
    `${name} pode ter no máximo ${size} caracteres`
};
