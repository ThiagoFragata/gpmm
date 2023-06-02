import { type typeStringStatus } from "./Common";

export type typeStatus = "active" | "waiting" | "inactive";

export type typeSizeStatus = "large" | "short";

export interface StatusProps {
  type: typeStringStatus;
  className?: string;
  size?: typeSizeStatus;
}

export interface StatusModifier {
  type: typeStatus;
}
