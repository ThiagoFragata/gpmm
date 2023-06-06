export type TextInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "hidden";
  inputMode?: "text";
  parse?: (value: string) => string;
  classNameContainer?: string;
  className?: string;
  disabled?: boolean;
} & React.HTMLProps<HTMLInputElement>;

export interface TextInputModifier {
  error: boolean;
  isHidden: boolean;
}

export type useTextInputDataProps = Pick<TextInputProps, "type">;

export interface useTextInputData {
  onHandlerInputPassword: () => void;
  shouldRenderButton: boolean;
  isPassword: boolean;
}

export interface ButtonChangeInputProps {
  onClick: () => void;
  isPassword: boolean;
}
