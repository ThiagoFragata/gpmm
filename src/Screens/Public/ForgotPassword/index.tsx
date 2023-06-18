import React from "react";
import Image from "next/image";
import { ContainerLogin } from "./style";
import { AwaitRequest } from "@/Components";
import { useForgotPassword } from "./useForgotPassword";
import Link from "next/link";
import { PATHS } from "@/_utils/constants";
import { GetEmail } from "./Partials/GetEmail";
import { GetCode } from "./Partials/GetCode";
import { ChangePassword } from "./Partials/ChangePassword";

export function ForgotPassword(): JSX.Element {
  const {
    onRequestCode,
    goBackGetEmail,
    onValidateCode,
    onCreatePassword,
    isScreenGetEmail,
    isScreenGetCode,
    isScreenGetPassword,
    isLoading,
    capturedEmail,
    dataCreatePassword
  } = useForgotPassword();
  return (
    <ContainerLogin>
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
        <GetEmail
          onRequestCode={onRequestCode}
          isCurrentScreen={isScreenGetEmail}
          isLoading={isLoading}
          email={capturedEmail}
        />
        <GetCode
          isCurrentScreen={isScreenGetCode}
          isLoading={isLoading}
          email={capturedEmail}
          goBackGetEmail={goBackGetEmail}
          onRequestCode={onRequestCode}
          onValidateCode={onValidateCode}
        />
        <ChangePassword
          onCreatePassword={onCreatePassword}
          dataCreatePassword={dataCreatePassword}
          isCurrentScreen={isScreenGetPassword}
          isLoading={isLoading}
        />
      </div>
    </ContainerLogin>
  );
}
