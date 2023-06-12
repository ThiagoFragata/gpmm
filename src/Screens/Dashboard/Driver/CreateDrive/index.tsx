import React from "react";
import { ContainerCreateDrive } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useCreateDrive } from "./useCreateDrive";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
import { Form } from "react-final-form";
import {
  initialValuesDrive,
  validateCreateDrive
} from "@/_utils/form/validations/drive";
import { regexOnlyNumber } from "@/_utils/masks";
import { PATHS } from "@/_utils/constants";

export const CreateDrive: NextPageWithLayout = () => {
  const { onCreateDriver, breadCrumb, isLoading } = useCreateDrive();
  return (
    <ContainerCreateDrive>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateDriver(values);
          }}
          initialValues={initialValuesDrive}
          validate={validateCreateDrive}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Nome *"
                  name="nome"
                  placeholder="Informe o nome"
                  disabled={isLoading}
                />
                <TextInput
                  label="CNH *"
                  name="numeroCnh"
                  placeholder="Informe o número de CNH"
                  disabled={isLoading}
                  parse={regexOnlyNumber}
                  maxLength={10}
                />
              </div>
              <div className="form__buttons">
                <Button
                  type="button"
                  variant="ghost"
                  title="Cancelar"
                  disabled={isLoading}
                  navigateTo={PATHS.dashboard.recursosMotoristas}
                />
                <Button type="submit" title="Salvar" disabled={isLoading} />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerCreateDrive>
  );
};
