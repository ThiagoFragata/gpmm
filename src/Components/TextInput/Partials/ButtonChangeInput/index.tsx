import React from "react";
import { ContainerButtonChangeInput } from "./style";
import type { ButtonChangeInputProps } from "@/_types/TextInput";
import { CloseEyeIcon, OpenEyeIcon } from "@/assets/icons";

export function ButtonChangeInput({
  onClick,
  isPassword
}: ButtonChangeInputProps): JSX.Element {
  return (
    <ContainerButtonChangeInput onClick={onClick} type="button">
      {isPassword ? (
        <CloseEyeIcon className="button__icon" />
      ) : (
        <OpenEyeIcon className="button__icon" />
      )}
    </ContainerButtonChangeInput>
  );
}
