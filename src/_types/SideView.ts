import { type ReactNode } from "react";

export interface SideViewProps {
  children: ReactNode | JSX.Element;
  size: "small" | "large";
  isVisible: boolean;
  className?: string;
  onClose?: () => void;
}

export type SideViewModifier = Pick<SideViewProps, "size" | "isVisible">;
