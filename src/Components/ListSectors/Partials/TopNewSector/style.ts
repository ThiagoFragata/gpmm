import { type TopItemModifier } from "@/_types/Sectors/ListSectors";
import styled from "styled-components";
import { modifierTop } from "../../style";

export const ContainerTopNewSector = styled.div<TopItemModifier>`
  padding: 16px 12px;
  transition: all 0.7s;
  overflow: hidden;
  .sector__fields {
    margin: 16px 0 20px;
    column-gap: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .sector__buttons {
    display: flex;
    column-gap: 16px;
  }
  ${({ isVisible }) => modifierTop[isVisible ? "visible" : "hidden"]};
`;
