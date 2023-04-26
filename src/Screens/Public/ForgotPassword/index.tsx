import React from "react";
import Image from "next/image";
import { ContainerLogin } from "./style";
import { Form } from "react-final-form";
import { AwaitRequest, Button, TextInput, TitleSubtitle } from "@/Components";
import {
  initialValuesForgotPassword,
  validateForgotPassword
} from "@/_utils/form/validations/forgotPassword";
import { useForgotPassword } from "./useForgotPassword";

export function ForgotPassword(): JSX.Element {
  const { onSubmitForgotPassword, goToLogin, isLoading, titleButton } =
    useForgotPassword();

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
        title="Esqueceu a senha?"
        subtitle="Informe seu e-mail que enviaremos instruções
        para recuperar seu acesso."
      />
      <Form
        onSubmit={values => {
          onSubmitForgotPassword({
            email: values?.email
          });
        }}
        initialValues={initialValuesForgotPassword}
        validate={validateForgotPassword}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form__fields">
              <TextInput
                label="E-mail *"
                name="email"
                placeholder="Digite seu e-mail"
                disabled={isLoading}
              />
            </div>
            <div className="form__buttons">
              <Button
                type="submit"
                className="button__item"
                title={titleButton}
                disabled={isLoading}
              />
              <span className="button__divider">ou</span>
              <Button
                className="button__item"
                onClick={goToLogin}
                title="Voltar ao login"
                variant="outline"
                disabled={isLoading}
              />
            </div>
          </form>
        )}
      />
    </ContainerLogin>
  );
}
