export interface onSubmitLoginProps {
  user_name: string;
  password: string;
}

export interface useLoginData {
  onSubmitLogin: (data: onSubmitLoginProps) => void;
}
