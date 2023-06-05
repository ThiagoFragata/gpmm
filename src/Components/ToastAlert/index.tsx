import React from "react";
import { ContainerToastAlert } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  onResetToastAlert,
  selectToastAlert
} from "@/_config/store/slices/toastAlertSlice";
import { useToastAlert } from "./useToastAlert";

export function ToastAlert(): JSX.Element {
  const { isVisible, variant, title, description } =
    useSelector(selectToastAlert);
  const dispatch = useDispatch();
  const { icons, mapTitle, mapDescription } = useToastAlert();
  const Icon = icons[variant];
  const geTitle = title !== "" ? title : mapTitle[variant];
  const geDescription =
    description !== "" ? description : mapDescription[variant];

  function onResetAlert(): void {
    dispatch(onResetToastAlert());
  }

  React.useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        onResetAlert();
      }, 6000);
    }
  }, [isVisible]);

  return (
    <ContainerToastAlert variant={variant} isVisible={isVisible}>
      <Icon />
      <div className="alert__texts">
        <h2 className="alert__title">{geTitle}</h2>
        <p className="alert__description">{geDescription}</p>
      </div>
    </ContainerToastAlert>
  );
}
