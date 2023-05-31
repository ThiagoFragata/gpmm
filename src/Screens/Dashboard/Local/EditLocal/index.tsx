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
import { Form } from "react-final-form";
import { PATHS } from "@/_utils/constants";
import { validateEditLocal } from "@/_utils/form/validations/local";
import { useEditLocal } from "./useEditLocal";
import { regexOnlyNumber } from "@/_utils/masks";

export const EditLocal: NextPageWithLayout = () => {
  const { onEditLocal, breadCrumb, isLoading, dataLocal } = useEditLocal();
  return (
    <ContainerEditLocal>
      <AwaitRequest isVisible={isLoading} />
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onEditLocal({
              descricao: values?.descricao,
              identificacao: values?.identificacao,
              totalDeAssento: values?.totalDeAssento
            });
          }}
          initialValues={{
            descricao: dataLocal?.descricao,
            identificacao: dataLocal?.identificacao,
            totalDeAssento: dataLocal?.totalDeAssento
          }}
          validate={validateEditLocal}
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
    </ContainerEditLocal>
  );
};
