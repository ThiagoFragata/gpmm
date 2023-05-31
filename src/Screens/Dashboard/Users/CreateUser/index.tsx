import React from "react";
import { ContainerCreateUser } from "./style";
import { useCreateUser } from "./useCreateUser";
import { type NextPageWithLayout } from "@/pages/_app";
import { Form } from "react-final-form";
import {
  BreadCrumb,
  Button,
  ContentScroll,
  DataBox,
  FormToggle,
  InputSelect,
  ListSectors,
  TextInput,
  TitleDivider
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
import { type FormApi } from "final-form";

export const CreateUser: NextPageWithLayout = () => {
  const {
    isLoading,
    breadCrumb,
    isShowSectors,
    focusOnError,
    onOpenListSectors,
    onCloseListSectors,
    onCreateUser
  } = useCreateUser();
  const formRef = React.useRef<FormApi<any, any>>();
  return (
    <ContainerCreateUser>
      <BreadCrumb items={breadCrumb} />
      <DataBox>
        <Form
          onSubmit={values => {
            onCreateUser(values);
          }}
          decorators={[focusOnError]}
          initialValues={initialValuesUser}
          validate={validateUser}
          render={({ handleSubmit, form, values, errors }) => {
            formRef.current = form;
            const shouldRenderFieldCNH = values?.auth__drive;
            return (
              <ContentScroll>
                <form onSubmit={handleSubmit} className="container__form">
                  <TitleDivider title="Dados gerais" />
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
                  <TitleDivider
                    title="Portaria veicular"
                    className="user__divider"
                  />
                  <div className="childrens__form user__fields">
                    <FormToggle
                      name="auth__drive"
                      label="Permissão para dirigir"
                    />
                    {shouldRenderFieldCNH && (
                      <TextInput
                        label="CNH *"
                        name="numeroCnh"
                        placeholder="Informe o número de CNH do usuário"
                        disabled={isLoading}
                        parse={regexOnlyNumber}
                        maxLength={10}
                      />
                    )}
                  </div>
                  <TitleDivider
                    title="Detalhes de ativação"
                    className="user__divider"
                  />
                  <p className="text__default">
                    O usuário receberá um e-mail com infomações para ativação da
                    sua conta e primeiro acesso.
                  </p>

                  <div className="form__buttons">
                    <Button
                      type="button"
                      variant="outline"
                      title="Cancelar"
                      disabled={isLoading}
                      navigateTo={PATHS.dashboard.usuarios}
                    />
                    <Button type="submit" title="Salvar" disabled={isLoading} />
                  </div>
                </form>
              </ContentScroll>
            );
          }}
        />
      </DataBox>
      <ListSectors
        isShow={isShowSectors}
        onClose={onCloseListSectors}
        formRef={formRef}
      />
    </ContainerCreateUser>
  );
};
