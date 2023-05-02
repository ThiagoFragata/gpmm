export type typeStatus = "active" | "waiting" | "inactive";

export interface StatusProps {
  type: typeStatus;
}

export interface StatusModifier {
  type: typeStatus;
}
