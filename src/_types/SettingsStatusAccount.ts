import { type variantButton } from "./Button";
import { type typeStringStatus } from "./Common";

export interface IDataCard {
  variantButton?: variantButton;
  labelButton?: string;
  titleCard: string;
  description: string;
  icon: () => JSX.Element;
  onPress?: () => void;
}

export interface useSettingsStatusAccountData {
  shouldRenderButton: boolean;
  dataCard: IDataCard;
}

export interface useSettingsStatusAccountProps {
  status?: typeStringStatus;
}

export interface SettingsStatusAccountProps {
  status?: typeStringStatus;
  className?: string;
}

export interface SettingsStatusAccountModifier {
  status: typeStringStatus;
}
