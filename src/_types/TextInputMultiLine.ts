export type TextInputMultiLineProps = {
  label?: string;
  name: string;
  placeholder?: string;
  classNameContainer?: string;
  className?: string;
  disabled?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>;

export interface TextInputMultiLineModifier {
  error: boolean;
}

export type useTextInputMultiLineDataProps = Pick<
  TextInputMultiLineProps,
  "type"
>;

export interface useTextInputMultiLineData {
  onHandlerInputPassword: () => void;
  shouldRenderButton: boolean;
  isPassword: boolean;
}

export interface ButtonChangeInputProps {
  onClick: () => void;
  isPassword: boolean;
}
