export type typeStatusRequest =
  | "SOLICITADO"
  | "LOCADO"
  | "DEVOLVIDO"
  | "NAOUTILIZADO"
  | "RESERVADO"
  | "NEGADO"
  | "AUTORIZADO";

export interface StatusRequestProps {
  type: typeStatusRequest;
  className?: string;
}

export interface StatusRequestModifier {
  type: typeStatusRequest;
}
