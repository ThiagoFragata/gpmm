type variantButton = "green" | "orange" | "blue" | "red";
export interface ButtonProps {
  title: string;
  className?: string;
  variant?: variantButton;
  onClick?: () => void;
}

export interface ButtonModifier {
  variant: variantButton;
}
