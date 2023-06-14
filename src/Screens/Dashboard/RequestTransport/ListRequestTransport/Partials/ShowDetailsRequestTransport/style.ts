import { colors } from "@/style/theme";
import styled from "styled-components";

export const ContainerShowDetails = styled.div`
  .details__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title__section {
    margin-top: 40px;
  }
  .details__status {
    margin-top: 25px;
  }
  .details__fields {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    .two__columns {
      grid-column: 1 / span 2;
    }
    .fields__passageiros {
      display: flex;
      flex-direction: column;
      padding-bottom: 16px;
      border-bottom: 1px solid ${colors.GRAY_LIGHT};
      row-gap: 20px;
    }
  }
`;
