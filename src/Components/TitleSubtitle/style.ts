import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerTitleSubtitle = styled.div`
  margin-top: 2px;
  .title {
    font-weight: 500;
    font-size: ${pxToRem(16)};
    color: ${colors.DARK_PRIMARY};
  }
  .subtitle {
    margin-top: 6px;
    font-size: ${pxToRem(16)};
    color: ${colors.GRAY_SECONDARY};
    font-weight: 400;
  }
`;
