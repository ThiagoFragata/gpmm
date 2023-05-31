import React from "react";
import { ContainerStatus } from "./style";
import type { StatusProps, typeStatus } from "@/_types/Status";

export function Status({ type }: StatusProps): JSX.Element {
  // const labelType = {
  // active: "Ativo",
  // waiting: "Aguardando",
  // inactive: "Inativo"
  // };

  const labelType = {
    PENDENTE_ATIVACAO_USUARIO: "Usuário precisa ativar",
    PENDENTE_ATIVACAO_ADMIN: "Admin precisa ativar",
    DESATIVADA: "Inativo",
    ATIVADA: "Ativo"
  };

  function getTypeStyle(): typeStatus {
    if (type === "ATIVADA") {
      return "active";
    }
    if (
      type === "PENDENTE_ATIVACAO_ADMIN" ||
      type === "PENDENTE_ATIVACAO_USUARIO"
    ) {
      return "waiting";
    }
    return "inactive";
  }

  return (
    <ContainerStatus type={getTypeStyle()}>
      <p className="status__label">{labelType[type]}</p>
    </ContainerStatus>
  );
}
