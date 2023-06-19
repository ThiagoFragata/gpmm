import React from "react";
import { ContainerCreateRequestCommunication } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useCreateRequestCommunication } from "./useCreateRequestCommunication";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput,
  TextInputMultiLine
} from "@/Components";
import { Form } from "react-final-form";
import { PATHS } from "@/_utils/constants";
import {
  initialValuesCommunication,
  validateCreateCommunication
} from "@/_utils/form/validations/communication";

export const CreateRequestCommunication: NextPageWithLayout = () => {
  const { breadCrumb, isLoading, onCreateCommunication } =
    useCreateRequestCommunication();

  return (
    <ContainerCreateRequestCommunication>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateCommunication(values);
          }}
          initialValues={initialValuesCommunication}
          validate={validateCreateCommunication}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Assunto *"
                  name="assunto"
                  placeholder="Informe o assunto"
                  disabled={isLoading}
                />
                <TextInputMultiLine
                  label="Mensagem *"
                  name="mensagem"
                  placeholder="Detalhes sobre sua solicitação"
                  disabled={isLoading}
                  classNameContainer="input__menssage"
                />
              </div>
              <div className="form__buttons">
                <Button
                  type="button"
                  variant="ghost"
                  title="Cancelar"
                  disabled={isLoading}
                  navigateTo={PATHS.dashboard.solicitacoesComunicacao}
                />
                <Button type="submit" title="Salvar" disabled={isLoading} />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerCreateRequestCommunication>
  );
};
