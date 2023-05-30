import React from "react";
import { ContainerCreateUser } from "./style";
import { useCreateUser } from "./useCreateUser";
import { type NextPageWithLayout } from "@/pages/_app";
import { Form } from "react-final-form";
import {
  BreadCrumb,
  Button,
  DataBox,
  InputSelect,
  ListSectors,
  TextInput
} from "@/Components";
import { PATHS, PROFILE_TYPE } from "@/_utils/constants";
import {
  initialValuesUser,
  validateUser
} from "@/_utils/form/validations/users";
import {
  regexCPF,
  regexDate,
  regexOnlyNumber,
  regexPhone
} from "@/_utils/masks";

export const CreateUser: NextPageWithLayout = () => {
  const {
    isLoading,
    breadCrumb,
    isShowSectors,
    onOpenListSectors,
    onCloseListSectors
  } = useCreateUser();

  return (
    <ContainerCreateUser>
      <BreadCrumb items={breadCrumb} />
      <ListSectors isShow={isShowSectors} onClose={onCloseListSectors} />
      <DataBox>
        <Form
          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2));
          }}
          initialValues={initialValuesUser}
          validate={validateUser}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit} className="container__form">
              <div className="childrens__form">
                <TextInput
                  label="Nome *"
                  name="nome"
                  placeholder="Informe o nome completo do usuário"
                  disabled={isLoading}
                  maxLength={200}
                />
                <TextInput
                  label="CPF *"
                  name="cpf"
                  placeholder="Informe o número de CPF do usuário"
                  disabled={isLoading}
                  parse={regexCPF}
                />
                <TextInput
                  label="SIAPE *"
                  name="siape"
                  placeholder="Informe o número de SIAPE do usuário"
                  disabled={isLoading}
                  maxLength={12}
                  parse={regexOnlyNumber}
                />
                <TextInput
                  label="Data de nascimento *"
                  name="dataNascimento"
                  placeholder="Informe a nascimento do usuário"
                  disabled={isLoading}
                  parse={regexDate}
                />
                <TextInput
                  label="E-mail*"
                  name="email"
                  placeholder="Informe o e-mail do usuário"
                  disabled={isLoading}
                />
                <InputSelect
                  label="Tipo de perfil *"
                  name="tipoPerfil"
                  placeholder="Informe o tipo de perfil para o usuário"
                  disabled={isLoading}
                  data={PROFILE_TYPE}
                  direction="bottom"
                  form={form}
                  isAwaiting={isLoading}
                />
                <TextInput
                  label="Telefone *"
                  name="telefone"
                  placeholder="Informe o número de telefone do usuário"
                  disabled={isLoading}
                  parse={regexPhone}
                />
                <div>
                  <TextInput
                    type="hidden"
                    name="setor"
                    parse={regexOnlyNumber}
                  />
                  <TextInput
                    label="Setor *"
                    name="label_setor"
                    placeholder="Informe o setor do usuário"
                    disabled={isLoading}
                    maxLength={5}
                    onFocus={() => {
                      onOpenListSectors();
                    }}
                  />
                </div>
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
