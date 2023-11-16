import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-area: 2 / 2 / 8 / 8;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
`;
