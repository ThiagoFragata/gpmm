import styled, { css } from "styled-components";
import { type CommonCalendarModifier } from "@/_types/CommonCalendar";
import { colors } from "@/style/theme";
import { pxToRem } from "@/_utils/pxToRem";

export const ContainerCommonCalendar = styled.div<CommonCalendarModifier>`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 0.2s;
  .calendar__box {
    background-color: ${colors.WHITE};
    border-radius: 16px;
    transition: all 0.2s;
    transition-delay: 0.1s;
    border-radius: 16px;
    width: 700px;
    padding: 20px;
  }
`;

const gridCalendar = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
`;

export const NameDaysCalendar = styled.ul`
  ${gridCalendar};
  .days__name {
    font-size: ${pxToRem(16)};
    font-weight: 700;
    color: ${colors.GREEN_PRIMARY};
  }
`;

export const DaysCalendar = styled.ul`
  margin-top: 20px;
  ${gridCalendar};
  .day__button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    display: flex;
    border: none;
    background-color: transparent;
    transition: all 0.2s;
    :hover {
      background-color: ${colors.GREEN_PRIMARY};
      .text__button {
        color: ${colors.WHITE};
      }
    }
    :disabled {
      cursor: no-drop;
      :hover {
        background-color: transparent;
      }
    }
    .text__button {
      transition: all 0.2s;
      font-size: ${pxToRem(16)};
      font-weight: 600;
      color: ${colors.GRAY_SECONDARY};
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
    .text__button--selected {
      background-color: ${colors.GREEN_PRIMARY};
      color: ${colors.WHITE};
    }
  }
`;

export const HeaderCalendar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;
  .header__title {
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: transparent;
    transition: all 0.3s;
    font-size: ${pxToRem(16)};
    font-weight: 700;
    color: ${colors.GREEN_PRIMARY};
    cursor: pointer;
    :hover {
      background-color: ${colors.BACKGROUND_PRIMARY};
    }
  }
`;
