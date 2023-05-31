import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerTitleDivider = styled.div`
  border-bottom: 1px solid ${colors.GRAY_SECONDARY};
  padding-bottom: 12px;
  .divider__title {
    font-weight: 700;
    font-size: ${pxToRem(17)};
    color: ${colors.GRAY_SECONDARY};
  }
`;
