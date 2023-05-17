export interface DialogModalProps {
  variant?: "primary" | "danger";
  title?: string;
  description?: string;
  titleActionCancel?: string;
  titleActionConfirm?: string;
  isOpen: boolean;
  ocActionCancel?: () => void;
  onActionConfirm: () => void;
}
