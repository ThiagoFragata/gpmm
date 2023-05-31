import React from "react";
import { ContainerSettingsStatusAccount } from "./style";
import { type SettingsStatusAccountProps } from "@/_types/SettingsStatusAccount";
import { type typeStringStatus } from "@/_types/Common";

export function SettingsStatusAccount({
  status
}: SettingsStatusAccountProps): JSX.Element {
  const [currentStatus, setCurrentStatus] =
    React.useState<typeStringStatus>(status);

  React.useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  return (
    <ContainerSettingsStatusAccount>
      <textarea
        style={{ height: "150px", minWidth: "300px" }}
        value={JSON.stringify(currentStatus, null, 2)}
      />
    </ContainerSettingsStatusAccount>
  );
}
