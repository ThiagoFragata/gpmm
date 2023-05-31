import React from "react";
import { ContainerStatus } from "./style";
import type { StatusProps, typeStatus } from "@/_types/Status";

export function Status({
  type,
  className,
  size = "short"
}: StatusProps): JSX.Element {
  const labelType = {
    large: {
      PENDENTE_ATIVACAO_USUARIO: "Pendente ativação pelo usuário",
      PENDENTE_ATIVACAO_ADMIN: "Pendente aprovação pelo administrador",
      DESATIVADA: "Conta do usuário atualmente inativa",
      ATIVADA: "Conta do usuário atualmente ativa"
    },
    short: {
      PENDENTE_ATIVACAO_USUARIO: "Usuário precisa ativar",
      PENDENTE_ATIVACAO_ADMIN: "Admin precisa ativar",
      DESATIVADA: "Inativo",
      ATIVADA: "Ativo"
    }
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
    <ContainerStatus type={getTypeStyle()} className={className}>
      <p className="status__label">{labelType[size][type]}</p>
    </ContainerStatus>
  );
}
