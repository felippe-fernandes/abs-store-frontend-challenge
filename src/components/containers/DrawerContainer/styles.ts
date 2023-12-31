import styled from "styled-components";

export const Drawer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 7fr repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100%;
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.white};
    width: 0;
  }
`;

export const DrawerHeaderContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const DrawerHeaderTitle = styled.span`
  font-size: 27px;
  font-weight: 700;
  line-height: 32px;
  padding: 0.5rem;
`;

export const DrawerHeaderCloseButton = styled.button`
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 24px;
  font-weight: 300;
  line-height: 15px;
  width: 2rem;
`;

export const DrawerBodyContainer = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1.5fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  overflow-y: auto;
  @media (max-width: 620px) {
    grid-template-columns: 1fr 12fr 1fr;
  }
`;

export const DrawerTotalPriceContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  justify-content: space-around;
`;

export const DrawerTotalPriceText = styled.span`
  @media (max-width: 620px) {
    display: none;
  }
`;

export const DrawerTotalPriceValue = styled.span``;

export const DrawerFooterContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;
