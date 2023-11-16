import styled from "styled-components";

interface IDrawerProps {
  open: boolean;
}

export const DrawerWrapper = styled.div<IDrawerProps>`
  background-color: ${({ theme }) => theme.colors.mksBlue};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  color: #fff;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(${(props) => (props.open ? "0" : "30rem")});
  transition: transform 0.7s ease-in-out;
  width: 30rem;
`;
