import React from "react";
import { ContainerCreateUser } from "./style";
import { useCreateUser } from "./useCreateUser";
import { type NextPageWithLayout } from "@/pages/_app";
import { Form } from "react-final-form";
import {
  BreadCrumb,
  Button,
  DataBox,
  ListSectors,
  TextInput
} from "@/Components";
import { PATHS } from "@/_utils/constants";

export const CreateUser: NextPageWithLayout = () => {
  const { isLoading, breadCrumb } = useCreateUser();
  return (
    <ContainerCreateUser>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <ListSectors />
        <Form
          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2));
          }}
          // initialValues={initialValuesLocal}
          // validate={validateCreateLocal}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Nome *"
                  name="nome"
                  placeholder="Informe o nome completo do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="CPF *"
                  name="cpf"
                  placeholder="Informe o número de CPF do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="SIAPE *"
                  name="siape"
                  placeholder="Informe o número de SIAPE do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="Data de nascimento *"
                  name="dataNascimento"
                  placeholder="Informe a nascimento do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="E-mail*"
                  name="email"
                  placeholder="Informe o e-mail do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="Tipo de perfil *"
                  name="tipoPerfil"
                  placeholder="Informe o tipo de perfil para o usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="Telefone *"
                  name="telefone"
                  placeholder="Informe o número de telefone do usuário"
                  disabled={isLoading}
                />
                <TextInput
                  label="Setor *"
                  name="setor"
                  placeholder="Informe o setor do usuário"
                  disabled={isLoading}
                />
              </div>
              <div className="form__buttons">
                <Button
                  variant="outline"
                  title="Cancelar"
                  disabled={isLoading}
                  navigateTo={PATHS.dashboard.usuarios}
                />
                <Button type="submit" title="Salvar" disabled={isLoading} />
              </div>
            </form>
          )}
        />
      </DataBox>
    </ContainerCreateUser>
  );
};
