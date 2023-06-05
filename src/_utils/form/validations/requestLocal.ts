import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";
import { checkValidDate } from "@/_utils/masks";

export const initialValuesRequestLocal = {
  finalidade: "",
  is__external: false,
  externo: ""
};

export const validateRequestLocal = validateFormValues(
  yup.object({
    finalidade: yup.string().required(messageValidations.required),
    is__external: yup.bool(),
    externo: yup.string().when("is__external", {
      is: true,
      then: schema => schema.required(messageValidations.required)
    }),
    event__data: yup
      .string()
      .required(messageValidations.required)
      .min(10, messageValidations.date)
      .test("event__data", messageValidations.date, value =>
        checkValidDate(value)
      )
  })
);
