import React from "react";
import { ContainerBoxScreen } from "../../style";
import { Button, Steps, TextInput, TitleSubtitle } from "@/Components";
import { Form } from "react-final-form";
import { validateEmailFirstAccess } from "@/_utils/form/validations/firstAccess";
import { type GetEmailProps } from "@/_types/ForgotPassword";

export function GetEmail({
  onRequestCode,
  isLoading,
  isCurrentScreen,
  email
}: GetEmailProps): JSX.Element {
  const titleButton = isLoading ? "Enviando e-mail..." : "Solicitar código";
  return (
    <ContainerBoxScreen isCurrentScreen={isCurrentScreen}>
      <TitleSubtitle
        title="Esqueceu sua senha?"
        subtitle="Para enviarmos instruções de recuperação da sua conta precisamos que informe o seu e-mail. Insira-o abaixo."
      />
      <Steps step={1} className="box__steps" />
      <Form
        onSubmit={values => {
          onRequestCode(values?.email);
        }}
        initialValues={{
          email: email ?? ""
        }}
        validate={validateEmailFirstAccess}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="box__fields">
              <TextInput type="hidden" name="user" />
              <TextInput
                label="E-mail *"
                name="email"
                autoComplete="off"
                placeholder="Digite seu e-mail"
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="button__item"
              title={titleButton}
              disabled={isLoading}
            />
          </form>
        )}
      />
    </ContainerBoxScreen>
  );
}
