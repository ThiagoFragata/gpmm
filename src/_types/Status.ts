export type typeStatus = "active" | "waiting" | "inactive";

export type typeStringStatus =
  | "PENDENTE_ATIVACAO_USUARIO"
  | "PENDENTE_ATIVACAO_ADMIN"
  | "DESATIVADA"
  | "ATIVADA";

export interface StatusProps {
  type: typeStringStatus;
  className?: string;
  size?: "large" | "short";
}

export interface StatusModifier {
  type: typeStatus;
}
