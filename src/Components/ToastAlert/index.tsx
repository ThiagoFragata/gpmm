import React from "react";
import { ContainerToastAlert } from "./style";
import { useSelector } from "react-redux";
import { selectToastAlert } from "@/_config/store/slices/toastAlertSlice";

export function ToastAlert({
  children
}: {
  children: JSX.Element;
}): JSX.Element {
  const { isVisible } = useSelector(selectToastAlert);
  return (
    <React.Fragment>
      <ContainerToastAlert>
        <textarea
          style={{ height: "150px", minWidth: "300px" }}
          value={JSON.stringify(isVisible, null, 2)}
        />
      </ContainerToastAlert>
      {children}
    </React.Fragment>
  );
}
