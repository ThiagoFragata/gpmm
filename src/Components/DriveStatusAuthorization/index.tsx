import React from "react";
import { ContainerDriveStatusAuthorization } from "./style";
import { type DriveStatusAuthorizationProps } from "@/_types/DriveStatusAuthorization";
import { CheckIcon, CloseIcon } from "@/assets/icons";

export function DriveStatusAuthorization({
  authorization,
  className
}: DriveStatusAuthorizationProps): JSX.Element {
  const status = authorization ? "Concedida" : "Sem permissão";
  const description = authorization
    ? "Possui a documentação necessária para digirir o carro do instituto"
    : "Usuário não atende aos requisitos necessários para digirir o carro do instituto";
  return (
    <ContainerDriveStatusAuthorization
      authorization={authorization}
      className={className}
    >
      <div className="icon">
        {authorization ? <CheckIcon /> : <CloseIcon />}
      </div>
      <div>
        <h3 className="status">{status}</h3>
        <p className="description">{description}</p>
      </div>
    </ContainerDriveStatusAuthorization>
  );
}
