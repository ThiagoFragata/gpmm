import React from "react";
import { ContainerEditTransport } from "./style";
import { useEditTransport } from "./useEditTransport";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
import { type NextPageWithLayout } from "@/pages/_app";
import { Form } from "react-final-form";
import { validateEditTransport } from "@/_utils/form/validations/transports";
import { regexOnlyNumber } from "@/_utils/masks";
import { PATHS } from "@/_utils/constants";

export const EditTransport: NextPageWithLayout = () => {
  const { onEditTransport, breadCrumb, isLoading, initialValues } =
    useEditTransport();
  return (
    <ContainerEditTransport>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onEditTransport(values);
          }}
          initialValues={initialValues}
          validate={validateEditTransport}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Descrição *"
                  name="descricao"
                  placeholder="Informe a descrição"
                  disabled={isLoading}
                />
                <TextInput
                  label="Placa *"
                  name="placa"
                  placeholder="Informe a placa do veículo"
                  disabled={isLoading}
                  className="login__password"
                />
                <TextInput
                  label="Número de assentos *"
                  name="totalDeAssentos"
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
                  navigateTo={PATHS.dashboard.recursosTransportes}
                />
                <Button
                  type="submit"
                  variant="light"
                  title="Atualizar"
                  disabled={isLoading || pristine}
                />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerEditTransport>
  );
};
