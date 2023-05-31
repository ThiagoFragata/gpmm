import styled, { css } from "styled-components";
import { colors } from "@/style/theme";
import { type SideViewModifier } from "@/_types/SideView";

const modifier = {
  show: {
    visible: css`
      right: 0;
    `,
    hidden: css`
      right: -60vw;
      opacity: 0;
    `
  },
  size: {
    small: css``,
    large: css`
      width: 50vw;
      opacity: 1;
      min-width: 900px;
    `
  }
};

export const ContainerSideView = styled.aside<SideViewModifier>`
  ${({ size, isVisible }) => css`
    position: fixed;
    top: 0;
    z-index: 2;
    height: 100vh;
    background-color: ${colors.WHITE};
    border-radius: 20px 0 0 20px;
    padding: 32px;
    transition-delay: 0.2s;
    transition: all 0.3s;
    ${modifier.size[size]};
    ${isVisible ? modifier.show.visible : modifier.show.hidden};
  `}
  .view__action {
    display: flex;
    justify-content: flex-end;
  }
`;
