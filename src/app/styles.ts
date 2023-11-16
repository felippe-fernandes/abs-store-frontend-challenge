import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
`;
