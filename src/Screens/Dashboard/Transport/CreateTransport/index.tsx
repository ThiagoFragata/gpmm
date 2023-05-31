import React from "react";
import { ContainerCreateTransport } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useCreateTransport } from "./useCreateTransport";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
import { Form } from "react-final-form";
import {
  initialValuesTransport,
  validateCreateTransport
} from "@/_utils/form/validations/transports";
import { PATHS } from "@/_utils/constants";
import { regexOnlyNumber } from "@/_utils/masks";

export const CreateTransport: NextPageWithLayout = () => {
  const { onCreateTransport, isLoading, breadCrumb } = useCreateTransport();
  return (
    <ContainerCreateTransport>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateTransport(values);
          }}
          initialValues={initialValuesTransport}
          validate={validateCreateTransport}
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
                <Button type="submit" title="Salvar" disabled={isLoading} />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerCreateTransport>
  );
};
