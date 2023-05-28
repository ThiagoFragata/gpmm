import React from "react";
import { ContainerMenuAction, ContainerMenuOptions } from "./style";
import type { MenuActionProps } from "@/_types/MenuAction";
import { IconButton } from "../IconButton";
import { DetailsIcon, EditIcon, TrashIcon } from "@/assets/icons";
import { ShowBack } from "../ShowBack";

export function MenuAction({
  onDelete,
  onEdit,
  onShowDetails,
  isShadow,
  direction = "top",
  disabled
}: MenuActionProps): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const shouldRenderOptionDelete = onDelete !== undefined;
  const shouldRenderOptionEdit = onEdit !== undefined;
  const shouldRenderOptionShowDetails = onShowDetails !== undefined;

  function onOpenMenu(): void {
    setIsOpen(true);
  }

  function onCloseMenu(): void {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <ShowBack isOpen={isOpen} onClose={onCloseMenu} isShadow={isShadow} />
      <ContainerMenuAction>
        <IconButton
          name="DotsIcon"
          className="action__button"
          onClick={onOpenMenu}
          disabled={disabled}
        />
        <ContainerMenuOptions direction={direction} isOpen={isOpen}>
          {shouldRenderOptionShowDetails && (
            <button
              className="option__button option__button--show"
              onClick={() => {
                onShowDetails();
                onCloseMenu();
              }}
            >
              <DetailsIcon className="button__svg" />
              Detalhes
            </button>
          )}
          {shouldRenderOptionEdit && (
            <button
              className="option__button option__button--edit"
              onClick={() => {
                onEdit();
                onCloseMenu();
              }}
            >
              <EditIcon className="button__svg" />
              Editar
            </button>
          )}
          {shouldRenderOptionDelete && (
            <button
              className="option__button option__button--delete"
              onClick={() => {
                onDelete();
                onCloseMenu();
              }}
            >
              <TrashIcon className="button__svg" />
              Excluir
            </button>
          )}
        </ContainerMenuOptions>
      </ContainerMenuAction>
    </React.Fragment>
  );
}
