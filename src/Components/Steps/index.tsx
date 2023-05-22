import React from "react";
import { ContainerSteps } from "./style";
import { type StepsProps } from "@/_utils/Steps";

export function Steps({ step, className }: StepsProps): JSX.Element {
  return (
    <ContainerSteps className={className}>
      <div
        className={`step ${step >= 1 ? "step--selected" : "step--unselected"}`}
      />
      <div
        className={`step ${step >= 2 ? "step--selected" : "step--unselected"}`}
      />
      <div
        className={`step ${step >= 3 ? "step--selected" : "step--unselected"}`}
      />
    </ContainerSteps>
  );
}
