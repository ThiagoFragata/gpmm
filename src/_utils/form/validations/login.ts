import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";

export const initialValuesLogin = {
  user_name: "",
  password: ""
};

export const validateLogin = validateFormValues(
  yup.object({
    user_name: yup.string().required(messageValidations.required),
    password: yup.string().required(messageValidations.required)
  })
);
