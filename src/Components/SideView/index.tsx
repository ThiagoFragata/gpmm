import React from "react";
import { type SideViewProps } from "@/_types/SideView";
import { ContainerSideView } from "./style";
import { ShowBack } from "../ShowBack";

export function SideView({
  children,
  size,
  isVisible,
  className,
  onClose
}: SideViewProps): JSX.Element {
  return (
    <React.Fragment>
      <ShowBack isShadow={isVisible} isOpen={isVisible} onClose={onClose} />
      <ContainerSideView
        size={size}
        isVisible={isVisible}
        className={`container__default default__shadow ${className ?? ""}`}
      >
        {children}
      </ContainerSideView>
    </React.Fragment>
  );
}
