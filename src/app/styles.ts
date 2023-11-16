import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100%;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  margin: 15rem 13rem;
`;
