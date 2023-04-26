import React from "react";
import { ContainerAwaitRequest } from "./style";

export function AwaitRequest({
  isVisible
}: {
  isVisible: boolean;
}): JSX.Element {
  return <ContainerAwaitRequest isVisible={isVisible} />;
}
