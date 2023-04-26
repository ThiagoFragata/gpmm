import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesForgotPassword = {
  email: ""
};

export const validateForgotPassword = validateFormValues(
  yup.object({
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);
