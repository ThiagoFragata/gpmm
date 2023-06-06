export interface FormToggleProps {
  label: string;
  disabled?: boolean;
  name: string;
  onClick?: () => void;
}

export interface FormToggleModifier {
  isTrue: boolean;
}
