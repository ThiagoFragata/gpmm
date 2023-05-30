import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerList = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 60vh;
  .column__table {
    width: 90%;
  }
  .list__title-table {
    margin: 0;
  }
  .column__button {
    cursor: pointer;
    border: none;
    width: 100%;
    text-align: left;
    padding: 15px 0;
    background-color: transparent;
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(23)};
    font-weight: 400;
    color: ${colors.DARK_PRIMARY};
  }
`;
