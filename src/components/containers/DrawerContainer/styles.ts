import styled from "styled-components";

export const Drawer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 8fr 1fr;
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
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  aspect-ratio: 1;
  width: 2rem;
`;

export const DrawerBodyContainer = styled.div``;

export const DrawerFooterContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;
