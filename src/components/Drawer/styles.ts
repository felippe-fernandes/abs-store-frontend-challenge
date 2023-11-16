import styled from "styled-components";

interface IDrawerProps {
  isOpen: boolean;
}

export const DrawerWrapper = styled.div<IDrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.mksBlue};
  color: #fff;
  padding: ${(props) => (props.isOpen ? "1rem" : "0")};
  transform: translateX(${(props) => (props.isOpen ? "0" : "30rem")});
  transition: transform 0.7s ease-in-out;
`;
