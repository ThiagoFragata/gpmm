import React from "react";
import { ContainerFormToggle } from "./style";
import { type FormToggleProps } from "@/_types/FormToggle";
import { Field } from "react-final-form";

export function FormToggle({
  label,
  disabled,
  name
}: FormToggleProps): JSX.Element {
  return (
    <Field
      name={name}
      render={({ input }) => {
        const isChecked = input.value === true;
        const currentText = isChecked ? "Sim" : "Não";
        return (
          <ContainerFormToggle isTrue={isChecked}>
            <span className="toggle__label">{label}</span>
            <input type="hidden" {...input} />
            <button
              type="button"
              className="toggle__button"
              onClick={() => {
                input.onChange(!isChecked);
              }}
              disabled={disabled}
            >
              <span className="toggle__circle center__horizontal" />
              <p className="toggle__text center__horizontal">{currentText}</p>
            </button>
          </ContainerFormToggle>
        );
      }}
    />
  );
}
