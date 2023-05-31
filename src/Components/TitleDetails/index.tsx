import React from "react";
import { ContainerTitleDetails } from "./style";
import { type TitleDetailsProps } from "@/_types/TitleDetails";
import { DetailsIcon } from "@/assets/icons";
import { colors } from "@/style/theme";

export function TitleDetails({
  title,
  subTitle
}: TitleDetailsProps): JSX.Element {
  const shouldRenderSubTitle = subTitle !== undefined;
  return (
    <ContainerTitleDetails>
      <DetailsIcon fill={colors.DARK_PRIMARY} />
      <div>
        <h1 className="title">{title}</h1>
        {shouldRenderSubTitle && <h2 className="sub__title">{subTitle}</h2>}
      </div>
    </ContainerTitleDetails>
  );
}
