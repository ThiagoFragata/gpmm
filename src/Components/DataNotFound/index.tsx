import React from "react";
import { ContainerDataNotFound } from "./style";
import Image from "next/image";
import { Button } from "../Button";
import { type DataNotFoundProps } from "@/_types/DataNotFound";

export function DataNotFound({
  title,
  description,
  onAction
}: DataNotFoundProps): JSX.Element {
  const getTitle = title !== undefined ? title : "Sem dados para exibir";
  const getDescription =
    description !== undefined
      ? description
      : "Não foi possível buscar os dados solicitados, deseja tentar novamente?";
  const shouldRenderAction = onAction !== undefined;
  return (
    <ContainerDataNotFound>
      <Image
        src="/images/not_found.png"
        alt="Logo da aplicação"
        width={133.1}
        height={118.33}
      />
      <h3 className="not__title">{getTitle}</h3>
      <p className="not__description">{getDescription}</p>
      {shouldRenderAction && (
        <Button
          onClick={onAction}
          title="Tentar buscar novamente"
          variant="outline"
        />
      )}
    </ContainerDataNotFound>
  );
}
