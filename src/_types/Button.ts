type variantButton = "primary" | "outline" | "danger";
export type ButtonProps = {
  title: string;
  className?: string;
  variant?: variantButton;
  onClick?: () => void;
  type?: "submit" | "button";
} & React.HTMLProps<HTMLButtonElement>;

export interface ButtonModifier {
  variant: variantButton;
}
