import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @media (max-width: 620px) {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
