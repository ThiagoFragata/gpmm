import { type FormApi } from "final-form";
import type { itemBreadCrumb } from "./BreadCrumb";
import { type IItemUser } from "./Users/serviceUsers";

export type ITabOptionsProfile = 1 | 2;

export interface ProfileFieldsForm {
  nome: string;
  cpf: string;
  siape: string;
  dataNascimento: string;
  telefone: string;
  email: string;
}
export interface onEditProfileProps {
  payload: ProfileFieldsForm;
  form: FormApi<any, ProfileFieldsForm>;
}

export interface useProfileData {
  onChangeTab: (tab: number) => void;
  onEditProfile: (data: onEditProfileProps) => Promise<void>;
  currentTab: ITabOptionsProfile;
  breadCrumb: itemBreadCrumb[];
  dataProfile: IItemUser;
  isLoading: boolean;
  optionsTab: Array<{
    id: ITabOptionsProfile;
    label: string;
  }>;
}

export type RenderCurrenTabProps = Pick<
  useProfileData,
  "dataProfile" | "onChangeTab" | "currentTab" | "isLoading" | "onEditProfile"
>;

export type DataProps = {
  data: IItemUser;
} & Pick<useProfileData, "isLoading" | "onEditProfile">;
