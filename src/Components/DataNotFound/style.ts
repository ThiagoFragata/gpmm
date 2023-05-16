import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerDataNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  flex: 1;
  .not__title {
    color: ${colors.DARK_PRIMARY};
    font-size: ${pxToRem(18)};
    font-weight: 700;
  }
  .not__description {
    color: ${colors.GRAY_SECONDARY};
    max-width: 350px;
    font-size: ${pxToRem(16)};
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }
`;
