import React from "react";
import { ContainerLogin } from "./style";
import Image from "next/image";
import { Button, TitleSubtitle } from "@/Components";

export function Login(): JSX.Element {
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
      <div className="login__buttons">
        <Button className="button__item" title="Entrar" />
        <span className="button__divider">ou</span>
        <Button
          className="button__item"
          title="Novo Registro"
          variant="outline"
        />
      </div>
    </ContainerLogin>
  );
}
