import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const validateEmailFirstAccess = validateFormValues(
  yup.object({
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);

export const validateCodeFirstAccess = validateFormValues(
  yup.object({
    codigo: yup
      .number()
      .required(messageValidations.required)
      .typeError(messageValidations.number)
      .min(7, messageValidations.minSize({ name: "O campo", size: 6 })),
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);
