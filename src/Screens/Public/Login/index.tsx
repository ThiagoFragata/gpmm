import React from "react";
import Image from "next/image";
import { ContainerLogin } from "./style";
import { Form } from "react-final-form";
import { Button, TextInput, TitleSubtitle } from "@/Components";
import { useLogin } from "./useLogin";
import {
  validateLogin,
  initialValuesLogin
} from "@/_utils/form/validations/login";

export function Login(): JSX.Element {
  const { onSubmitLogin } = useLogin();

  return (
    <ContainerLogin>
      <Image
        src="/images/logo.png"
        alt="Logo da aplicação"
        width={207}
        height={83}
      />
      <TitleSubtitle
        title="Seja bem vindo!"
        subtitle="Para prosseguir informe os dados abaixo"
      />

      <Form
        onSubmit={values => {
          onSubmitLogin({
            user_name: values?.user_name,
            password: values?.password
          });
        }}
        initialValues={initialValuesLogin}
        validate={validateLogin}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="login__fields">
              <TextInput
                label="SIAPE *"
                name="user_name"
                placeholder="Digite seu código SIAPE"
                maxLength={10}
              />
              <TextInput
                label="Senha *"
                name="password"
                placeholder="Digite sau senha"
              />
            </div>
            <div className="login__buttons">
              <Button type="submit" className="button__item" title="Entrar" />
              <span className="button__divider">ou</span>
              <Button
                className="button__item"
                title="Novo Registro"
                variant="outline"
              />
            </div>
          </form>
        )}
      />
    </ContainerLogin>
  );
}
