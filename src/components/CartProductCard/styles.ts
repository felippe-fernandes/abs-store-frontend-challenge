import styled from "styled-components";

export const CartCardRootContainer = styled.div`
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0%.5rem;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.black};
  display: grid;
  grid-template-columns: repeat(3, 2fr) 1fr;
  grid-template-rows: 1.5fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 6rem;
  justify-items: center;
  padding: 0 1rem 0 0.5rem;
`;

export const CartCardImageContainer = styled.figure`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const CartCardTitle = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
`;

export const CartCardCounterButtonContainer = styled.div`
  align-items: center;
  border: 0.3px solid ${({ theme }) => theme.colors.cartButtonBorder};
  border-radius: 4px;
  display: flex;
  font-size: 8px;
  font-weight: 400;
  justify-content: space-evenly;
  line-height: 10px;
  width: 3rem;
`;

export const ToggleQuantityButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const Counter = styled.span``;

export const CartCardPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const DeleteButton = styled.button`
  aspect-ratio: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  width: 1rem;
`;

// .parent {
//   display: grid;
//   grid-template-columns: repeat(2, 1.5fr) repeat(2, 1fr);
//   grid-template-rows: 1.5fr;
//   grid-column-gap: 0;
//   grid-row-gap: 0;
//   }

//   .div1 { grid-area: 1 / 1 / 2 / 2; }
//   .div2 { grid-area: 1 / 2 / 2 / 3; }
//   .div3 { grid-area: 1 / 3 / 2 / 4; }
//   .div4 { grid-area: 1 / 4 / 2 / 5; }
