import React from "react";
import { ContainerBoxScreen } from "../../style";
import { Button, Steps, TextInput, TitleSubtitle } from "@/Components";
import { type GetEmailProps } from "@/_types/FirstAccess";
import { Form } from "react-final-form";
import { validateEmailFirstAccess } from "@/_utils/form/validations/firstAccess";

export function GetEmail({
  onRequestCode,
  isLoading,
  isCurrentScreen,
  email
}: GetEmailProps): JSX.Element {
  return (
    <ContainerBoxScreen isCurrentScreen={isCurrentScreen}>
      <TitleSubtitle
        title="Quase lá, vamos validar sua conta?"
        subtitle="Para validar sua conta e liberar seu acesso precisamos do seu e-mail para enviar
        o código de ativação da sua conta. Insira seu e-mail abaixo."
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
              title={isLoading ? "Enviando e-mail..." : "Solicitar código"}
              disabled={isLoading}
            />
          </form>
        )}
      />
    </ContainerBoxScreen>
  );
}
