import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerListRequestCommunication = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  .table__user {
    .user__name {
      color: ${colors.DARK_PRIMARY};
      font-size: ${pxToRem(16)};
    }
    .user__email {
      color: ${colors.GRAY_SECONDARY};
      font-size: ${pxToRem(14)};
    }
  }
  .table__user--loading {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  .column__user {
    width: 25%;
  }
  .column__data {
    width: 15%;
  }
  .column__object {
    width: 20%;
  }
  .column__message {
    width: 40%;
  }
`;
