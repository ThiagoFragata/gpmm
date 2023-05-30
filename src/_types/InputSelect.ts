export interface InputSelectProps {
  label: string;
  placeholder: string;
  className?: string;
  name: string;
  classNameInput?: string;
  form: any;
  data: Array<{
    id: number;
    name: string;
  }>;
  disabled?: boolean;
  isAwaiting?: boolean;
  onChange?: () => void;
  direction?: "top" | "center" | "bottom";
}

export interface InputSelectModifier {
  error: boolean;
  isPlaceholder: boolean;
}
export interface ShowDatasModifier {
  direction: "top" | "center" | "bottom";
  isVisible: boolean;
}

export type OptionsProps = {
  shouldRenderItems: boolean;
  searchRef: React.RefObject<HTMLInputElement>;
  currentData: Array<{
    id: number;
    name: string;
  }>;
  onChangeInput: ({ value }: { value: string }) => void;
  onCloseOptions: () => void;
  onSelectItem: (value: number) => void;
} & Pick<ShowDatasModifier, "direction" | "isVisible">;
