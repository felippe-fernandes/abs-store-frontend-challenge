import styled from "styled-components";

export const Drawer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 7fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
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
  overflow-y: auto;
`;

export const DrawerTotalPriceContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  justify-content: space-around;
`;

export const DrawerTotalPriceText = styled.span``;

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
