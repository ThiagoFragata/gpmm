import React from "react";
import moment from "moment";
import { ContainerData } from "./style";
import { Form } from "react-final-form";
import { Button, ContentScroll, TextInput } from "@/Components";
import {
  regexCPF,
  regexDate,
  regexOnlyNumber,
  regexPhone
} from "@/_utils/masks";
import { PATHS } from "@/_utils/constants";
import { type DataProps } from "@/_types/Profile";
import { validateUserProfile } from "@/_utils/form/validations/users";

export function Data({
  onEditProfile,
  data,
  isLoading
}: DataProps): JSX.Element {
  const initialValues = {
    nome: data?.nome,
    cpf: data?.cpf !== "" && data?.cpf !== undefined ? regexCPF(data?.cpf) : "",
    siape: data?.siape,
    dataNascimento:
      data?.dataNascimento !== null && data?.dataNascimento !== undefined
        ? moment(data?.dataNascimento).format("DD[/]MM[/]YYYY")
        : "",
    telefone:
      data?.telefone?.numero !== null && data?.telefone?.numero !== undefined
        ? regexPhone(data?.telefone?.numero)
        : "",
    email: data?.email
  };
  return (
    <ContainerData>
      <Form
        onSubmit={(values, form) => {
          onEditProfile({
            payload: values,
            form
          });
        }}
        initialValues={initialValues}
        validate={validateUserProfile}
        render={({ handleSubmit, form, values, pristine, errors }) => {
          return (
            <ContentScroll>
              <form onSubmit={handleSubmit} className="container__form">
                <div className="childrens__form user__fields">
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
                    maxLength={11}
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
                  <TextInput
                    label="Telefone *"
                    name="telefone"
                    placeholder="Informe o número de telefone do usuário"
                    disabled={isLoading}
                    parse={regexPhone}
                  />
                </div>
                <div className="form__buttons">
                  <Button
                    type="submit"
                    variant="light"
                    title="Atualizar"
                    disabled={isLoading || pristine}
                  />
                </div>
              </form>
            </ContentScroll>
          );
        }}
      />
    </ContainerData>
  );
}
