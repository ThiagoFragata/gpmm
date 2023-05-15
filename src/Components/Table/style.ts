import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerTable = styled.ul`
  margin-top: 35px;
  display: flex;
  column-gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid ${colors.GRAY_PRIMARY};
  width: calc(100% - 4px);
  .table__title {
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(23)};
    font-weight: 500;
    color: ${colors.DARK_PRIMARY};
  }
`;

export const ContainerTableContent = styled.ul`
  display: flex;
  column-gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  transition: all 0.2s;
  :hover {
    background: rgba(148, 148, 157, 0.1);
  }
`;

export const ContainerTableItem = styled.li`
  .table__text {
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(23)};
    font-weight: 400;
    color: ${colors.DARK_PRIMARY};
  }
`;

export const ContainerTableScroll = styled.div`
  flex: 1;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.GRAY_LIGHT};
    border-radius: 10px;
  }
  .scroll__box {
    position: absolute;
    width: 100%;
  }
`;
