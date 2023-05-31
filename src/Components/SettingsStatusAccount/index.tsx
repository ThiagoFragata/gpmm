import React from "react";
import { ContainerSettingsStatusAccount } from "./style";
import { type SettingsStatusAccountProps } from "@/_types/SettingsStatusAccount";
import { type typeStringStatus } from "@/_types/Common";
import { useSettingsStatusAccount } from "./useSettingsStatusAccount";
import { Button } from "../Button";

export function SettingsStatusAccount({
  status = "unknow"
}: SettingsStatusAccountProps): JSX.Element {
  const [currentStatus, setCurrentStatus] =
    React.useState<typeStringStatus>(status);
  React.useEffect(() => {
    setCurrentStatus(status);
  }, [status]);
  const { shouldRenderButton, dataCard } = useSettingsStatusAccount({
    status: currentStatus
  });
  const Icon = dataCard.icon;

  return (
    <ContainerSettingsStatusAccount status={status}>
      <div className="status__header">
        <div className="status__circle">
          <Icon />
        </div>
        <p className="status__title">{dataCard?.titleCard}</p>
      </div>
      <p className="status__description">{dataCard?.description}</p>
      {shouldRenderButton && (
        <Button
          title={dataCard?.labelButton ?? ""}
          variant={dataCard?.variantButton}
          className="status__button"
        />
      )}
    </ContainerSettingsStatusAccount>
  );
}
