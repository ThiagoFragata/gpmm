export interface MenuActionProps {
  onDelete?: () => void;
  onEdit?: () => void;
  onShowDetails?: () => void;
  direction?: "top" | "bottom";
  disabled?: boolean;
  isShadow?: boolean;
}

export type MenuActionModifier = Pick<MenuActionProps, "direction"> & {
  isOpen: boolean;
};
