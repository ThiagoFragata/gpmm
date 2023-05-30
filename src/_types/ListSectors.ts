import { type FormApi } from "final-form";

export interface ListSectorsProps {
  isShow: boolean;
  formRef: React.MutableRefObject<FormApi<any, any> | undefined>;
  onClose: () => void;
}
export interface ListSectorsModifier {
  isShow: boolean;
}
