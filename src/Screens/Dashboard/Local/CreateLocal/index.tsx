import React from "react";
import { ContainerCreateLocal } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
import { useCreateLocal } from "./useCreateLocal";
import { Form } from "react-final-form";
import { PATHS } from "@/_utils/constants";
import {
  initialValuesLocal,
  validateCreateLocal
} from "@/_utils/form/validations/local";
import { regexOnlyNumber } from "@/_utils/masks";

export const CreateLocal: NextPageWithLayout = () => {
  const { onCreateLocal, breadCrumb, isLoading } = useCreateLocal();

  return (
    <ContainerCreateLocal>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateLocal(values);
          }}
          initialValues={initialValuesLocal}
          validate={validateCreateLocal}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Descrição *"
                  name="descricao"
                  placeholder="Informe a descrição"
                  disabled={isLoading}
                />
                <TextInput
                  label="Identificação *"
                  name="identificacao"
                  placeholder="Informe a identificação"
                  disabled={isLoading}
                  className="login__password"
                />
                <TextInput
                  label="Número de assentos *"
                  name="totalDeAssento"
                  placeholder="Informe o número de assentos"
                  disabled={isLoading}
                  className="login__password"
                  type="number"
                  parse={regexOnlyNumber}
                />
              </div>
              <div className="form__buttons">
                <Button
                  type="button"
                  variant="ghost"
                  title="Cancelar"
                  disabled={isLoading}
                  navigateTo={PATHS.dashboard.recursosLocais}
                />
                <Button type="submit" title="Salvar" disabled={isLoading} />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerCreateLocal>
  );
};
