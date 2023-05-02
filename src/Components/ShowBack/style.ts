import styled, { css } from "styled-components";

const modifier = {
  open: css`
    opacity: 1;
  `,
  close: css`
    opacity: 0;
    visibility: hidden;
    transition-delay: 0.2s;
  `
};

export const ContainerShowBack = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  ${({ isOpen }) => modifier[isOpen ? "open" : "close"]};
`;
