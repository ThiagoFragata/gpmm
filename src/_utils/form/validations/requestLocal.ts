import * as yup from "yup";
import { validateFormValues } from "../validateForm";
import { messageValidations } from "./messageValidations";
import { checkValidDate, validFutureDate } from "@/_utils/masks";

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
    idLocal: yup
      .string()
      .required(messageValidations.required)
      .typeError(messageValidations.number),
    event__data: yup
      .string()
      .required(messageValidations.required)
      .min(10, messageValidations.date)
      .test(
        "event__data",
        messageValidations.date,
        (value, { createError, path }) => {
          if (value?.length === 10) {
            if (!validFutureDate(value)) {
              return createError({
                message: messageValidations.dateBefore,
                path
              });
            }
          }
          if (!checkValidDate(value)) {
            return createError({
              message: messageValidations.date,
              path
            });
          }
          return true;
        }
      )
  })
);
