import React from "react";
import { ContainerDialogModal } from "./style";
import { type DialogModalProps } from "@/_types/DialogModal";
import { Button } from "../Button";
import { QuestionIcon } from "@/assets/icons";
import { colors } from "@/style/theme";

export function DialogModal({
  variant = "primary",
  isOpen,
  title,
  description,
  titleActionCancel,
  titleActionConfirm,
  ocActionCancel,
  onActionConfirm
}: DialogModalProps): JSX.Element {
  const shouldRenderDescription = description !== undefined;
  const titleButtonCancel = titleActionCancel ?? "Cancelar";
  const titleButtonConfirm = titleActionConfirm ?? "Confirma";
  function onActionClose(): void {
    const isExistActionCancel = ocActionCancel !== undefined;
    if (isExistActionCancel) {
      ocActionCancel();
    }
  }

  return (
    <ContainerDialogModal isOpen={isOpen}>
      <div className="modal__box">
        <div className="box__top">
          <QuestionIcon fill={colors.DARK_PRIMARY} className="top__icon" />
          <div>
            <h2 className="box__title">{title}</h2>
            {shouldRenderDescription && (
              <p className="box__description">{description}</p>
            )}
          </div>
        </div>
        <div className="box__buttons">
          <Button
            title={titleButtonCancel}
            className="box__button"
            variant="ghost"
            onClick={onActionClose}
          />
          <Button
            title={titleButtonConfirm}
            className="box__button"
            onClick={onActionConfirm}
            variant={variant ?? "danger"}
          />
        </div>
      </div>
    </ContainerDialogModal>
  );
}
