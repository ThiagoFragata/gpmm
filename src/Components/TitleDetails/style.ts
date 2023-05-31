import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerTitleDetails = styled.div`
  display: flex;
  column-gap: 16px;
  width: fit-content;
  .title {
    font-size: ${pxToRem(16)};
    font-weight: 700;
    color: ${colors.DARK_PRIMARY};
  }
  .sub__title {
    font-size: ${pxToRem(16)};
    font-weight: 400;
    color: ${colors.GRAY_SECONDARY};
    margin-top: 6px;
  }
`;
