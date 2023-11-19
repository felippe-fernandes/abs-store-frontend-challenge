import { ShoppingCart } from "lucide-react";
import styled from "styled-components";

export const ButtonContainer = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: space-evenly;
  width: 5rem;
  @media (max-width: 620px) {
    background-color: transparent;
    position: relative;
    width: unset;
    height: unset;
  }
`;

export const StyledCartIcon = styled(ShoppingCart)`
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 620px) {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CartNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  @media (max-width: 620px) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    line-height: unset;
  }
`;

export const CartCountMobileWrapper = styled.div`
  @media (max-width: 620px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    display: flex;
    height: 1rem;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
  }
`;
