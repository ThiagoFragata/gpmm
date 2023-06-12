import React from "react";
import { ContainerEditDriver } from "./style";
import { type NextPageWithLayout } from "@/pages/_app";
import { useEditDriver } from "./useEditDriver";
import {
  AwaitRequest,
  BreadCrumb,
  Button,
  DataBox,
  TextInput
} from "@/Components";
import { Form } from "react-final-form";
import { validateEditDrive } from "@/_utils/form/validations/drive";
import { regexOnlyNumber } from "@/_utils/masks";
import { PATHS } from "@/_utils/constants";

export const EditDriver: NextPageWithLayout = () => {
  const { onEditDrive, breadCrumb, isLoading, dataDrive } = useEditDriver();
  return (
    <ContainerEditDriver>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onEditDrive(values);
          }}
          initialValues={{
            nome: dataDrive?.nome,
            numero_cnh: dataDrive?.numero_cnh
          }}
          validate={validateEditDrive}
          render={({ handleSubmit, pristine }) => (
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
    </ContainerEditDriver>
  );
};
