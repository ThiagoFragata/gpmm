import { type SideBarModifier } from "@/_types/LayoutDashboard";
import {
  widthSideBarExpanded,
  widthSideBarRetractable
} from "@/_utils/constants";
import styled, { css } from "styled-components";

const modifier = {
  expand: css`
    border: 2px solid blue;
    width: ${widthSideBarExpanded}px;
  `,
  retractable: css`
    border: 2px solid red;
    width: ${widthSideBarRetractable}px;
  `
};

export const ContainerSideBar = styled.aside<SideBarModifier>`
  transition: all 0.3s;
  ${({ isExpanded }) => modifier[isExpanded ? "expand" : "retractable"]}
`;
