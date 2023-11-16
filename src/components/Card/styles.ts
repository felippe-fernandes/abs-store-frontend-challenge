import styled from "styled-components";

export const CardRootContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1352);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 3fr 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 17rem;
  position: relative;
  width: 13rem;
`;

export const CardImageContainer = styled.figure`
  grid-area: 1 / 1 / 2 / 4;
`;

export const CardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 1rem;
  padding: 0.5rem;
`;

export const CardProductTitle = styled.div`
  color: ${({ theme }) => theme.colors.productText};
  font-size: 20px;
  font-weight: 500;
  grid-area: 1 / 1 / 2 / 2;
  height: 3rem;
  line-height: 19px;
`;

export const CardProductPrice = styled.div`
  background-color: ${({ theme }) => theme.colors.priceTagBackground};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  grid-area: 1 / 2 / 2 / 3;
  height: fit-content;
  padding: 0.2rem 0.5rem;
`;

export const CardProductDescription = styled.div`
  color: ${({ theme }) => theme.colors.productText};
  font-size: 14px;
  font-weight: 300;
  grid-area: 2/ 1 / 3 / 3;
  height: 1.5rem;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardActionContainer = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mksBlue};
  border: 0;
  border-radius: 0 0 5px 5px;
  bottom: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  gap: 1rem;
  grid-area: 3 / 1 / 4 / 4;
  height: 2rem;
  justify-content: center;
  left: 0;
  line-height: 18px;
  position: absolute;
  width: 13rem;
`;
