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
`;

export const CartNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
