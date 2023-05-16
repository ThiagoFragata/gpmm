import React from "react";
import { ContainerEditLocal } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
// import { useCreateLocal } from "./useCreateLocal";
import { Form } from "react-final-form";
import { PATHS } from "@/_utils/constants";
import {
  initialValuesLocal,
  validateCreateLocal
} from "@/_utils/form/validations/local";
import { formOnlyNumber } from "@/_utils/form/validations/masks";

export function EditLocal(): JSX.Element {
  return (
    <ContainerEditLocal>
      <h1>EditLocal</h1>
    </ContainerEditLocal>
  );
}
