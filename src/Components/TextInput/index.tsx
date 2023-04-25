import { Field } from "react-final-form";
import React from "react";
import { ContainerTextInput, TextWarning } from "./style";
import { type TextInputProps } from "@/_types/TextInput";
import { Button } from "../Button";

export function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  inputMode,
  parse,
  className,
  disabled = false,
  ...rest
}: TextInputProps): JSX.Element {
  const shouldRenderOptionPassword = type === "password";
  return (
    <Field
      parse={parse}
      name={name}
      render={({ input, meta }) => {
        const isInvalid: boolean =
          meta.error !== undefined && meta.touched === true;
        return (
          <ContainerTextInput error={isInvalid}>
            <span className="input__label">{label}</span>
            <div className="container__input">
              <input
                type={type}
                autoComplete="off"
                className="input__text"
                placeholder={placeholder}
                id={name}
                disabled={disabled}
                {...rest}
                {...input}
              />
              {shouldRenderOptionPassword && <Button title="mudar senha" />}
            </div>
            <TextWarning show={isInvalid}>{meta.error}</TextWarning>
          </ContainerTextInput>
        );
      }}
    />
  );
}
