import { type ToastVariants } from "./Store/ToastAlert";

export interface useToastAlertData {
  icons: Record<ToastVariants, () => JSX.Element>;
  mapTitle: Record<ToastVariants, string>;
  mapDescription: Record<ToastVariants, string>;
}

export interface ToastAlertModifier {
  isVisible: boolean;
  variant: ToastVariants;
}
