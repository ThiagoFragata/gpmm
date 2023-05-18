import type { IconsName, ArrowIconPros } from "./Icons";

export type IconButtonProps = {
  name: IconsName;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
} & ArrowIconPros;
