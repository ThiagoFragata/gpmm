export type IScreenSteps = 0 | 1 | 2;

export interface onCreatePasswordProps {
  codigo: string;
  idUser: number;
  senha: string;
}

export interface useForgotPasswordData {
  isScreenGetEmail: boolean;
  isScreenGetCode: boolean;
  isScreenGetPassword: boolean;
  isLoading: boolean;
  capturedEmail: string;
  dataCreatePassword: {
    codigo: string;
    idUser: number;
  };
  onRequestCode: (value: string) => void;
  goBackGetEmail: () => void;
  onValidateCode: (payload: { codigo: string; email: string }) => void;
  onCreatePassword: (payload: onCreatePasswordProps) => void;
}

export type GetEmailProps = {
  isCurrentScreen: boolean;
  email?: string;
  onRequestCode: (value: string) => void;
} & Pick<useForgotPasswordData, "isLoading">;

export type GetCodeProps = {
  isCurrentScreen: boolean;
  email: string;
} & Pick<
  useForgotPasswordData,
  "isLoading" | "onRequestCode" | "goBackGetEmail" | "onValidateCode"
>;

export type ChangePasswordProps = {
  isCurrentScreen: boolean;
} & Pick<
  useForgotPasswordData,
  "isLoading" | "dataCreatePassword" | "onCreatePassword"
>;
