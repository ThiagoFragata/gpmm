export type ToastVariants = "success" | "error" | "info" | "warning" | "ghost";

export interface ToastAlertProps {
  isVisible: boolean;
  variant: ToastVariants;
  title?: string;
  description?: string;
}
