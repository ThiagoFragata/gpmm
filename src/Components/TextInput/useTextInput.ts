import type {
  useTextInputData,
  useTextInputDataProps
} from "@/_types/TextInput";
import React from "react";

export function useTextInput({
  type = "text"
}: useTextInputDataProps): useTextInputData {
  const isInitialPassword = type === "password";

  const [isPassword, setIsPassword] = React.useState(isInitialPassword);

  function onHandlerInputPassword(): void {
    setIsPassword(!isPassword);
  }

  return {
    onHandlerInputPassword,
    shouldRenderButton: isInitialPassword,
    isPassword
  };
}
