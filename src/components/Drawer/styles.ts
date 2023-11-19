import styled from "styled-components";

interface IDrawerProps {
  open: boolean;
}

export const DrawerWrapper = styled.div<IDrawerProps>`
  background-color: ${({ theme }) => theme.colors.absLightBlue};
  box-shadow: -5px 0 6px 0 rgba(0, 0, 0, 0.13);
  color: #fff;
  height: 100%;
  position: fixed;
  right: 0px;
  top: 0px;
  transform: translateX(${(props) => (props.open ? "0" : "30rem")});
  transition: transform 0.7s ease-in-out;
  width: 30rem;

  @media (max-width: 620px) {
    transform: translateX(${(props) => (props.open ? "0" : "100%")});
    width: 100%;
  }
`;
