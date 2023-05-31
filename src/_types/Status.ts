import { type typeStringStatus } from "./Common";

export type typeStatus = "active" | "waiting" | "inactive";

export interface StatusProps {
  type: typeStringStatus;
  className?: string;
  size?: "large" | "short";
}

export interface StatusModifier {
  type: typeStatus;
}
