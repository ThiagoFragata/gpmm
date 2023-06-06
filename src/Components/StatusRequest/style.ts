import { type StatusRequestModifier } from "@/_types/StatusRequest";
import { pxToRem } from "@/_utils/pxToRem";
import styled, { css } from "styled-components";

const modifier = {
  SOLICITADO: css`
    background-color: #fcd34d;
    border: 1px solid #e5b52b;
    color: #000000;
  `,
  LOCADO: css`
    background-color: #339933;
    border: 1px solid #1f7d1f;
    color: #ffffff;
  `,
  DEVOLVIDO: css`
    background-color: #3366cc;
    border: 1px solid #1d417f;
    color: #ffffff;
  `,
  NAOUTILIZADO: css`
    background-color: #cccccc;
    border: 1px solid #9b9b9b;
    color: #000000;
  `,
  RESERVADO: css`
    background-color: #ff9933;
    border: 1px solid #b35d1f;
    color: #000000;
  `,
  NEGADO: css`
    background-color: #ff3333;
    border: 1px solid #bf1f1f;
    color: #ffffff;
  `,
  AUTORIZADO: css`
    background-color: #33ccff;
    border: 1px solid #1f7c8e;
    color: #000000;
  `
};

export const ContainerStatusRequest = styled.div<StatusRequestModifier>`
  ${({ type }) => modifier[type]};
  border-radius: 16px;
  padding: 5px 10px;
  width: fit-content;
  .status__label {
    font-size: ${pxToRem(14)};
  }
`;
