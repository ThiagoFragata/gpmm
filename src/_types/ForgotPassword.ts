export interface onSubmitForgotPasswordProps {
  email: string;
}

export interface useForgotPasswordData {
  onSubmitForgotPassword: (data: onSubmitForgotPasswordProps) => void;
  goToLogin: () => void;
  isLoading: boolean;
  titleButton: string;
}
