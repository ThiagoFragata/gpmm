import { pxToRem } from "@/_utils/pxToRem";
import styled from "styled-components";
import { colors } from "./theme";

export const ContainerDashboard = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  .top__options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TextNote = styled.span`
  font-size: ${pxToRem(15)};
  color: ${colors.DARK_PRIMARY};
  font-style: italic;
  opacity: 0.8;
`;

export const ContainerDefaultShowDetails = styled.div`
  .details__hedaer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .details__status {
    margin-top: 25px;
  }
  .title__section {
    margin-top: 40px;
  }
`;
