import { colors } from "@/style/theme";
import { type ButtonModifier } from "@/_types/Button";
import styled, { css } from "styled-components";

const containerButtonModifier = {
  variant: {
    green: css`
      background-color: ${colors.green};
      border-bottom: 2px solid #4baa01;
    `,
    orange: css`
      background-color: ${colors.orange};
      border-bottom: 2px solid #be760c;
    `,
    blue: css`
      background-color: ${colors.blue};
      border-bottom: 2px solid #0c69be;
    `,
    red: css`
      background-color: ${colors.red};
      border-bottom: 2px solid #bd0a00;
    `
  }
};

export const ContainerButton = styled.button<ButtonModifier>`
  ${({ variant }) => css`
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: inset 4px 0px 4px rgba(255, 255, 255, 0.18),
      inset 0px 4px 4px rgba(255, 255, 255, 0.45);
    color: ${colors.light};
    transition: all 0.3s;
    :hover {
      transform: translateY(-10px);
    }
    ${containerButtonModifier.variant[variant]};
  `}
`;
