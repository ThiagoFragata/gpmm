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
  }
`;
