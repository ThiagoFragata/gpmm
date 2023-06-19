import React from "react";
import { Field } from "react-final-form";
import { ContainerTextInput, TextWarning } from "./style";
import { type TextInputMultiLineProps } from "@/_types/TextInputMultiLine";

export function TextInputMultiLine({
  label,
  name,
  placeholder,
  classNameContainer,
  className,
  disabled = false,
  ...rest
}: TextInputMultiLineProps): JSX.Element {
  return (
    <Field
      name={name}
      render={({ input, meta }) => {
        const isInvalid: boolean =
          meta.error !== undefined && meta.touched === true;
        return (
          <ContainerTextInput error={isInvalid} className={classNameContainer}>
            <span className="input__label">{label}</span>
            <div className="container__input">
              <textarea
                disabled={disabled}
                className={`input__textarea ${className ?? ""}`}
                autoComplete="off"
                placeholder={placeholder}
                {...input}
                {...rest}
              ></textarea>
            </div>
            <TextWarning show={isInvalid}>{meta.error}</TextWarning>
          </ContainerTextInput>
        );
      }}
    />
  );
}
