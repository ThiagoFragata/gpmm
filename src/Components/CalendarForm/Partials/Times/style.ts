import { type TimesModifier } from "@/_types/CalendarForm";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  register: css``,
  edit: css`
    .time__scroll .scroll .time__map .time__box {
      .button__box {
        cursor: no-drop !important;
      }
      .button__box--available {
        color: transparent !important;
        background-color: transparent !important;
      }
    }
  `
};

export const ContainerTimes = styled.div<TimesModifier>`
  ${({ typeCalendar }) => modifier[typeCalendar ?? "register"]};
  display: flex;
  height: 50vh;
  width: 100%;
  .time__scroll .scroll {
    width: fit-content;
    padding: 0;
    padding: 10px;
    background-color: ${colors.WHITE};
    border-radius: 4px;
    .time__map {
      display: flex;
      column-gap: 16px;
      .time__box {
        border-bottom: 1px solid ${colors.GRAY_LIGHT};
        height: 60px;
        width: 120px;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        .button__box {
          height: 100%;
          width: 100%;
          margin: auto;
          border-radius: 8px;
          border: none;
          color: ${colors.WHITE};
          font-weight: 600;
          font-size: ${pxToRem(14)};
          transition: all 0.2s;
          :hover {
            cursor: grabbing;
          }
          :disabled {
            :hover {
              cursor: no-drop;
            }
          }
        }
        .button__box--reserved {
          background-color: ${colors.RED_DARK};
        }
        .button__box--available {
          background-color: ${colors.BLUE_PRIMARY};
        }
        .button__box--selected {
          background-color: ${colors.SUCCESS};
        }
        .button__box--disabled {
          background-color: ${colors.GRAY_SECONDARY};
          opacity: 0.4;
        }
      }
    }
  }
`;
