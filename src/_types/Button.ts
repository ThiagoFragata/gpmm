import { type IconsName } from "./Icons";

export type variantButton =
  | "primary"
  | "outline"
  | "danger"
  | "ghost"
  | "light";

export type ButtonProps = {
  title: string;
  className?: string;
  variant?: variantButton;
  type?: "submit" | "button";
  iconName?: IconsName;
  onClick?: () => void;
  navigateTo?: string;
} & React.HTMLProps<HTMLButtonElement>;

export interface ButtonModifier {
  variant: variantButton;
}

export interface RenderIconProps {
  iconName: IconsName;
}
