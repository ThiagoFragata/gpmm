export interface onSubmitLoginProps {
  email: string;
  senha: string;
}

export interface useLoginData {
  onSubmitLogin: (data: onSubmitLoginProps) => void;
  isLoading: boolean;
  titleButton: string;
}
