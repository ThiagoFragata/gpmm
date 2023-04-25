export type TextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  inputMode?: "text";
  parse?: (value: string) => string;
  className?: string;
  disabled?: boolean;
} & React.HTMLProps<HTMLInputElement>;

export interface TextInputModifier {
  error: boolean;
}
