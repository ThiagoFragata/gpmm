import styled from "styled-components";
import { type ShowDatasModifier } from "@/_types/InputSelect";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import { modifier } from "../../style";

export const ShowDatas = styled.div<ShowDatasModifier>`
  position: absolute;
  width: 100%;
  z-index: 2;
  border-radius: 12px;
  background-color: ${colors.WHITE};
  transition: all 0.09s;
  ${({ direction }) => modifier.showDatas.direction[direction]};
  ${({ isVisible }) =>
    isVisible ? modifier.showDatas.visible : modifier.showDatas.hidden};
  .datas__header {
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.GRAY_SECONDARY};
    height: 48px;
    position: relative;
    width: 100%;
    .data__icons {
      z-index: 1;
    }
    .data__icon-search {
      opacity: 0.7;
    }
    .datas__input {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 100%;
      border-radius: 8px 8px 0 0;
      border: none;
      padding-left: 50px;
      padding-right: 70px;
      transition: all 0.2s;
      font-size: ${pxToRem(16)};
      :focus {
        border: 1px solid ${colors.GREEN_PRIMARY};
      }
    }
  }
`;

export const DataItems = styled.div`
  flex: 1;
  .item__scroll {
    padding-top: 5px;
    overflow: auto;
    max-height: 200px;
    border-radius: 0 0 12px 12px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.GRAY_LIGHT};
      border-radius: 10px;
    }
    .item__table {
      .item__option {
        width: 100%;
        font-size: ${pxToRem(14)};
        text-align: left;
        padding: 12px;
        font-weight: 400;
        color: ${colors.GRAY_SECONDARY};
        transition: all 0.2s;
        background-color: ${colors.WHITE};
        border: none;
        :hover {
          cursor: pointer;
          background-color: ${colors.GREEN_PRIMARY};
          color: ${colors.WHITE};
          font-weight: 600;
        }
      }
    }
  }
  .item__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    row-gap: 10px;
    .item__alert {
      font-size: ${pxToRem(16)};
      font-weight: 600;
      color: ${colors.RED_PRIMARY};
    }
  }
`;
