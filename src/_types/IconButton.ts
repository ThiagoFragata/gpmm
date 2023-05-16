import type { IconsName, ArrowIconPros } from "./Icons";

export type IconButtonProps = {
  name: IconsName;
  className?: string;
  onClick?: () => void;
} & ArrowIconPros;
