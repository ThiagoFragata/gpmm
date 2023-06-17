import React from "react";
import { ContainerBoxScreen, ContainerRegisterUser } from "./style";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/_utils/constants";
import {
  AwaitRequest,
  Button,
  FormToggle,
  ListSectors,
  TextInput,
  TitleDivider
} from "@/Components";
import { Form } from "react-final-form";
import {
  initialValuesUsersPublic,
  validateUsersPublic
} from "@/_utils/form/validations/usersPublic";
import {
  regexCPF,
  regexDate,
  regexOnlyNumber,
  regexPhone
} from "@/_utils/masks";
import { useRegisterUser } from "./useRegisterUser";
import { type FormApi } from "final-form";

export function RegisterUser(): JSX.Element {
  const {
    isLoading,
    isShowSectors,
    onOpenListSectors,
    onCloseListSectors,
    focusOnError,
    onCreateUser
  } = useRegisterUser();
  const formRef = React.useRef<FormApi<any, any>>();
  return (
    <ContainerRegisterUser>
      <AwaitRequest isVisible={isLoading} />
      <header className="top__bar">
        <Image
          src="/images/logo.png"
          alt="Logo da aplicação"
          width={169}
          height={67.76}
        />
        <Link href={PATHS.login} className="top__login">
          Voltar ao login
        </Link>
      </header>
      <div className="box__form">
        <ContainerBoxScreen>
          <Form
            onSubmit={values => {
              onCreateUser(values);
            }}
            initialValues={initialValuesUsersPublic}
            validate={validateUsersPublic}
            render={({ handleSubmit, form, values }) => {
              formRef.current = form;
              const isAcceptTerm = values?.accept__term === true;
              const isDisableConfirm = isLoading || !isAcceptTerm;
              return (
                <form onSubmit={handleSubmit}>
                  <h1 className="form__title">
                    Faça seu cadastro para ter acesso a plataforma
                  </h1>
                  <div className="box__fields">
                    <TitleDivider
                      title="Dados gerais"
                      className="form__divider"
                    />
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

                    <TitleDivider
                      title="Dados de acesso"
                      className="form__divider"
                    />

                    <TextInput
                      label="E-mail*"
                      name="email"
                      placeholder="Informe o e-mail do usuário"
                      disabled={isLoading}
                    />
                    <TextInput
                      label="Senha *"
                      name="senha"
                      autoComplete="off"
                      type="password"
                      placeholder="Digite uma senha segura"
                      disabled={isLoading}
                      className="field__password"
                    />
                    <TextInput
                      label="Digite novamente a senha *"
                      name="confirmaSenha"
                      type="password"
                      placeholder="Digite uma senha segura"
                      disabled={isLoading}
                      className="field__password"
                    />

                    <div className="use__terms">
                      <p className="term__text">
                        Antes de se registrar e utilizar a plataforma, é
                        necessário que você aceite nossos termos de uso. Eles
                        estabelecem as regras para garantir uma experiência
                        segura e satisfatória. Leia os termos com atenção e
                        clique em {`"Aceitar"`} para prosseguir. {` `}
                        <Link
                          href="/Termo de Uso do Sistema GPMM.pdf"
                          target="_blank"
                          className="term__link"
                        >
                          Clique aqui visualizar
                        </Link>
                      </p>
                      <FormToggle
                        label="Aceita os termos?"
                        name="accept__term"
                      />
                    </div>
                  </div>
                  <div className="control__buttons">
                    <Button
                      variant="ghost"
                      type="button"
                      className="button__control"
                      title="Cancelar"
                      disabled={isLoading}
                      navigateTo={PATHS.login}
                    />
                    <Button
                      type="submit"
                      className="button__control"
                      title="Confirmar"
                      disabled={isDisableConfirm}
                    />
                  </div>
                </form>
              );
            }}
          />
        </ContainerBoxScreen>
      </div>
      <ListSectors
        isShow={isShowSectors}
        onClose={onCloseListSectors}
        formRef={formRef}
      />
    </ContainerRegisterUser>
  );
}
