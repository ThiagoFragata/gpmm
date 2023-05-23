export type IScreenSteps = 0 | 1 | 2;

export interface FirstAccessData {
  isScreenGetEmail: boolean;
  isScreenGetCode: boolean;
  isScreenGetPassword: boolean;
  isLoading: boolean;
  onRequestCode: (value: string) => void;
}

export type GetEmailProps = {
  isCurrentScreen: boolean;
  onRequestCode: (value: string) => void;
} & Pick<FirstAccessData, "isLoading">;

export type GetCodeProps = {
  isCurrentScreen: boolean;
} & Pick<FirstAccessData, "isLoading">;

export type ChangePasswordProps = {
  isCurrentScreen: boolean;
} & Pick<FirstAccessData, "isLoading">;
