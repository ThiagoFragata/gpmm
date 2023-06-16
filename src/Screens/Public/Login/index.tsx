import React from "react";
import Image from "next/image";
import { ContainerLogin } from "./style";
import { Form } from "react-final-form";
import { AwaitRequest, Button, TextInput, TitleSubtitle } from "@/Components";
import { useLogin } from "./useLogin";
import {
  validateLogin,
  initialValuesLogin
} from "@/_utils/form/validations/login";
import Link from "next/link";
import { PATHS } from "@/_utils/constants";

export function Login(): JSX.Element {
  const { onSubmitLogin, isLoading, titleButton } = useLogin();

  return (
    <ContainerLogin>
      <AwaitRequest isVisible={isLoading} />
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
            email: values?.email,
            senha: values?.password
          });
        }}
        initialValues={initialValuesLogin}
        validate={validateLogin}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="login__fields">
              <TextInput
                label="E-mail *"
                name="email"
                placeholder="Digite seu e-mail"
                disabled={isLoading}
              />
              <TextInput
                label="Senha *"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                disabled={isLoading}
                className="login__password"
              />
            </div>
            <div className="login__buttons">
              <Link href={PATHS.forgotPassword} className="link__forgot">
                Esqueceu a senha? Clique aqui
              </Link>
              <Button
                type="submit"
                className="button__item"
                title={titleButton}
                disabled={isLoading}
              />
              <Button
                type="button"
                className="button__item"
                variant="light"
                title="Primeiro acesso"
                disabled={isLoading}
                navigateTo={PATHS.primeiroAcesso}
              />
            </div>
            <p className="link__text">
              Ainda não tem registro?
              <Link className="link__strong" href={PATHS.criarConta}>
                {" "}
                Clique aqui!
              </Link>
            </p>
          </form>
        )}
      />
    </ContainerLogin>
  );
}
