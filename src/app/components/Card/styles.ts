import styled from "styled-components";

export const CardRootContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  display: flex;
  flex-direction: column;
  height: 17rem;
  padding: 1rem;
  position: relative;
  width: 13rem;
`;

export const CardImageContainer = styled.figure`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CardBodyContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
`;

export const CardProductTitle = styled.div`
  color: ${({ theme }) => theme.colors.productText};
  font-size: 20px;
  font-weight: 500;
  grid-area: 1 / 1 / 2 / 3;
  height: 3rem;
  line-height: 19px;
`;

export const CardProductPrice = styled.div`
  background-color: ${({ theme }) => theme.colors.priceTagBackground};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  grid-area: 1 / 3 / 2 / 4;
  height: fit-content;
  padding: 0.2rem 0.5rem;
  width: 4rem;
`;

export const CardProductDescription = styled.div`
  color: ${({ theme }) => theme.colors.productText};
  font-size: 14px;
  font-weight: 300;
  grid-area: 2 / 1 / 4 / 4;
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
  display: flex;
  font-size: 14px;
  font-weight: 600;
  gap: 1rem;
  height: 2rem;
  justify-content: center;
  left: 0;
  line-height: 18px;
  position: absolute;
  width: 100%;
`;
