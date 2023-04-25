type variantButton = "primary" | "outline" | "danger";
export interface ButtonProps {
  title: string;
  className?: string;
  variant?: variantButton;
  onClick?: () => void;
  type?: "submit" | "button";
}

export interface ButtonModifier {
  variant: variantButton;
}
