import React from "react";
import { ContainerBoxScreen } from "../../style";
import { Button, TextInput, TitleSubtitle } from "@/Components";
import { type ChangePasswordProps } from "@/_types/ForgotPassword";
import { Form } from "react-final-form";
import { validatePasswordFirstAccess } from "@/_utils/form/validations/firstAccess";

export function ChangePassword({
  onCreatePassword,
  isCurrentScreen,
  isLoading,
  dataCreatePassword
}: ChangePasswordProps): JSX.Element {
  return (
    <ContainerBoxScreen isCurrentScreen={isCurrentScreen}>
      <TitleSubtitle
        title="Agora falta pouco!"
        subtitle="Para continuar basta criar uma nova senha e seu acesso será liberado."
      />
      <Form
        onSubmit={values => {
          onCreatePassword({
            ...dataCreatePassword,
            senha: values?.senha
          });
        }}
        initialValues={{
          senha: ""
        }}
        validate={validatePasswordFirstAccess}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="box__fields">
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
            </div>
            <Button
              type="submit"
              className="button__item"
              title={isLoading ? "Salvando..." : "Salvar"}
              disabled={isLoading}
            />
          </form>
        )}
      />
    </ContainerBoxScreen>
  );
}
