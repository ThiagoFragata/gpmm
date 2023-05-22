import React from "react";
import { ContainerBoxScreen } from "../../style";
import { TitleSubtitle } from "@/Components";
import { type GetCodeProps } from "@/_types/FirstAccess";

export function GetCode({ isCurrentScreen }: GetCodeProps): JSX.Element {
  return (
    <ContainerBoxScreen isCurrentScreen={isCurrentScreen}>
      <TitleSubtitle
        title="Quase lá, vamos validar sua conta?"
        subtitle="Agora para basta inserir o código que você recebeu no e-mail
        “rosivancardoso767@gmail.com” para dar continuidade"
      />
    </ContainerBoxScreen>
  );
}
