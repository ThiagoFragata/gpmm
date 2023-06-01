import React from "react";
import { ContainerBoxScreen } from "../../style";
import { Button, TextInput, TitleSubtitle } from "@/Components";
import { type GetCodeProps } from "@/_types/FirstAccess";
import { Form } from "react-final-form";
import { validateCodeFirstAccess } from "@/_utils/form/validations/firstAccess";
import { regexOnlyNumber } from "@/_utils/masks";

export function GetCode({
  isCurrentScreen,
  email = "rosivancardoso",
  isLoading,
  onRequestCode,
  goBackGetEmail,
  onValidateCode
}: GetCodeProps): JSX.Element {
  const currentEmail = email !== undefined ? `"${email}"` : "informado";
  const [seconds, setSeconds] = React.useState(0);
  const isAllowResend = seconds === 0;

  function onResendEmail(): void {
    onRequestCode(email);
    setSeconds(30);
  }

  React.useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [seconds]);

  return (
    <ContainerBoxScreen isCurrentScreen={isCurrentScreen}>
      <TitleSubtitle
        title="Quase lá, vamos validar sua conta?"
        subtitle={`Agora basta inserir o código que você recebeu no e-mail
        ${currentEmail} para dar continuidade. Verifique também a caixa de spam.`}
      />
      <Form
        onSubmit={values => {
          onValidateCode(values);
        }}
        initialValues={{
          codigo: "",
          email
        }}
        validate={validateCodeFirstAccess}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="box__fields">
              <TextInput type="hidden" name="email" />
              <TextInput
                label="Código de ativação *"
                name="codigo"
                placeholder="Digite o código"
                disabled={isLoading}
                parse={regexOnlyNumber}
                maxLength={6}
              />
            </div>
            <div className="resend__email">
              {isAllowResend ? (
                <p className="resend__text">
                  Ainda não recebeu o e-mail?
                  <button
                    type="button"
                    className="resend__button"
                    onClick={onResendEmail}
                  >
                    clique aqui para receber um novo
                  </button>
                </p>
              ) : (
                <p className="resend__text">
                  {`Aguarde ${seconds} segundo(s) para solicitador um novo`}
                </p>
              )}
            </div>
            <div className="control__buttons">
              <Button
                variant="ghost"
                type="button"
                className="button__control"
                title="Corrigir e-mail"
                disabled={isLoading}
                onClick={goBackGetEmail}
              />
              <Button
                type="submit"
                className="button__control"
                title={"Validar código"}
                disabled={isLoading}
              />
            </div>
          </form>
        )}
      />
    </ContainerBoxScreen>
  );
}
