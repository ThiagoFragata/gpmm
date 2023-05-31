import { pxToRem } from "@/_utils/pxToRem";
import { ContainerDashboard } from "@/style/shareStyle";
import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerListUsers = styled(ContainerDashboard)`
  .size__name {
    width: 26.02%;
  }
  .size__siape {
    width: 16.08%;
    /* border: 1px solid purple; */
  }
  .size__phone {
    width: 17.39%;
    /* border: 1px solid purple; */
  }
  .size__status {
    width: 12.57%;
    /* border: 1px solid purple; */
  }
  .size__link {
    width: 12.36%;
    /* border: 1px solid purple; */
  }
  .table__user {
    .user__name {
      color: ${colors.DARK_PRIMARY};
      font-size: ${pxToRem(15)};
    }
    .user__email {
      color: ${colors.GRAY_SECONDARY};
      font-size: ${pxToRem(13)};
    }
  }
  .table__user--loading {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
`;
