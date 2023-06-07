import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerLineDetails = styled.div`
  .label,
  .value {
    font-size: ${pxToRem(16)};
    font-weight: 400;
  }
  .label {
    color: ${colors.DARK_PRIMARY};
  }
  .value {
    margin-top: 8px;
    color: ${colors.GRAY_SECONDARY};
  }
`;
