import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesFirstAccess = {
  email: ""
};

export const validateFirstAccess = validateFormValues(
  yup.object({
    email: yup
      .string()
      .email(messageValidations.email)
      .required(messageValidations.required)
  })
);
