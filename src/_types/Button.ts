import { type IconsName } from "./Icons";

type variantButton = "primary" | "outline" | "danger";
export type ButtonProps = {
  title: string;
  className?: string;
  variant?: variantButton;
  type?: "submit" | "button";
  iconName?: IconsName;
  onClick?: () => void;
} & React.HTMLProps<HTMLButtonElement>;

export interface ButtonModifier {
  variant: variantButton;
}

export interface RenderIconProps {
  iconName: IconsName;
}
